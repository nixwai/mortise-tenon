export interface ButtonProps {
  /** debounce：防抖；throttle：节流 */
  mode?: 'debounce' | 'throttle'
  /** 间隔时间 */
  time?: string
  /** 禁用 */
  disabled?: boolean
}
