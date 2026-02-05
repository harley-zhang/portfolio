import type { CSSProperties, ReactNode } from 'react'
import NextLink from 'next/link'

type HitArea = {
  '--hit-top'?: string
  '--hit-right'?: string
  '--hit-bottom'?: string
  '--hit-left'?: string
}

type LinkProps = {
  href: string
  children: ReactNode
  className?: string
  style?: CSSProperties & HitArea
  external?: boolean
}

export default function Link({
  href,
  children,
  className,
  style,
  external = false,
}: LinkProps) {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        style={style}
      >
        {children}
      </a>
    )
  }

  return (
    <NextLink href={href} className={className} style={style}>
      {children}
    </NextLink>
  )
}
