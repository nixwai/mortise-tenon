import type { CSSProperties } from 'vue';

export interface TableProps {
  /** 表格数据 */
  data?: any[]
  /** 表格配置 */
  config?: TableConfig []
}

/** 表体行 */
export interface TableConfig {
  /** 行体样式 */
  rowStyle?: CSSProperties
  /** 有渲染表头时的样式 */
  headStyle?: CSSProperties
  /** 列配置 */
  columns: Column[]
}

/** 标体列 */
export interface Column {
  /** 列对应的唯一key */
  dataKey?: string
  /** 表头名称 */
  title?: string
  /** 表头格配置 */
  head?: CellProps
  /** 数据格配置 */
  cell?: CellProps
}

/** 单元格属性 */
export interface CellProps {
  /** 样式 */
  style?: CSSProperties
  /** 占用列数 */
  colspan?: number
  /** 占用行数 */
  rowspan?: number
}
