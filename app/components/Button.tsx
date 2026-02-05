import Link from 'next/link'

type HitArea = {
  '--hit-top'?: string
  '--hit-right'?: string
  '--hit-bottom'?: string
  '--hit-left'?: string
}

type ButtonProps = {
  href: string
  children: React.ReactNode
  external?: boolean
  hitArea?: HitArea
}

const baseClassName =
  "font-['SohneMono'] text-xs font-light text-inherit no-underline bg-black/10 dark:bg-white/10 backdrop-blur-md py-[7px] px-3 rounded-[2px] inline-block transition-all duration-200 uppercase focus-corners"

export default function Button({
  href,
  children,
  external = false,
  hitArea,
}: ButtonProps) {
  const style = {
    letterSpacing: '0',
    ...hitArea,
  } as React.CSSProperties

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClassName}
        style={style}
      >
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={baseClassName} style={style}>
      {children}
    </Link>
  )
}
