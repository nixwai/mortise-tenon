import type { DefineComponent } from 'vue';
import { createGlobalState } from '@vueuse/core';
import { ref } from 'vue';
import { useComponentRef } from './use-component-ref';

export type ComponentInstance = DefineComponent<any, any, any, any, any, any, any, any>;
export type ImportComponentFn = () => Promise<{ default: ComponentInstance }>;
export type ComponentType = ComponentInstance | ImportComponentFn;

export const useComponentNeo = createGlobalState(() => {
  const componentNeoMap = ref<Record<string, { comp: ComponentInstance, attrs: Record<string, any> }>>({});

  const { getComponentRef } = useComponentRef();

  /**
   * 切换渲染的组件
   * @param comp 组件，可传入两种类型，1.直接函数格式返回import动态导入 2.组件类型
   * @param attrs 组件属性，可使用`on事件`方式添加事件方法，属性支持Ref类型进行绑定以实现动态变化, 支持通过{'vModal:value': value}方式双向绑定数据
   */
  async function onToggleComponent(comp: ComponentType, attrs?: Record<string, any>, key = '') {
    try {
      const renderComp = typeof comp === 'function' ? (await (comp as ImportComponentFn)()).default : comp;
      const renderAttrs: Record<string, any> = {};
      for (let key in attrs) {
        const bindValue = attrs[key];
        // 兼容vModal
        if (key.startsWith('vModal:')) {
          key = key.replace('vModal:', '');
          renderAttrs[key] = bindValue;
          renderAttrs[`onUpdate:${key}`] = (value: any) => {
            if (value in bindValue) {
              bindValue.value = value;
            }
          };
        }
        else {
          renderAttrs[key] = bindValue;
        }
      }
      componentNeoMap.value[key] = {
        comp: renderComp,
        attrs: renderAttrs,
      };
      return getComponentRef(key);
    }
    catch (e) {
      console.error(e);
    }
  }
  return {
    componentNeoMap,
    getComponentRef,
    onToggleComponent,
  };
});
