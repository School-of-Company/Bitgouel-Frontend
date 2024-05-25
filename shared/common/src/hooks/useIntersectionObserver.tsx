'use client'

import { PostItemTypes } from '@bitgouel/types';
import { Dispatch, LegacyRef, SetStateAction, useEffect, useRef, useState } from 'react';

interface ParameterTypes {
  listData: PostItemTypes[] | undefined
  setSequence: Dispatch<SetStateAction<number>>
}

export default function useIntersectionObserver({ listData, setSequence }: ParameterTypes) {
  const scrollTarget = useRef<HTMLDivElement | null>(null)
  const [last, setLast] = useState<number>(0)
  const [list, setList] = useState<PostItemTypes[]>([])

  useEffect(() => {
    if (listData?.length) {
      setList((prev) => [...prev, ...listData])
      if (listData) setLast(listData.at(-1)?.postSequence || 0)
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