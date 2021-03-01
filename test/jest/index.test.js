const YylCmdLogger = require('../../')
const chalk = require('chalk')

test('yyLogger.log() 非中文换行问题', () => {
  const logger = new YylCmdLogger({
    colunmSize: 80,
    logLevel: 0
  })
  expect(
    logger.log('info', [
      [
        '1234567890',
        '1234567890',
        '1234567890',
        '1234567890',
        '1234567890',
        '1234567890',
        '1234567890',
        '1234567890',
        '1234567890'
      ].join('')
    ])
  ).toEqual([
    `${chalk.bgBlack.gray(
      ' INFO '
    )} 12345678901234567890123456789012345678901234567890123456789012345678901234`,
    `${chalk.bgBlack.gray('      ')} 5678901234567890`
  ])
})

test('yyLogger.log() 中文换行问题', () => {
  const logger = new YylCmdLogger({
    colunmSize: 80,
    logLevel: 0
  })
  expect(
    logger.log('info', [
      [
        '一二三四五六七八九十',
        '一二三四五六七八九十',
        '一二三四五六七八九十',
        '一二三四五六七八九十',
        '一二三四五六七八九十',
        '一二三四五六七八九十'
      ].join('')
    ])
  ).toEqual([
    `${chalk.bgBlack.gray(
      ' INFO '
    )} 一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七`,
    `${chalk.bgBlack.gray('      ')} 八九十一二三四五六七八九十一二三四五六七八九十`
  ])
})

test('yyLogger.log() 混合字符问题', () => {
  const logger = new YylCmdLogger({
    colunmSize: 80,
    logLevel: 0
  })
  expect(
    logger.log('info', [
      [
        '一二三四五六七八九十',
        '1234567890',
        '一二三四五六七八九十',
        '1234567890',
        '一二三四五六七八九十',
        '1234567890'
      ].join('')
    ])
  ).toEqual([
    `${chalk.bgBlack.gray(
      ' INFO '
    )} 一二三四五六七八九十1234567890一二三四五六七八九十1234567890一二三四五六七`,
    `${chalk.bgBlack.gray('      ')} 八九十1234567890`
  ])
})
