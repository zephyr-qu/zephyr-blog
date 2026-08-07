# Zephyr's Blog

一个基于 [Astro](https://astro.build) 的个人博客,支持 Markdown/MDX 写作、全文搜索、RSS 订阅和 Mermaid 图表。

## 技术栈

- **Astro 7** + MDX + Tailwind CSS v4
- **Pagefind** 全文搜索
- **Shiki** 代码高亮 + **Mermaid** 图表
- RSS / Sitemap / robots.txt 自动生成

## 快速开始

```bash
# 安装依赖
pnpm install

# 本地开发
pnpm dev

# 构建
pnpm build

# 预览构建产物
pnpm preview
```

## 写文章

```bash
pnpm new-post "文章标题"
```

脚本会在 `src/content/posts/` 下自动生成带编号的 Markdown 草稿(默认 `isDraft: true`),编辑后把 `isPublish` 改为 `true` 即可发布。

## 配置

站点信息在 `src/data/config.ts` 中修改(站点标题、描述、URL 等)。

## 目录结构

```
src/
├── components/    # UI 组件
├── content/posts/ # 文章(Markdown/MDX)
├── data/          # 站点配置
├── layouts/       # 页面布局
├── pages/         # 路由页面
├── styles/        # 全局样式
└── utils/         # 工具函数
```
