'use client'

import { useState, useCallback } from 'react'
import { useTranslations } from 'next-intl'
import { simulate, calculateBins } from './utils'
import StatsPanel from './components/StatsPanel'
import SurvivalChart from './components/SurvivalChart'
import DetailsTable from './components/DetailsTable'
// LanguageSwitcher 需要从主应用传入
import styles from './styles.module.css'

interface SimulatorClientProps {
  locale: string
  LanguageSwitcher?: React.ComponentType<{ currentLocale: string }>
}

export default function SimulatorClient({ locale, LanguageSwitcher }: SimulatorClientProps) {
  const t = useTranslations()
  const [loading, setLoading] = useState(false)
  const [stats, setStats] = useState({
    count: 0,
    avgTime: 0,
    maxTime: 0,
    totalMoney: BigInt(0),
  })
  const [bins, setBins] = useState<number[]>(new Array(7).fill(0))
  const [totalCount, setTotalCount] = useState(0)

  const handleSimulate = useCallback((count: number) => {
    setLoading(true)

    // 使用 setTimeout 模拟异步计算，避免阻塞 UI
    setTimeout(() => {
      const results = simulate(count)
      let totalSeconds = 0
      let maxSeconds = 0

      results.forEach(seconds => {
        totalSeconds += seconds
        if (seconds > maxSeconds) maxSeconds = seconds
      })

      const calculatedBins = calculateBins(results)
      const avgTime = Math.floor(totalSeconds / count)
      const totalMoney = BigInt(totalSeconds) * BigInt(100000000)

      setStats({
        count,
        avgTime,
        maxTime: maxSeconds,
        totalMoney,
      })
      setBins(calculatedBins)
      setTotalCount(count)
      setLoading(false)
    }, 50)
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* 语言切换器 */}
        {LanguageSwitcher && (
          <div className="mb-4 flex justify-end">
            <LanguageSwitcher currentLocale={locale} />
          </div>
        )}

        <h1 className={styles.title}>{t('simulator.title')}</h1>
        <div className={styles.subtitle}>{t('simulator.subtitle')}</div>

        <div className={styles.controls}>
          <button
            className={`${styles.button} ${styles.button1}`}
            onClick={() => handleSimulate(1)}
            disabled={loading}
          >
            {t('simulator.buttons.single')}
          </button>
          <button
            className={`${styles.button} ${styles.button100}`}
            onClick={() => handleSimulate(100)}
            disabled={loading}
          >
            {t('simulator.buttons.hundred')}
          </button>
          <button
            className={`${styles.button} ${styles.button1000}`}
            onClick={() => handleSimulate(1000)}
            disabled={loading}
          >
            {t('simulator.buttons.thousand')}
          </button>
          <button
            className={`${styles.button} ${styles.button10000}`}
            onClick={() => handleSimulate(10000)}
            disabled={loading}
          >
            {t('simulator.buttons.tenThousand')}
          </button>
        </div>

        {loading && <div className={styles.loading}>{t('simulator.loading')}</div>}

        {stats.count > 0 && (
          <>
            <StatsPanel
              count={stats.count}
              avgTime={stats.avgTime}
              maxTime={stats.maxTime}
              totalMoney={stats.totalMoney}
            />

            <SurvivalChart bins={bins} totalCount={totalCount} />

            <DetailsTable bins={bins} totalCount={totalCount} />
          </>
        )}
      </div>
    </div>
  )
}
