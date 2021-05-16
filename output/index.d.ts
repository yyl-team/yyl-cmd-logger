import { ChalkFunction } from 'chalk';
import { HighlightMap } from './util';
export declare type LogLevel = 0 | 1 | 2;
export declare type ProgressStatus = 'start' | 'finished' | 'forceFinished' | number;
/** type 类型 */
export interface TypeObject {
    name: string;
    shortName: string;
    color: ChalkFunction;
    shortColor: ChalkFunction;
}
/** 基础类型 */
export interface TypeInfo {
    info: TypeObject;
    warn: TypeObject;
    error: TypeObject;
    success: TypeObject;
    cmd: TypeObject;
    add: TypeObject;
    del: TypeObject;
    update: TypeObject;
    [key: string]: TypeObject;
}
/** 日志类型 */
export declare type LogType = keyof TypeInfo;
export interface ExtendType {
    [key: string]: TypeObject;
}
export interface ProgressInfo {
    /** 长版 icon */
    icons?: string[];
    /** 简版 icon */
    shortIcons?: string[];
    /** 长版 颜色 */
    color?: ChalkFunction;
    /** 简版 颜色 */
    shortColor?: ChalkFunction;
}
/** logger - 配置 */
export interface YylCmdLoggerOption {
    /** 日志等级 0 - 没有, 1 - 简单, 2 - 详细 */
    logLevel?: LogLevel;
    /** 是否进行 type 简化 */
    lite?: boolean;
    /** 附加 type */
    type?: ExtendType;
    /** 关键字高亮 */
    keywordHighlight?: HighlightMap;
    /** 进度相关属性 */
    progressInfo?: ProgressInfo;
    /** cmd 一行长度,用于自测时使用 */
    columnSize?: number;
}
/** log 格式化配置 */
export interface FormatLogOption {
    name: string;
    color: ChalkFunction;
    args: any[];
}
/** logger - 属性 */
declare type YylCmdLoggerProperty = Required<YylCmdLoggerOption>;
/** 进度相关信息 */
export interface ProgressStat<T extends string = ''> {
    /** 是否正在执行 */
    progressing: boolean;
    /** 执行百分比 */
    percent: number;
    /** 刷新间隔 */
    interval: number;
    /** 最后一个 log 内容 */
    lastLogs: any[];
    /** success logs 内容 */
    successLogs: any[][];
    /** error logs 内容 */
    errorLogs: any[][];
    /** warn logs 内容 */
    warnLogs: any[][];
    /** 新增文件 logs 内容 */
    addLogs: any[][];
    /** 更新文件 logs 内容 */
    updateLogs: any[][];
    /** 删除文件 logs 内容 */
    delLogs: any[][];
    /** 最后一个 log 类型 */
    lastType: LogType | T;
    /** 最后一个log行数 */
    lastRowsCount: number;
    /** 当前 icon 帧数 */
    frameCurrent: number;
    /** intervalkey */
    intervalKey: any;
    /** 开始时间 */
    startTime: number;
    /** start 次数（用于兼容嵌套 progress） */
    startTimes: number;
}
/** logger 对象 */
export declare class YylCmdLogger<T extends string = ''> {
    typeInfo: TypeInfo;
    /** progress icon 信息 */
    progressInfo: Required<YylCmdLoggerProperty['progressInfo']>;
    logLevel: YylCmdLoggerProperty['logLevel'];
    lite: YylCmdLoggerProperty['lite'];
    keywordHighlight: YylCmdLoggerProperty['keywordHighlight'];
    columnSize: YylCmdLoggerProperty['columnSize'];
    progressStat: ProgressStat<T>;
    constructor(op?: YylCmdLoggerOption);
    /** 获取 progress headline */
    protected getProgressHeadline(): string;
    /** 私有方法 - 更新 progress */
    protected updateProgress(): string[];
    /** progress finished 处理函数 */
    protected finishedProgress(): string[];
    /** 格式化日志 */
    protected formatLog(op: FormatLogOption): string[];
    protected addProgressLog(type: LogType | T, args: any[]): string[];
    /** 格式化 logInfo */
    protected formatLogInfo(type: LogType | T): {
        type: string | number | T;
        info: TypeInfo[string | number | T];
    };
    protected normalLog(type: LogType | T, args: any[]): string[];
    /** 设置 progress 状态 */
    setProgress(status: ProgressStatus, type?: LogType | T, args?: any[]): void;
    /** 设置是否轻量log输出 */
    setLite(isLite: boolean): void;
    /** 设置日志等级 */
    setLogLevel(level: LogLevel): void;
    /** 日志输出 */
    log(type: LogType | T, args: any[]): string[];
}
export {};
