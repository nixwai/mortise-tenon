import type { InstanceComponent } from '../component-neo';
import { createGlobalState } from '@vueuse/core';
import { onBeforeUnmount, ref, type Ref, shallowRef, type ShallowRef, type VNode } from 'vue';

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
  function initComponent(uniqueId = '') {
    let componentRefs = componentRefsMap.get(uniqueId);
    if (!componentRefs) {
      componentRefs = {
        Instance: ref(),
        comp: shallowRef<InstanceComponent | VNode>(),
        attrs: ref<Record<string, any>>({}),
      };
      componentRefsMap.set(uniqueId, componentRefs);
      onBeforeUnmount(() => removeComponent(uniqueId));
    }
    // 使用缓存数据初始化数据
    const bufferData = dataBufferMap.get(uniqueId);
    if (bufferData) {
      componentRefs.comp.value = bufferData.comp;
      componentRefs.attrs.value = bufferData.attrs;
    }

    return {
      componentRef: componentRefs.Instance,
      componentNeo: componentRefs.comp,
      componentAttrs: componentRefs.attrs,
    };
  }

  /** 获取实例 */
  function getComponent(uniqueId = '') {
    return componentRefsMap.get(uniqueId);
  }

  /** 移除实例 */
  function removeComponent(uniqueId = '') {
    dataBufferMap.delete(uniqueId);
    componentRefsMap.delete(uniqueId);
  }

  /** 设置组件数据 */
  function setComponent(uniqueId = '', comp: InstanceComponent | VNode, attrs: Record<string, any>) {
    const componentRefs = getComponent(uniqueId);
    if (componentRefs) {
      componentRefs.comp.value = comp;
      componentRefs.attrs.value = attrs;
    }
    dataBufferMap.set(uniqueId, { comp, attrs });
  }

  return { initComponent, setComponent, getComponent, removeComponent };
});
