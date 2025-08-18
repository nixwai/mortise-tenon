import type { DomResizeOptions } from '../types';
import type { DomAttrs } from './dom-attrs';
import type { Axis } from './index';

type GetOffsetFn = (distance: number, axis: Axis, dir: 1 | -1) => { offsetPositive: number, offsetNegative: number };

type OffsetFn = (dis: number, axis: Axis, dir: 1 | -1) => number;

/** 创建获取偏移值函数 */
function createResizingOffset(
  options: DomResizeOptions,
  createFn: (
    createOffsetPositive: (fn: () => OffsetFn) => OffsetFn,
    createOffsetNegative: (fn: () => OffsetFn) => OffsetFn
  ) => GetOffsetFn,
) {
  const createOffsetPositive = (fn: () => OffsetFn) => fn();
  // 不可跨轴调整时返回0函数，减少不必要的计算
  const createOffsetNegative = options.crossAxis ? (fn: () => OffsetFn) => fn() : () => () => 0;
  return createFn(createOffsetPositive, createOffsetNegative);
}

/** 零偏移 */
function zeroOffset() {
  return { offsetPositive: 0, offsetNegative: 0 };
}

export function movingOffset(options: DomResizeOptions, domAttrs: DomAttrs) {
  if (!options.offset) {
    // 不需要偏移时使用空位移函数，减少不必要的计算
    return { getForwardMoveOffset: zeroOffset, getBackwardMoveOffset: zeroOffset, getBothMoveOffset: zeroOffset };
  }
  const { width, height, offsetX, offsetY, transform, minWidth, minHeight } = domAttrs;
  const rad = transform.rotate * Math.PI / 180;
  const cosRad = Math.cos(rad);
  /** 横轴变化点的位置 */
  const originXP = transform.originX / width;
  /** 纵轴变化点位置 */
  const originYP = transform.originY / height;
  /** 缩放增值 */
  const scaleAxisMultiple = {
    x: {
      v1: (transform.scaleX - 1) * originXP,
      v2: (transform.scaleX - 1) * (1 - originXP),
    },
    y: {
      v1: (transform.scaleY - 1) * originYP,
      v2: (transform.scaleY - 1) * (1 - originYP),
    },
  };
  /** 旋转增值 */
  const rotateAxisMultiple = {
    x: {
      v1: transform.scaleX * (cosRad - 1) * originXP,
      v2: transform.scaleX * (cosRad - 1) * (1 - originXP),
    },
    y: {
      v1: transform.scaleY * (cosRad - 1) * originYP,
      v2: transform.scaleY * (cosRad - 1) * (1 - originYP),
    },
  };
  /** 越轴改变时，需要调整的偏移值 */
  const negativeAxiosOffset = options.crossAxis
    ? {
        x: {
          origin: offsetX + width + width * (transform.scaleX * cosRad - 1) * (1 - 2 * originXP),
          min: minWidth * transform.scaleX * cosRad,
        },
        y: {
          origin: offsetY + height + height * (transform.scaleY * cosRad - 1) * (1 - 2 * originYP),
          min: minHeight * transform.scaleY * cosRad,
        },
      }
    : { x: { origin: 0, min: 0 }, y: { origin: 0, min: 0 } };
  /** 原始位移 */
  const originAxiosOffset = {
    x: offsetX,
    y: offsetY,
  };

  /** 获取向前调整的位移 */
  const getForwardMoveOffset = createResizingOffset(options, (createOffsetPositive, createOffsetNegative) => {
    const getOffsetPositive = createOffsetPositive(() => {
      return (distance, axis) => {
        const scalePositiveOffset = distance * scaleAxisMultiple[axis].v1;
        const rotatePositiveOffset = distance * rotateAxisMultiple[axis].v1;
        return originAxiosOffset[axis] + scalePositiveOffset + rotatePositiveOffset;
      };
    });
    const getOffsetNegative = createOffsetNegative(() => {
      const otherNegativeValue = {
        x: negativeAxiosOffset.x.origin + negativeAxiosOffset.x.min,
        y: negativeAxiosOffset.y.origin + negativeAxiosOffset.y.min,
      };
      return (distance, axis) => {
        const scaleNegativeOffset = distance * scaleAxisMultiple[axis].v2;
        const rotateNegativeOffset = distance * rotateAxisMultiple[axis].v2;
        return otherNegativeValue[axis] + distance + scaleNegativeOffset + rotateNegativeOffset;
      };
    });
    return (distance, axis, dir) => ({
      offsetPositive: getOffsetPositive(distance, axis, dir),
      offsetNegative: getOffsetNegative(distance, axis, dir),
    });
  });

  /** 获取向后调整的位移 */
  const getBackwardMoveOffset = createResizingOffset(options, (createOffsetPositive, createOffsetNegative) => {
    const getOffsetPositive = createOffsetPositive(() => {
      return (distance, axis) => {
        const scalePositiveOffset = distance * scaleAxisMultiple[axis].v2;
        const rotatePositiveOffset = distance * rotateAxisMultiple[axis].v2;
        return originAxiosOffset[axis] + distance + scalePositiveOffset + rotatePositiveOffset;
      };
    });
    const getOffsetNegative = createOffsetNegative(() => {
      const otherNegativeValue = {
        x: negativeAxiosOffset.x.origin - negativeAxiosOffset.x.min,
        y: negativeAxiosOffset.y.origin - negativeAxiosOffset.y.min,
      };
      return (distance, axis) => {
        const scaleNegativeOffset = distance * scaleAxisMultiple[axis].v1;
        const rotateNegativeOffset = distance * rotateAxisMultiple[axis].v1;
        return otherNegativeValue[axis] + scaleNegativeOffset + rotateNegativeOffset;
      };
    });
    return (distance, axis, dir) => ({
      offsetPositive: getOffsetPositive(distance, axis, dir),
      offsetNegative: getOffsetNegative(distance, axis, dir),
    });
  });

  /** 获取前后调整的位移 */
  const getBothMoveOffset = createResizingOffset(options, (createOffsetPositive, createOffsetNegative) => {
    const scaleMultiple = {
      x: (transform.scaleX - 1) * (originXP - 0.5),
      y: (transform.scaleY - 1) * (originYP - 0.5),
    };
    const rotateMultiple = {
      x: transform.scaleX * (cosRad - 1) * (originXP - 0.5),
      y: transform.scaleY * (cosRad - 1) * (originYP - 0.5),
    };
    const getOffsetPositive = createOffsetPositive(() => {
      return (distanceOffset, axis) => originAxiosOffset[axis] + distanceOffset;
    });
    const getOffsetNegative = createOffsetNegative(() => {
      const otherNegativeValue = {
        x: offsetX + width - 2 * width * (transform.scaleX * cosRad - 1) * (originXP - 0.5),
        y: offsetY + height - 2 * height * (transform.scaleY * cosRad - 1) * (originYP - 0.5),
      };
      return (distanceOffset, axis) => otherNegativeValue[axis] - distanceOffset;
    });
    return (distance, axis, dir) => {
      const distanceHalf = dir * distance / 2;
      const scaleOffset = dir * distance * scaleMultiple[axis];
      const rotateOffset = dir * distance * rotateMultiple[axis];
      const distanceOffset = scaleOffset + rotateOffset - distanceHalf;
      const offsetPositive = getOffsetPositive(distanceOffset, axis, dir);
      const offsetNegative = getOffsetNegative(distanceOffset, axis, dir);
      return {
        offsetPositive,
        offsetNegative,
      };
    };
  });

  return {
    getForwardMoveOffset,
    getBackwardMoveOffset,
    getBothMoveOffset,
  };
}
