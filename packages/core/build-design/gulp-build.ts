import { parallel, series } from 'gulp';
import { compRoot, mtOutput } from '../paths';
import { buildStyle, delPath, run } from '../tasks';

export default series(
  () => delPath(mtOutput),
  parallel(
    () => buildStyle(compRoot, mtOutput),
    () => run('pnpm run build', '.'),
  ),
);
