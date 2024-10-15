import { parallel, series } from 'gulp';
import { designOutput } from '../paths';
import { run } from '../tasks';

export default series(
  parallel(
    () => run('release-it', designOutput),
  ),
);
