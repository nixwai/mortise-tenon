import type { DataPath, FormatPathParam } from '../types';
import { cloneDeep, get, isArray, setWith, unset } from 'lodash-es';

/**
 * 将目标对象路径进行修改，返回自定义新数据或移植数据
 * @param sourceData 原数据
 * @param formatParams 要修改数据路径，[旧路径，新路径（没有时表删除），转化的配置项]
 * @param grafData 移植数据，可将新的数据直接移植到这个数据中(除原数据外)
 * @returns 新数据或移植数据，如果移植数据传入的是原数据，会拷贝为新数据，防止直接修改原数据
 */
export function dataFormatPath<R extends object, T extends object>(
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
    formatParams?.forEach(([oldTargetPath, _, { retain } = {}]) => {
      if (retain) {
        return;
      }
      const oldPathList = resolvePath(oldTargetPath);
      const lastArrayPath = oldPathList[oldPathList.length - 1];
      if (isArrayPath(lastArrayPath)) {
        oldPathList[oldPathList.length - 1] = removeArrayPath(lastArrayPath);
      }
      forEachPath(targetData, oldPathList, (_value, targetPath) => {
        const path = targetPath.filter(item => ![undefined, '', -1].includes(item)).join('.');
        unset(targetData, path);
      });
    });
  }
  formatParams?.forEach(([oldTargetPath, newTargetPath, { def, customizer, custom } = {}]) => {
    if (newTargetPath) {
      const oldPathList = resolvePath(oldTargetPath);
      const newPathList = resolvePath(newTargetPath);
      // 判断多级数组赋值非最后一级数组的路径相同
      if (!comparePath(oldPathList, newPathList)) {
        return;
      }
      /** 最后一个数组类型路径 */
      let lastArrayPath = '';
      /** 最后一个对象类型路径 */
      let lastObjectPath = '';

      const newPathLen = newPathList.length;
      if (isArrayPath(newPathList[newPathLen - 1])) {
        lastArrayPath = removeArrayPath(newPathList[newPathLen - 1]);
      }
      else {
        lastArrayPath = removeArrayPath(newPathList[newPathLen - 2]);
        lastObjectPath = newPathList[newPathLen - 1];
      }
      forEachPath(sourceData, oldPathList, (value, targetPath) => {
        const targetIndex = targetPath[targetPath.length - 2] as number | undefined;
        const pathList: (number | string | undefined)[] = targetPath.slice(0, -3);
        pathList.push(lastArrayPath, targetIndex, lastObjectPath);
        const path = pathList.filter(item => ![undefined, '', -1].includes(item)).join('.');
        value = cloneDeep(value);
        if (custom) {
          value = custom(value, targetIndex);
        }
        value ??= def;
        setWith(targetData, path, value, customizer);
      });
    }
  });
  return targetData as R;
};

/** 分割使用 [] 表示数组的路径 */
const pathSplitRegex = /(?<=\[\])(?=,|\.|\[\]|\[\w|$)/;

/** 解析传入的路径 */
function resolvePath(path: DataPath): string[] {
  if (isArray(path)) {
    const str = path.join(',');
    return str.split(pathSplitRegex).map(item => item.replace('[]', ',[]').split(',').filter(Boolean).join('.'));
  }
  else {
    return path.split(pathSplitRegex).map(item => item.replace(/^\./, ''));
  }
}

/** 比较路径在多级数组下是符合赋值条件 */
function comparePath(path1: string[], path2: string[]) {
  let isSame = true;
  const len = Math.max(path1.length, path2.length);
  for (let i = 0; i < len; i++) {
    if (isArrayPath(path1[i]) || isArrayPath(path2[i])) {
      if (!isSame) {
        const pathsToString = (paths: string[]) => JSON.stringify(paths.map(item => item.split(',')).flat());
        console.error(`多级数组赋值需要保证非最后一级数组的路径相同
           ${pathsToString(path1.splice(0, i))} !== ${pathsToString(path2.splice(0, i))}`);
        return false;
      }
      isSame = JSON.stringify(path1[i]) === JSON.stringify(path2[i]);
    }
  }
  return true;
}

/** 路径是否为数组 */
function isArrayPath(path?: string) {
  return path?.endsWith('[]') || false;
}

/** 移除数组路径中最后的 [] */
function removeArrayPath(path?: string) {
  return path?.replace(/\.?\[\]$/, '') || '';
}

/** 根据传入的路径，将数据赋值 */
function forEachPath(
  target: unknown,
  pathList: string[],
  callBack: (value: unknown, targetPath: (string | number)[]) => void,
  pathIndex = 0,
  targetPath: (string | number)[] = [],
) {
  if (pathIndex === pathList.length) {
    callBack(target, targetPath.concat(''));
    return;
  }
  let pathItem = pathList[pathIndex];
  if (isArrayPath(pathItem)) {
    pathItem = removeArrayPath(pathItem);
    const presentPath = targetPath.concat(pathItem);
    target = pathItem.length ? get(target, pathItem) : target;
    if (isArray(target)) {
      target.forEach((item, i) => {
        const itemPath = presentPath.concat(i);
        forEachPath(item, pathList, callBack, pathIndex + 1, itemPath);
      });
    }
  }
  else {
    callBack(get(target, pathItem), targetPath.concat(pathItem));
  }
}
