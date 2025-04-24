import type { FormatPathParam } from 'mortise-tenon-tool';
import { dataFormatPath } from 'mortise-tenon-tool';

const data = { a: [[1, 2], [3, 4]] };
const formatPaths: FormatPathParam[] = [
  ['a[][]', 'a[].b[].c'],
];

dataFormatPath(data, formatPaths);

/**
 * =>
 *  { a: [{ b: [{ c: 1 }, { c: 2 }] }, { b: [{ c: 3 }, { c: 4 }] }] }
 */
