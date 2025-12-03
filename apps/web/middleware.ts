import createMiddleware from 'next-intl/middleware'
import { locales } from '@/i18n'

export default createMiddleware({
  // 支持的语言列表
  locales,

  // 默认语言
  defaultLocale: 'zh',

  // 语言检测策略
  localePrefix: 'always', // 始终在 URL 中显示语言前缀
})

export const config = {
  // 匹配所有路径，除了：
  // - api (API routes)
  // - _next/static (static files)
  // - _next/image (image optimization files)
  // - favicon.ico (favicon file)
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
