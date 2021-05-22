export interface OptionObject {
    [key: string]: string | string[];
}
/** help 信息 配置 */
export interface PrintHelpOption {
    /** 静默输出 */
    silent?: boolean;
    /** 命令 */
    usage: string;
    /** 命令描述 */
    desc?: string;
    /** commands */
    commands?: OptionObject;
    /** options */
    options?: OptionObject;
    /** 其他自定义 */
    others?: OptionObject;
}
export declare const printHelp: (op: PrintHelpOption) => string[];
