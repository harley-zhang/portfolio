import localFont from 'next/font/local'

export const sohne = localFont({
  src: [
    {
      path: '../public/sohne/TestSohne-Buch-BF663d89cd32e6a.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/sohne/TestSohne-Leicht-BF663d89cd4952e.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/sohne/TestSohne-Halbfett-BF663d89cd2d67b.otf',
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
      path: '../public/sohne/TestSohneMono-Extraleicht-BF663d89cd32fa2.otf',
      weight: '300',
      style: 'normal',
    },
  ],
  variable: '--font-sohne-mono',
  display: 'swap',
  fallback: ['ui-monospace', 'monospace'],
})
