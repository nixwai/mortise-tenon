/**
 * 调整状态 'prepare'(准备) | 'moving'(移动) | 'idle'(静止) | 'manual'(手动调整)
 */
export type ResizeStatus = 'prepare' | 'moving' | 'idle' | 'manual';

/** 调整方向 */
export type ResizeDirection =
  'left' | 'right' | 'top' | 'bottom' | 'all' |
  'left-top' | 'left-bottom' | 'right-top' | 'right-bottom' | 'left-right' | 'top-bottom' |
  'left-top-right' | 'left-bottom-right' | 'top-left-bottom' | 'top-right-bottom';

export interface ResizeDistance {
  x: number
  y: number
  dirX: 1 | -1 | 0
  dirY: 1 | -1 | 0
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
  /** 是否可跨轴调整，需要配置offset才生效 */
  crossAxis?: boolean
  /** 网格对齐，固定每次调整的最小距离，默认[0.5,0.5]，单位px，使用小数注意精度问题，使用0.5的倍数 */
  grid?: number[]
  /** 锁定宽高比例，锁定后grid的配置也会根据当前元素比例发生改变 */
  lockAspectRatio?: boolean
  /** 调整回调 */
  callback?: (status: ResizeStatus, distance: ResizeDistance) => void
}
