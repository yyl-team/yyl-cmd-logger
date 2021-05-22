# 版本变更

## 0.2.0 (2021-05-23)

- feat: yylCmdLogger 改为 `import { YylCmdLogger } from 'yyl-cmd-logger'` 形式引入
- feat: 新增 `printHelp()`, `cleanScreen` 方法

## 0.1.7 (2021-05-16)

- feat: 兼容 progress 嵌套问题
- feat: logger.setProgress 若 进度为 0, 不显示
- feat: 新增 logger.setLite(isLite) 方法
- feat: 当 logLevel = 1 时，错误优先输出 简略错误
- feat: 调整 lite 状态下 loading 默认样式
- fix: 修复 logger.setProgress('start', [type, argv]) 后面的 log 不会被输出问题
- fix: 修复 logger.setProgress('finished', [type, argv]) 后面的 log 不会被输出问题

## 0.1.5 (2021-03-08)

- feat: 调整 setProgress 逻辑

## 0.1.4 (2021-03-08)

- feat: 调整 setProgress 逻辑

## 0.1.3 (2021-03-08)

- feat: 调整 setProgress 逻辑

## 0.1.2 (2021-03-08)

- feat: 调整 setProgress 逻辑

## 0.1.1 (2021-03-02)

- feat: 诞生
