import type { ReactNode } from 'react'
import Link from './Link'

type HitArea = {
  '--hit-top'?: string
  '--hit-right'?: string
  '--hit-bottom'?: string
  '--hit-left'?: string
}

type ButtonProps = {
  href: string
  children: ReactNode
  external?: boolean
  hitArea?: HitArea
}

export default function Button({
  href,
  children,
  external = false,
  hitArea,
}: ButtonProps) {
  return (
    <Link
      href={href}
      external={external}
      className="font-['SohneMono'] text-xs font-light text-inherit no-underline bg-black/10 dark:bg-white/10 backdrop-blur-md py-[7px] px-3 rounded-[2px] inline-block transition-all duration-200 uppercase focus-corners"
      style={{ letterSpacing: '0', ...hitArea }}
    >
      {children}
    </Link>
  )
}
