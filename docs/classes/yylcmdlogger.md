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

Defined in: [index.ts:215](https://github.com/jackness1208/yyl-cmd-logger/blob/30914cf/src/index.ts#L215)

## Properties

### columnSize

• **columnSize**: *number*

Defined in: [index.ts:197](https://github.com/jackness1208/yyl-cmd-logger/blob/30914cf/src/index.ts#L197)

___

### keywordHighlight

• **keywordHighlight**: HighlightMap

Defined in: [index.ts:183](https://github.com/jackness1208/yyl-cmd-logger/blob/30914cf/src/index.ts#L183)

___

### lite

• **lite**: *boolean*= false

Defined in: [index.ts:182](https://github.com/jackness1208/yyl-cmd-logger/blob/30914cf/src/index.ts#L182)

___

### logLevel

• **logLevel**: [*LogLevel*](../modules.md#loglevel)= 1

Defined in: [index.ts:181](https://github.com/jackness1208/yyl-cmd-logger/blob/30914cf/src/index.ts#L181)

___

### progressInfo

• **progressInfo**: *Required*<[*ProgressInfo*](../interfaces/progressinfo.md)\>

progress icon 信息

Defined in: [index.ts:174](https://github.com/jackness1208/yyl-cmd-logger/blob/30914cf/src/index.ts#L174)

___

### progressStat

• **progressStat**: [*ProgressStat*](../interfaces/progressstat.md)<T\>

Defined in: [index.ts:199](https://github.com/jackness1208/yyl-cmd-logger/blob/30914cf/src/index.ts#L199)

___

### typeInfo

• **typeInfo**: [*TypeInfo*](../interfaces/typeinfo.md)

Defined in: [index.ts:122](https://github.com/jackness1208/yyl-cmd-logger/blob/30914cf/src/index.ts#L122)

## Methods

### addProgressLog

▸ `Protected`**addProgressLog**(`type`: *string* \| *number* \| T, `args`: *any*[]): *string*[]

#### Parameters:

Name | Type |
:------ | :------ |
`type` | *string* \| *number* \| T |
`args` | *any*[] |

**Returns:** *string*[]

Defined in: [index.ts:470](https://github.com/jackness1208/yyl-cmd-logger/blob/30914cf/src/index.ts#L470)

___

### finishedProgress

▸ `Protected`**finishedProgress**(): *string*[]

progress finished 处理函数

**Returns:** *string*[]

Defined in: [index.ts:359](https://github.com/jackness1208/yyl-cmd-logger/blob/30914cf/src/index.ts#L359)

___

### formatLog

▸ `Protected`**formatLog**(`op`: [*FormatLogOption*](../interfaces/formatlogoption.md)): *string*[]

格式化日志

#### Parameters:

Name | Type |
:------ | :------ |
`op` | [*FormatLogOption*](../interfaces/formatlogoption.md) |

**Returns:** *string*[]

Defined in: [index.ts:423](https://github.com/jackness1208/yyl-cmd-logger/blob/30914cf/src/index.ts#L423)

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

Defined in: [index.ts:503](https://github.com/jackness1208/yyl-cmd-logger/blob/30914cf/src/index.ts#L503)

___

### getProgressHeadline

▸ `Protected`**getProgressHeadline**(): *string*

获取 progress headline

**Returns:** *string*

Defined in: [index.ts:258](https://github.com/jackness1208/yyl-cmd-logger/blob/30914cf/src/index.ts#L258)

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

Defined in: [index.ts:590](https://github.com/jackness1208/yyl-cmd-logger/blob/30914cf/src/index.ts#L590)

___

### normalLog

▸ `Protected`**normalLog**(`type`: *string* \| *number* \| T, `args`: *any*[]): *string*[]

#### Parameters:

Name | Type |
:------ | :------ |
`type` | *string* \| *number* \| T |
`args` | *any*[] |

**Returns:** *string*[]

Defined in: [index.ts:516](https://github.com/jackness1208/yyl-cmd-logger/blob/30914cf/src/index.ts#L516)

___

### setLogLevel

▸ **setLogLevel**(`level`: [*LogLevel*](../modules.md#loglevel)): *void*

设置日志等级

#### Parameters:

Name | Type |
:------ | :------ |
`level` | [*LogLevel*](../modules.md#loglevel) |

**Returns:** *void*

Defined in: [index.ts:585](https://github.com/jackness1208/yyl-cmd-logger/blob/30914cf/src/index.ts#L585)

___

### setProgress

▸ **setProgress**(`status`: [*ProgressStatus*](../modules.md#progressstatus), `type?`: *string* \| *number* \| T, `args?`: *any*[]): *void*

设置 progress 状态

#### Parameters:

Name | Type |
:------ | :------ |
`status` | [*ProgressStatus*](../modules.md#progressstatus) |
`type?` | *string* \| *number* \| T |
`args?` | *any*[] |

**Returns:** *void*

Defined in: [index.ts:537](https://github.com/jackness1208/yyl-cmd-logger/blob/30914cf/src/index.ts#L537)

___

### updateProgress

▸ `Protected`**updateProgress**(): *string*[]

私有方法 - 更新 progress

**Returns:** *string*[]

Defined in: [index.ts:309](https://github.com/jackness1208/yyl-cmd-logger/blob/30914cf/src/index.ts#L309)
