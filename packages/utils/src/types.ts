type SetWithCustomizer = (nsValue: any, key: string, nsObject: object) => any;

/** 数据路径 */
export type DataPath = string | string[];

/** 转化数据路径的参数类型 */
export type FormatPathParam = [DataPath, DataPath, unknown, SetWithCustomizer] | [DataPath, DataPath, unknown] | [DataPath, DataPath] | [DataPath];
