export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 md:p-12 lg:p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            欢迎使用
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-400">
            Web 和移动端多端统一应用
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
              <h2 className="text-xl font-semibold mb-2">响应式设计</h2>
              <p className="text-gray-600 dark:text-gray-400">
                完美适配各种屏幕尺寸
              </p>
            </div>
            <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
              <h2 className="text-xl font-semibold mb-2">Vercel 部署</h2>
              <p className="text-gray-600 dark:text-gray-400">
                一键部署，全球加速
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

