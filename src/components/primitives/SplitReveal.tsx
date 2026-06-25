'use client'

import { useEffect, useRef } from 'react'
import SplitType from 'split-type'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface SplitRevealProps {
  children: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div'
  type?: 'chars' | 'words' | 'lines'
  stagger?: number
  duration?: number
  ease?: string
  className?: string
  delay?: number
}

export function SplitReveal({
  children,
  type = 'chars',
  stagger = 0.04,
  duration = 0.9,
  ease = 'power3.out',
  className,
  delay = 0,
}: SplitRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const split = new SplitType(ref.current, { types: type })
    const items =
      type === 'chars'
        ? split.chars
        : type === 'words'
          ? split.words
          : split.lines

    if (!items) return

    gsap.from(items, {
      yPercent: 110,
      opacity: 0,
      stagger,
      duration,
      ease,
      delay,
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 88%',
        once: true,
      },
    })

    return () => split.revert()
  }, [type, stagger, duration, ease, delay])

  const Tag = type === 'chars' ? 'span' : 'div'

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  )
}
