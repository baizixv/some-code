import { getTranslations } from 'next-intl/server'
import { games } from '@/config/games'
import GameCard from '@/components/GameCard'
import LanguageSwitcher from '@/components/LanguageSwitcher'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale })
  return {
    title: t('common.welcome'),
    description: t('common.description'),
  }
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale })

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 md:p-12 lg:p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <div className="text-center">
          {/* 语言切换器 */}
          <div className="mb-4 flex justify-end">
            <LanguageSwitcher currentLocale={locale} />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">{t('common.welcome')}</h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-400">
            {t('common.description')}
          </p>

          {/* 游戏列表 */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">
              {t('common.games')}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {games.map(game => (
                <GameCard key={game.id} game={game} locale={locale} />
              ))}
            </div>
          </div>

          {/* 特性介绍 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
              <h2 className="text-xl font-semibold mb-2">{t('common.responsive')}</h2>
              <p className="text-gray-600 dark:text-gray-400">{t('common.responsiveDesc')}</p>
            </div>
            <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
              <h2 className="text-xl font-semibold mb-2">{t('common.deploy')}</h2>
              <p className="text-gray-600 dark:text-gray-400">{t('common.deployDesc')}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
