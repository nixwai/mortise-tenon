import type { FormatPathParam } from '../types';
import { cloneDeep, get, isArray, setWith, unset } from 'lodash-es';

/**
 * 将目标对象路径进行修改，返回自定义新数据或移植数据
 * @param sourceData 原数据
 * @param formatParams 要修改数据路径，[旧路径，新路径（没有时表删除），转化的配置项]
 * @param grafData 移植数据，可将新的数据直接移植到这个数据中(除原数据外)
 * @returns 新数据或移植数据，如果移植数据传入的是原数据，会拷贝为新数据，防止直接修改原数据
 */
export function objectFormatPath<R extends object>(
  sourceData?: any,
  formatParams?: FormatPathParam[],
  grafData?: object,
) {
  const isSameData = typeof sourceData === 'object' && typeof grafData === 'object' && sourceData === grafData;
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
      let value = cloneDeep(oldPath ? get(sourceData, oldPath) : sourceData);
      if (custom) {
        value = custom(value);
      }
      value ??= def;
      setWith(targetData, newPath, cloneDeep(value), customizer);
    }
  });
  return targetData as R;
};
