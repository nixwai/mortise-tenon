import { parallel, series } from 'gulp';
import { mtOutput } from '../paths';
import { run } from '../tasks';

export default series(
  parallel(
    () => run('release-it', mtOutput),
  ),
);
