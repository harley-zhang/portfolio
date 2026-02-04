'use client'

import dynamic from 'next/dynamic'

const VercelAnalytics = dynamic(
  () => import('@vercel/analytics/react').then((m) => m.Analytics),
  { ssr: false },
)

export default function Analytics() {
  return <VercelAnalytics />
}
