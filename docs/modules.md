[yyl-cmd-logger](README.md) / Exports

# yyl-cmd-logger

## Table of contents

### Namespaces

- [loggerUtil](modules/loggerutil.md)

### Classes

- [YylCmdLogger](classes/yylcmdlogger.md)

### Interfaces

- [ExtendType](interfaces/extendtype.md)
- [FormatLogOption](interfaces/formatlogoption.md)
- [OptionObject](interfaces/optionobject.md)
- [PrintHelpOption](interfaces/printhelpoption.md)
- [ProgressInfo](interfaces/progressinfo.md)
- [ProgressStat](interfaces/progressstat.md)
- [TypeInfo](interfaces/typeinfo.md)
- [TypeObject](interfaces/typeobject.md)
- [YylCmdLoggerOption](interfaces/yylcmdloggeroption.md)

### Type aliases

- [LogLevel](modules.md#loglevel)
- [LogType](modules.md#logtype)
- [ProgressStatus](modules.md#progressstatus)

### Functions

- [cleanScreen](modules.md#cleanscreen)
- [printHelp](modules.md#printhelp)

## Type aliases

### LogLevel

Ƭ **LogLevel**: ``0`` \| ``1`` \| ``2``

Defined in: [yylCmdLogger.ts:16](https://github.com/yyl-team/yyl-cmd-logger/blob/6b5ae25/src/yylCmdLogger.ts#L16)

___

### LogType

Ƭ **LogType**: keyof [*TypeInfo*](interfaces/typeinfo.md)

日志类型

Defined in: [yylCmdLogger.ts:42](https://github.com/yyl-team/yyl-cmd-logger/blob/6b5ae25/src/yylCmdLogger.ts#L42)

___

### ProgressStatus

Ƭ **ProgressStatus**: ``"start"`` \| ``"finished"`` \| ``"forceFinished"`` \| *number*

Defined in: [yylCmdLogger.ts:18](https://github.com/yyl-team/yyl-cmd-logger/blob/6b5ae25/src/yylCmdLogger.ts#L18)

## Functions

### cleanScreen

▸ **cleanScreen**(): *void*

**Returns:** *void*

Defined in: [cleanScreen.ts:1](https://github.com/yyl-team/yyl-cmd-logger/blob/6b5ae25/src/cleanScreen.ts#L1)

___

### printHelp

▸ `Const` **printHelp**(`op`: [*PrintHelpOption*](interfaces/printhelpoption.md)): *string*[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `op` | [*PrintHelpOption*](interfaces/printhelpoption.md) |

**Returns:** *string*[]

Defined in: [printHelp.ts:78](https://github.com/yyl-team/yyl-cmd-logger/blob/6b5ae25/src/printHelp.ts#L78)
