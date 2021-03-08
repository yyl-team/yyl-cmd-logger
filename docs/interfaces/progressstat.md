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

Defined in: [index.ts:102](https://github.com/jackness1208/yyl-cmd-logger/blob/a173a3f/src/index.ts#L102)

___

### delLogs

• **delLogs**: *any*[][]

删除文件 logs 内容

Defined in: [index.ts:106](https://github.com/jackness1208/yyl-cmd-logger/blob/a173a3f/src/index.ts#L106)

___

### errorLogs

• **errorLogs**: *any*[][]

error logs 内容

Defined in: [index.ts:98](https://github.com/jackness1208/yyl-cmd-logger/blob/a173a3f/src/index.ts#L98)

___

### frameCurrent

• **frameCurrent**: *number*

当前 icon 帧数

Defined in: [index.ts:112](https://github.com/jackness1208/yyl-cmd-logger/blob/a173a3f/src/index.ts#L112)

___

### interval

• **interval**: *number*

刷新间隔

Defined in: [index.ts:92](https://github.com/jackness1208/yyl-cmd-logger/blob/a173a3f/src/index.ts#L92)

___

### intervalKey

• **intervalKey**: *any*

intervalkey

Defined in: [index.ts:114](https://github.com/jackness1208/yyl-cmd-logger/blob/a173a3f/src/index.ts#L114)

___

### lastLogs

• **lastLogs**: *any*[]

最后一个 log 内容

Defined in: [index.ts:94](https://github.com/jackness1208/yyl-cmd-logger/blob/a173a3f/src/index.ts#L94)

___

### lastRowsCount

• **lastRowsCount**: *number*

最后一个log行数

Defined in: [index.ts:110](https://github.com/jackness1208/yyl-cmd-logger/blob/a173a3f/src/index.ts#L110)

___

### lastType

• **lastType**: *string* \| *number* \| T

最后一个 log 类型

Defined in: [index.ts:108](https://github.com/jackness1208/yyl-cmd-logger/blob/a173a3f/src/index.ts#L108)

___

### percent

• **percent**: *number*

执行百分比

Defined in: [index.ts:90](https://github.com/jackness1208/yyl-cmd-logger/blob/a173a3f/src/index.ts#L90)

___

### progressing

• **progressing**: *boolean*

是否正在执行

Defined in: [index.ts:88](https://github.com/jackness1208/yyl-cmd-logger/blob/a173a3f/src/index.ts#L88)

___

### startTime

• **startTime**: *number*

开始时间

Defined in: [index.ts:116](https://github.com/jackness1208/yyl-cmd-logger/blob/a173a3f/src/index.ts#L116)

___

### successLogs

• **successLogs**: *any*[][]

success logs 内容

Defined in: [index.ts:96](https://github.com/jackness1208/yyl-cmd-logger/blob/a173a3f/src/index.ts#L96)

___

### updateLogs

• **updateLogs**: *any*[][]

更新文件 logs 内容

Defined in: [index.ts:104](https://github.com/jackness1208/yyl-cmd-logger/blob/a173a3f/src/index.ts#L104)

___

### warnLogs

• **warnLogs**: *any*[][]

warn logs 内容

Defined in: [index.ts:100](https://github.com/jackness1208/yyl-cmd-logger/blob/a173a3f/src/index.ts#L100)
