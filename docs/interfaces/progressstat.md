[yyl-cmd-logger](../README.md) / [Exports](../modules.md) / ProgressStat

# Interface: ProgressStat<T\>

进度相关信息

## Type parameters

| Name | Type | Default |
| :------ | :------ | :------ |
| `T` | *string* | ``""`` |

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
- [startTimes](progressstat.md#starttimes)
- [successLogs](progressstat.md#successlogs)
- [updateLogs](progressstat.md#updatelogs)
- [warnLogs](progressstat.md#warnlogs)

## Properties

### addLogs

• **addLogs**: *any*[][]

新增文件 logs 内容

Defined in: [yylCmdLogger.ts:102](https://github.com/yyl-team/yyl-cmd-logger/blob/6b5ae25/src/yylCmdLogger.ts#L102)

___

### delLogs

• **delLogs**: *any*[][]

删除文件 logs 内容

Defined in: [yylCmdLogger.ts:106](https://github.com/yyl-team/yyl-cmd-logger/blob/6b5ae25/src/yylCmdLogger.ts#L106)

___

### errorLogs

• **errorLogs**: *any*[][]

error logs 内容

Defined in: [yylCmdLogger.ts:98](https://github.com/yyl-team/yyl-cmd-logger/blob/6b5ae25/src/yylCmdLogger.ts#L98)

___

### frameCurrent

• **frameCurrent**: *number*

当前 icon 帧数

Defined in: [yylCmdLogger.ts:112](https://github.com/yyl-team/yyl-cmd-logger/blob/6b5ae25/src/yylCmdLogger.ts#L112)

___

### interval

• **interval**: *number*

刷新间隔

Defined in: [yylCmdLogger.ts:92](https://github.com/yyl-team/yyl-cmd-logger/blob/6b5ae25/src/yylCmdLogger.ts#L92)

___

### intervalKey

• **intervalKey**: *any*

intervalkey

Defined in: [yylCmdLogger.ts:114](https://github.com/yyl-team/yyl-cmd-logger/blob/6b5ae25/src/yylCmdLogger.ts#L114)

___

### lastLogs

• **lastLogs**: *any*[]

最后一个 log 内容

Defined in: [yylCmdLogger.ts:94](https://github.com/yyl-team/yyl-cmd-logger/blob/6b5ae25/src/yylCmdLogger.ts#L94)

___

### lastRowsCount

• **lastRowsCount**: *number*

最后一个log行数

Defined in: [yylCmdLogger.ts:110](https://github.com/yyl-team/yyl-cmd-logger/blob/6b5ae25/src/yylCmdLogger.ts#L110)

___

### lastType

• **lastType**: *string* \| *number* \| T

最后一个 log 类型

Defined in: [yylCmdLogger.ts:108](https://github.com/yyl-team/yyl-cmd-logger/blob/6b5ae25/src/yylCmdLogger.ts#L108)

___

### percent

• **percent**: *number*

执行百分比

Defined in: [yylCmdLogger.ts:90](https://github.com/yyl-team/yyl-cmd-logger/blob/6b5ae25/src/yylCmdLogger.ts#L90)

___

### progressing

• **progressing**: *boolean*

是否正在执行

Defined in: [yylCmdLogger.ts:88](https://github.com/yyl-team/yyl-cmd-logger/blob/6b5ae25/src/yylCmdLogger.ts#L88)

___

### startTime

• **startTime**: *number*

开始时间

Defined in: [yylCmdLogger.ts:116](https://github.com/yyl-team/yyl-cmd-logger/blob/6b5ae25/src/yylCmdLogger.ts#L116)

___

### startTimes

• **startTimes**: *number*

start 次数（用于兼容嵌套 progress）

Defined in: [yylCmdLogger.ts:118](https://github.com/yyl-team/yyl-cmd-logger/blob/6b5ae25/src/yylCmdLogger.ts#L118)

___

### successLogs

• **successLogs**: *any*[][]

success logs 内容

Defined in: [yylCmdLogger.ts:96](https://github.com/yyl-team/yyl-cmd-logger/blob/6b5ae25/src/yylCmdLogger.ts#L96)

___

### updateLogs

• **updateLogs**: *any*[][]

更新文件 logs 内容

Defined in: [yylCmdLogger.ts:104](https://github.com/yyl-team/yyl-cmd-logger/blob/6b5ae25/src/yylCmdLogger.ts#L104)

___

### warnLogs

• **warnLogs**: *any*[][]

warn logs 内容

Defined in: [yylCmdLogger.ts:100](https://github.com/yyl-team/yyl-cmd-logger/blob/6b5ae25/src/yylCmdLogger.ts#L100)
