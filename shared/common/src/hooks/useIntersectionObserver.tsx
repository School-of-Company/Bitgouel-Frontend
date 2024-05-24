'use client'

import { PostItemTypes } from '@bitgouel/types';
import { Dispatch, LegacyRef, SetStateAction, useEffect, useRef, useState } from 'react';

interface ParameterTypes {
  length: number
  listData: PostItemTypes[]
  setSequence: Dispatch<SetStateAction<number>>
}

export default function useIntersectionObserver({ length, listData, setSequence }: ParameterTypes) {
  const scrollTarget = useRef<HTMLDivElement | null>(null)
  const [last, setLast] = useState<number>(null)
  const [list, setList] = useState<PostItemTypes[]>([])

  useEffect(() => {
    if (length) {
      setList((prev) => [...prev, ...listData])
      setLast(listData.at(-1).postSequence)
    }
  }, [listData])

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setSequence(last)
      }
    }, { threshold: 1 });

    if (scrollTarget.current) {
      if (length) observer.observe(scrollTarget.current);
      else observer.unobserve(scrollTarget.current)
    }

    return () => {
      if (scrollTarget.current) {
        observer.unobserve(scrollTarget.current);
      }
    };
  }, [last]);

  return { scrollTarget, list };
}