const { printHelp, loggerUtil } = require('../../output/')
const { decolor } = loggerUtil

test('printHelp(op)', () => {
  const checkMap = [
    {
      op: {
        silent: true,
        usage: 'yyl-print',
        commands: {
          init: 'init files',
          default: 'default system'
        },
        options: {
          '-v, --version': 'show version',
          '-p, --path': 'path to plugin'
        }
      },
      result: [
        '',
        '  Usage: yyl-print <commands> <options>',
        '',
        '  Commands:',
        '    init     init files',
        '    default  default system',
        '',
        '',
        '  Options:',
        '    -v, --version  show version',
        '    -p, --path     path to plugin',
        '',
        ''
      ]
    },
    {
      op: {
        silent: true,
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
      },
      result: [
        '',
        '  Usage: yyl-print <commands> <options>',
        '',
        '  打印命令',
        '',
        '',
        '  Commands:',
        '    init     init files <Package>',
        '    default  default system',
        '',
        '',
        '  Options:',
        '    -v, --version  show version',
        '    -p, --path     path to plugin',
        '',
        '',
        '  Package:',
        '    packageA  项目A',
        '    packageB  项目B',
        '',
        ''
      ]
    }
  ]

  checkMap.forEach((item) => {
    const r = printHelp(item.op)
    expect(decolor(r)).toEqual(item.result)
  })
})
