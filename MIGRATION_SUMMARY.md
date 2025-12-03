# Monorepo 迁移总结

## ✅ 已完成的工作

### 1. **创建 Monorepo 结构**
- ✅ 创建 `pnpm-workspace.yaml` 配置文件
- ✅ 创建 `apps/web/` 主应用目录
- ✅ 创建 `packages/games/simulator/` 游戏包目录

### 2. **重构代码**
- ✅ 将主应用代码移动到 `apps/web/`
- ✅ 将游戏代码移动到 `packages/games/simulator/`
- ✅ 创建游戏包的 `package.json` 和 `index.ts`
- ✅ 更新所有导入路径

### 3. **更新配置**
- ✅ 更新根 `package.json` 为 workspace 配置
- ✅ 更新 `apps/web/package.json` 引用游戏包
- ✅ 更新 `tsconfig.json` 支持跨包导入
- ✅ 更新 `vercel.json` 构建命令
- ✅ 更新 `.gitignore`

### 4. **文档更新**
- ✅ 创建 `docs/MONOREPO_STRUCTURE.md`
- ✅ 创建 `docs/MONOREPO_GUIDE.md`
- ✅ 更新 `README.md`
- ✅ 更新 `apps/web/config/README.md`

## 📁 新的目录结构

```
some-code/
├── apps/
│   └── web/                    # 主应用
│       ├── app/                # Next.js 应用
│       ├── components/         # 共享组件
│       ├── config/             # 配置
│       ├── messages/           # 国际化
│       └── package.json
├── packages/
│   └── games/
│       └── simulator/          # 游戏包
│           ├── components/
│           ├── index.ts
│           └── package.json
├── package.json               # 根配置
├── pnpm-workspace.yaml        # Workspace 配置
└── pnpm-lock.yaml            # 依赖锁定
```

## 🔄 使用方式

### 开发

```bash
# 安装所有依赖
pnpm install

# 运行主应用
pnpm dev
```

### 添加新游戏

1. 在 `packages/games/` 下创建新包
2. 创建 `package.json` 和 `index.ts`
3. 在主应用中引用：`import from '@some-code/game-{name}'`
4. 运行 `pnpm install` 链接包

## ✨ 优势

- ✅ **完全独立**: 每个游戏是独立的包
- ✅ **易于扩展**: 添加新游戏不影响现有代码
- ✅ **代码复用**: 共享依赖和工具
- ✅ **版本管理**: 每个包可以独立版本
- ✅ **并行开发**: 支持多人同时开发不同游戏

## 📚 相关文档

- [Monorepo 结构说明](./docs/MONOREPO_STRUCTURE.md)
- [Monorepo 开发指南](./docs/MONOREPO_GUIDE.md)
- [游戏配置说明](./apps/web/config/README.md)
