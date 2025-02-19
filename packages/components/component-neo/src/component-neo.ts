import type { Component } from 'vue';

export interface ComponentNeoProps {
  /** 唯一标识 */
  uniqueId?: string
  /** 渲染的组件 */
  is?: string | Component
}
