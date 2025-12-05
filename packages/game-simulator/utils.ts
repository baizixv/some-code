// 常量配置
export const PROBABILITY = 1e-8

export const COLORS = [
  '#ef5350', // 0-1天
  '#ab47bc', // 1天-1月
  '#7e57c2', // 1月-1年
  '#42a5f5', // 1年-3年
  '#26c6da', // 3年-10年
  '#66bb6a', // 10年-20年
  '#ffd700', // 20年以上
]

export const LABELS = [
  '0-1天',
  '1天-1月',
  '1月-1年',
  '1年-3年',
  '3年-10年',
  '10年-20年',
  '20年以上',
]

export const DESCRIPTIONS = [
  '倒霉透顶 (活不过1天)',
  '昙花一现 (1天 - 1月)',
  '短暂富裕 (1月 - 1年)',
  '中等运势 (1年 - 3年)',
  '标准寿命 (3年 - 10年 - 概率重心)',
  '幸运长寿 (10年 - 20年)',
  '天选之子 (20年以上)',
]

// 时间常量
export const SEC_DAY = 86400
export const SEC_MONTH = 2592000
export const SEC_YEAR = 31536000

// 模拟函数
export function simulate(count: number): number[] {
  const results: number[] = []
  for (let i = 0; i < count; i++) {
    const u = Math.random()
    const seconds = Math.floor(Math.log(1 - u) / Math.log(1 - PROBABILITY))
    results.push(seconds)
  }
  return results
}

// 计算分组
export function calculateBins(data: number[]): number[] {
  const bins = new Array(7).fill(0)

  data.forEach(sec => {
    if (sec < SEC_DAY) bins[0]++
    else if (sec < SEC_MONTH) bins[1]++
    else if (sec < SEC_YEAR) bins[2]++
    else if (sec < SEC_YEAR * 3) bins[3]++
    else if (sec < SEC_YEAR * 10) bins[4]++
    else if (sec < SEC_YEAR * 20) bins[5]++
    else bins[6]++
  })
  return bins
}

// 格式化时间
export function formatTime(seconds: number): string {
  if (seconds === 0) return '0秒'
  if (seconds < 60) return seconds + '秒'
  if (seconds < 3600) return (seconds / 60).toFixed(1) + '分钟'
  if (seconds < 86400) return (seconds / 3600).toFixed(1) + '小时'

  const years = Math.floor(seconds / SEC_YEAR)
  const remainingSeconds = seconds % SEC_YEAR
  const days = Math.floor(remainingSeconds / SEC_DAY)

  let res = ''
  if (years > 0) res += years + '年 '
  if (days > 0) res += days + '天'
  if (years === 0 && days === 0) return '< 1天'
  return res
}

// 格式化金额
export function formatMoney(bigIntVal: bigint): string {
  let str = bigIntVal.toString()
  if (str.length <= 8) return '¥' + parseInt(str).toLocaleString()
  const len = str.length
  if (len > 20)
    return '¥ ' + str.substring(0, len - 20) + '.' + str.substring(len - 20, len - 18) + ' 垓'
  else if (len > 16)
    return '¥ ' + str.substring(0, len - 16) + '.' + str.substring(len - 16, len - 14) + ' 京'
  else if (len > 12)
    return '¥ ' + str.substring(0, len - 12) + '.' + str.substring(len - 12, len - 10) + ' 万亿'
  else return '¥ ' + str.substring(0, len - 8) + '.' + str.substring(len - 8, len - 6) + ' 亿'
}
