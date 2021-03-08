import { ChalkFunction } from 'chalk';
/** 创建多个字符串 */
export declare function buildChar(char: string, num: number): string;
/** 创建多个空格 */
export declare function makeSpace(num: number): string;
/** 判断是否数组 */
export declare function isArray(ctx: any): boolean;
/** 类型获取 */
export declare function type(ctx: any): string;
/** 隐藏 protocol 处理 */
export declare function hideProtocol(str: string): string;
/** 格式化路径 */
export declare function formatUrl(url: string): string;
/** 关键字替换 */
export declare function replaceKeyword(str: string, keyword: string, result: string): string;
/** 转义用函数 */
export declare function toCtx<T>(i: any): T;
export declare function decolor(ctx: string | string[]): string | string[];
/** 获取带颜色的字符串长度 */
export declare function getStrSize(str: string): number;
/** 格式化文字-配置 */
export interface StrAlignOption {
    /** 所占字符数 */
    size: number;
    /** 对齐方式 */
    align: 'left' | 'right' | 'center';
}
/** 格式化文字(居中, 左, 右) */
export declare function strAlign(str: string, op: StrAlignOption): string;
export declare function substr(str: string, begin: number, len?: number): string;
/** 字符换行处理 */
export declare function strWrap(str: string, size: number, indent?: number): string[];
/** 切割文字为数组 */
export declare function splitStr(str: string, maxLen: number): string[];
export declare const cost: {
    source: {
        begin: number;
        total: number;
    };
    start(): number;
    end(): number;
    format(total: number): string;
};
export declare function timeFormat(t?: any): string;
export declare function dateFormat(t: any): string;
/** 关键字高亮 map */
export interface HighlightMap {
    [keyword: string]: ChalkFunction;
}
/** 关键字高亮 */
export declare function highlight(str: string, keywordMap: HighlightMap): string;
/** 获取字符 index （中文字符算 2） */
export declare function getStrIndex(str: string, index: number): number;
/** 日志输出 - 配置 */
export interface PrintLogOption {
    logs: string[];
    backLine?: number;
}
/** 日志输出 */
export declare function printLog(op: PrintLogOption): void;
