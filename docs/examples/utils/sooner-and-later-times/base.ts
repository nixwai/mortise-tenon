import {
  soonerAndLaterDay,
  soonerAndLaterDecade,
  soonerAndLaterISOWeek,
  soonerAndLaterISOWeekYear,
  soonerAndLaterMinute,
  soonerAndLaterMonth,
  soonerAndLaterQuarter,
  soonerAndLaterSecond,
  soonerAndLaterToday,
  soonerAndLaterTomorrow,
  soonerAndLaterWeek,
  soonerAndLaterYear,
  soonerAndLaterYesterday,

} from 'mortise-tenon-tool';

soonerAndLaterToday('yyyy/MM/dd HH:mm:ss');
// => [今天最早一刻，今天最晚一刻]

soonerAndLaterYesterday('yyyy/MM/dd HH:mm:ss');
// => 昨天最早一刻，昨天最晚一刻]

soonerAndLaterTomorrow('yyyy/MM/dd HH:mm:ss');
// => [明天最早一刻，明天最晚一刻]

soonerAndLaterDay(['2024-12-02 12:20', '2024-12-03 13:10'], 'yyyy/MM/dd HH:mm:ss');
// => ['2024/12/02 12:00:00', '2024/12/03 13:59:59']

soonerAndLaterMinute(['2024-12-02 12:20', '2024-12-03 13:10'], 'yyyy/MM/dd HH:mm:ss');
// => ['2024/12/02 12:20:00', '2024/12/03 13:10:59']

soonerAndLaterSecond(['2024-12-02 12:20:00', '2024-12-03 13:10:40'], 'yyyy/MM/dd HH:mm:ss:SSS');
// => ['2024/12/02 12:20:00:000', '2024/12/03 13:10:40:999']

soonerAndLaterMonth(['2024-11-02 12:20:10', '2024/12/03 13:10:20'], 'yyyy/MM/dd HH:mm:ss');
// => ['2024/11/01 00:00:00', '2024/12/31 23:59:59']

soonerAndLaterYear(['2024-11-02 12:20:10', '2024-12-03 13:10:29'], 'yyyy/MM/dd HH:mm:ss');
// => ['2024/01/01 00:00:00', '2024/12/31 23:59:59']

soonerAndLaterISOWeekYear(['2024-11-02 12:20:10', '2024-12-03 13:10:29'], 'yyyy/MM/dd HH:mm:ss');
// => ['2024/01/01 00:00:00', '2024/12/29 23:59:59']

soonerAndLaterWeek(
  ['2024-11-02', '2024-12-03'],
  'yyyy/MM/dd HH:mm:ss eeee(e)',
  { weekStartsOn: 1 },
);
// => ['2024/10/28 00:00:00 Monday(1)', '2024/12/08 23:59:59 Sunday(7)']

soonerAndLaterISOWeek(
  ['2024-11-02', '2024-12-03'],
  'yyyy/MM/dd HH:mm:ss eeee(e)',
  { weekStartsOn: 1 },
);
// => ['2024/10/28 00:00:00 Monday(1)', '2024/12/08 23:59:59 Sunday(7)']

soonerAndLaterDecade(['2024-11-02 12:20:10', '2024-12-03 13:10:29'], 'yyyy/MM/dd HH:mm:ss');
// => ['2020/01/01 00:00:00', '2029/12/31 23:59:59']

soonerAndLaterQuarter(['2024-11-02 12:20:10', '2024-12-03 13:10:29'], 'yyyy/MM/dd HH:mm:ss');
// => ['2024/10/01 00:00:00', '2024/12/31 23:59:59']
