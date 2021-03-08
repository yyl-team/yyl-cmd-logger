/*!
 * yyl-cmd-logger cjs 0.1.2
 * (c) 2020 - 2021 
 * Released under the MIT License.
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var chalk = require('chalk');
var readline = require('readline');
require('path');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var chalk__default = /*#__PURE__*/_interopDefaultLegacy(chalk);
var readline__default = /*#__PURE__*/_interopDefaultLegacy(readline);

/* eslint-disable no-control-regex */
let COLUMNS = process.stdout.columns || 80;
process.stdout.on('resize', () => {
    COLUMNS = process.stdout.columns || 80;
});
const COLOR_REG = /(\u001b\[\d+m|\033\[[0-9;]+m)+/g;
/** 中文适配 */
const CHINESE_REG = /[^\x00-\x80]/g;

/** 创建多个字符串 */
function buildChar(char, num) {
    return new Array(num + 1).join(char);
}
/** 创建多个空格 */
function makeSpace(num) {
    return buildChar(' ', num);
}
/** 判断是否数组 */
function isArray(ctx) {
    return typeof ctx === 'object' && ctx.splice === Array.prototype.splice;
}
/** 类型获取 */
function type(ctx) {
    return Object.prototype.toString
        .call(ctx)
        .replace(/^\[object (\w+)\]$/, '$1')
        .toLowerCase();
}
/** 关键字替换 */
function replaceKeyword(str, keyword, result) {
    return str
        .replace(new RegExp(` ${keyword}$`, 'g'), ` ${result}`)
        .replace(new RegExp(`^${keyword} `, 'g'), `${result} `)
        .replace(new RegExp(` ${keyword} `, 'g'), ` ${result} `)
        .replace(new RegExp(` ${keyword}([:,.]+)`, 'g'), ` ${result}$1`);
}
/** 转义用函数 */
function toCtx(i) {
    return i;
}
// 去色
function decolor(ctx) {
    if (isArray(ctx)) {
        return toCtx(ctx).map((str) => str.replace(COLOR_REG, ''));
    }
    else {
        return toCtx(ctx).replace(COLOR_REG, '');
    }
}
/** 获取带颜色的字符串长度 */
function getStrSize(str) {
    const matchChats = str.match(CHINESE_REG) || [];
    return decolor(str).length + matchChats.length;
}
function substr(str, begin, len) {
    const dos = [];
    str.replace(COLOR_REG, (str) => {
        dos.push(str);
        return str;
    });
    const strArr = str.split(COLOR_REG);
    const size = getStrSize(str);
    for (let i = 0; i < strArr.length;) {
        if (strArr[i].match(COLOR_REG)) {
            strArr.splice(i, 1);
        }
        else {
            i++;
        }
    }
    if (begin > size - 1) {
        return '';
    }
    let iLen = 0;
    if (len === undefined) {
        iLen = size - 1 - begin;
    }
    else if (begin + len > size - 1) {
        iLen = size - 1 - begin;
    }
    else {
        iLen = len || 0;
    }
    let r = '';
    let point = 0;
    let isBegin = false;
    let isEnd = false;
    strArr.forEach((iStr, i) => {
        if (isEnd) {
            return;
        }
        const strLen = getStrSize(iStr);
        if (!isBegin) {
            if (begin >= point && begin < point + strLen) {
                if (i % 2 !== 0) {
                    r = `${dos[i - 1]}`;
                }
                if (begin + iLen >= point && begin + iLen <= point + strLen) {
                    r = `${r}${iStr.substr(getStrIndex(iStr, begin - point), getStrIndex(iStr, begin + iLen - point))}`;
                    if (i % 2 !== 0 && i < dos.length) {
                        r = `${r}${dos[i]}`;
                    }
                    isEnd = true;
                }
                else {
                    r = `${r}${iStr.substr(getStrIndex(iStr, begin - point))}`;
                }
                isBegin = true;
            }
        }
        else {
            if (begin + iLen >= point && begin + iLen <= point + strLen) {
                // is end
                r = `${r}${dos[i - 1]}${iStr.substr(0, getStrIndex(iStr, begin + iLen - point))}`;
                if (i % 2 !== 0 && i < dos.length) {
                    r = `${r}${dos[i]}`;
                }
                isEnd = true;
                return true;
            }
            else {
                // add it
                r = `${r}${dos[i - 1]}${iStr}`;
            }
        }
        point += strLen;
    });
    return r;
}
/** 字符换行处理 */
function strWrap(str, size, indent) {
    const r = [];
    const lines = `${str}`
        .trim()
        .split(/[\r\n]+/)
        .map((t) => (indent !== undefined ? t.trim() : t));
    let columnSize = 0;
    let lineIndent = 0;
    let lineNum = 0;
    const addLineNum = function () {
        lineNum++;
        if (lineNum === 1) {
            lineIndent = 0;
            columnSize = size;
        }
        else {
            lineIndent = indent || 0;
            columnSize = size - lineIndent;
        }
    };
    addLineNum();
    lines.forEach((line) => {
        if (getStrSize(line) > columnSize) {
            let fragStr = line;
            while (getStrSize(fragStr) > columnSize) {
                r.push(`${makeSpace(lineIndent)}${substr(fragStr, 0, columnSize)}`);
                fragStr = substr(fragStr, columnSize);
                addLineNum();
            }
            if (getStrSize(fragStr) > 0) {
                r.push(`${makeSpace(lineIndent)}${fragStr}`);
                addLineNum();
            }
        }
        else {
            r.push(`${makeSpace(lineIndent)}${line}`);
            addLineNum();
        }
    });
    return r;
}
function timeFormat(t) {
    let r;
    if (t) {
        r = new Date(t);
    }
    else {
        r = new Date();
    }
    if (isNaN(+r)) {
        throw new Error(`print.timeFormat(t) error, t: ${t} is Invalid Date`);
    }
    return `${r}`.replace(/^.*(\d{2}:\d{2}:\d{2}).*$/, '$1');
}
/** 关键字高亮 */
function highlight(str, keywordMap) {
    let r = str;
    Object.keys(keywordMap).forEach((keyword) => {
        const color = keywordMap[keyword];
        r = replaceKeyword(r, keyword, color(keyword));
    });
    return r;
}
/** 获取字符 index （中文字符算 2） */
function getStrIndex(str, index) {
    let r = 0;
    let count = 0;
    for (let i = 0; i <= index && i < str.length; i++) {
        let add = 1;
        if (str[i].match(CHINESE_REG)) {
            add = 2;
        }
        if (count + add > index) {
            r = i;
            break;
        }
        else {
            count += add;
        }
    }
    return r;
}
/** 日志输出 */
function printLog(op) {
    const r = op.logs;
    const stream = process.stderr;
    let padding = op.backLine || 0;
    while (padding) {
        readline__default['default'].moveCursor(stream, 0, -1);
        readline__default['default'].clearLine(stream, 1);
        padding--;
    }
    readline__default['default'].clearLine(process.stderr, 1);
    readline__default['default'].cursorTo(process.stderr, 0);
    // print
    console.log(r.join('\n'));
}

/** logger 对象 */
class YylCmdLogger {
    constructor(op) {
        this.typeInfo = {
            info: {
                name: 'INFO',
                color: chalk__default['default'].bgBlack.gray,
                shortName: 'i',
                shortColor: chalk__default['default'].gray
            },
            warn: {
                name: 'WARN',
                shortName: '!',
                color: chalk__default['default'].bgYellow.black,
                shortColor: chalk__default['default'].yellow
            },
            error: {
                name: 'ERR ',
                shortName: 'x',
                color: chalk__default['default'].bgRed.white,
                shortColor: chalk__default['default'].red
            },
            success: {
                name: 'PASS',
                shortName: 'Y',
                color: chalk__default['default'].bgCyan.white,
                shortColor: chalk__default['default'].cyan
            },
            del: {
                name: 'DEL ',
                shortName: '-',
                color: chalk__default['default'].bgGray.black,
                shortColor: chalk__default['default'].gray
            },
            add: {
                name: 'ADD ',
                shortName: '+',
                color: chalk__default['default'].bgBlue.white,
                shortColor: chalk__default['default'].blue
            },
            update: {
                name: 'UPDT',
                shortName: '~',
                color: chalk__default['default'].bgMagenta.white,
                shortColor: chalk__default['default'].magenta
            },
            cmd: {
                name: 'CMD>',
                shortName: '>',
                color: chalk__default['default'].bgBlack.white,
                shortColor: chalk__default['default'].white
            }
        };
        /** progress icon 信息 */
        this.progressInfo = {
            icons: ['----', '---L', '-LOA', 'LOAD', 'OADI', 'ADIN', 'DING', 'ING-', 'NG--', 'G---'],
            shortIcons: ['L', 'O', 'A', 'D', 'I', 'N', 'G'],
            color: chalk__default['default'].bgRed.white,
            shortColor: chalk__default['default'].red
        };
        this.logLevel = 1;
        this.lite = false;
        this.keywordHighlight = {
            finished: chalk__default['default'].green,
            failed: chalk__default['default'].red,
            start: chalk__default['default'].cyan,
            passed: chalk__default['default'].green,
            success: chalk__default['default'].green,
            完成: chalk__default['default'].green,
            成功: chalk__default['default'].green,
            失败: chalk__default['default'].red,
            错误: chalk__default['default'].red,
            出错: chalk__default['default'].red,
            开始: chalk__default['default'].cyan
        };
        this.columnSize = COLUMNS;
        this.progressStat = {
            progressing: false,
            percent: 0,
            interval: 100,
            lastLogs: [],
            successLogs: [],
            warnLogs: [],
            errorLogs: [],
            addLogs: [],
            delLogs: [],
            updateLogs: [],
            lastType: 'info',
            lastRowsCount: 0,
            frameCurrent: 0,
            intervalKey: undefined,
            startTime: 0
        };
        // 日志类型配置
        if (op === null || op === void 0 ? void 0 : op.type) {
            this.typeInfo = Object.assign(Object.assign({}, this.typeInfo), op.type);
        }
        // 日志等级配置
        if ((op === null || op === void 0 ? void 0 : op.logLevel) !== undefined) {
            this.logLevel = op.logLevel;
        }
        // 轻量版配置
        if ((op === null || op === void 0 ? void 0 : op.lite) !== undefined) {
            this.lite = op.lite;
        }
        // 关键字高亮配置初始化
        if (op === null || op === void 0 ? void 0 : op.keywordHighlight) {
            this.keywordHighlight = Object.assign(Object.assign({}, this.keywordHighlight), op.keywordHighlight);
        }
        // progress 初始化
        if (op === null || op === void 0 ? void 0 : op.progressInfo) {
            this.progressInfo = Object.assign(Object.assign({}, this.progressInfo), op.progressInfo);
        }
        // 行宽设置
        if (op === null || op === void 0 ? void 0 : op.columnSize) {
            this.columnSize = op.columnSize;
        }
    }
    /** 获取 progress headline */
    getProgressHeadline() {
        const { progressStat, typeInfo } = this;
        const precentStr = Math.round(progressStat.percent * 1000) / 10;
        const now = +new Date();
        let headlineStr = `${precentStr}%`;
        // 输出 耗时
        if (progressStat.startTime) {
            const costStr = `${(now - progressStat.startTime) / 1000}s`;
            headlineStr = `${headlineStr} ${costStr}`;
        }
        // 输出 新增文件 信息
        if (progressStat.addLogs.length) {
            headlineStr = `${headlineStr} ${typeInfo.add.shortColor(typeInfo.add.shortName)} ${progressStat.addLogs.length}`;
        }
        // 输出 更新文件 信息
        if (progressStat.updateLogs.length) {
            headlineStr = `${headlineStr} ${typeInfo.update.shortColor(typeInfo.update.shortName)} ${progressStat.updateLogs.length}`;
        }
        // 输出 删除文件 信息
        if (progressStat.delLogs.length) {
            headlineStr = `${headlineStr} ${typeInfo.del.shortColor(typeInfo.del.shortName)} ${progressStat.delLogs.length}`;
        }
        // 输出 警告 信息
        if (progressStat.warnLogs.length) {
            headlineStr = `${headlineStr} ${typeInfo.warn.shortColor(typeInfo.warn.shortName)} ${progressStat.warnLogs.length}`;
        }
        // 输出 错误 信息
        if (progressStat.errorLogs.length) {
            headlineStr = `${headlineStr} ${typeInfo.error.shortColor(typeInfo.error.shortName)} ${progressStat.errorLogs.length}`;
        }
        return headlineStr;
    }
    /** 私有方法 - 更新 progress */
    updateProgress() {
        const { progressStat, logLevel, lite, progressInfo, typeInfo } = this;
        if (!progressStat.progressing) {
            return [];
        }
        // prefix
        const frameLength = lite ? progressInfo.shortIcons.length : progressInfo.icons.length;
        const frameCurrent = (progressStat.frameCurrent + 1) % frameLength;
        const name = lite
            ? progressInfo.shortIcons[frameCurrent]
            : ` ${progressInfo.icons[frameCurrent]} `;
        const color = lite ? progressInfo.shortColor : progressInfo.color;
        // headline
        const headlineStr = this.getProgressHeadline();
        // last type
        let lastTypeInfo = typeInfo.info;
        const lastType = toCtx(progressStat.lastType);
        if (lastType in typeInfo) {
            lastTypeInfo = typeInfo[lastType];
        }
        const lastTypeStr = lastTypeInfo.shortColor(lastTypeInfo.shortName);
        lastTypeInfo = typeInfo[lastType];
        const r = this.formatLog({
            name,
            color,
            args: [headlineStr, lastTypeStr].concat(progressStat.lastLogs)
        });
        // print
        if (logLevel === 1) {
            printLog({
                backLine: progressStat.lastRowsCount || 0,
                logs: r
            });
        }
        // 记录 log 占用行数
        progressStat.lastRowsCount = r.length;
        progressStat.frameCurrent = frameCurrent;
        return r;
    }
    /** progress finished 处理函数 */
    finishedProgress() {
        const { logLevel, progressStat } = this;
        // 清除计时器
        if (this.progressStat.intervalKey) {
            clearInterval(this.progressStat.intervalKey);
        }
        // 状态复位
        this.progressStat = Object.assign(Object.assign({}, this.progressStat), { percent: 1, progressing: false, intervalKey: undefined });
        const headlineStr = `${this.getProgressHeadline()} ${chalk__default['default'].green('at')} ${chalk__default['default'].yellow(timeFormat())}`;
        // print
        if (logLevel !== 0) {
            const stream = process.stderr;
            if (logLevel === 1) {
                let padding = progressStat.lastRowsCount || 0;
                while (padding) {
                    readline__default['default'].moveCursor(stream, 0, -1);
                    readline__default['default'].clearLine(stream, 1);
                    padding--;
                }
            }
            readline__default['default'].clearLine(process.stderr, 1);
            readline__default['default'].cursorTo(process.stderr, 0);
        }
        const isError = this.progressStat.errorLogs.length > 0;
        const logType = isError ? 'error' : 'success';
        let logs = [headlineStr];
        if (isError) {
            this.progressStat.errorLogs.forEach((args) => {
                logs = logs.concat(args);
            });
        }
        else {
            this.progressStat.successLogs.forEach((args) => {
                logs = logs.concat(args);
            });
        }
        let r = this.log(logType, logs);
        if (!isError && this.progressStat.warnLogs.length > 0) {
            this.progressStat.warnLogs.forEach((args) => {
                r = r.concat(this.log('warn', args));
            });
        }
        return r;
    }
    /** 格式化日志 */
    formatLog(op) {
        const { name, color, args } = op;
        const { keywordHighlight, columnSize } = this;
        // 第一行标题
        const prefix = color(name);
        // 第二行标题
        const subfix = color(makeSpace(getStrSize(name)));
        const prefixSize = getStrSize(prefix);
        const contentSize = columnSize - prefixSize - 2;
        let fArgs = [];
        args.forEach((ctx) => {
            let cnt = '';
            const iType = type(ctx);
            if (['number', 'string', 'undefined'].includes(iType)) {
                cnt = `${ctx}`;
                fArgs = fArgs.concat(strWrap(cnt, contentSize));
            }
            else if (iType === 'error') {
                const iCtx = toCtx(ctx);
                fArgs = fArgs.concat(strWrap(iCtx.stack || iCtx.message, contentSize));
            }
            else if (iType === 'object') {
                const iCtx = toCtx(ctx);
                fArgs = fArgs.concat(strWrap(JSON.stringify(iCtx, null, 2), contentSize));
            }
            else {
                fArgs.push(`${cnt}`);
            }
        });
        const r = [];
        fArgs.forEach((ctx, i) => {
            let front = prefix;
            if (i !== 0) {
                front = subfix;
            }
            if (type(ctx) === 'string') {
                r.push(`${front} ${highlight(ctx, keywordHighlight)}`);
            }
            else {
                if (i === 0) {
                    r.push(`${front}`);
                }
                r.push(ctx);
            }
        });
        return r;
    }
    addProgressLog(type, args) {
        const { progressStat } = this;
        const iType = this.formatLogInfo(type).type;
        switch (iType) {
            case 'warn':
                progressStat.warnLogs.push(args);
                break;
            case 'error':
                progressStat.errorLogs.push(args);
                break;
            case 'success':
                progressStat.successLogs.push(args);
                break;
            case 'update':
                progressStat.updateLogs.push(args);
                break;
            case 'add':
                progressStat.addLogs.push(args);
                break;
            case 'remove':
                progressStat.delLogs.push(args);
                break;
        }
        progressStat.lastLogs = args;
        progressStat.lastType = iType;
        return this.updateProgress();
    }
    /** 格式化 logInfo */
    formatLogInfo(type) {
        const { typeInfo } = this;
        let iTypeInfo = typeInfo[type];
        if (!iTypeInfo) {
            iTypeInfo = typeInfo.info;
            type = 'info';
        }
        return {
            type,
            info: iTypeInfo
        };
    }
    normalLog(type, args) {
        const { lite, logLevel } = this;
        const iTypeInfo = this.formatLogInfo(type).info;
        // 日志格式化处理
        const r = this.formatLog({
            name: lite ? iTypeInfo.shortName : ` ${iTypeInfo.name} `,
            color: lite ? iTypeInfo.shortColor : iTypeInfo.color,
            args
        });
        if (logLevel !== 0) {
            printLog({
                logs: r
            });
        }
        return r;
    }
    /** 设置 progress 状态 */
    setProgress(status, type, args) {
        const { progressStat } = this;
        if (status === 'start') {
            // 防止多次 启动 progress
            if (progressStat.progressing) {
                if (args && type) {
                    this.log(type, args);
                }
                return;
            }
            // 进入 progress 模式
            if (this.progressStat.intervalKey) {
                clearInterval(this.progressStat.intervalKey);
            }
            this.progressStat = Object.assign(Object.assign({}, this.progressStat), { errorLogs: [], successLogs: [], warnLogs: [], percent: 0, progressing: true, startTime: +new Date(), intervalKey: setInterval(() => {
                    this.updateProgress();
                }, this.progressStat.interval) });
        }
        else if (status === 'finished') {
            if (type && args && this.progressStat.progressing) {
                this.log(type, args);
            }
            // 退出 progress 模式
            this.finishedProgress();
        }
        else {
            // 更新 progress 进度
            this.progressStat = Object.assign(Object.assign({}, this.progressStat), { percent: status });
            if (type && args && this.progressStat.progressing) {
                this.log(type, args);
            }
        }
        this.updateProgress();
    }
    /** 设置日志等级 */
    setLogLevel(level) {
        this.logLevel = level;
    }
    /** 日志输出 */
    log(type, args) {
        const { progressStat, logLevel } = this;
        if (progressStat.progressing) {
            if (logLevel === 1) {
                return this.addProgressLog(type, args);
            }
            else if (logLevel === 2) {
                this.addProgressLog(type, args);
                return this.normalLog(type, args);
            }
        }
        return this.normalLog(type, args);
    }
}
module.exports = YylCmdLogger;

exports.YylCmdLogger = YylCmdLogger;
