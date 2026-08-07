#!/usr/bin/env node

import { readdirSync, writeFileSync } from 'fs';
import { join, basename } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const postsDir = join(__dirname, '..', 'src', 'content', 'posts');

function toKebabCase(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9\u4e00-\u9fa5]+/g, '-')
    .replace(/^-|-$/g, '');
}

function getNextNumber() {
  const files = readdirSync(postsDir).filter(f => f.endsWith('.md'));
  const numbers = files.map(f => {
    const match = f.match(/^(\d+)/);
    return match ? parseInt(match[1], 10) : 0;
  });
  return numbers.length > 0 ? Math.max(...numbers) + 1 : 1;
}

function getTodayDate() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function createPost(title) {
  const num = getNextNumber();
  const slug = toKebabCase(title);
  const filename = `${String(num).padStart(2, '0')}-${slug}.md`;
  const date = getTodayDate();

  const content = `---
title: "${title}"
publishedAt: ${date}
description: "${title} 的描述"
tags: []
isPublish: false
isDraft: true
---

## ${title}

在这里写你的内容...
`;

  const filepath = join(postsDir, filename);
  writeFileSync(filepath, content, 'utf-8');
  console.log(`✓ 文章已创建: src/content/posts/${filename}`);
}

const title = process.argv[2];
if (!title) {
  console.error('用法: pnpm new-post "文章标题"');
  process.exit(1);
}

createPost(title);
