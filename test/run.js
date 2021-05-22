const { printHelp } = require('../')

printHelp({
  usage: 'yyl-print',
  desc: '打印命令',
  commands: {
    init: 'init files <Package>',
    default: 'default system'
  },
  options: {
    '-v, --version': 'show version',
    '-p, --path': 'path to plugin'
  },
  others: {
    Package: {
      packageA: '项目A',
      packageB: '项目B'
    }
  }
})
