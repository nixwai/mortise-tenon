import type { Component, DefineComponent, VNode } from 'vue';

export interface ComponentNeoProps {
  /** 唯一标识 */
  uniqueId?: string
  /** 渲染的组件 */
  is?: string | Component
}

export type InstanceComponent = DefineComponent<any, any, any, any, any, any, any, any, any, any>;

export type ComponentSlots = Record<string, (arg: any) => VNode> | VNode;
