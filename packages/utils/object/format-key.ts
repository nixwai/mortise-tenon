import { cloneDeep, get, set, unset } from 'lodash-es';

/**
 * 将目标对象的key进行修改，返回自定义的key的新对象
 * @param obj 要修改的对象
 * @param paths 要设置的对象路径组，数组第一个为旧路径，第二个为新路径（没有时表删除）
 * @param defaultValue 如果解析 value 是 undefined 会以 defaultValue 取代
 * @returns 新对象
 */
export function objectFormatKey<R extends object, T extends object>(obj: T, paths: (string | string[])[][], defaultValue?: any) {
  const newObj = cloneDeep(obj) as object;
  paths.forEach(([oldPath, newPath]) => {
    if (newPath) {
      const value = get(newObj, oldPath, defaultValue);
      set(newObj, newPath, value);
    }
  });
  // 删除旧key数据
  paths.forEach(([oldPath]) => {
    unset(newObj, oldPath);
  });
  return newObj as R;
};
