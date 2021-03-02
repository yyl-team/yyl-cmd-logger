[yyl-cmd-logger](../README.md) / [Exports](../modules.md) / YylCmdLogger

# Class: YylCmdLogger<T\>

logger 对象

## Type parameters

Name | Type | Default |
:------ | :------ | :------ |
`T` | *string* | ** |

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
- [setLogLevel](yylcmdlogger.md#setloglevel)
- [setProgress](yylcmdlogger.md#setprogress)
- [updateProgress](yylcmdlogger.md#updateprogress)

## Constructors

### constructor

\+ **new YylCmdLogger**<T\>(`op?`: [*YylCmdLoggerOption*](../interfaces/yylcmdloggeroption.md)): [*YylCmdLogger*](yylcmdlogger.md)<T\>

#### Type parameters:

Name | Type | Default |
:------ | :------ | :------ |
`T` | *string* | ** |

#### Parameters:

Name | Type |
:------ | :------ |
`op?` | [*YylCmdLoggerOption*](../interfaces/yylcmdloggeroption.md) |

**Returns:** [*YylCmdLogger*](yylcmdlogger.md)<T\>

Defined in: [index.ts:213](https://github.com/jackness1208/yyl-cmd-logger/blob/fe68697/src/index.ts#L213)

## Properties

### columnSize

• **columnSize**: *number*

Defined in: [index.ts:195](https://github.com/jackness1208/yyl-cmd-logger/blob/fe68697/src/index.ts#L195)

___

### keywordHighlight

• **keywordHighlight**: HighlightMap

Defined in: [index.ts:181](https://github.com/jackness1208/yyl-cmd-logger/blob/fe68697/src/index.ts#L181)

___

### lite

• **lite**: *boolean*= false

Defined in: [index.ts:180](https://github.com/jackness1208/yyl-cmd-logger/blob/fe68697/src/index.ts#L180)

___

### logLevel

• **logLevel**: [*LogLevel*](../modules.md#loglevel)= 1

Defined in: [index.ts:179](https://github.com/jackness1208/yyl-cmd-logger/blob/fe68697/src/index.ts#L179)

___

### progressInfo

• **progressInfo**: *Required*<[*ProgressInfo*](../interfaces/progressinfo.md)\>

progress icon 信息

Defined in: [index.ts:172](https://github.com/jackness1208/yyl-cmd-logger/blob/fe68697/src/index.ts#L172)

___

### progressStat

• **progressStat**: [*ProgressStat*](../interfaces/progressstat.md)<T\>

Defined in: [index.ts:197](https://github.com/jackness1208/yyl-cmd-logger/blob/fe68697/src/index.ts#L197)

___

### typeInfo

• **typeInfo**: [*TypeInfo*](../interfaces/typeinfo.md)

Defined in: [index.ts:120](https://github.com/jackness1208/yyl-cmd-logger/blob/fe68697/src/index.ts#L120)

## Methods

### addProgressLog

▸ `Protected`**addProgressLog**(`type`: *string* \| *number* \| T, `args`: *any*[]): *string*[]

#### Parameters:

Name | Type |
:------ | :------ |
`type` | *string* \| *number* \| T |
`args` | *any*[] |

**Returns:** *string*[]

Defined in: [index.ts:461](https://github.com/jackness1208/yyl-cmd-logger/blob/fe68697/src/index.ts#L461)

___

### finishedProgress

▸ `Protected`**finishedProgress**(): *string*[]

progress finished 处理函数

**Returns:** *string*[]

Defined in: [index.ts:357](https://github.com/jackness1208/yyl-cmd-logger/blob/fe68697/src/index.ts#L357)

___

### formatLog

▸ `Protected`**formatLog**(`op`: [*FormatLogOption*](../interfaces/formatlogoption.md)): *string*[]

格式化日志

#### Parameters:

Name | Type |
:------ | :------ |
`op` | [*FormatLogOption*](../interfaces/formatlogoption.md) |

**Returns:** *string*[]

Defined in: [index.ts:414](https://github.com/jackness1208/yyl-cmd-logger/blob/fe68697/src/index.ts#L414)

___

### formatLogInfo

▸ `Protected`**formatLogInfo**(`type`: *string* \| *number* \| T): *object*

格式化 logInfo

#### Parameters:

Name | Type |
:------ | :------ |
`type` | *string* \| *number* \| T |

**Returns:** *object*

Name | Type |
:------ | :------ |
`info` | [*TypeInfo*](../interfaces/typeinfo.md)[*string* \| *number* \| T] |
`type` | *string* \| *number* \| T |

Defined in: [index.ts:494](https://github.com/jackness1208/yyl-cmd-logger/blob/fe68697/src/index.ts#L494)

___

### getProgressHeadline

▸ `Protected`**getProgressHeadline**(): *string*

获取 progress headline

**Returns:** *string*

Defined in: [index.ts:256](https://github.com/jackness1208/yyl-cmd-logger/blob/fe68697/src/index.ts#L256)

___

### log

▸ **log**(`type`: *string* \| *number* \| T, `args`: *any*[]): *string*[]

日志输出

#### Parameters:

Name | Type |
:------ | :------ |
`type` | *string* \| *number* \| T |
`args` | *any*[] |

**Returns:** *string*[]

Defined in: [index.ts:572](https://github.com/jackness1208/yyl-cmd-logger/blob/fe68697/src/index.ts#L572)

___

### normalLog

▸ `Protected`**normalLog**(`type`: *string* \| *number* \| T, `args`: *any*[]): *string*[]

#### Parameters:

Name | Type |
:------ | :------ |
`type` | *string* \| *number* \| T |
`args` | *any*[] |

**Returns:** *string*[]

Defined in: [index.ts:507](https://github.com/jackness1208/yyl-cmd-logger/blob/fe68697/src/index.ts#L507)

___

### setLogLevel

▸ **setLogLevel**(`level`: [*LogLevel*](../modules.md#loglevel)): *void*

设置日志等级

#### Parameters:

Name | Type |
:------ | :------ |
`level` | [*LogLevel*](../modules.md#loglevel) |

**Returns:** *void*

Defined in: [index.ts:567](https://github.com/jackness1208/yyl-cmd-logger/blob/fe68697/src/index.ts#L567)

___

### setProgress

▸ **setProgress**(`status`: [*ProgressStatus*](../modules.md#progressstatus)): *void*

设置 progress 状态

#### Parameters:

Name | Type |
:------ | :------ |
`status` | [*ProgressStatus*](../modules.md#progressstatus) |

**Returns:** *void*

Defined in: [index.ts:528](https://github.com/jackness1208/yyl-cmd-logger/blob/fe68697/src/index.ts#L528)

___

### updateProgress

▸ `Protected`**updateProgress**(): *string*[]

私有方法 - 更新 progress

**Returns:** *string*[]

Defined in: [index.ts:307](https://github.com/jackness1208/yyl-cmd-logger/blob/fe68697/src/index.ts#L307)
