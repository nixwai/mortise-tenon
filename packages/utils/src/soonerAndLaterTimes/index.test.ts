import { describe, expect, it } from 'vitest';
import {
  soonerAndLaterDay,
  soonerAndLaterDecade,
  soonerAndLaterHour,
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

} from './index';

describe('test soonerAndLaterDay', () => {
  it('base use', () => {
    const result = ['1733155200000', '1733241599999'];
    expect(soonerAndLaterDay('2024-12-03')).toStrictEqual(result);
  });
  it('array use', () => {
    const result = ['1733068800000', '1733241599999'];
    expect(soonerAndLaterDay(['2024-12-02 12:20', '2024-12-03 13:10'])).toStrictEqual(result);
  });
  it('format use', () => {
    const result = ['2024/12/02 00:00:00', '2024/12/03 23:59:59'];
    expect(soonerAndLaterDay(['2024-12-02', '2024-12-03'], 'yyyy/MM/dd HH:mm:ss')).toStrictEqual(result);
  });
  it('use in full', () => {
    const result = ['2024/12/02 00:00:00', '2024/12/03 23:59:59'];
    expect(soonerAndLaterDay(['2024-12-02 12:20', '2024-12-03 13:10'], 'yyyy/MM/dd HH:mm:ss')).toStrictEqual(result);
  });
  it('options use', () => {
    const result = ['337', '338'];
    expect(soonerAndLaterDay(
      ['2024-12-02', '2024-12-03'],
      'D',
      { useAdditionalDayOfYearTokens: true },
    )).toStrictEqual(result);
  });
});

describe('test soonerAndLaterHour', () => {
  it('base use', () => {
    const result = ['1733184000000', '1733187599999'];
    expect(soonerAndLaterHour('2024-12-03')).toStrictEqual(result);
  });
  it('array use', () => {
    const result = ['1733112000000', '1733205599999'];
    expect(soonerAndLaterHour(['2024-12-02 12:20', '2024-12-03 13:10'])).toStrictEqual(result);
  });
  it('format use', () => {
    const result = ['2024/12/02 08:00:00', '2024/12/03 08:59:59'];
    expect(soonerAndLaterHour(['2024-12-02', '2024-12-03'], 'yyyy/MM/dd HH:mm:ss')).toStrictEqual(result);
  });
  it('use in full', () => {
    const result = ['2024/12/02 12:00:00', '2024/12/03 13:59:59'];
    expect(soonerAndLaterHour(['2024-12-02 12:20', '2024-12-03 13:10'], 'yyyy/MM/dd HH:mm:ss')).toStrictEqual(result);
  });
});

describe('test soonerAndLaterMinute', () => {
  it('base use', () => {
    const result = ['1733184000000', '1733184059999'];
    expect(soonerAndLaterMinute('2024-12-03')).toStrictEqual(result);
  });
  it('array use', () => {
    const result = ['1733113200000', '1733202659999'];
    expect(soonerAndLaterMinute(['2024-12-02 12:20', '2024-12-03 13:10'])).toStrictEqual(result);
  });
  it('format use', () => {
    const result = ['2024/12/02 08:00:00', '2024/12/03 08:00:59'];
    expect(soonerAndLaterMinute(['2024-12-02', '2024-12-03'], 'yyyy/MM/dd HH:mm:ss')).toStrictEqual(result);
  });
  it('use in full', () => {
    const result = ['2024/12/02 12:20:00', '2024/12/03 13:10:59'];
    expect(soonerAndLaterMinute(['2024-12-02 12:20', '2024-12-03 13:10'], 'yyyy/MM/dd HH:mm:ss')).toStrictEqual(result);
  });
});

describe('test soonerAndLaterSecond', () => {
  it('base use', () => {
    const result = ['1733184000000', '1733184000999'];
    expect(soonerAndLaterSecond('2024-12-03')).toStrictEqual(result);
  });
  it('array use', () => {
    const result = ['1733113200000', '1733202600999'];
    expect(soonerAndLaterSecond(['2024-12-02 12:20', '2024-12-03 13:10'])).toStrictEqual(result);
  });
  it('format use', () => {
    const result = ['2024/12/02 08:00:00:000', '2024/12/03 08:00:00:999'];
    expect(soonerAndLaterSecond(['2024-12-02', '2024-12-03'], 'yyyy/MM/dd HH:mm:ss:SSS')).toStrictEqual(result);
  });
  it('use in full', () => {
    const result = ['2024/12/02 12:20:00:000', '2024/12/03 13:10:40:999'];
    expect(soonerAndLaterSecond(['2024-12-02 12:20:00', '2024-12-03 13:10:40'], 'yyyy/MM/dd HH:mm:ss:SSS')).toStrictEqual(result);
  });
});

