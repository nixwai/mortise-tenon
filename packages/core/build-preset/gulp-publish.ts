import { series } from 'gulp';
import { REGISTRY } from '../config';
import { presetOutput } from '../paths';
import { run, versionTag } from '../tasks';
import { version } from './package.json';

export default series(
  () => run(`pnpm publish --registry ${REGISTRY} ${versionTag(version)}`, presetOutput),
);
