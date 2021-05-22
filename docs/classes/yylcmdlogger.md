[yyl-cmd-logger](../README.md) / [Exports](../modules.md) / YylCmdLogger

# Class: YylCmdLogger<T\>

logger 对象

## Type parameters

| Name | Type | Default |
| :------ | :------ | :------ |
| `T` | *string* | ``""`` |

## Table of contents

### Constructors

- [constructor](yylcmdlogger.md#constructor)

### Properties

- [columnSize](yylcmdlogger.md#columnsize)
- [keywordHighlight](yylcmdlogger.md#keywordhighlight)
- [lite](yylcmdlogger.md#lite)
- [logLevel](yylcmdlogger.md#loglevel)
- [progressInfo](yylcmdlogger.md#progressinfo)
- [progressStat](yylcmdlogger.md#progressstat)
- [typeInfo](yylcmdlogger.md#typeinfo)

### Methods

- [addProgressLog](yylcmdlogger.md#addprogresslog)
- [finishedProgress](yylcmdlogger.md#finishedprogress)
- [formatLog](yylcmdlogger.md#formatlog)
- [formatLogInfo](yylcmdlogger.md#formatloginfo)
- [getProgressHeadline](yylcmdlogger.md#getprogressheadline)
- [log](yylcmdlogger.md#log)
- [normalLog](yylcmdlogger.md#normallog)
- [setLite](yylcmdlogger.md#setlite)
- [setLogLevel](yylcmdlogger.md#setloglevel)
- [setProgress](yylcmdlogger.md#setprogress)
- [updateProgress](yylcmdlogger.md#updateprogress)

## Constructors

### constructor

\+ **new YylCmdLogger**<T\>(`op?`: [*YylCmdLoggerOption*](../interfaces/yylcmdloggeroption.md)): [*YylCmdLogger*](yylcmdlogger.md)<T\>

#### Type parameters

| Name | Type | Default |
| :------ | :------ | :------ |
| `T` | *string* | ``""`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op?` | [*YylCmdLoggerOption*](../interfaces/yylcmdloggeroption.md) |

**Returns:** [*YylCmdLogger*](yylcmdlogger.md)<T\>

Defined in: [yylCmdLogger.ts:217](https://github.com/yyl-team/yyl-cmd-logger/blob/6b5ae25/src/yylCmdLogger.ts#L217)

## Properties

### columnSize

• **columnSize**: *number*

Defined in: [yylCmdLogger.ts:198](https://github.com/yyl-team/yyl-cmd-logger/blob/6b5ae25/src/yylCmdLogger.ts#L198)

___

### keywordHighlight

• **keywordHighlight**: [*HighlightMap*](../interfaces/loggerutil.highlightmap.md)

Defined in: [yylCmdLogger.ts:184](https://github.com/yyl-team/yyl-cmd-logger/blob/6b5ae25/src/yylCmdLogger.ts#L184)

___

### lite

• **lite**: *boolean*= false

Defined in: [yylCmdLogger.ts:183](https://github.com/yyl-team/yyl-cmd-logger/blob/6b5ae25/src/yylCmdLogger.ts#L183)

___

### logLevel

• **logLevel**: [*LogLevel*](../modules.md#loglevel)= 1

Defined in: [yylCmdLogger.ts:182](https://github.com/yyl-team/yyl-cmd-logger/blob/6b5ae25/src/yylCmdLogger.ts#L182)

___

### progressInfo

• **progressInfo**: *Required*<[*ProgressInfo*](../interfaces/progressinfo.md)\>

progress icon 信息

Defined in: [yylCmdLogger.ts:175](https://github.com/yyl-team/yyl-cmd-logger/blob/6b5ae25/src/yylCmdLogger.ts#L175)

___

### progressStat

• **progressStat**: [*ProgressStat*](../interfaces/progressstat.md)<T\>

Defined in: [yylCmdLogger.ts:200](https://github.com/yyl-team/yyl-cmd-logger/blob/6b5ae25/src/yylCmdLogger.ts#L200)

___

### typeInfo

• **typeInfo**: [*TypeInfo*](../interfaces/typeinfo.md)

Defined in: [yylCmdLogger.ts:123](https://github.com/yyl-team/yyl-cmd-logger/blob/6b5ae25/src/yylCmdLogger.ts#L123)

## Methods

### addProgressLog

▸ `Protected` **addProgressLog**(`type`: *string* \| *number* \| T, `args`: *any*[]): *string*[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | *string* \| *number* \| T |
| `args` | *any*[] |

**Returns:** *string*[]

Defined in: [yylCmdLogger.ts:483](https://github.com/yyl-team/yyl-cmd-logger/blob/6b5ae25/src/yylCmdLogger.ts#L483)

___

### finishedProgress

▸ `Protected` **finishedProgress**(): *string*[]

progress finished 处理函数

**Returns:** *string*[]

Defined in: [yylCmdLogger.ts:366](https://github.com/yyl-team/yyl-cmd-logger/blob/6b5ae25/src/yylCmdLogger.ts#L366)

___

### formatLog

▸ `Protected` **formatLog**(`op`: [*FormatLogOption*](../interfaces/formatlogoption.md)): *string*[]

格式化日志

#### Parameters

| Name | Type |
| :------ | :------ |
| `op` | [*FormatLogOption*](../interfaces/formatlogoption.md) |

**Returns:** *string*[]

Defined in: [yylCmdLogger.ts:431](https://github.com/yyl-team/yyl-cmd-logger/blob/6b5ae25/src/yylCmdLogger.ts#L431)

___

### formatLogInfo

▸ `Protected` **formatLogInfo**(`type`: *string* \| *number* \| T): *object*

格式化 logInfo

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | *string* \| *number* \| T |

**Returns:** *object*

| Name | Type |
| :------ | :------ |
| `info` | [*TypeInfo*](../interfaces/typeinfo.md)[*string* \| *number* \| T] |
| `type` | *string* \| *number* \| T |

Defined in: [yylCmdLogger.ts:516](https://github.com/yyl-team/yyl-cmd-logger/blob/6b5ae25/src/yylCmdLogger.ts#L516)

___

### getProgressHeadline

▸ `Protected` **getProgressHeadline**(): *string*

获取 progress headline

**Returns:** *string*

Defined in: [yylCmdLogger.ts:260](https://github.com/yyl-team/yyl-cmd-logger/blob/6b5ae25/src/yylCmdLogger.ts#L260)

___

### log

▸ **log**(`type`: *string* \| *number* \| T, `args`: *any*[]): *string*[]

日志输出

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | *string* \| *number* \| T |
| `args` | *any*[] |

**Returns:** *string*[]

Defined in: [yylCmdLogger.ts:625](https://github.com/yyl-team/yyl-cmd-logger/blob/6b5ae25/src/yylCmdLogger.ts#L625)

___

### normalLog

▸ `Protected` **normalLog**(`type`: *string* \| *number* \| T, `args`: *any*[]): *string*[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | *string* \| *number* \| T |
| `args` | *any*[] |

**Returns:** *string*[]

Defined in: [yylCmdLogger.ts:529](https://github.com/yyl-team/yyl-cmd-logger/blob/6b5ae25/src/yylCmdLogger.ts#L529)

___

### setLite

▸ **setLite**(`isLite`: *boolean*): *void*

设置是否轻量log输出

#### Parameters

| Name | Type |
| :------ | :------ |
| `isLite` | *boolean* |

**Returns:** *void*

Defined in: [yylCmdLogger.ts:615](https://github.com/yyl-team/yyl-cmd-logger/blob/6b5ae25/src/yylCmdLogger.ts#L615)

___

### setLogLevel

▸ **setLogLevel**(`level`: [*LogLevel*](../modules.md#loglevel)): *void*

设置日志等级

#### Parameters

| Name | Type |
| :------ | :------ |
| `level` | [*LogLevel*](../modules.md#loglevel) |

**Returns:** *void*

Defined in: [yylCmdLogger.ts:620](https://github.com/yyl-team/yyl-cmd-logger/blob/6b5ae25/src/yylCmdLogger.ts#L620)

___

### setProgress

▸ **setProgress**(`status`: [*ProgressStatus*](../modules.md#progressstatus), `type?`: *string* \| *number* \| T, `args?`: *any*[]): *void*

设置 progress 状态

#### Parameters

| Name | Type |
| :------ | :------ |
| `status` | [*ProgressStatus*](../modules.md#progressstatus) |
| `type?` | *string* \| *number* \| T |
| `args?` | *any*[] |

**Returns:** *void*

Defined in: [yylCmdLogger.ts:550](https://github.com/yyl-team/yyl-cmd-logger/blob/6b5ae25/src/yylCmdLogger.ts#L550)

___

### updateProgress

▸ `Protected` **updateProgress**(): *string*[]

私有方法 - 更新 progress

**Returns:** *string*[]

Defined in: [yylCmdLogger.ts:316](https://github.com/yyl-team/yyl-cmd-logger/blob/6b5ae25/src/yylCmdLogger.ts#L316)
