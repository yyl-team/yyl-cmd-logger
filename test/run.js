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


logger.log('main', ['yyl 4.0.0'])
logger.setProgress('start')
logger.log('info', ['test 01'])
logger.log('info', ['test 02'])
logger.log('warn', ['test 02'])
logger.log('success', ['test 02'])
setTimeout(() => {
  logger.setProgress('finished')
  logger.log('success', ['task finished'])
}, 4000)