import type { InstanceComponent } from '../component-neo';
import { nextTick, type VNode } from 'vue';
import { useComponentState } from './use-component-state';

export type ImportComponentFn = () => Promise<Record<string, any>>;
export type DynamicComponent = InstanceComponent | ImportComponentFn | VNode;

export function useComponentNeo(uniqueId = '') {
  const { setComponent, getComponent } = useComponentState();

  /**
   * 切换渲染的组件
   * @param comp 组件，可传入两种类型，1.直接函数格式返回import动态导入 2.组件类型
   * @param attrs 组件属性，可使用`on事件`方式添加事件方法，属性支持Ref类型进行绑定以实现动态变化, 支持通过{'vModal:value': value}方式双向绑定数据
   */
  async function toggleComponent(comp: DynamicComponent, attrs?: Record<string, any>) {
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
      setComponent(uniqueId, renderComp, renderAttrs);
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
