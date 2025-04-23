import type { FormatPathParam } from '../types';
import { cloneDeep, get, setWith, unset } from 'lodash-es';

/**
 * 将目标对象路径进行修改，返回自定义新数据
 * @param sourceData 数据
 * @param formatParams 要修改数据参数组，[旧路径，新路径（没有时表删除），默认值，用来定制分配的值的函数]
 * @param retainOtherData 是否保留其他数据 （默认不保留）
 * @returns 新对象
 */
export function objectFormatPath<R extends object, T extends object>(
  sourceData: T,
  formatParams: FormatPathParam[],
  retainOtherData = false,
) {
  const targetData = retainOtherData ? cloneDeep(sourceData) : {};
  formatParams.forEach(([oldPath, newPath, defaultValue, customizer]) => {
    if (newPath) {
      const value = get(sourceData, oldPath, defaultValue);
      setWith(targetData, newPath, value, customizer);
    }
  });
  if (retainOtherData) {
    // 删除旧key数据
    formatParams.forEach(([oldPath]) => {
      unset(targetData, oldPath);
    });
  }
  return targetData as R;
};
