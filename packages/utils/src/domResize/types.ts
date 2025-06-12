/**
 * 调整状态 'prepare'(准备) | 'moving'(移动) | 'idle'(静止) | 'manual'(手动调整)
 */
export type ResizeStatus = 'prepare' | 'moving' | 'idle' | 'manual';

/** 调整方向 */
export type ResizeDirection = '' | 'left' | 'right' | 'top' | 'bottom' | 'left-top' | 'left-bottom' | 'right-top' | 'right-bottom';

export interface ResizeDistance {
  x: number
  y: number
}

/** 调整大小配置项 */
export interface DomResizeOptions {
  /** 调整元素 */
  target?: HTMLDivElement
  /** 调整方向 */
  direction?: ResizeDirection
  /** 指针控制事件 */
  event?: PointerEvent
  /** 手动控制水平移动距离 */
  distanceX?: number
  /** 手动控制垂直移动距离 */
  distanceY?: number
  /** 使用transform或position进行偏移 */
  offset?: 'transform' | 'position'
  /** 锁定比例 */
  lockAspectRatio?: boolean
  /** 网格对齐，默认[1,1]，单位px，不推荐小数(以防精度缺失) */
  grid?: [number, number]
  /** 调整回调 */
  callback?: (status: ResizeStatus, direction: ResizeDirection, distance: ResizeDistance) => void
}
