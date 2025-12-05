'use client'

import { useTranslations } from 'next-intl'
import { COLORS, LABELS } from '../utils'
import styles from '../styles.module.css'

interface DetailsTableProps {
  bins: number[]
  totalCount: number
}

// 定义阶段键的类型
type StageKey = (typeof LABELS)[number]

export default function DetailsTable({ bins, totalCount }: DetailsTableProps) {
  const t = useTranslations()

  return (
    <table className={styles.detailsTable}>
      <thead>
        <tr>
          <th>{t('simulator.table.stage')}</th>
          <th>{t('simulator.table.count')}</th>
          <th>{t('simulator.table.percentage')}</th>
          <th>{t('simulator.table.description')}</th>
        </tr>
      </thead>
      <tbody>
        {bins.map((count, index) => {
          const percentage = ((count / totalCount) * 100).toFixed(2) + '%'
          const rowClassName = count > 0 ? styles.rowHighlight : styles.rowDimmed
          const stageKey: StageKey = LABELS[index]
          const translationKey = `simulator.stages.${stageKey}` as const

          return (
            <tr key={index} className={rowClassName}>
              <td>
                <span
                  className={styles.barColorIndicator}
                  style={{ backgroundColor: COLORS[index] }}
                />
                {LABELS[index]}
              </td>
              <td style={{ fontWeight: 'bold', fontSize: '1.1em' }}>{count.toLocaleString()}</td>
              <td>{percentage}</td>
              <td>{t(translationKey)}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
