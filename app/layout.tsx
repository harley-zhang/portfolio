import type { Metadata, Viewport } from 'next'
import { sohne, sohneMono } from './fonts'
import './globals.css'
import Analytics from './components/Analytics'
import CustomCursor from './components/CustomCursor'

export const metadata: Metadata = {
  metadataBase: new URL('https://harleyzhang.com'),
  title: { default: 'Harley Zhang', template: '%s | Harley Zhang' },
  description:
    "I'm a Software Engineering undergraduate at the University of Waterloo. Most of my work involves software engineering, machine learning, and data science.",
  openGraph: {
    type: 'website',
    title: 'Harley Zhang',
    description:
      "I'm a Software Engineering undergraduate at the University of Waterloo. Most of my work involves software engineering, machine learning, and data science.",
    url: 'https://harleyzhang.com',
    siteName: 'Harley Zhang',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harley Zhang',
    description:
      "I'm a Software Engineering undergraduate at the University of Waterloo. Most of my work involves software engineering, machine learning, and data science.",
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
  maximumScale: 1,
  userScalable: false,
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
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${sohne.variable} ${sohneMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans min-h-screen flex flex-col">
        {children}
        <CustomCursor />
        <Analytics />
      </body>
    </html>
  )
}
