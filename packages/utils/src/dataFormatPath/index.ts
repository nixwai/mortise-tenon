import type { DataPath, FormatPathParam } from '../types';
import { cloneDeep, get, isArray, setWith, unset } from 'lodash-es';

/**
 * 将目标对象路径进行修改，返回自定义新数据或移植数据
 * @param sourceData 原数据(不会影响修改到这个数据)
 * @param formatParams 要修改数据路径，[旧路径，新路径，转化的配置项]
 * @param grafData 移植数据，可将新的数据直接移植到这个数据中，如果传入的是原数据，会拷贝为新数据并默认删除旧路径的数据
 * @returns 新数据或移植数据，如果移植数据传入的是原数据，会拷贝为新数据，防止直接修改原数据
 */
export function dataFormatPath<R extends object>(
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
    formatParams?.forEach(([oldTargetPath, _, { retain } = {}]) => {
      if (retain) {
        return;
      }
      // 删除旧key数据，需要包含'a[][]'这类多维数组，未尾为数组时，需要删除数组，为key时删除对应的key
      const oldPathList = resolvePath(oldTargetPath).filter(item => item !== '[]');
      const lastPath = oldPathList[oldPathList.length - 1];
      oldPathList[oldPathList.length - 1] = removeArrayPath(lastPath);
      /** 循环最终的targetPath长度，如果少了说明有空数组提前结束循环了 */
      const maxTargetLen = (oldPathList.length - 1) * 2 + 1;
      forEachPath(targetData, oldPathList, (_value, targetPath) => {
        if (targetPath.length < maxTargetLen) {
          return;
        }
        const path = targetPath.filter(item => ![undefined, '', -1].includes(item)).join('.');
        unset(targetData, path);
      });
    });
  }
  formatParams?.forEach(([oldTargetPath, newTargetPath, { def, customizer, custom } = {}]) => {
    if (newTargetPath) {
      const oldPathList = resolvePath(oldTargetPath);
      let newPathList = resolvePath(newTargetPath);
      // 判断多级数组赋值非最后一级数组的路径相同
      if (!comparePath(oldPathList, newPathList)) {
        return;
      }
      newPathList = newPathList.map(item => removeArrayPath(item));
      forEachPath(sourceData, oldPathList, (value, targetPath) => {
        const targetLen = targetPath.length;
        // 获取转化路径
        let setPath = '';
        for (let i = 0, j = 0; i < targetLen; i += 2, j++) {
          if (newPathList[j]) {
            setPath += `.${newPathList[j]}`;
          }
          if (typeof targetPath[i + 1] === 'number') {
            setPath += `.${targetPath[i + 1]}`;
          }
        }
        setPath = setPath.slice(1);
        // 获取转化值
        const targetIndex = targetPath[targetLen - 2] as number | undefined;
        let setValue = cloneDeep(value);
        if (custom) {
          setValue = custom(setValue, targetIndex);
        }
        setValue ??= def;

        setWith(targetData, setPath, setValue, customizer);
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
  const len = Math.max(path1.length, path2.length);
  for (let i = 0; i < len; i++) {
    const path1IsArrayPath = isArrayPath(path1[i]);
    const path2IsArrayPath = isArrayPath(path2[i]);
    if (path1IsArrayPath && path2IsArrayPath) {
      continue;
    }
    else if (path1IsArrayPath || path2IsArrayPath) {
      console.error(`${pathsToString(path1)}与${pathsToString(path2)}不为同维度数组格式`);
      return false;
    }
  }
  return true;
}

function pathsToString(paths: string[]) {
  return JSON.stringify(paths.join('.')).replace('.[', '[');
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
    if (isArray(target) && target.length) {
      target.forEach((item, i) => {
        const itemPath = presentPath.concat(i);
        forEachPath(item, pathList, callBack, pathIndex + 1, itemPath);
      });
    }
    else {
      callBack([], presentPath);
    }
  }
  else {
    const value = pathItem ? get(target, pathItem) : target;
    callBack(value, targetPath.concat(pathItem));
  }
}
