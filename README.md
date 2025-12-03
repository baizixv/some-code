# some-code

一个基于 Next.js 的多端统一应用，支持 Web 和移动端，可一键部署到 Vercel。

## 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **部署**: Vercel

## 功能特性

- ✅ 响应式设计，完美适配 Web 和移动端
- ✅ TypeScript 类型安全
- ✅ Tailwind CSS 快速样式开发
- ✅ 深色模式支持
- ✅ Vercel 一键部署

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看应用。

### 构建生产版本

```bash
npm run build
```

### 启动生产服务器

```bash
npm start
```

## 部署到 Vercel

1. 将代码推送到 GitHub/GitLab/Bitbucket
2. 在 [Vercel](https://vercel.com) 导入项目
3. Vercel 会自动检测 Next.js 项目并完成部署

或者使用 Vercel CLI:

```bash
npm i -g vercel
vercel
```

## 项目结构

```
.
├── app/              # Next.js App Router 目录
│   ├── layout.tsx   # 根布局
│   ├── page.tsx     # 首页
│   └── globals.css  # 全局样式
├── components/       # 可复用组件（可选）
├── public/          # 静态资源
├── next.config.js   # Next.js 配置
├── tailwind.config.ts # Tailwind CSS 配置
└── tsconfig.json    # TypeScript 配置
```

## 移动端优化

- 使用 Tailwind CSS 响应式类名（sm:, md:, lg:）
- 配置了移动端友好的 viewport 设置
- 优化了触摸交互体验

## License

MIT
