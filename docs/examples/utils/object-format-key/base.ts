import { objectFormatKey } from 'mortise-tenon-tool';

const obj = {
  count: 3,
  time: ['2021', '2024'],
  c1: 1,
  c2: 2,
  option: { child: ['q', 'w'], name: 'n' },
  o: 4,
};

objectFormatKey(obj, [
  ['count', 'num'], // 将count 改为 num
  ['time[0]', 'startTime'], // 将time[0] 改为 startTime
  ['time[1]', 'endTime'], // 将time[1] 改为 endTime
  ['time'], // 传入一个值，表示删除该字段
  ['c1', 'cAry[0]'], // 支持转为数组类型
  ['c2', 'cAry[1]'],
  ['option.child[0]', 'option.a'],
  [['option', 'child', '1'], ['option', 'b']], // 支持多级路径
  ['option.child'],
]);
/**
 * =>
 * {
 *   num: 3,
 *   startTime: '2021',
 *   endTime: '2024',
 *   cAry: [1, 2],
 *   option: {a: 'q', b: 'w', name: 'n'},
 *   o: 4,
 * }
 */
