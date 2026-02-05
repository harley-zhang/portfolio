import type { ReactNode } from 'react'

type SectionProps = {
  title: string
  children: ReactNode
}

export default function Section({ title, children }: SectionProps) {
  return (
    <section>
      <h2
        className="text-xs mt-12 mb-3 font-light text-left font-['SohneMono'] uppercase"
        style={{ letterSpacing: '0' }}
      >
        / {title}
      </h2>
      {children}
    </section>
  )
}
