'use client'

import dynamic from 'next/dynamic'

const VercelAnalytics = dynamic(
  () => import('@vercel/analytics/react').then((m) => m.Analytics),
  { ssr: false },
)

const SpeedInsights = dynamic(
  () => import('@vercel/speed-insights/next').then((m) => m.SpeedInsights),
  { ssr: false },
)

export default function Analytics() {
  return (
    <>
      <VercelAnalytics />
      <SpeedInsights />
    </>
  )
}
