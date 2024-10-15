import { resolve } from 'node:path';

/** 项目根路径 */
export const projRoot = resolve(__dirname, '../../');
/** pkg根目录 */
export const pkgRoot = resolve(projRoot, 'packages');
/** 组件库根目录 */
export const compRoot = resolve(pkgRoot, 'components');

/** `/dist` */
export const buildOutput = resolve(projRoot, 'dist');
/** `/dist/mortise-tenon-design` */
export const designOutput = resolve(buildOutput, 'mortise-tenon-design');
/** `/dist/mortise-tenon-design/es` */
export const designEsOutput = resolve(designOutput, 'es');
/** `/dist/mortise-tenon-design/lib` */
export const designLibOutput = resolve(designOutput, 'lib');