describe('test soonerAndLaterMonth', () => {
  it('base use', () => {
    const result = ['1732982400000', '1735660799999'];
    expect(soonerAndLaterMonth('2024-12-03')).toStrictEqual(result);
  });
  it('array use', () => {
    const result = ['1732982400000', '1735660799999'];
    expect(soonerAndLaterMonth(['2024-12-02 12:20', '2024-12-03 13:10'])).toStrictEqual(result);
  });
  it('format use', () => {
    const result = ['2024/11/01 00:00:00', '2024/12/31 23:59:59'];
    expect(soonerAndLaterMonth(['2024-11-02', '2024-12-03'], 'yyyy/MM/dd HH:mm:ss')).toStrictEqual(result);
  });
  it('use in full', () => {
    const result = ['2024/11/01 00:00:00', '2024/12/31 23:59:59'];
    expect(soonerAndLaterMonth(['2024-11-02 12:20:10', '2024/12/03 13:10:20'], 'yyyy/MM/dd HH:mm:ss')).toStrictEqual(result);
  });
});

describe('test soonerAndLaterYear', () => {
  it('base use', () => {
    const result = ['1704038400000', '1735660799999'];
    expect(soonerAndLaterYear('2024-12-03')).toStrictEqual(result);
  });
  it('array use', () => {
    const result = ['1704038400000', '1735660799999'];
    expect(soonerAndLaterYear(['2024-12-02 12:20', '2024-12-03 13:10'])).toStrictEqual(result);
  });
  it('format use', () => {
    const result = ['2024/01/01 00:00:00', '2024/12/31 23:59:59'];
    expect(soonerAndLaterYear(['2024-11-02', '2024-12-03'], 'yyyy/MM/dd HH:mm:ss')).toStrictEqual(result);
  });
  it('use in full', () => {
    const result = ['2024/01/01 00:00:00', '2024/12/31 23:59:59'];
    expect(soonerAndLaterYear(['2024-11-02 12:20:10', '2024-12-03 13:10:29'], 'yyyy/MM/dd HH:mm:ss')).toStrictEqual(result);
  });
});

describe('test soonerAndLaterISOWeekYear', () => {
  it('base use', () => {
    const result = ['1704038400000', '1735487999999'];
    expect(soonerAndLaterISOWeekYear('2024-12-03')).toStrictEqual(result);
  });
  it('array use', () => {
    const result = ['1704038400000', '1735487999999'];
    expect(soonerAndLaterISOWeekYear(['2024-12-02 12:20', '2024-12-03 13:10'])).toStrictEqual(result);
  });
  it('format use', () => {
    const result = ['2024/01/01 00:00:00', '2024/12/29 23:59:59'];
    expect(soonerAndLaterISOWeekYear(['2024-11-02', '2024-12-03'], 'yyyy/MM/dd HH:mm:ss')).toStrictEqual(result);
  });
  it('use in full', () => {
    const result = ['2024/01/01 00:00:00', '2024/12/29 23:59:59'];
    expect(soonerAndLaterISOWeekYear(['2024-11-02 12:20:10', '2024-12-03 13:10:29'], 'yyyy/MM/dd HH:mm:ss')).toStrictEqual(result);
  });
});

describe('test soonerAndLaterWeek', () => {
  it('base use', () => {
    const result = ['1732982400000', '1733587199999'];
    expect(soonerAndLaterWeek('2024-12-03')).toStrictEqual(result);
  });
  it('array use', () => {
    const result = ['1732982400000', '1733587199999'];
    expect(soonerAndLaterWeek(['2024-12-02 12:20', '2024-12-03 13:10'])).toStrictEqual(result);
  });
  it('format use', () => {
    const result = ['2024/10/27 00:00:00 Sunday(1)', '2024/12/07 23:59:59 Saturday(7)'];
    expect(soonerAndLaterWeek(['2024-11-02', '2024-12-03'], 'yyyy/MM/dd HH:mm:ss eeee(e)')).toStrictEqual(result);
  });
  it('use in full', () => {
    const result = ['2024/10/28 00:00:00 Monday(1)', '2024/12/08 23:59:59 Sunday(7)'];
    expect(soonerAndLaterWeek(
      ['2024-11-02', '2024-12-03'],
      'yyyy/MM/dd HH:mm:ss eeee(e)',
      { weekStartsOn: 1 },
    )).toStrictEqual(result);
  });
});

