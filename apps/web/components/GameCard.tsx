import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { GameConfig } from '@/config/games'

interface GameCardProps {
  game: GameConfig
  locale: string
}

const colorClasses = {
  blue: 'bg-blue-600 hover:bg-blue-700',
  green: 'bg-green-600 hover:bg-green-700',
  purple: 'bg-purple-600 hover:bg-purple-700',
  red: 'bg-red-600 hover:bg-red-700',
  yellow: 'bg-yellow-600 hover:bg-yellow-700',
  indigo: 'bg-indigo-600 hover:bg-indigo-700',
  pink: 'bg-pink-600 hover:bg-pink-700',
}

export default function GameCard({ game, locale }: GameCardProps) {
  const t = useTranslations()
  const colorClass = colorClasses[game.color as keyof typeof colorClasses] || colorClasses.blue

  // 获取游戏名称和描述（支持国际化）
  const gameName = t(`games.${game.id}.name`) || game.name
  const gameDescription = t(`games.${game.id}.description`) || game.description

  return (
    <Link
      href={`/${locale}${game.route}`}
      className={`block p-6 border border-gray-200 dark:border-gray-800 rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-105 ${colorClass} text-white`}
    >
      <h2 className="text-xl font-semibold mb-2">{gameName}</h2>
      <p className="text-sm opacity-90">{gameDescription}</p>
    </Link>
  )
}
