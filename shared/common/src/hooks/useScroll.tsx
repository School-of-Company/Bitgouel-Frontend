'use client'

import { MutableRefObject, useEffect, useState } from 'react'

interface ObserverOptions {
  root?: Element | null // 나타내는 element
  rootMargin?: string // margin
  threshold?: number | number[] // 화면에 보이는 정도
}

interface UseObserverParams {
  target: MutableRefObject<HTMLElement | null>
  option: ObserverOptions
}
const useScroll = ({ target, option }: UseObserverParams) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const currentTarget = target.current

    if (!currentTarget) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsVisible(entry.isIntersecting)
      })
    }, option)

    observer.observe(currentTarget)

    return () => {
      observer.unobserve(currentTarget)
    }
  }, [option, target])

  return { isVisible }
}

export default useScroll
