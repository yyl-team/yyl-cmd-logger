[yyl-cmd-logger](../README.md) / [Exports](../modules.md) / ProgressStat

# Interface: ProgressStat<T\>

进度相关信息

## Type parameters

Name | Type | Default |
:------ | :------ | :------ |
`T` | *string* | ** |

## Table of contents

### Properties

- [addLogs](progressstat.md#addlogs)
- [delLogs](progressstat.md#dellogs)
- [errorLogs](progressstat.md#errorlogs)
- [frameCurrent](progressstat.md#framecurrent)
- [interval](progressstat.md#interval)
- [intervalKey](progressstat.md#intervalkey)
- [lastLogs](progressstat.md#lastlogs)
- [lastRowsCount](progressstat.md#lastrowscount)
- [lastType](progressstat.md#lasttype)
- [percent](progressstat.md#percent)
- [progressing](progressstat.md#progressing)
- [startTime](progressstat.md#starttime)
- [successLogs](progressstat.md#successlogs)
- [updateLogs](progressstat.md#updatelogs)
- [warnLogs](progressstat.md#warnlogs)

## Properties

### addLogs

• **addLogs**: *any*[][]

新增文件 logs 内容

Defined in: [index.ts:101](https://github.com/jackness1208/yyl-cmd-logger/blob/fe68697/src/index.ts#L101)

___

### delLogs

• **delLogs**: *any*[][]

删除文件 logs 内容

Defined in: [index.ts:105](https://github.com/jackness1208/yyl-cmd-logger/blob/fe68697/src/index.ts#L105)

___

### errorLogs

• **errorLogs**: *any*[][]

error logs 内容

Defined in: [index.ts:97](https://github.com/jackness1208/yyl-cmd-logger/blob/fe68697/src/index.ts#L97)

___

### frameCurrent

• **frameCurrent**: *number*

当前 icon 帧数

Defined in: [index.ts:111](https://github.com/jackness1208/yyl-cmd-logger/blob/fe68697/src/index.ts#L111)

___

### interval

• **interval**: *number*

刷新间隔

Defined in: [index.ts:91](https://github.com/jackness1208/yyl-cmd-logger/blob/fe68697/src/index.ts#L91)

___

### intervalKey

• **intervalKey**: *any*

intervalkey

Defined in: [index.ts:113](https://github.com/jackness1208/yyl-cmd-logger/blob/fe68697/src/index.ts#L113)

___

### lastLogs

• **lastLogs**: *any*[]

最后一个 log 内容

Defined in: [index.ts:93](https://github.com/jackness1208/yyl-cmd-logger/blob/fe68697/src/index.ts#L93)

___

### lastRowsCount

• **lastRowsCount**: *number*

最后一个log行数

Defined in: [index.ts:109](https://github.com/jackness1208/yyl-cmd-logger/blob/fe68697/src/index.ts#L109)

___

### lastType

• **lastType**: *string* \| *number* \| T

最后一个 log 类型

Defined in: [index.ts:107](https://github.com/jackness1208/yyl-cmd-logger/blob/fe68697/src/index.ts#L107)

___

### percent

• **percent**: *number*

执行百分比

Defined in: [index.ts:89](https://github.com/jackness1208/yyl-cmd-logger/blob/fe68697/src/index.ts#L89)

___

### progressing

• **progressing**: *boolean*

是否正在执行

Defined in: [index.ts:87](https://github.com/jackness1208/yyl-cmd-logger/blob/fe68697/src/index.ts#L87)

___

### startTime

• **startTime**: *number*

开始时间

Defined in: [index.ts:115](https://github.com/jackness1208/yyl-cmd-logger/blob/fe68697/src/index.ts#L115)

___

### successLogs

• **successLogs**: *any*[][]

success logs 内容

Defined in: [index.ts:95](https://github.com/jackness1208/yyl-cmd-logger/blob/fe68697/src/index.ts#L95)

___

### updateLogs

• **updateLogs**: *any*[][]

更新文件 logs 内容

Defined in: [index.ts:103](https://github.com/jackness1208/yyl-cmd-logger/blob/fe68697/src/index.ts#L103)

___

### warnLogs

• **warnLogs**: *any*[][]

warn logs 内容

Defined in: [index.ts:99](https://github.com/jackness1208/yyl-cmd-logger/blob/fe68697/src/index.ts#L99)
