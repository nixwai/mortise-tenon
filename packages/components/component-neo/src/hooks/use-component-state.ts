import type { Ref, ShallowRef, VNode } from 'vue';
import type { InstanceComponent } from '../component-neo';
import { createGlobalState } from '@vueuse/core';

interface ComponentRefsType {
  /** 实例 */
  Instance: Ref<any>
  /** 组件 */
  comp: ShallowRef<InstanceComponent | VNode | undefined>
  /** 属性 */
  attrs: Ref<Record<string, any>>
}

/** 组件状态 */
export const useComponentState = createGlobalState(() => {
  /** 缓存组件数据，组件未实例化时，可先缓存后赋值 */
  const dataBufferMap = new Map<string, { comp: InstanceComponent | VNode, attrs: Record<string, any> }>();
  /** 实例化后的组件 */
  const componentRefsMap = new Map<string, ComponentRefsType>();
  /** 初始化组件 */
  function initComponent(componentRefs: ComponentRefsType, key = '') {
    const bufferData = dataBufferMap.get(key);
    if (bufferData) {
      componentRefs.comp.value = bufferData.comp;
      componentRefs.attrs.value = bufferData.attrs;
    }
    componentRefsMap.set(key, componentRefs);
  }

  /** 获取实例 */
  function getComponent(key = '') {
    return componentRefsMap.get(key);
  }

  /** 移除实例 */
  function removeComponent(key = '') {
    dataBufferMap.delete(key);
    componentRefsMap.delete(key);
  }

  /** 设置组件数据 */
  function setComponent(key = '', comp: InstanceComponent | VNode, attrs: Record<string, any>) {
    const componentRefs = getComponent(key);
    if (componentRefs) {
      componentRefs.comp.value = comp;
      componentRefs.attrs.value = attrs;
    }
    else {
      dataBufferMap.set(key, { comp, attrs });
    }
  }

  return { initComponent, setComponent, getComponent, removeComponent };
});
