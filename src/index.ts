import chalk, { ChalkFunction } from 'chalk'
import readline from 'readline'
import { COLUMNS } from './const'
import {
  getStrSize,
  type as checkType,
  strWrap,
  toCtx,
  HighlightMap,
  highlight,
  makeSpace
} from './util'

export type LogLevel = 0 | 1 | 2

export type ProgressStatus = 'start' | 'finished' | number

/** type 类型 */
export interface TypeObject {
  name: string
  shortName: string
  color: ChalkFunction
  shortColor: ChalkFunction
}

/** 基础类型 */
export interface TypeInfo {
  info: TypeObject
  warn: TypeObject
  error: TypeObject
  success: TypeObject
  cmd: TypeObject
  add: TypeObject
  del: TypeObject
  update: TypeObject
  [key: string]: TypeObject
}

/** 日志类型 */
export type LogType = keyof TypeInfo

export interface ExtendType {
  [key: string]: TypeObject
}

export interface ProgressInfo {
  icons: string[]
  shortIcons: string[]
}

/** logger - 配置 */
export interface YylCmdLoggerOption {
  /** 日志等级 0 - 没有, 1 - 简单, 2 - 详细 */
  logLevel?: LogLevel
  /** 是否进行 type 简化 */
  lite?: boolean
  /** 附加 type */
  type?: ExtendType
  /** 关键字高亮 */
  keywordHighlight?: HighlightMap
  /** 进度相关属性 */
  progressInfo?: ProgressInfo
  /** cmd 一行长度,用于自测时使用 */
  colunmSize?: number
}

/** logger - 属性 */
type YylCmdLoggerProperty = Required<YylCmdLoggerOption>

/** 进度相关信息 */
export interface ProgressStat<T extends string = ''> {
  /** 是否正在执行 */
  progressing: boolean
  /** 执行百分比 */
  percent: number
  /** 刷新间隔 */
  interval: number
  /** 最后一个 log 内容 */
  lastLogs: any[]
  /** success logs 内容 */
  successLogs: any[][]
  /** error logs 内容 */
  errorLogs: any[][]
  /** warn logs 内容 */
  warnLogs: any[][]
  /** 最后一个 log 类型 */
  lastType: LogType | T
  /** 最后一个log行数 */
  lastRowsCount: number
  /** intervalkey */
  intervalKey: any
}

/** logger 对象 */
export class YylCmdLogger<T extends string = ''> {
  typeInfo: TypeInfo = {
    info: {
      name: 'INFO',
      color: chalk.bgBlack.gray,
      shortName: 'i',
      shortColor: chalk.gray
    },
    warn: {
      name: 'WARN',
      shortName: '!',
      color: chalk.bgYellow.black,
      shortColor: chalk.yellow
    },
    error: {
      name: 'ERR ',
      shortName: 'x',
      color: chalk.bgRed.white,
      shortColor: chalk.red
    },
    success: {
      name: 'PASS',
      shortName: 'Y',
      color: chalk.bgCyan.white,
      shortColor: chalk.cyan
    },
    del: {
      name: 'DEL ',
      shortName: '-',
      color: chalk.bgGray.black,
      shortColor: chalk.gray
    },
    add: {
      name: 'ADD ',
      shortName: '+',
      color: chalk.bgBlue.white,
      shortColor: chalk.blue
    },
    update: {
      name: 'UPDT',
      shortName: '~',
      color: chalk.bgMagenta.white,
      shortColor: chalk.magenta
    },
    cmd: {
      name: 'CMD>',
      shortName: '>',
      color: chalk.bgBlack.white,
      shortColor: chalk.white
    }
  }

  /** progress icon 信息 */
  progressInfo: YylCmdLoggerProperty['progressInfo'] = {
    icons: ['G---', 'NG--', 'ING-', 'DING', 'ADIN', 'OADI', 'LOAD', '-LOA', '--LO', '---L', '----'],
    shortIcons: ['L', 'O', 'A', 'D', 'I', 'N', 'G']
  }

  logLevel: YylCmdLoggerProperty['logLevel'] = 1
  lite: YylCmdLoggerProperty['lite'] = false
  keywordHighlight: YylCmdLoggerProperty['keywordHighlight'] = {}
  columnSize: YylCmdLoggerProperty['colunmSize'] = COLUMNS

  progressStat: ProgressStat<T> = {
    progressing: false,
    percent: 0,
    interval: 100,
    lastLogs: [],
    successLogs: [],
    warnLogs: [],
    errorLogs: [],
    lastType: 'info',
    lastRowsCount: 0,
    intervalKey: undefined
  }

