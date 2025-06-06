export interface ResizeProps {
  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean
  /**
   * 使用定位，适用于元素脱离文档流时使用，可设置偏移量
   * @default false
   */
  positioned?: boolean | { x?: number, y?: number }
  /**
   * 可调整的方向
   * @default ['right']
   */
  directions?: ('left' | 'right' | 'top' | 'bottom')[]
  /**
   * 锁定纵横比，directions至少需要设置两个方向横向与纵向方向的值
   * @default false
   */
  lockAspectRatio?: boolean
}

/**
 * 可调整的方向
 */
export type Direction = 'left' | 'right' | 'top' | 'bottom';

/**
 * 调整状态 'prepare'(准备) | 'moving'(移动) | 'idle'(静止)
 */
export type ResizeStatus = 'prepare' | 'moving' | 'idle';
