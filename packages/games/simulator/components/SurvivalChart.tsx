'use client'

import { useTranslations, useLocale } from 'next-intl'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  type TooltipItem,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { COLORS, LABELS } from '../utils'
import styles from '../styles.module.css'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels)

interface SurvivalChartProps {
  bins: number[]
  totalCount: number
}

export default function SurvivalChart({ bins, totalCount }: SurvivalChartProps) {
  const t = useTranslations()
  const locale = useLocale()
  const data = {
    labels: LABELS,
    datasets: [
      {
        label: t('simulator.chart.datasetLabel'),
        data: bins,
        backgroundColor: COLORS,
        borderRadius: 5,
        borderSkipped: false,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: { top: 30 },
    },
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: t('simulator.chart.title'),
        color: '#aaa',
        padding: { bottom: 20 },
      },
      tooltip: {
        enabled: true,
        backgroundColor: 'rgba(0,0,0,0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
        callbacks: {
          label: function (context: TooltipItem<'bar'>) {
            let label = context.dataset.label || ''
            if (label) label += ': '
            const value = context.parsed.y
            if (value === null || value === undefined) return label
            let percentage = ((value / totalCount) * 100).toFixed(1) + '%'
            // 根据当前语言显示不同的单位
            const unit = locale.startsWith('zh') ? t('simulator.chart.unit') : ''
            return label + value + unit + ' (' + percentage + ')'
          },
        },
      },
      datalabels: {
        color: '#fff',
        anchor: 'end' as const,
        align: 'top' as const,
        offset: 4,
        font: { weight: 'bold' as const, size: 11 },
        formatter: (value: number) => {
          if (value === 0) return ''
          let percentage = ((value / totalCount) * 100).toFixed(1) + '%'
          return value + '\n' + percentage
        },
        textAlign: 'center' as const,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: { color: '#333' },
        ticks: { color: '#888' },
        title: { display: true, text: t('simulator.chart.yAxis'), color: '#666' },
      },
      x: {
        grid: { display: false },
        ticks: { color: '#ddd' },
      },
    },
  }

  return (
    <div className={styles.chartContainer}>
      <Bar data={data} options={options} />
    </div>
  )
}
