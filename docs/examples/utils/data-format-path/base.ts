import type { FormatPathParam } from 'mortise-tenon-tool';
import { dataFormatPath } from 'mortise-tenon-tool';

const data = { a: [[1, 2], [3, 4]] };
const formatPaths: FormatPathParam[] = [
  ['a[][]', 'x[].y[].z'],
];

dataFormatPath(data, formatPaths);

/**
 * =>
 *  { x: [{ y: [{ z: 1 }, { z: 2 }] }, { y: [{ z: 3 }, { z: 4 }] }] }
 */
