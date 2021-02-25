import { ChalkFunction } from 'chalk'
export type LogType = 'info' | 'warn' | 'error' | 'success' | 'cmd' | 'add' | 'del' | 'update'

export type LogLevel = 0 | 1 | 2

export type ProgressType = 'start' | 'finished' | number

/** type 类型 */
export interface TypeObject {
  name: string
  sortName: string
  color: ChalkFunction
}

/** logger - 配置 */
export interface YylCmdLoggerOption {
  /** 日志等级 0 - 没有, 1 - 简单, 2 - 详细 */
  logLevel?: LogLevel
  /** 是否进行 type 简化 */
  lite?: boolean
  /** 附加 type */
  extendType?: TypeObject[]
  /** 关键字高亮 */
  keywordHighlight?: {
    [key: string]: ChalkFunction
  }
}

/** logger - 属性 */
type YylCmdLoggerProperty = Required<YylCmdLoggerOption>

/** logger 对象 */
export class YylCmdLogger<T extends string = ''> {
  extendType: YylCmdLoggerProperty['extendType'] = []
  logLevel: YylCmdLoggerProperty['logLevel'] = 1
  lite: YylCmdLoggerProperty['lite'] = true
  keywordHighlight: YylCmdLoggerProperty['keywordHighlight'] = {}

  /** 是否处在 progress */
  progressing: boolean = false
  /** progress 进度: 0 - 1 */
  progressPercent: number = 0

  constructor(op?: YylCmdLoggerOption) {
    if (op?.extendType) {
      this.extendType = op?.extendType
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
