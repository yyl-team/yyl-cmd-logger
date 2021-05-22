const { printHelp, loggerUtil } = require('../../output/')
const { decolor }  = loggerUtil

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
    }
  ]

  checkMap.forEach((item) => {
    const r = printHelp(item.op)
    expect(decolor(r)).toEqual(item.result)
  })
})
