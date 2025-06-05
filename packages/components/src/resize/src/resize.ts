export interface ResizeProps {
  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean
  /**
   * 定位位置，适用于元素脱离文档流时使用，可设置偏移量
   * @default false
   */
  positioned?: boolean | { x?: number, y?: number }
  /**
   * 可调整的方向
   * @default ['right']
   */
  directions?: ('left' | 'right' | 'top' | 'bottom')[]
}