describe('test soonerAndLaterISOWeek', () => {
  it('base use', () => {
    const result = ['1733068800000', '1733673599999'];
    expect(soonerAndLaterISOWeek('2024-12-03')).toStrictEqual(result);
  });
  it('array use', () => {
    const result = ['1733068800000', '1733673599999'];
    expect(soonerAndLaterISOWeek(['2024-12-02 12:20', '2024-12-03 13:10'])).toStrictEqual(result);
  });
  it('format use', () => {
    const result = ['2024/10/28 00:00:00 Monday(2)', '2024/12/08 23:59:59 Sunday(1)'];
    expect(soonerAndLaterISOWeek(['2024-11-02', '2024-12-03'], 'yyyy/MM/dd HH:mm:ss eeee(e)')).toStrictEqual(result);
  });
  it('use in full', () => {
    const result = ['2024/10/28 00:00:00 Monday(1)', '2024/12/08 23:59:59 Sunday(7)'];
    expect(soonerAndLaterISOWeek(
      ['2024-11-02', '2024-12-03'],
      'yyyy/MM/dd HH:mm:ss eeee(e)',
      { weekStartsOn: 1 },
    )).toStrictEqual(result);
  });
});

describe('test soonerAndLaterDecade', () => {
  it('base use', () => {
    const result = ['1577808000000', '1893427199999'];
    expect(soonerAndLaterDecade('2024-12-03')).toStrictEqual(result);
  });
  it('array use', () => {
    const result = ['1577808000000', '1893427199999'];
    expect(soonerAndLaterDecade(['2024-12-02 12:20', '2024-12-03 13:10'])).toStrictEqual(result);
  });
  it('format use', () => {
    const result = ['2020/01/01 00:00:00', '2029/12/31 23:59:59'];
    expect(soonerAndLaterDecade(['2024-11-02', '2024-12-03'], 'yyyy/MM/dd HH:mm:ss')).toStrictEqual(result);
  });
  it('use in full', () => {
    const result = ['2020/01/01 00:00:00', '2029/12/31 23:59:59'];
    expect(soonerAndLaterDecade(['2024-11-02 12:20:10', '2024-12-03 13:10:29'], 'yyyy/MM/dd HH:mm:ss')).toStrictEqual(result);
  });
});

describe('test soonerAndLaterQuarter', () => {
  it('base use', () => {
    const result = ['1727712000000', '1735660799999'];
    expect(soonerAndLaterQuarter('2024-12-03')).toStrictEqual(result);
  });
  it('array use', () => {
    const result = ['1727712000000', '1735660799999'];
    expect(soonerAndLaterQuarter(['2024-12-02 12:20', '2024-12-03 13:10'])).toStrictEqual(result);
  });
  it('format use', () => {
    const result = ['2024/10/01 00:00:00', '2024/12/31 23:59:59'];
    expect(soonerAndLaterQuarter(['2024-11-02', '2024-12-03'], 'yyyy/MM/dd HH:mm:ss')).toStrictEqual(result);
  });
  it('use in full', () => {
    const result = ['2024/10/01 00:00:00', '2024/12/31 23:59:59'];
    expect(soonerAndLaterQuarter(['2024-11-02 12:20:10', '2024-12-03 13:10:29'], 'yyyy/MM/dd HH:mm:ss')).toStrictEqual(result);
  });
});

describe('test soonerAndLaterToday', () => {
  it('base use', () => {
    const result = soonerAndLaterDay(new Date());
    expect(soonerAndLaterToday()).toStrictEqual(result);
  });
  it('use in full', () => {
    const result = soonerAndLaterDay(new Date(), 'yyyy/MM/dd HH:mm:ss');
    expect(soonerAndLaterToday('yyyy/MM/dd HH:mm:ss')).toStrictEqual(result);
  });
});

describe('test soonerAndLaterYesterday', () => {
  it('base use', () => {
    const result = soonerAndLaterDay(new Date().getTime() - 24 * 60 * 60 * 1000);
    expect(soonerAndLaterYesterday()).toStrictEqual(result);
  });
  it('use in full', () => {
    const result = soonerAndLaterDay(new Date().getTime() - 24 * 60 * 60 * 1000, 'yyyy/MM/dd HH:mm:ss');
    expect(soonerAndLaterYesterday('yyyy/MM/dd HH:mm:ss')).toStrictEqual(result);
  });
});

describe('test soonerAndLaterTomorrow', () => {
  it('base use', () => {
    const result = soonerAndLaterDay(new Date().getTime() + 24 * 60 * 60 * 1000);
    expect(soonerAndLaterTomorrow()).toStrictEqual(result);
  });
  it('use in full', () => {
    const result = soonerAndLaterDay(new Date().getTime() + 24 * 60 * 60 * 1000, 'yyyy/MM/dd HH:mm:ss');
    expect(soonerAndLaterTomorrow('yyyy/MM/dd HH:mm:ss')).toStrictEqual(result);
  });
});
