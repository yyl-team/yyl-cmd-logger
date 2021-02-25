import chalk, { ChalkFunction } from 'chalk'

export type LogLevel = 0 | 1 | 2

export type ProgressType = 'start' | 'finished' | number

/** type 类型 */
export interface TypeObject {
  name: string
  shortName: string
  color: ChalkFunction
}

/** 日志类型 */
export type LogType = keyof BaseType

/** 基础类型 */
export interface BaseType {
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
  keywordHighlight?: {
    [key: string]: ChalkFunction
  }
  progressInfo?: ProgressInfo
}

/** logger - 属性 */
type YylCmdLoggerProperty = Required<YylCmdLoggerOption>

/** logger 对象 */
export class YylCmdLogger<T extends string = ''> {
  type: BaseType = {
    info: {
      name: 'INFO',
      shortName: 'i',
      color: chalk.bgBlack.gray
    },
    warn: {
      name: 'WARN',
      shortName: '!',
      color: chalk.bgYellow.white
    },
    error: {
      name: 'ERR',
      shortName: 'x',
      color: chalk.bgRed.white
    },
    success: {
      name: 'PASS',
      shortName: 'Y',
      color: chalk.bgCyan.white
    },
    del: {
      name: 'DEL',
      shortName: '-',
      color: chalk.bgGray.black
    },
    add: {
      name: 'ADD',
      shortName: '+',
      color: chalk.bgBlue.white
    },
    update: {
      name: 'UPDT',
      shortName: '~',
      color: chalk.bgMagenta.white
    },
    cmd: {
      name: 'CMD>',
      shortName: '>',
      color: chalk.bgBlack.white
    }
  }

  /** progress icon 信息 */
  progressInfo: YylCmdLoggerProperty['progressInfo'] = {
    icons: ['L---', '-O--', '--A-', '---D'],
    shortIcons: ['L', 'O', 'A', 'D']
  }

  logLevel: YylCmdLoggerProperty['logLevel'] = 1
  lite: YylCmdLoggerProperty['lite'] = true
  keywordHighlight: YylCmdLoggerProperty['keywordHighlight'] = {}

  /** 是否处在 progress */
  progressing: boolean = false
  /** progress 进度: 0 - 1 */
  progressPercent: number = 0

  constructor(op?: YylCmdLoggerOption) {
    if (op?.type) {
      this.type = {
        ...this.type,
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

  /** 设置 progress 状态 */
  setProgress(type: ProgressType) {
    if (type === 'start') {
      this.progressPercent = 0
      this.progressing = true
    } else if (type === 'finished') {
      this.progressPercent = 1
      this.progressing = false
    } else {
      this.progressPercent = type
    }
  }

  /** 设置日志等级 */
  setLogLevel(level: LogLevel) {
    this.logLevel = level
  }

  log(type: LogType | T, args: any[]) {
    // TODO:
  }
}
