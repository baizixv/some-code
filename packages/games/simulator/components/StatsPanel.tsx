'use client'

import { useTranslations } from 'next-intl'
import { formatTime, formatMoney } from '../utils'
import styles from '../styles.module.css'

interface StatsPanelProps {
  count: number
  avgTime: number
  maxTime: number
  totalMoney: bigint
}

export default function StatsPanel({ count, avgTime, maxTime, totalMoney }: StatsPanelProps) {
  const t = useTranslations()

  return (
    <div className={styles.statsPanel}>
      <div className={styles.statItem}>
        <div className={styles.statLabel}>{t('simulator.stats.count')}</div>
        <div className={styles.statValue}>{count.toLocaleString()}</div>
      </div>
      <div className={styles.statItem}>
        <div className={styles.statLabel}>{t('simulator.stats.avgTime')}</div>
        <div className={`${styles.statValue} ${styles.valTime}`}>{formatTime(avgTime)}</div>
      </div>
      <div className={styles.statItem}>
        <div className={styles.statLabel}>{t('simulator.stats.maxTime')}</div>
        <div className={`${styles.statValue} ${styles.valTime}`}>{formatTime(maxTime)}</div>
      </div>
      <div className={styles.statItem}>
        <div className={styles.statLabel}>{t('simulator.stats.totalMoney')}</div>
        <div className={`${styles.statValue} ${styles.valMoney}`}>{formatMoney(totalMoney)}</div>
      </div>
    </div>
  )
}
