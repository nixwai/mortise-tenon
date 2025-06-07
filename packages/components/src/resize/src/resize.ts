export interface ResizeProps {
  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean
  /**
   * 使用translate偏移，适用于元素脱离文档流时使用
   * @default false
   */
  translated?: boolean
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
