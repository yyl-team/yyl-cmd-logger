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
