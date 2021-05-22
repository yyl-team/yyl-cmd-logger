[yyl-cmd-logger](../README.md) / [Exports](../modules.md) / loggerUtil

# Namespace: loggerUtil

## Table of contents

### Interfaces

- [HighlightMap](../interfaces/loggerutil.highlightmap.md)
- [PrintLogOption](../interfaces/loggerutil.printlogoption.md)
- [StrAlignOption](../interfaces/loggerutil.stralignoption.md)

### Variables

- [cost](loggerutil.md#cost)

### Functions

- [buildChar](loggerutil.md#buildchar)
- [dateFormat](loggerutil.md#dateformat)
- [decolor](loggerutil.md#decolor)
- [formatUrl](loggerutil.md#formaturl)
- [getStrIndex](loggerutil.md#getstrindex)
- [getStrSize](loggerutil.md#getstrsize)
- [hideProtocol](loggerutil.md#hideprotocol)
- [highlight](loggerutil.md#highlight)
- [isArray](loggerutil.md#isarray)
- [makeSpace](loggerutil.md#makespace)
- [printLog](loggerutil.md#printlog)
- [replaceKeyword](loggerutil.md#replacekeyword)
- [splitStr](loggerutil.md#splitstr)
- [strAlign](loggerutil.md#stralign)
- [strWrap](loggerutil.md#strwrap)
- [substr](loggerutil.md#substr)
- [timeFormat](loggerutil.md#timeformat)
- [toCtx](loggerutil.md#toctx)
- [type](loggerutil.md#type)

## Variables

### cost

• `Const` **cost**: *object*

#### Type declaration

| Name | Type |
| :------ | :------ |
| `source` | *object* |
| `source.begin` | *number* |
| `source.total` | *number* |
| `end` | () => *number* |
| `format` | (`total`: *number*) => *string* |
| `start` | () => *number* |

Defined in: [util.ts:262](https://github.com/yyl-team/yyl-cmd-logger/blob/6b5ae25/src/util.ts#L262)

## Functions

### buildChar

▸ **buildChar**(`char`: *string*, `num`: *number*): *string*

创建多个字符串

#### Parameters

| Name | Type |
| :------ | :------ |
| `char` | *string* |
| `num` | *number* |

**Returns:** *string*

Defined in: [util.ts:7](https://github.com/yyl-team/yyl-cmd-logger/blob/6b5ae25/src/util.ts#L7)

___

### dateFormat

▸ **dateFormat**(`t`: *any*): *string*

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | *any* |

**Returns:** *string*

Defined in: [util.ts:309](https://github.com/yyl-team/yyl-cmd-logger/blob/6b5ae25/src/util.ts#L309)

___

### decolor

▸ **decolor**(`ctx`: *string* \| *string*[]): *string* \| *string*[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | *string* \| *string*[] |

**Returns:** *string* \| *string*[]

Defined in: [util.ts:58](https://github.com/yyl-team/yyl-cmd-logger/blob/6b5ae25/src/util.ts#L58)

___

### formatUrl

▸ **formatUrl**(`url`: *string*): *string*

格式化路径

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |

**Returns:** *string*

Defined in: [util.ts:39](https://github.com/yyl-team/yyl-cmd-logger/blob/6b5ae25/src/util.ts#L39)

___

### getStrIndex

▸ **getStrIndex**(`str`: *string*, `index`: *number*): *number*

获取字符 index （中文字符算 2）

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | *string* |
| `index` | *number* |

**Returns:** *number*

Defined in: [util.ts:352](https://github.com/yyl-team/yyl-cmd-logger/blob/6b5ae25/src/util.ts#L352)

___

### getStrSize

▸ **getStrSize**(`str`: *string*): *number*

获取带颜色的字符串长度

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | *string* |

**Returns:** *number*

Defined in: [util.ts:67](https://github.com/yyl-team/yyl-cmd-logger/blob/6b5ae25/src/util.ts#L67)

___

### hideProtocol

▸ **hideProtocol**(`str`: *string*): *string*

隐藏 protocol 处理

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | *string* |

**Returns:** *string*

Defined in: [util.ts:30](https://github.com/yyl-team/yyl-cmd-logger/blob/6b5ae25/src/util.ts#L30)

___

### highlight

▸ **highlight**(`str`: *string*, `keywordMap`: [*HighlightMap*](../interfaces/loggerutil.highlightmap.md)): *string*

关键字高亮

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | *string* |
| `keywordMap` | [*HighlightMap*](../interfaces/loggerutil.highlightmap.md) |

**Returns:** *string*

Defined in: [util.ts:342](https://github.com/yyl-team/yyl-cmd-logger/blob/6b5ae25/src/util.ts#L342)

___

### isArray

▸ **isArray**(`ctx`: *any*): *boolean*

判断是否数组

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | *any* |

**Returns:** *boolean*

Defined in: [util.ts:17](https://github.com/yyl-team/yyl-cmd-logger/blob/6b5ae25/src/util.ts#L17)

___

### makeSpace

▸ **makeSpace**(`num`: *number*): *string*

创建多个空格

#### Parameters

| Name | Type |
| :------ | :------ |
| `num` | *number* |

**Returns:** *string*

Defined in: [util.ts:12](https://github.com/yyl-team/yyl-cmd-logger/blob/6b5ae25/src/util.ts#L12)

___

### printLog

▸ **printLog**(`op`: [*PrintLogOption*](../interfaces/loggerutil.printlogoption.md)): *void*

日志输出

#### Parameters

| Name | Type |
| :------ | :------ |
| `op` | [*PrintLogOption*](../interfaces/loggerutil.printlogoption.md) |

**Returns:** *void*

Defined in: [util.ts:377](https://github.com/yyl-team/yyl-cmd-logger/blob/6b5ae25/src/util.ts#L377)

___

### replaceKeyword

▸ **replaceKeyword**(`str`: *string*, `keyword`: *string*, `result`: *string*): *string*

关键字替换

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | *string* |
| `keyword` | *string* |
| `result` | *string* |

**Returns:** *string*

Defined in: [util.ts:44](https://github.com/yyl-team/yyl-cmd-logger/blob/6b5ae25/src/util.ts#L44)

___

### splitStr

▸ **splitStr**(`str`: *string*, `maxLen`: *number*): *string*[]

切割文字为数组

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | *string* |
| `maxLen` | *number* |

**Returns:** *string*[]

Defined in: [util.ts:242](https://github.com/yyl-team/yyl-cmd-logger/blob/6b5ae25/src/util.ts#L242)

___

### strAlign

▸ **strAlign**(`str`: *string*, `op`: [*StrAlignOption*](../interfaces/loggerutil.stralignoption.md)): *string*

格式化文字(居中, 左, 右)

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | *string* |
| `op` | [*StrAlignOption*](../interfaces/loggerutil.stralignoption.md) |

**Returns:** *string*

Defined in: [util.ts:82](https://github.com/yyl-team/yyl-cmd-logger/blob/6b5ae25/src/util.ts#L82)

___

### strWrap

▸ **strWrap**(`str`: *string*, `size`: *number*, `indent?`: *number*): *string*[]

字符换行处理

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | *string* |
| `size` | *number* |
| `indent?` | *number* |

**Returns:** *string*[]

Defined in: [util.ts:198](https://github.com/yyl-team/yyl-cmd-logger/blob/6b5ae25/src/util.ts#L198)

___

### substr

▸ **substr**(`str`: *string*, `begin`: *number*, `len?`: *number*): *string*

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | *string* |
| `begin` | *number* |
| `len?` | *number* |

**Returns:** *string*

Defined in: [util.ts:115](https://github.com/yyl-team/yyl-cmd-logger/blob/6b5ae25/src/util.ts#L115)

___

### timeFormat

▸ **timeFormat**(`t?`: *any*): *string*

#### Parameters

| Name | Type |
| :------ | :------ |
| `t?` | *any* |

**Returns:** *string*

Defined in: [util.ts:295](https://github.com/yyl-team/yyl-cmd-logger/blob/6b5ae25/src/util.ts#L295)

___

### toCtx

▸ **toCtx**<T\>(`i`: *any*): T

转义用函数

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `i` | *any* |

**Returns:** T

Defined in: [util.ts:53](https://github.com/yyl-team/yyl-cmd-logger/blob/6b5ae25/src/util.ts#L53)

___

### type

▸ **type**(`ctx`: *any*): *string*

类型获取

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | *any* |

**Returns:** *string*

Defined in: [util.ts:22](https://github.com/yyl-team/yyl-cmd-logger/blob/6b5ae25/src/util.ts#L22)
