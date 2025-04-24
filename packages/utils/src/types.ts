type SetWithCustomizer = (nsValue: any, key: string, nsObject: object) => any;

/** 数据路径 */
export type DataPath = string | string[];

/** 转化数据路径的配置项 */
export interface FormatPathOptions {
  /** 是否保留原数据，当传入的数据与嫁接的数据一致时有效 （默认不保留） */
  retain?: boolean
  /** 默认值 */
  def?: unknown
  /** 自定义赋值 */
  custom?: (value: any, index?: number) => any
  /** 自定义设置函数 */
  customizer?: SetWithCustomizer
}

/** 转化数据路径的参数类型 */
export type FormatPathParam = [DataPath, DataPath, FormatPathOptions] | [DataPath, DataPath] | [DataPath];
