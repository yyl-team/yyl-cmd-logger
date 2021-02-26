const { YylCmdLogger } = require('../')
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

logger.log('main', ['v1.0.0'])
logger.log('info', ['普通信息'])
logger.log('warn', ['警告信息'])
logger.log('error', ['错误信息'])
logger.log('del', ['删除信息'])
logger.log('add', ['新增信息'])
logger.log('update', ['更新信息'])
logger.log('cmd', ['命令行信息'])