import type { VNode } from 'vue';
import type { ComponentSlots, InstanceComponent } from '../component-neo';
import { nextTick } from 'vue';
import { useComponentState } from './use-component-state';

export type ImportComponentFn = () => Promise<Record<string, any>>;
export type DynamicComponent = InstanceComponent | ImportComponentFn | VNode;

export function useComponentNeo(uniqueId = '') {
  const { setComponent, getComponent } = useComponentState();

  /**
   * 切换渲染的组件
   * @param comp 组件，支持传入，1.import动态导入 2.组件类型 3.VNode
   * @param attrs 组件属性，可使用`on事件`方式添加事件方法，属性支持Ref类型进行绑定以实现动态变化, 支持通过{'vModal:value': value}方式双向绑定数据
   * @param slots 组件插槽
   */
  async function toggleComponent(comp?: DynamicComponent, attrs?: Record<string, any>, slots?: ComponentSlots) {
    try {
      const renderComp = typeof comp === 'function' ? (await (comp as ImportComponentFn)()).default : comp;
      const renderAttrs: Record<string, unknown> = {};
      for (let key in attrs) {
        const bindValue = attrs[key];
        // 兼容vModel
        if (key.startsWith('vModel:') || key === 'vModel') {
          key = key.replace(/^(vModel):?/, '') || 'modelValue';
          renderAttrs[key] = bindValue;
          renderAttrs[`onUpdate:${key}`] = (value: unknown) => {
            if ('value' in bindValue) {
              bindValue.value = value;
            }
          };
        }
        else {
          renderAttrs[key] = bindValue;
        }
      }
      setComponent(uniqueId, { comp: renderComp, attrs: renderAttrs, slots: slots || {} });
      await nextTick();
      return getComponent(uniqueId)?.Instance.value;
    }
    catch (e) {
      console.error(e);
    }
  }
  return {
    getComponentRef: () => getComponent(uniqueId)?.Instance.value,
    toggleComponent,
  };
};
