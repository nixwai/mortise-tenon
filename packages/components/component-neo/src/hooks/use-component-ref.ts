import type { Ref } from 'vue';
import { createGlobalState } from '@vueuse/core';

/** 组件实例 */
export const useComponentRef = createGlobalState(() => {
  const componentRefMap = new Map<string, Ref<any>>();
  /** 存储实例 */
  function setComponentRef(ref: Ref<any>, key = '') {
    if (!componentRefMap.has(key)) {
      componentRefMap.set(key, ref);
    }
  }

  /** 获取实例 */
  function getComponentRef(key = '') {
    return componentRefMap.get(key);
  }

  /** 移除实例 */
  function removeComponentRef(key = '') {
    componentRefMap.delete(key);
  }

  return { setComponentRef, getComponentRef, removeComponentRef };
});
