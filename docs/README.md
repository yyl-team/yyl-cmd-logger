yyl-cmd-logger / [Exports](modules.md)

# yyl-cmd-logger

## 安装

```
yarn add yyl-cmd-logger
```

## 使用

### 一般使用

```typescript
import { YylCmdLogger } from 'yyl-cmd-logger'
const logger = new YylCmdLogger()
logger.log('info', ['hello world'])
logger.log('warn', ['hello world'])
logger.log('error', ['hello world'])
logger.log('success', ['hello world'])
logger.log('add', ['hello world'])
logger.log('del', ['hello world'])
logger.log('update', ['hello world'])
logger.log('cmd', ['hello world'])

logger.setProgress('start')
logger.log('info', ['hello world'])
logger.setProgress(0.1)
logger.log('info', ['hello world'])
logger.setProgress(1)
logger.setProgress('finished')
```

### 进度功能

```typescript
import { YylCmdLogger } from 'yyl-cmd-logger'
const logger = new YylCmdLogger()

logger.setProgress('start')
logger.log('info', ['hello world'])
logger.setProgress(0.1)
logger.log('info', ['hello world'])
logger.setProgress(1)
logger.setProgress('finished')
```

### 自定义 type

```typescript
import { YylCmdLogger } from 'yyl-cmd-logger'
import chalk from 'chalk'
const logger = new YylCmdLogger({
  type: {
    main: {
      name: 'YYL>',
      color: chalk.bgBlue.white,
      shortName: 'Y',
      shortColor: chalk.blue
    }
  }
})

logger.log('main', ['v1.0.0'])
```

### 其他函数

#### cleanScreen

屏幕 clear

```typescript
import { cleanScreen } from 'yyl-cmd-logger'
cleanScreen()
```

#### printHelp

打印 help

```typescript
import { printHelp } from 'yyl-cmd-logger'
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
```

### 文档

[这里](./docs/modules.md)
