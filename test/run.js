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

const handles = [
  () => {
    logger.setLite(true)
    logger.setProgress('start', 'info', ['hello 01'])
  },
  () => {
    logger.setProgress(0.5, 'info', ['hello 02'])
  },
  () => {
    logger.setProgress('finished', 'info', ['hello finished'])
    logger.log('info', ['info props'])
    logger.log('warn', ['warn props'])
    logger.log('error', [new Error('error tips')])
    logger.log('success', ['success tips'])
    logger.setLite(false)
    logger.log('cmd', ['cmd tips'])
  }
]

// 强制结束 & error  test
// const handles = [() => {
//   logger.setLogLevel(2)
//   logger.setProgress('start', 'info', ['hello 01'])
// }, () => {
//   logger.setProgress('start', 'info', ['insert 01'])
// }, () => {
//   logger.log('error', [new Error('sb')])
//   logger.setProgress('forceFinished', 'info', ['finished'])
// }]

// 层级嵌套 test
// const handles = [() => {
//   logger.setProgress('start', 'info', ['hello 01'])
// }, () => {
//   logger.setProgress(0.1, 'info', ['hello 02'])
// }, () => {
//   logger.setProgress(0.2, 'info', ['hello 03'])
// }, () => {
//   logger.setProgress('start', 'info', ['insert 01'])
// }, () => {
//   logger.setProgress(0.1, 'info', ['insert 02'])
// }, () => {
//   logger.setProgress(0.9, 'info', ['insert 03'])
// }, () => {
//   logger.setProgress('finished', 'info', ['insert finished'])
// }, () => {
//   logger.setProgress(0.5, 'info', ['hello 04'])
// }, () => {
//   logger.setProgress('finished', 'info', ['hello finished'])
// }]

let index = 0
let intervalKey = setInterval(() => {
  if (index >= handles.length) {
    clearInterval(intervalKey)
  } else {
    handles[index]()
    index += 1
  }
}, 1000)
