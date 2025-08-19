import type { DomResizeOptions } from '../types';
import type { DomAttrs } from './dom-attrs';
import type { Axis } from './index';

type GetOffsetFn = (distance: number, axis: Axis, dir: 1 | -1, value: number) => { offsetCurrentAxis: number, offsetAnotherAxis: number };

type OffsetFn = (dis: number, axis: Axis, dir: 1 | -1) => number;

/** 创建获取偏移值函数 */
function createResizingOffset(
  createFn: () => (dis: number, axis: Axis, dir: 1 | -1) => { getOffsetPositive: OffsetFn, getOffsetNegative: OffsetFn },
): GetOffsetFn {
  const offsetFns = createFn();
  return (dis, axis, dir, value) => {
    const { getOffsetNegative, getOffsetPositive } = offsetFns(dis, axis, dir);
    return {
      // value大于0时使用正向偏移值，小于0时使用负向偏移值
      offsetCurrentAxis: value > 0 ? getOffsetPositive(dis, axis, dir) : getOffsetNegative(dis, axis, dir),
      offsetAnotherAxis: 0,
    };
  };
}

/** 零偏移 */
function zeroOffset() {
  return { offsetCurrentAxis: 0, offsetAnotherAxis: 0 };
}

export function movingOffset(options: DomResizeOptions, domAttrs: DomAttrs) {
  if (!options.offset) {
    // 不需要偏移时使用空位移函数，减少不必要的计算
    return { getForwardMoveOffset: zeroOffset, getBackwardMoveOffset: zeroOffset, getBothMoveOffset: zeroOffset };
  }
  const { width, height, offsetX, offsetY, transform, minWidth, minHeight } = domAttrs;
  const { rotate, originRelativeX, originRelativeY, scaleX, scaleY } = transform;
  const rad = rotate * Math.PI / 180;
  const cosRad = Math.cos(rad);
  /** 缩放增值 */
  const scaleAxisMultiple = {
    x: {
      v1: (scaleX - 1) * originRelativeX,
      v2: (scaleX - 1) * (1 - originRelativeX),
    },
    y: {
      v1: (scaleY - 1) * originRelativeY,
      v2: (scaleY - 1) * (1 - originRelativeY),
    },
  };
  /** 旋转增值 */
  const rotateAxisMultiple = {
    x: {
      v1: scaleX * (cosRad - 1) * originRelativeX,
      v2: scaleX * (cosRad - 1) * (1 - originRelativeX),
    },
    y: {
      v1: scaleY * (cosRad - 1) * originRelativeY,
      v2: scaleY * (cosRad - 1) * (1 - originRelativeY),
    },
  };
  /** 越轴改变时，需要调整的偏移值 */
  const negativeAxiosOffset = options.crossAxis
    ? {
        x: {
          origin: offsetX + width + width * (scaleX * cosRad - 1) * (1 - 2 * originRelativeX),
          min: minWidth * scaleX * cosRad,
        },
        y: {
          origin: offsetY + height + height * (scaleY * cosRad - 1) * (1 - 2 * originRelativeY),
          min: minHeight * scaleY * cosRad,
        },
      }
    : { x: { origin: 0, min: 0 }, y: { origin: 0, min: 0 } };
  /** 原始位移 */
  const originAxiosOffset = {
    x: offsetX,
    y: offsetY,
  };

  /** 获取向前调整的位移 */
  const getForwardMoveOffset = createResizingOffset(() => {
    const getOffsetPositive: OffsetFn = (distance, axis) => {
      const scalePositiveOffset = distance * scaleAxisMultiple[axis].v1;
      const rotatePositiveOffset = distance * rotateAxisMultiple[axis].v1;
      return originAxiosOffset[axis] + scalePositiveOffset + rotatePositiveOffset;
    };
    let getOffsetNegative: OffsetFn = () => 0;
    if (options.crossAxis) {
      const otherNegativeValue = {
        x: negativeAxiosOffset.x.origin + negativeAxiosOffset.x.min,
        y: negativeAxiosOffset.y.origin + negativeAxiosOffset.y.min,
      };
      getOffsetNegative = (distance, axis) => {
        const scaleNegativeOffset = distance * scaleAxisMultiple[axis].v2;
        const rotateNegativeOffset = distance * rotateAxisMultiple[axis].v2;
        return otherNegativeValue[axis] + distance + scaleNegativeOffset + rotateNegativeOffset;
      };
    }
    return () => ({
      getOffsetPositive,
      getOffsetNegative,
    });
  });

  /** 获取向后调整的位移 */
  const getBackwardMoveOffset = createResizingOffset(() => {
    const getOffsetPositive: OffsetFn = (distance, axis) => {
      const scalePositiveOffset = distance * scaleAxisMultiple[axis].v2;
      const rotatePositiveOffset = distance * rotateAxisMultiple[axis].v2;
      return originAxiosOffset[axis] + distance + scalePositiveOffset + rotatePositiveOffset;
    };
    let getOffsetNegative: OffsetFn = () => 0;
    if (options.crossAxis) {
      const otherNegativeValue = {
        x: negativeAxiosOffset.x.origin - negativeAxiosOffset.x.min,
        y: negativeAxiosOffset.y.origin - negativeAxiosOffset.y.min,
      };
      getOffsetNegative = (distance, axis) => {
        const scaleNegativeOffset = distance * scaleAxisMultiple[axis].v1;
        const rotateNegativeOffset = distance * rotateAxisMultiple[axis].v1;
        return otherNegativeValue[axis] + scaleNegativeOffset + rotateNegativeOffset;
      };
    }
    return () => ({
      getOffsetPositive,
      getOffsetNegative,
    });
  });

  /** 获取前后调整的位移 */
  const getBothMoveOffset = createResizingOffset(() => {
    const scaleMultiple = {
      x: (scaleX - 1) * (originRelativeX - 0.5),
      y: (scaleY - 1) * (originRelativeY - 0.5),
    };
    const rotateMultiple = {
      x: scaleX * (cosRad - 1) * (originRelativeX - 0.5),
      y: scaleY * (cosRad - 1) * (originRelativeY - 0.5),
    };
    const getOffsetPositive: OffsetFn = (distanceOffset, axis) => originAxiosOffset[axis] + distanceOffset;
    let getOffsetNegative: OffsetFn = () => 0;
    if (options.crossAxis) {
      const otherNegativeValue = {
        x: offsetX + width - 2 * width * (scaleX * cosRad - 1) * (originRelativeX - 0.5),
        y: offsetY + height - 2 * height * (scaleY * cosRad - 1) * (originRelativeY - 0.5),
      };
      getOffsetNegative = (distanceOffset, axis) => otherNegativeValue[axis] - distanceOffset;
    }
    return (distance, axis, dir) => {
      const distanceHalf = dir * distance / 2;
      const scaleOffset = dir * distance * scaleMultiple[axis];
      const rotateOffset = dir * distance * rotateMultiple[axis];
      const distanceOffset = scaleOffset + rotateOffset - distanceHalf;
      return {
        getOffsetPositive: () => getOffsetPositive(distanceOffset, axis, dir),
        getOffsetNegative: () => getOffsetNegative(distanceOffset, axis, dir),
      };
    };
  });

  return {
    getForwardMoveOffset,
    getBackwardMoveOffset,
    getBothMoveOffset,
  };
}
