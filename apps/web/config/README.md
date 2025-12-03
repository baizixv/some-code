# 游戏配置说明

## 添加新游戏

要添加新游戏，请按照以下步骤：

### 1. 创建游戏包

在 `packages/games/` 目录下创建你的游戏包，例如：

```
packages/games/
├── simulator/          # 财富代价模拟器
│   ├── index.ts
│   ├── SimulatorClient.tsx
│   ├── components/
│   ├── utils.ts
│   └── styles.module.css
└── your-game/         # 你的新游戏
    ├── index.ts
    ├── YourGameClient.tsx
    ├── components/
    └── ...
```

### 2. 创建游戏包的 package.json

在游戏包目录下创建 `package.json`：

```json
{
  "name": "@some-code/game-your-game",
  "version": "0.1.0",
  "private": true,
  "main": "./index.ts",
  "types": "./index.ts",
  "peerDependencies": {
    "next": "^14.2.5",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  }
}
```

### 3. 创建游戏包的默认导出

在 `packages/games/your-game/index.ts` 中：

```typescript
// 必须默认导出客户端组件
export { default } from './YourGameClient'
export { default as YourGameClient } from './YourGameClient'
```

**注意**: 不需要创建路由文件！系统使用动态路由自动处理。

### 4. 在配置文件中注册游戏

编辑 `apps/web/config/games.ts`，添加你的游戏配置：

**重要**: 路由会自动生成，`route` 字段必须与 `id` 对应（`/games/{id}`）

```typescript
export const games: GameConfig[] = [
  {
    id: 'simulator',
    name: '财富代价模拟器',
    description: '每秒 +1亿金钱 | 每秒 1亿分之一 死亡率',
    route: '/games/simulator',
    color: 'blue',
  },
  {
    id: 'your-game',
    name: '你的游戏名称',
    description: '游戏描述',
    route: '/games/your-game',
    color: 'green', // 可选: blue, green, purple, red, yellow, indigo, pink
  },
]
```

### 5. 安装依赖

在根目录运行：

```bash
pnpm install
```

这会自动将游戏包链接到主应用。

### 完成！

游戏会自动通过 `/games/{your-game-id}` 路由可用，无需手动创建路由文件！

> **详细说明**: 查看 [docs/DYNAMIC_ROUTING.md](../../docs/DYNAMIC_ROUTING.md)

## 游戏独立性

每个游戏包应该：

- ✅ 拥有自己的包目录和 package.json
- ✅ 使用自己的样式（CSS 模块）
- ✅ 拥有自己的组件和工具函数
- ✅ 不依赖其他游戏的代码
- ✅ 通过包名导入，不直接访问文件系统
- ✅ 可以独立开发、测试和版本管理

## 最佳实践

1. **包命名**: 使用 `@some-code/game-{name}` 格式
2. **导出接口**: 在 `index.ts` 中统一导出，提供清晰的 API
3. **样式隔离**: 使用 CSS 模块，避免样式冲突
4. **组件隔离**: 每个游戏的组件放在自己的 `components/` 目录下
5. **工具函数**: 游戏特定的工具函数放在包根目录的 `utils.ts`
6. **类型定义**: 如果游戏有复杂的类型，可以创建 `types.ts` 文件
7. **Peer Dependencies**: 将 Next.js 和 React 设为 peer dependencies，避免重复安装
