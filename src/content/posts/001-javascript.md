---
title: JavaScript Async
publishedAt: 2026-08-01
description: 一篇展示基础 Markdown 语法的示例文章
tags: [javascript, async]
isPublish: true
isDraft: false
---

## 文本格式

普通正文，**粗体**，*斜体*，~~删除线~~，`行内代码`。

## 列表

### 无序列表

- 项目一
- 项目二
- 项目三

### 有序列表

1. 第一步
2. 第二步
3. 第三步

## 代码块

```js
function greet(name) {
  return `Hello, ${name}!`;
}
```

## 表格

| 名称 | 类型 | 默认值 |
|------|------|--------|
| title | string | — |
| tags | string[] | [] |

## 图表 (Mermaid)

```mermaid
graph TD
    A[开始] --> B{继续?}
    B -->|Yes| C[处理]
    C --> B
    B -->|No| D[结束]
```

```mermaid
pie title 技术栈
    "前端" : 40
    "后端" : 30
    "数据库" : 20
    "DevOps" : 10
```

## 引用

> 这是一段引用文本。

## 链接

[Astro 文档](https://docs.astro.build)

## 图片

![Astro](https://docs.astro.build/assets/favicon.svg)
