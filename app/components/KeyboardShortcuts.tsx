'use client'

import { useEffect } from 'react'
import { LINKS } from '../lib/constants'

export default function KeyboardShortcuts() {
  useEffect(() => {
    const handleShortcutKeys = (e: KeyboardEvent) => {
      if (e.repeat || e.ctrlKey || e.metaKey || e.altKey) return
      const key = e.key.toLowerCase()
      if (key === 'g') {
        window.open(LINKS.github, '_blank', 'noopener,noreferrer')
      } else if (key === 'l') {
        window.open(LINKS.linkedin, '_blank', 'noopener,noreferrer')
      } else if (key === 'x') {
        window.open(LINKS.twitter, '_blank', 'noopener,noreferrer')
      }
    }

    window.addEventListener('keydown', handleShortcutKeys)
    return () => window.removeEventListener('keydown', handleShortcutKeys)
  }, [])

  return null
}
