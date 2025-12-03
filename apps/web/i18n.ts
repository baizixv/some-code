import { getRequestConfig } from 'next-intl/server'
import { notFound } from 'next/navigation'

// 支持的语言列表
export const locales = ['zh', 'en'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'zh'

export default getRequestConfig(async ({ requestLocale }) => {
  // requestLocale 是一个异步函数，需要 await
  let locale = await requestLocale

  // 如果 locale 未定义或不在支持列表中，使用默认 locale
  // 注意：在 [locale] 路由中，requestLocale 应该总是有值
  if (!locale) {
    locale = defaultLocale
  }

  // 验证 locale 是否在支持列表中
  if (!locales.includes(locale as Locale)) {
    // 如果不在支持列表中，使用默认 locale
    locale = defaultLocale
  }

  const messages = (await import(`./messages/${locale}.json`)).default

  return {
    messages,
    locale: locale as string,
  }
})
