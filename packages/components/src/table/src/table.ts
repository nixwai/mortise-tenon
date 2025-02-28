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
  /** 表头样式 */
  headStyle?: CSSProperties
  /** 列配置 */
  columns: Column[]
}

/** 标体列 */
export interface Column {
  /** 唯一标识key */
  key?: string
  /** 单元格数据字段（配置了才会显示对应数据列） */
  dataKey?: string
  /** 表头名称（配置了才会显示对应列表头） */
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
  colSpan?: number
  /** 占用行数 */
  rowSpan?: number
}
