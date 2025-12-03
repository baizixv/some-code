'use client'

import { useEffect } from 'react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const t = useTranslations()

  useEffect(() => {
    // 记录错误到错误报告服务
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="text-center max-w-md">
        <h1 className="text-4xl font-bold mb-4 text-red-600 dark:text-red-400">
          {t('error.title')}
        </h1>
        <p className="text-lg mb-6 text-gray-600 dark:text-gray-400">{t('error.description')}</p>
        {error.digest && (
          <p className="text-sm mb-4 text-gray-500 dark:text-gray-500">
            {t('error.errorId')}: {error.digest}
          </p>
        )}
        <div className="flex gap-4 justify-center">
          <button
            onClick={reset}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
          >
            {t('error.retry')}
          </button>
          <Link
            href="/"
            className="px-6 py-3 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-semibold rounded-lg transition-colors"
          >
            {t('error.goHome')}
          </Link>
        </div>
      </div>
    </div>
  )
}
