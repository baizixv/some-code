import { games, getGamePackageName } from '@/config/games'
import { notFound } from 'next/navigation'
import LanguageSwitcher from '@/components/LanguageSwitcher'

// 动态导入游戏包
async function getGameComponent(gameId: string) {
  try {
    const packageName = getGamePackageName(gameId)
    // 动态导入游戏包，优先使用默认导出
    const gameModule = await import(packageName)
    // 优先使用 default export（游戏包应该默认导出客户端组件）
    return gameModule.default || null
  } catch (error) {
    console.error(`Failed to load game: ${gameId}`, error)
    return null
  }
}

interface GamePageProps {
  params: Promise<{ locale: string; gameId: string }>
}

export default async function GamePage({ params }: GamePageProps) {
  const { locale, gameId } = await params

  // 验证游戏是否存在
  const game = games.find(g => g.id === gameId)
  if (!game) {
    notFound()
  }

  // 动态加载游戏组件
  const GameComponent = await getGameComponent(gameId)
  if (!GameComponent) {
    notFound()
  }

  return <GameComponent locale={locale} LanguageSwitcher={LanguageSwitcher} />
}
