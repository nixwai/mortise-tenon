import type { FormatPathParam } from '../types';
import { cloneDeep, get, isArray, setWith, unset } from 'lodash-es';

/**
 * 将目标对象路径进行修改，返回自定义新数据或移植数据
 * @param sourceData 原数据
 * @param formatParams 要修改数据参数组，[旧路径，新路径（没有时表删除），转化数据路径的选项类型]
 * @param grafData 移植数据，可将新的数据直接移植到这个数据中
 * @returns 新数据或移植数据，当传入的原数据与移植数据是同一个值时，会创建一个新对象，防止直接修改原数据
 */
export function objectFormatPath<R extends object, T extends object>(
  sourceData?: T,
  formatParams?: FormatPathParam[],
  grafData?: object,
) {
  const isSameData = sourceData === grafData;
  const targetData = grafData
    ? (isSameData ? cloneDeep(sourceData) : grafData) as object
    : (isArray(sourceData) ? [] : {});
  if (isSameData) {
    // 删除旧key数据
    formatParams?.forEach(([oldPath, _, { retain } = {}]) => {
      if (!retain) {
        unset(targetData, oldPath);
      }
    });
  }
  formatParams?.forEach(([oldPath, newPath, { def, customizer, custom } = {}]) => {
    if (newPath) {
      let value = cloneDeep(get(sourceData, oldPath));
      if (custom) {
        value = custom(value);
      }
      value ??= def;
      setWith(targetData, newPath, cloneDeep(value), customizer);
    }
  });
  return targetData as R;
};
