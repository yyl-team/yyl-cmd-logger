const { printHelp } = require('../')

printHelp({
  usage: 'yyl-print',
  commands: {
    init: 'init files',
    default: 'default system'
  },
  options: {
    '-v, --version': 'show version',
    '-p, --path': 'path to plugin'
  }
})