const YylCmdLogger = require('../')
const chalk = require('chalk')

const logger = new YylCmdLogger({
  type: {
    main: {
      name: 'YYL ',
      shortName: 'Y',
      color: chalk.bgBlue.white,
      shortColor: chalk.blue
    }
  }
})

logger.setLogLevel(2)

logger.log('main', ['yyl 4.0.0'])
logger.setProgress('start')
logger.log('info', ['test 开始'])
logger.log('info', ['test 结束'])
logger.log('info', ['test 完成'])
logger.log('info', ['test 失败'])
logger.log('info', ['test 错误'])
logger.log('info', ['test 出错'])
logger.log('info', ['test failed'])
logger.log('info', ['test finished'])
logger.log('info', ['test start'])
logger.log('info', ['test passed'])
logger.log('info', ['test success'])
logger.log('info', ['test 01'])
logger.log('info', ['test 01'])
logger.log('info', ['test 02'])
logger.log('warn', ['test 02'])
logger.log('success', ['test 02'])
setTimeout(() => {
  logger.setProgress(0.25)
  logger.log('success', ['test 02'])
}, 1000)

setTimeout(() => {
  logger.setProgress(0.512356)
  logger.log('warn', ['test 03'])
}, 2000)

setTimeout(() => {
  logger.setProgress(0.7523415)
  // logger.log('error', ['test 02'])
  // logger.log('error', ['test 03'])
  // logger.log('error', ['test 04'])
  // logger.log('error', ['test 05'])
}, 3000)

setTimeout(() => {
  logger.setProgress('finished')
  logger.log('success', ['task finished'])
}, 4000)
