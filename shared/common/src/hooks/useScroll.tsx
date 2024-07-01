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
  const [hasBeenVisible, setHasBeenVisible] = useState(false) // 다시 한 번 나타내는 용도

  useEffect(() => {
    const currentTarget = target.current

    if (!currentTarget) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasBeenVisible) {
          setIsVisible(true) // 처음 보일 때만 가시성을 설정
          setHasBeenVisible(true) // 한 번 표시
          observer.unobserve(currentTarget)
        }
      })
    }, option)

    observer.observe(currentTarget)

    return () => {
      observer.unobserve(currentTarget)
    }
  }, [option, target, hasBeenVisible])

  return { isVisible }
}

export default useScroll
