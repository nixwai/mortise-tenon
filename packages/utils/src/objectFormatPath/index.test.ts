import type { FormatPathParam } from '../types';
import { describe, expect, it } from 'vitest';
import { objectFormatPath } from './index';

describe('test objectFormatPath', () => {
  it('应该转化对象路径', () => {
    const obj = {
      count: 3,
      time: ['2021'],
      c1: 1,
      c2: 2,
      option: { child: ['q', 'w'], name: 'n' },
      o: 4,
    };

    const formatKeys: FormatPathParam[] = [
      ['count', 'num', { retain: true }],
      ['time[0]', 'startTime'],
      ['time[1]', 'endTime', { def: '2024' }],
      ['time'],
      ['c1', 'cAry[0]'],
      ['c2', 'cAry[1]'],
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

    expect(objectFormatPath(obj, formatKeys)).toStrictEqual(result);
  });
  it('应该根据路径将成的数据转化给移植数据', () => {
    const data = { a: { b: 1, c: 2 } };
    const grafData = { a: 0 };
    const formatKeys: FormatPathParam[] = [
      ['a.b', 'b'],
      ['a.c', 'c'],
    ];
    const result = { a: 0, b: 1, c: 2 };
    expect(objectFormatPath(data, formatKeys, grafData)).toStrictEqual(result);
  });
  it('应该根据路径将成的数据转化给原数据', () => {
    const data = { a: { b: 1, c: 2 } };
    const formatKeys: FormatPathParam[] = [
      ['a.b', 'b', { retain: true }],
      ['a.c', 'c'],
    ];
    const result = { a: { b: 1 }, b: 1, c: 2 };
    expect(objectFormatPath(data, formatKeys, data)).toStrictEqual(result);
  });
  it('应该对原数据路径成生默认值与自定义值', () => {
    const data = { a: { b: 1, c: 2 } };
    const formatKeys: FormatPathParam[] = [
      ['a.a', 'a', { def: 0 }],
      ['a.b', 'b'],
      ['a.c', 'c'],
    ];
    const result = { a: 0, b: 1, c: 2 };
    expect(objectFormatPath(data, formatKeys)).toStrictEqual(result);
  });
  it('应该根据配置的customizer与原数据生成对象数据', () => {
    const data = { a: [{ b: 1 }, { b: 2 }] };
    const formatKeys: FormatPathParam[] = [
      ['a[0].b', 'b[0]', { customizer: Object }],
      ['a[1].b', 'b[1]', { customizer: Object }],
    ];
    const result = { b: { 0: 1, 1: 2 } };
    expect(objectFormatPath(data, formatKeys)).toStrictEqual(result);
  });
  it('应该调换两个路径', () => {
    const obj = {
      a: 1,
      b: 2,
      c: 3,
    };
    const formatKeys: FormatPathParam[] = [
      ['a', 'b'],
      ['b', 'a'],
    ];
    const result = {
      a: 2,
      b: 1,
      c: 3,
    };
    expect(objectFormatPath(obj, formatKeys, obj)).toStrictEqual(result);
  });
});
