import chalk from 'chalk'
import { isArray, toCtx } from './util'

export interface OptionObject {
  [key: string]: string | string[]
}
/** help 信息 配置 */
export interface PrintHelpOption {
  /** 静默输出 */
  silent?: boolean
  /** 命令 */
  usage: string
  /** 命令描述 */
  desc?: string
  /** commands */
  commands?: OptionObject
  /** options */
  options?: OptionObject
  /** 其他自定义 */
  others?: OptionObject
}

/** 计算数组中最大长度 */
const accountMaxKeyLen = function (arr: OptionObject) {
  let maxLen = 0
  Object.keys(arr).forEach((key) => {
    if (maxLen < key.length) {
      maxLen = key.length
    }
  })
  return maxLen
}

/** 字符串 indent */
const textIndent = function (txt: string, num: number) {
  let r = ''
  for (let i = 0, len = num; i < len; i++) {
    r += ' '
  }
  return r + txt
}

const compose = function (ikey: string, arr: OptionObject, baseIndent: number) {
  const r = []
  const maxkeyLen = accountMaxKeyLen(arr)
  let i
  let len
  r.push('')
  r.push(chalk.yellow(textIndent(`${ikey}:`, baseIndent)))

  Object.keys(arr).forEach((key) => {
    if (isArray(arr[key])) {
      const iArr = toCtx<string[]>(arr[key])
      r.push(
        chalk.gray(textIndent(key, baseIndent * 2)) +
          textIndent(iArr.shift() || '', maxkeyLen - key.length + 2)
      )
      for (i = 0, len = arr[key].length; i < len; i++) {
        r.push(textIndent(arr[key][i], maxkeyLen + 2 + baseIndent * 2))
      }
    } else {
      const iTxt = toCtx<string>(arr[key])
      r.push(
        `${chalk.gray(textIndent(key, baseIndent * 2))}${textIndent(
          iTxt,
          maxkeyLen - key.length + 2
        )}`
      )
    }
  })

  r.push('')
  return r
}

export const printHelp = function (op: PrintHelpOption) {
  if (!op) {
    return []
  }

  const baseIndent = 2
  let r = []

  if (op.usage) {
    r.push(
      textIndent(
        `${chalk.yellow('Usage: ') + (op.usage || '')}${op.commands ? ' <commands>' : ''}${
          op.options ? ' <options>' : ''
        }`,
        baseIndent
      )
    )
  }

  if (op.commands) {
    r = r.concat(compose('Commands', op.commands, baseIndent))
  }

  if (op.options) {
    r = r.concat(compose('Options', op.options, baseIndent))
  }

  r.push('')
  r.unshift('')
  if (!op.silent) {
    console.log(r.join('\n'))
  }
  return r
}
