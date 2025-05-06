import { soonerAndLaterDay } from 'mortise-tenon-tool';

soonerAndLaterDay('2024-12-03', 'D*H*m*s', { useAdditionalDayOfYearTokens: true });
// => ['338*0*0*0', '338*23*59*59']
