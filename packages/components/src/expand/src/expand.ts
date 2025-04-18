export interface ExpandProps {
  /**
   * 控制是否展开
   * @default false
   */
  open?: boolean
  /**
   * 达到可调整的目标范围(px)
   * @default 0
   */
  targetRange?: number
  /**
   * 动画过渡时间(ms)
   * @default 200
   */
  transitionTime?: number
}
