// 游戏配置类型
export interface GameConfig {
  id: string
  name: string
  description: string
  route: string // 自动生成：/games/{id}
  color: string
  icon?: string
  packageName?: string // 包名，默认 @some-code/game-{id}
}

// 所有游戏配置
// 注意：name 和 description 现在通过国际化文件提供，这里的值作为后备
// route 会自动生成为 /games/{id}
export const games: GameConfig[] = [
  {
    id: 'simulator',
    name: '财富代价模拟器', // 后备值，实际使用国际化
    description: '每秒 +1亿金钱 | 每秒 1亿分之一 死亡率', // 后备值，实际使用国际化
    route: '/games/simulator', // 自动生成，与 id 对应
    color: 'blue',
    packageName: '@some-code/game-simulator', // 可选，默认 @some-code/game-{id}
  },
  // 在这里添加更多游戏配置
  // {
  //   id: 'game2',
  //   name: '游戏2',
  //   description: '游戏2的描述',
  //   route: '/games/game2', // 自动生成
  //   color: 'green',
  // },
]

// 根据 ID 获取游戏包名
export function getGamePackageName(gameId: string): string {
  const game = games.find(g => g.id === gameId)
  return game?.packageName || `@some-code/game-${gameId}`
}

// 根据 ID 获取游戏配置
export function getGameById(id: string): GameConfig | undefined {
  return games.find(game => game.id === id)
}

// 根据路由获取游戏配置
export function getGameByRoute(route: string): GameConfig | undefined {
  return games.find(game => game.route === route)
}
