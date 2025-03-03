import { series } from 'gulp';
import { version } from '../../components/package.json';
import { REGISTRY } from '../config';
import { run, versionTag } from '../tasks';
import { designRoot } from './paths';

export default series(
  () => run(`pnpm publish --registry ${REGISTRY} ${versionTag(version)}`, designRoot),
);
