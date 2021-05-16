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

Defined in: [index.ts:218](https://github.com/yyl-team/yyl-cmd-logger/blob/62650d1/src/index.ts#L218)

## Properties

### columnSize

• **columnSize**: *number*

Defined in: [index.ts:199](https://github.com/yyl-team/yyl-cmd-logger/blob/62650d1/src/index.ts#L199)

___

### keywordHighlight

• **keywordHighlight**: HighlightMap

Defined in: [index.ts:185](https://github.com/yyl-team/yyl-cmd-logger/blob/62650d1/src/index.ts#L185)

___

### lite

• **lite**: *boolean*= false

Defined in: [index.ts:184](https://github.com/yyl-team/yyl-cmd-logger/blob/62650d1/src/index.ts#L184)

___

### logLevel

• **logLevel**: [*LogLevel*](../modules.md#loglevel)= 1

Defined in: [index.ts:183](https://github.com/yyl-team/yyl-cmd-logger/blob/62650d1/src/index.ts#L183)

___

### progressInfo

• **progressInfo**: *Required*<[*ProgressInfo*](../interfaces/progressinfo.md)\>

progress icon 信息

Defined in: [index.ts:176](https://github.com/yyl-team/yyl-cmd-logger/blob/62650d1/src/index.ts#L176)

___

### progressStat

• **progressStat**: [*ProgressStat*](../interfaces/progressstat.md)<T\>

Defined in: [index.ts:201](https://github.com/yyl-team/yyl-cmd-logger/blob/62650d1/src/index.ts#L201)

___

### typeInfo

• **typeInfo**: [*TypeInfo*](../interfaces/typeinfo.md)

Defined in: [index.ts:124](https://github.com/yyl-team/yyl-cmd-logger/blob/62650d1/src/index.ts#L124)

## Methods

### addProgressLog

▸ `Protected` **addProgressLog**(`type`: *string* \| *number* \| T, `args`: *any*[]): *string*[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | *string* \| *number* \| T |
| `args` | *any*[] |

**Returns:** *string*[]

Defined in: [index.ts:484](https://github.com/yyl-team/yyl-cmd-logger/blob/62650d1/src/index.ts#L484)

___

### finishedProgress

▸ `Protected` **finishedProgress**(): *string*[]

progress finished 处理函数

**Returns:** *string*[]

Defined in: [index.ts:367](https://github.com/yyl-team/yyl-cmd-logger/blob/62650d1/src/index.ts#L367)

___

### formatLog

▸ `Protected` **formatLog**(`op`: [*FormatLogOption*](../interfaces/formatlogoption.md)): *string*[]

格式化日志

#### Parameters

| Name | Type |
| :------ | :------ |
| `op` | [*FormatLogOption*](../interfaces/formatlogoption.md) |

**Returns:** *string*[]

Defined in: [index.ts:432](https://github.com/yyl-team/yyl-cmd-logger/blob/62650d1/src/index.ts#L432)

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

Defined in: [index.ts:517](https://github.com/yyl-team/yyl-cmd-logger/blob/62650d1/src/index.ts#L517)

___

### getProgressHeadline

▸ `Protected` **getProgressHeadline**(): *string*

获取 progress headline

**Returns:** *string*

Defined in: [index.ts:261](https://github.com/yyl-team/yyl-cmd-logger/blob/62650d1/src/index.ts#L261)

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

Defined in: [index.ts:626](https://github.com/yyl-team/yyl-cmd-logger/blob/62650d1/src/index.ts#L626)

___

### normalLog

▸ `Protected` **normalLog**(`type`: *string* \| *number* \| T, `args`: *any*[]): *string*[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | *string* \| *number* \| T |
| `args` | *any*[] |

**Returns:** *string*[]

Defined in: [index.ts:530](https://github.com/yyl-team/yyl-cmd-logger/blob/62650d1/src/index.ts#L530)

___

### setLite

▸ **setLite**(`isLite`: *boolean*): *void*

设置是否轻量log输出

#### Parameters

| Name | Type |
| :------ | :------ |
| `isLite` | *boolean* |

**Returns:** *void*

Defined in: [index.ts:616](https://github.com/yyl-team/yyl-cmd-logger/blob/62650d1/src/index.ts#L616)

___

### setLogLevel

▸ **setLogLevel**(`level`: [*LogLevel*](../modules.md#loglevel)): *void*

设置日志等级

#### Parameters

| Name | Type |
| :------ | :------ |
| `level` | [*LogLevel*](../modules.md#loglevel) |

**Returns:** *void*

Defined in: [index.ts:621](https://github.com/yyl-team/yyl-cmd-logger/blob/62650d1/src/index.ts#L621)

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

Defined in: [index.ts:551](https://github.com/yyl-team/yyl-cmd-logger/blob/62650d1/src/index.ts#L551)

___

### updateProgress

▸ `Protected` **updateProgress**(): *string*[]

私有方法 - 更新 progress

**Returns:** *string*[]

Defined in: [index.ts:317](https://github.com/yyl-team/yyl-cmd-logger/blob/62650d1/src/index.ts#L317)
