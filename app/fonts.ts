import localFont from 'next/font/local'

export const sohne = localFont({
  src: [
    {
      path: '../public/sohne/sohne-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/sohne/sohne-light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/sohne/sohne-medium.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-sohne',
  display: 'swap',
  fallback: ['system-ui', 'sans-serif'],
})

export const sohneMono = localFont({
  src: [
    {
      path: '../public/sohne/sohne-mono-light.woff2',
      weight: '300',
      style: 'normal',
    },
  ],
  variable: '--font-sohne-mono',
  display: 'swap',
  fallback: ['ui-monospace', 'monospace'],
})
