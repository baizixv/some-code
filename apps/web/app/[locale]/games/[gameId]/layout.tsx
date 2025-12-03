import type { Metadata } from 'next'
import { games } from '@/config/games'
import { getTranslations } from 'next-intl/server'
import { notFound } from 'next/navigation'

interface GameLayoutProps {
  params: Promise<{ locale: string; gameId: string }>
  children: React.ReactNode
}

export async function generateMetadata({ params }: GameLayoutProps): Promise<Metadata> {
  const { locale, gameId } = await params
  const game = games.find(g => g.id === gameId)
  
  if (!game) {
    return {}
  }

  const t = await getTranslations({ locale })
  const gameName = t(`games.${gameId}.name`) || game.name
  const gameDescription = t(`games.${gameId}.description`) || game.description

  return {
    title: `${gameName} - 数据可视化版`,
    description: gameDescription,
  }
}

export default async function GameLayout({ params, children }: GameLayoutProps) {
  const { gameId } = await params
  
  // 验证游戏是否存在
  const game = games.find(g => g.id === gameId)
  if (!game) {
    notFound()
  }

  return <>{children}</>
}
