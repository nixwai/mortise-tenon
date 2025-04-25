import type { FormatPathParam } from '../types';
import { describe, expect, it } from 'vitest';
import { dataFormatPath } from './index';

describe('test dataFormatPath', () => {
  it('应该根据路径转化成对应的新对象', () => {
    const data = {
      count: 3,
      time: ['2021', '2024'],
      c1: 1,
      c2: 2,
      option: { child: ['q', 'w'], name: 'n' },
      o: 4,
    };
    const formatKeys: FormatPathParam[] = [
      ['count', 'num'],
      ['time[0]', 'startTime'],
      ['time[1]', 'endTime'],
      ['time'],
      ['c1', 'cAry.0'],
      ['c2', 'cAry.1'],
      ['option.child[0]', 'option.a'],
      [['option', 'child', '1'], ['option', 'b']],
      ['option.child'],
    ];
    const result = {
      num: 3,
      startTime: '2021',
      endTime: '2024',
      cAry: [1, 2],
      option: { a: 'q', b: 'w' },
    };
    expect(dataFormatPath(data, formatKeys)).toStrictEqual(result);
  });
  it('应该将常量转变为对象', () => {
    const data = 'val';
    const formatKeys: FormatPathParam[] = [
      ['', 'a.b'],
    ];
    const result = { a: { b: 'val' } };
    expect(dataFormatPath(data, formatKeys)).toStrictEqual(result);
  });
  it('应该将常量转变为数组', () => {
    const data = 'val';
    const formatKeys: FormatPathParam[] = [
      ['', '[0].a'],
    ];
    const result = [{ a: 'val' }];
    expect(dataFormatPath(data, formatKeys, [])).toStrictEqual(result);
  });
  it('应该根据路径将成的数据转化给移植数据', () => {
    const data = { a: [{ b: 1 }, { b: 2 }] };
    const grafData = { c: 3 };
    const formatKeys: FormatPathParam[] = [
      ['a[].b', 'd[]'],
    ];
    const result = { c: 3, d: [1, 2] };
    expect(dataFormatPath(data, formatKeys, grafData)).toStrictEqual(result);
  });
  it('应该根据路径将成的数据转化给原数据', () => {
    const data = { a: [{ b: 1 }, { b: 2 }] };
    const formatKeys: FormatPathParam[] = [
      ['a[].b', 'd[]', { retain: true }],
    ];
    const result = { a: [{ b: 1 }, { b: 2 }], d: [1, 2] };
    expect(dataFormatPath(data, formatKeys, data)).toStrictEqual(result);
  });
  it('应该对原数据路径成生默认值与自定义值', () => {
    const data = { a: [{ b: 1, c: 1 }, { b: 2 }] };
    const formatKeys: FormatPathParam[] = [
      ['a[].b', 'd[]', { custom: (value: number, index) => ({ key: index, value }) }],
      ['a[0].c', 'c', { def: 0 }],
    ];
    const result = { d: [{ key: 0, value: 1 }, { key: 1, value: 2 }], c: 1 };
    expect(dataFormatPath(data, formatKeys)).toStrictEqual(result);
  });
  it('应该根据配置的customizer与原数据生成对象数据', () => {
    const data = { a: [{ b: [1, 2] }, { b: [3, 4] }] };
    const formatKeys: FormatPathParam[] = [
      ['a[].b[]', 'a[][]', { customizer: Object }],
    ];
    const result = { a: { 0: { 0: 1, 1: 2 }, 1: { 0: 3, 1: 4 } } };
    expect(dataFormatPath(data, formatKeys)).toStrictEqual(result);
  });
  it('应该根据空数组数据生成对应空数组', () => {
    const data = { a: [] };
    const formatPaths: FormatPathParam[] = [
      ['a[][]', 'a[].b[]'],
    ];
    const result = { a: [] };
    expect(dataFormatPath(data, formatPaths)).toStrictEqual(result);
  });
  it('应该根据空对象数组数据生成对应空对象数组', () => {
    const data = { a: [[], []] };
    const formatPaths: FormatPathParam[] = [
      ['a[][]', 'a[].b[]'],
    ];
    const result = { a: [{ b: [] }, { b: [] }] };
    expect(dataFormatPath(data, formatPaths)).toStrictEqual(result);
  });
  it('应该调换两个路径', () => {
    const data = [{ a: 1, b: 2 }, { a: 3, b: 4 }];
    const formatKeys: FormatPathParam[] = [
      ['[].a', '[].b'],
      ['[].b', '[].a'],
    ];
    const result = [{ a: 2, b: 1 }, { a: 4, b: 3 }];
    expect(dataFormatPath(data, formatKeys)).toStrictEqual(result);
  });
  it('应该调换两个路径(数组格式)', () => {
    const data = [{ a: 1, b: 2 }, { a: 3, b: 4 }];
    const formatKeys: FormatPathParam[] = [
      [['[]', 'a'], ['[]', 'b']],
      [['[]', 'b'], ['[]', 'a']],
    ];
    const result = [{ a: 2, b: 1 }, { a: 4, b: 3 }];
    expect(dataFormatPath(data, formatKeys)).toStrictEqual(result);
  });
  it('应该根据路径将数组转化成数组对象', () => {
    const data = [[1, 2], [3, 4]];
    const formatPaths: FormatPathParam[] = [
      ['[][]', '[].a[]'],
    ];
    const result = [{ a: [1, 2] }, { a: [3, 4] }];
    expect(dataFormatPath(data, formatPaths)).toStrictEqual(result);
  });
  it('应该根据路径将数组转化成数组对象(数组格式)', () => {
    const data = [[1, 2], [3, 4]];
    const formatPaths: FormatPathParam[] = [
      [['[]', '[]'], ['[]', 'a[]']],
    ];
    const result = [{ a: [1, 2] }, { a: [3, 4] }];
    expect(dataFormatPath(data, formatPaths)).toStrictEqual(result);
  });
  it('应该根据路径将数组转化成对象数组', () => {
    const data = [[1, 2], [3, 4]];
    const formatPaths: FormatPathParam[] = [
      ['[][]', '[][].a'],
    ];
    const result = [[{ a: 1 }, { a: 2 }], [{ a: 3 }, { a: 4 }]];
    expect(dataFormatPath(data, formatPaths)).toStrictEqual(result);
  });
  it('应该根据路径将数组转化成对象数组(数组格式)', () => {
    const data = [[1, 2], [3, 4]];
    const formatPaths: FormatPathParam[] = [
      [['[][]'], ['[]', '[]', 'a']],
    ];
    const result = [[{ a: 1 }, { a: 2 }], [{ a: 3 }, { a: 4 }]];
    expect(dataFormatPath(data, formatPaths)).toStrictEqual(result);
  });
  it('应该根据路径将数组转化成对象数组对象', () => {
    const data = [[1, 2], [3, 4]];
    const formatPaths: FormatPathParam[] = [
      ['[][]', 'a[].b[].c'],
    ];
    const result = { a: [{ b: [{ c: 1 }, { c: 2 }] }, { b: [{ c: 3 }, { c: 4 }] }] };
    expect(dataFormatPath(data, formatPaths, {})).toStrictEqual(result);
  });
  it('应该根据路径将数组转化成对象数组对象(数组格式)', () => {
    const data = [[1, 2], [3, 4]];
    const formatPaths: FormatPathParam[] = [
      [['[]', '[]'], ['a[]', 'b[]', 'c']],
    ];
    const result = { a: [{ b: [{ c: 1 }, { c: 2 }] }, { b: [{ c: 3 }, { c: 4 }] }] };
    expect(dataFormatPath(data, formatPaths, {})).toStrictEqual(result);
  });
  it('应该根据路径将对象数组转化成对象数组', () => {
    const data = { a: [[1, 2], [3, 4]], c: 5 };
    const formatPaths: FormatPathParam[] = [
      ['a[][]', 'b[].c[]'],
    ];
    const result = { b: [{ c: [1, 2] }, { c: [3, 4] }], c: 5 };
    expect(dataFormatPath(data, formatPaths, data)).toStrictEqual(result);
  });
  it('应该根据路径将对象数组转化成对象数组(数组格式)', () => {
    const data = { a: [[1, 2], [3, 4]] };
    const formatPaths: FormatPathParam[] = [
      [['a[]', '[]'], ['a[]', 'b[]']],
    ];
    const result = { a: [{ b: [1, 2] }, { b: [3, 4] }] };
    expect(dataFormatPath(data, formatPaths)).toStrictEqual(result);
  });
  it('应该根据路径将对象数组转化成数组对象', () => {
    const data = { a: [[1, 2], [3, 4]] };
    const formatPaths: FormatPathParam[] = [
      ['a[][]', 'a[].b[].c'],
    ];
    const result = { a: [{ b: [{ c: 1 }, { c: 2 }] }, { b: [{ c: 3 }, { c: 4 }] }] };
    expect(dataFormatPath(data, formatPaths)).toStrictEqual(result);
  });
  it('应该根据路径将对象数组转化成数组对象(数组格式)', () => {
    const data = { a: [[1, 2], [3, 4]] };
    const formatPaths: FormatPathParam[] = [
      [['a[][]'], ['a[]', 'b[]', 'c']],
    ];
    const result = { a: [{ b: [{ c: 1 }, { c: 2 }] }, { b: [{ c: 3 }, { c: 4 }] }] };
    expect(dataFormatPath(data, formatPaths)).toStrictEqual(result);
  });
  it('应该根据路径将对象数组转化成数组', () => {
    const data = { a: [{ b: [1, 2] }, { b: [3, 4] }] };
    const formatPaths: FormatPathParam[] = [
      ['a[].b[]', 'a[][]'],
    ];
    const result = { a: [[1, 2], [3, 4]] };
    expect(dataFormatPath(data, formatPaths)).toStrictEqual(result);
  });
  it('应该根据路径将对象数组转化成数组(数组格式)', () => {
    const data = { a: [{ b: [1, 2] }, { b: [3, 4] }] };
    const formatPaths: FormatPathParam[] = [
      [['a[]', 'b[]'], ['a[]', '[]']],
    ];
    const result = { a: [[1, 2], [3, 4]] };
    expect(dataFormatPath(data, formatPaths)).toStrictEqual(result);
  });
  it('应该根据路径将对象数组转化成普通数组', () => {
    const data = { a: [{ b: [1, 2] }, { b: [3, 4] }] };
    const formatPaths: FormatPathParam[] = [
      ['a[].b', '[]'],
    ];
    const result = [[1, 2], [3, 4]];
    expect(dataFormatPath(data, formatPaths, [])).toStrictEqual(result);
  });
  it('应该根据路径将数组对象转化成对象数组', () => {
    const data = [{ b: [1, 2] }, { b: [3, 4] }];
    const formatPaths: FormatPathParam[] = [
      ['[].b', 'a[]'],
    ];
    const result = { a: [[1, 2], [3, 4]] };
    expect(dataFormatPath(data, formatPaths, {})).toStrictEqual(result);
  });
});
