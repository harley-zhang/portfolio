interface ExternalLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export default function ExternalLink({
  href,
  children,
  className,
  style,
}: ExternalLinkProps) {
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
