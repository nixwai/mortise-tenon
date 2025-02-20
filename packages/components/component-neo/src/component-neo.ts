import type { Component, DefineComponent } from 'vue';

export interface ComponentNeoProps {
  /** 唯一标识 */
  uniqueId?: string
  /** 渲染的组件 */
  is?: string | Component
}

export type InstanceComponent = DefineComponent<any, any, any, any, any, any, any, any, any, any>;
