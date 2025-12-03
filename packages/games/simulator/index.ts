// 游戏包入口文件
// 默认导出游戏客户端组件（用于动态路由）
export { default } from './SimulatorClient'
export { default as SimulatorClient } from './SimulatorClient'
export * from './utils'

// 组件导出
export { default as StatsPanel } from './components/StatsPanel'
export { default as SurvivalChart } from './components/SurvivalChart'
export { default as DetailsTable } from './components/DetailsTable'
