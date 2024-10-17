import type { CSSProperties } from 'vue';

export interface ExpandBoxProps {
  /** 控制是否展开（v-model） */
  open?: boolean
  /** 达到可调整的目标范围(px) */
  targetRange?: number
  /** 过渡时间 */
  transitionTime?: string
  /** 展开按钮样式 */
  buttonStyle?: CSSProperties
  /** 展开的位置 */
  placement?: 'top' | 'bottom'
}

export interface ExpandBoxEmits {
  /** open绑定修改 */
  (e: 'update:open', open: boolean): void
  /** 展开状态变更 */
  (e: 'change', value: boolean): void
}
