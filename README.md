# some-code

一个基于 Next.js 的多端统一应用，支持 Web 和移动端，可一键部署到 Vercel。

## 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS + CSS Modules
- **国际化**: next-intl (支持中英双语)
- **图表**: Chart.js + react-chartjs-2
- **部署**: Vercel

## 功能特性

- ✅ 响应式设计，完美适配 Web 和移动端
- ✅ TypeScript 类型安全（严格模式）
- ✅ Tailwind CSS 快速样式开发
- ✅ 深色模式支持
- ✅ 国际化支持（中文/英文）
- ✅ 模块化游戏架构，易于扩展
- ✅ 错误处理和加载状态
- ✅ Vercel 一键部署

## 前置要求

- Node.js 18+ (推荐使用 [nvm](https://github.com/nvm-sh/nvm) 管理版本)
- pnpm 8+ (项目使用 pnpm 作为包管理器)

### 安装 pnpm

```bash
# 使用 npm 安装
npm install -g pnpm

# 或使用其他方式
# https://pnpm.io/installation
```

> **注意**: 项目已从 npm 迁移到 pnpm。详细说明请查看 [docs/PNPM_MIGRATION.md](./docs/PNPM_MIGRATION.md)

## 快速开始

### 安装依赖

```bash
pnpm install
```

### 开发模式

```bash
pnpm dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看应用。

**注意**: 应用使用国际化路由，默认访问 `/zh`（中文）或 `/en`（英文）。

### 构建生产版本

```bash
pnpm build
```

### 启动生产服务器

```bash
pnpm start
```

### 代码检查

```bash
pnpm lint
```

## 部署到 Vercel

1. 将代码推送到 GitHub/GitLab/Bitbucket
2. 在 [Vercel](https://vercel.com) 导入项目
3. Vercel 会自动检测 Next.js 项目并完成部署

或者使用 Vercel CLI:

```bash
pnpm add -g vercel
vercel
```

## 项目结构

项目采用 **pnpm workspace monorepo** 结构，每个游戏都是独立的包：

```
.
├── apps/
│   └── web/                    # 主应用
│       ├── app/                # Next.js App Router
│       │   └── [locale]/      # 国际化动态路由
│       │       └── games/      # 游戏路由（引用游戏包）
│       ├── components/         # 共享组件
│       ├── config/             # 配置文件
│       ├── messages/           # 国际化翻译
│       └── package.json        # 应用依赖
├── packages/
│   └── games/
│       └── simulator/          # 财富代价模拟器（独立包）
│           ├── components/    # 游戏组件
│           ├── utils.ts       # 游戏工具函数
│           ├── index.ts       # 包入口
│           └── package.json   # 包依赖
├── package.json               # 根配置（workspace）
├── pnpm-workspace.yaml        # Workspace 配置
└── pnpm-lock.yaml            # 依赖锁定
```

> **详细说明**: 查看 [docs/MONOREPO_STRUCTURE.md](./docs/MONOREPO_STRUCTURE.md)

### 国际化架构

项目使用 `app/[locale]` 目录结构实现国际化，这是 Next.js App Router + next-intl 的标准方案：

- 所有页面都在 `app/[locale]` 下
- URL 格式：`/zh` 或 `/en`（中文/英文）
- 翻译文件使用扁平化的 JSON 格式
- 支持语言切换和 SEO 优化

详细说明请查看 [docs/MONOREPO_STRUCTURE.md](./docs/MONOREPO_STRUCTURE.md)

## 游戏开发

项目采用 **monorepo** 结构，每个游戏都是独立的包。添加新游戏：

1. 在 `packages/games/` 下创建游戏包
2. 在 `apps/web/config/games.ts` 中注册游戏
3. 在主应用中创建路由页面引用游戏包

详细说明请查看：
- [docs/MONOREPO_STRUCTURE.md](./docs/MONOREPO_STRUCTURE.md) - Monorepo 结构说明
- [apps/web/config/README.md](./apps/web/config/README.md) - 游戏配置说明

## 国际化

项目支持中英双语，使用 next-intl 实现：

- 翻译文件：`apps/web/messages/zh.json` 和 `apps/web/messages/en.json`
- 语言切换：通过 `LanguageSwitcher` 组件
- URL 路由：`/zh` 或 `/en`

## 移动端优化

- 使用 Tailwind CSS 响应式类名（sm:, md:, lg:）
- 配置了移动端友好的 viewport 设置
- 优化了触摸交互体验

## 开发规范

- TypeScript 严格模式
- ESLint 代码检查
- 组件化开发
- CSS Modules 样式隔离

## License

MIT