  constructor(op?: YylCmdLoggerOption) {
    if (op?.type) {
      this.typeInfo = {
        ...this.typeInfo,
        ...op.type
      }
    }
    if (op?.logLevel !== undefined) {
      this.logLevel = op.logLevel
    }

    if (op?.lite !== undefined) {
      this.lite = op.lite
    }

    if (op?.keywordHighlight) {
      this.keywordHighlight = {
        ...this.keywordHighlight,
        ...op.keywordHighlight
      }
    }
  }

  /** 私有方法 - 更新 progress */
  protected updateProgress() {
    // TODO:
  }

  protected addProgressLog(type: LogType | T, args: any[]): string[] {
    const { progressStat } = this
    switch (type) {
      case 'warn':
        progressStat.warnLogs.push(args)
        break
      case 'error':
        progressStat.errorLogs.push(args)
        break
      case 'success':
        progressStat.successLogs.push(args)
        break

      default:
        break
    }
    progressStat.lastLogs = args
    this.updateProgress()
    return []
  }

  /** 设置 progress 状态 */
  setProgress(status: ProgressStatus) {
    if (status === 'start') {
      if (this.progressStat.intervalKey) {
        clearInterval(this.progressStat.intervalKey)
      }

      this.progressStat = {
        ...this.progressStat,
        errorLogs: [],
        successLogs: [],
        warnLogs: [],
        percent: 0,
        progressing: true,
        intervalKey: setInterval(() => {
          this.updateProgress()
        }, this.progressStat.interval)
      }
    } else if (status === 'finished') {
      if (this.progressStat.intervalKey) {
        clearInterval(this.progressStat.intervalKey)
      }

      this.progressStat = {
        ...this.progressStat,
        percent: 1,
        progressing: false,
        intervalKey: undefined
      }
    } else {
      this.progressStat = {
        ...this.progressStat,
        percent: status
      }
    }
    this.updateProgress()
  }

  /** 设置日志等级 */
  setLogLevel(level: LogLevel) {
    this.logLevel = level
  }

  /** 日志输出 */
  log(type: LogType | T, args: any[]): string[] {
    const { progressStat, lite, typeInfo, columnSize, keywordHighlight, logLevel } = this
    let iTypeInfo = typeInfo[type]
    if (!iTypeInfo) {
      iTypeInfo = typeInfo.info
      type = 'info'
    }
    if (progressStat.progressing) {
      return this.addProgressLog(type, args)
    }

    // 日志格式化处理

    // 第一行标题
    const prefix = lite
      ? iTypeInfo.shortColor(iTypeInfo.shortName)
      : iTypeInfo.color(` ${iTypeInfo.name} `)

    // 第二行标题
    const subfix = lite
      ? iTypeInfo.shortColor(makeSpace(getStrSize(iTypeInfo.shortName)))
      : iTypeInfo.color(makeSpace(getStrSize(iTypeInfo.name) + 2))
    const prefixSize = getStrSize(prefix)
    const contentSize = columnSize - prefixSize - 2

    let fArgs: string[] = []
    args.forEach((ctx) => {
      let cnt = ''
      const iType = checkType(ctx)
      if (['number', 'string', 'undefined'].includes(iType)) {
        cnt = `${ctx}`
        fArgs = fArgs.concat(strWrap(cnt, contentSize))
      } else if (iType === 'error') {
        const iCtx = toCtx<Error>(ctx)
        fArgs = fArgs.concat(strWrap(iCtx.stack || iCtx.message, contentSize))
      } else if (iType === 'object') {
        const iCtx = toCtx<Object>(ctx)
        fArgs = fArgs.concat(strWrap(JSON.stringify(iCtx, null, 2), contentSize))
      } else {
        fArgs.push(`${cnt}`)
      }
    })
    const r: string[] = []

    fArgs.forEach((ctx, i) => {
      let front = prefix
      if (i !== 0) {
        front = subfix
      }
      if (checkType(ctx) === 'string') {
        r.push(`${front} ${highlight(ctx, keywordHighlight)}`)
      } else {
        if (i === 0) {
          r.push(`${front}`)
        }
        r.push(ctx)
      }
    })

    if (logLevel !== 0) {
      readline.clearLine(process.stderr, 1)
      readline.cursorTo(process.stderr, 0)
      console.log(r.join('\n'))
    }

    return r
  }
}
