import { parallel, series } from 'gulp';
import { mtOutput } from '../paths';
import { delPath, run } from '../tasks';

export default series(
  () => delPath(mtOutput),
  parallel(
    () => run('pnpm run build', '.'),
  ),
);
