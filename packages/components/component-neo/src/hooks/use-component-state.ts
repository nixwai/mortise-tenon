import type { Ref, ShallowRef, VNode } from 'vue';
import type { ComponentSlots, InstanceComponent } from '../component-neo';
import { createGlobalState } from '@vueuse/core';
import { onBeforeUnmount, ref, shallowRef } from 'vue';

interface ComponentRefsType {
  /** 引用实例 */
  Instance: Ref<any>
  /** 组件 */
  comp: ShallowRef<InstanceComponent | VNode | undefined>
  /** 属性 */
  attrs: Ref<Record<string, unknown>>
  /** 插槽 */
  slots: Ref<ComponentSlots>
}

interface ComponentData {
  comp?: InstanceComponent | VNode
  attrs: Record<string, unknown>
  slots: ComponentSlots
}

/** 组件状态 */
export const useComponentState = createGlobalState(() => {
  /** 缓存组件数据，组件未实例化时，可先缓存后赋值 */
  const dataBufferMap = new Map<string, ComponentData>();
  /** 实例化后的组件 */
  const componentRefsMap = new Map<string, ComponentRefsType>();
  /** 初始化组件 */
  function initComponent(uniqueId = '') {
    let componentRefs = componentRefsMap.get(uniqueId);
    if (!componentRefs) {
      componentRefs = {
        Instance: ref(),
        comp: shallowRef<InstanceComponent | VNode>(),
        attrs: ref<Record<string, unknown>>({}),
        slots: ref<ComponentSlots>({}),
      };
      componentRefsMap.set(uniqueId, componentRefs);
      onBeforeUnmount(() => removeComponent(uniqueId));
    }
    // 使用缓存数据初始化数据
    const bufferData = dataBufferMap.get(uniqueId);
    if (bufferData) {
      componentRefs.comp.value = bufferData.comp;
      componentRefs.attrs.value = bufferData.attrs;
      componentRefs.slots.value = bufferData.slots;
    }

    return {
      componentRef: componentRefs.Instance,
      componentNeo: componentRefs.comp,
      componentAttrs: componentRefs.attrs,
      componentSlots: componentRefs.slots,
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
  function setComponent(uniqueId = '', args: ComponentData) {
    const { comp, attrs, slots } = args;
    const componentRefs = getComponent(uniqueId);
    if (componentRefs) {
      componentRefs.comp.value = comp;
      componentRefs.attrs.value = attrs;
      componentRefs.slots.value = slots;
    }
    dataBufferMap.set(uniqueId, { comp, attrs, slots });
  }

  return { initComponent, setComponent, getComponent, removeComponent };
});
