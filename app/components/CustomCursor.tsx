'use client'

import { useEffect, useRef, useState } from 'react'

const TEXT_LIKE_SELECTORS =
  'p, h1, h2, h3, h4, h5, h6, li, small, blockquote, cite, code, pre, span, a, label, dd, dt, figcaption'

let isTouchDevice: boolean | null = null

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number | null>(null)
  const positionRef = useRef({ x: 0, y: 0 })
  const [isText, setIsText] = useState(false)
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === 'undefined') return true
    if (isTouchDevice === null) {
      isTouchDevice =
        'ontouchstart' in window || (navigator.maxTouchPoints ?? 0) > 0
    }
    return !isTouchDevice
  })

  useEffect(() => {
    if (isTouchDevice) return

    const handleMouseMove = (event: MouseEvent) => {
      positionRef.current = { x: event.clientX, y: event.clientY }

      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(() => {
          const el = cursorRef.current
          if (el) {
            el.style.transform = `translate(${positionRef.current.x}px, ${positionRef.current.y}px) translate(-50%, -50%)`
          }
          rafRef.current = null
        })
      }

      const target = event.target as Element | null
      const overFocusBox = Boolean(target?.closest?.('.focus-corners'))
      const overText = Boolean(target?.closest?.(TEXT_LIKE_SELECTORS))

      setIsVisible(!overFocusBox)
      setIsText(!overFocusBox && overText)
    }

    const handleMouseLeaveDocument = (event: MouseEvent) => {
      if (
        !event.relatedTarget ||
        (event.relatedTarget as Element).nodeName === 'HTML'
      ) {
        setIsVisible(false)
      }
    }

    const handleMouseEnterDocument = () => {
      setIsVisible(true)
    }

    const handleWindowBlur = () => setIsVisible(false)
    const handleWindowFocus = () => setIsVisible(true)

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.documentElement.addEventListener(
      'mouseenter',
      handleMouseEnterDocument,
    )
    document.documentElement.addEventListener(
      'mouseleave',
      handleMouseLeaveDocument,
    )
    window.addEventListener('blur', handleWindowBlur)
    window.addEventListener('focus', handleWindowFocus)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.documentElement.removeEventListener(
        'mouseenter',
        handleMouseEnterDocument,
      )
      document.documentElement.removeEventListener(
        'mouseleave',
        handleMouseLeaveDocument,
      )
      window.removeEventListener('blur', handleWindowBlur)
      window.removeEventListener('focus', handleWindowFocus)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor ${isText ? 'is-text' : ''} ${isVisible ? 'is-visible' : 'is-hidden'}`}
    />
  )
}
