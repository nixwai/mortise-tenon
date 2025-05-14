import type { Component, DefineComponent, PropType, VNode, VNodeRef } from 'vue-demi';
import { Comment, computed, defineComponent, Fragment, h, isRef, nextTick, shallowReactive, unref } from 'vue-demi';

export type AnyDefineComponent = DefineComponent<any, any, any, any, any, any, any, any, any, any>;
export type DynamicImportComponent = () => Promise<Record<string, any>>;
export type ComponentSource = AnyDefineComponent | DynamicImportComponent | VNode;
export type ComponentSlots = Record<string, (arg: any) => VNode> | VNode;
export interface ComponentContext {
  /** 组件 */
  component?: AnyDefineComponent | VNode
  /** 属性 */
  attributes?: Record<string, unknown>
  /** 插槽 */
  slots?: ComponentSlots
  /** 实例引用 */
  domRef?: any
  /** 渲染回调 */
  onRendered?: () => void
}

export function createDynamicComponent() {
  const instance = shallowReactive<ComponentContext>({});

  /**
   * 切换渲染的组件
   * @param source 组件，支持传入，1.import动态导入 2.组件类型 3.VNode
   * @param props 组件属性，可使用`on事件`方式添加事件方法，属性支持Ref类型进行绑定以实现动态变化, 支持通过{'vModal:value': value}方式双向绑定数据
   * @param slots 组件插槽
   */
  async function renderComponent(source?: ComponentSource, props?: Record<string, any>, slots?: ComponentSlots) {
    try {
      instance.component = typeof source === 'function' ? (await (source as DynamicImportComponent)()).default : source;
      instance.attributes = processVModelAttributes(props);
      instance.slots = slots || {};
      await nextTick();
      instance.onRendered?.();
      return instance.domRef;
    }
    catch (e) {
      console.error(e);
    }
  }

  const vModelRegex = /^vModel:?(.*)/;
  /**  提取 v-model 处理逻辑为独立函数 */
  function processVModelAttributes(rawAttrs?: Record<string, any>) {
    const processed: Record<string, unknown> = {};

    for (const key in rawAttrs) {
      const value = rawAttrs[key];
      if (key.startsWith('vModel') || key === 'vModel') {
        const propName = key.replace(vModelRegex, '') || 'modelValue';
        processed[propName] = value;

        if (isRef(value)) {
          processed[`onUpdate:${propName}`] = (val: unknown) => value.value = val;
        }
      }
      else {
        processed[key] = value;
      }
    }

    return processed;
  }

  const DynamicComponent = defineComponent({
    name: 'DynamicComponent',
    inheritAttrs: false,
    props: {
      is: {
        type: [String, Object, Function] as PropType<string | Component>,
        default: undefined,
      },
    },
    emits: { rendered: (_domRef?: any, _componentName?: string) => true },
    setup(props, { slots, attrs, emit }) {
      const compRefHandler = ((el: Element) => instance.domRef = el) as VNodeRef;

      /** 组件实例 */
      const currentComponent = computed<string | Component>(() => instance.component || props.is || Comment);

      /** 组件名称 */
      const compName = computed(() =>
        typeof currentComponent.value === 'object' && 'name' in currentComponent.value
          ? currentComponent.value.name
          : undefined,
      );

      /** 组件属性 */
      const compAttrs = computed(() => {
        const newAttrs: Record<string, unknown> = {};
        for (const key in instance.attributes) {
          if (typeof instance.attributes[key] !== 'undefined') {
            // 仅传入有值的属性
            newAttrs[key] = unref(instance.attributes[key]); // 支持ref数据转入
          }
        }
        // 结合注入的属性和公共属性
        return Object.assign(newAttrs, attrs);
      });

      instance.onRendered = () => {
        emit('rendered', instance.domRef, compName.value);
      };

      if (slots.default) {
        return () => h(Fragment, null, slots.default?.({
          Component: h(currentComponent.value, { ...compAttrs.value, ref: compRefHandler }, instance.slots),
          attrs: compAttrs.value,
          compName: compName.value,
        }));
      }

      return () => h(currentComponent.value, { ...compAttrs.value, ref: compRefHandler }, instance.slots);
    },
  });

  return { DynamicComponent, renderComponent, getDomRef: () => instance.domRef };
}
