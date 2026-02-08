import type { ReactNode } from 'react'
import type { Metadata, Viewport } from 'next'
import { sohne, sohneMono } from './fonts'
import './globals.css'
import Analytics from './components/Analytics'
import CustomCursor from './components/CustomCursor'

export const metadata: Metadata = {
  metadataBase: new URL('https://harleyzhang.com'),
  title: { default: 'Harley Zhang', template: '%s | Harley Zhang' },
  description:
    "I'm a product focused software and design engineer. I go to Waterloo and study Software Engineering.",
  openGraph: {
    type: 'website',
    title: 'Harley Zhang',
    description:
      "I'm a product focused software and design engineer. I go to Waterloo and study Software Engineering.",
    url: 'https://harleyzhang.com',
    siteName: 'Harley Zhang',
    locale: 'en_US',
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
        alt: 'Harley Zhang',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harley Zhang',
    description:
      "I'm a product focused software and design engineer. I go to Waterloo and study Software Engineering.",
    images: ['/og.jpg'],
  },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Harley Zhang',
  url: 'https://harleyzhang.com',
  jobTitle: 'Software Engineer',
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'University of Waterloo',
  },
  sameAs: [
    'https://github.com/harley-zhang',
    'https://www.linkedin.com/in/harley-zhang/',
    'https://x.com/harleyhzhang',
  ],
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${sohne.variable} ${sohneMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0a0a0a" media="(prefers-color-scheme: dark)" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col" style={{ fontFamily: 'var(--font-sohne), system-ui, sans-serif' }}>
        {children}
        <CustomCursor />
        <Analytics />
      </body>
    </html>
  )
}
