/**
 * 调整状态 'prepare'(准备) | 'moving'(移动) | 'idle'(静止)
 */
export type ResizeStatus = 'prepare' | 'moving' | 'idle';

/** 调整大小配置项 */
export interface DomResizeOptions {
  /** 调整元素 */
  target?: HTMLDivElement
  /** 事件 */
  event?: PointerEvent
  /** 调整方向 */
  direction?: ResizeDirection
  /** 使用translate偏移 */
  translated?: boolean
  /** 锁定比例 */
  lockAspectRatio?: boolean
  /** 调整回调 */
  callback?: (status: ResizeStatus, direction: ResizeDirection) => void
}

export type ResizeDirection = '' | 'left' | 'right' | 'top' | 'bottom' | 'left-top' | 'left-bottom' | 'right-top' | 'right-bottom';
