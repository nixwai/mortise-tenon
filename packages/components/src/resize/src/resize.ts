export interface ResizeProps {
  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean
  /**
   * 使用偏移，适用于元素脱离文档流时使用
   */
  offset?: 'transform' | 'position' | 'translate'
  /**
   * 可调整的方向
   * @default ['right']
   */
  directions?: Direction[]
  /**
   * 锁定纵横比，directions至少需要设置两个方向横向与纵向方向的值
   * @default false
   */
  lockAspectRatio?: boolean
  /**
   * 网格对齐，固定每次调整的最小距离，默认[0.5,0.5]，单位px，使用小数注意精度问题，建议使用0.5的倍数
   */
  grid?: number[]
}

/**
 * 可调整的方向
 */
export type Direction = 'left' | 'right' | 'top' | 'bottom';
