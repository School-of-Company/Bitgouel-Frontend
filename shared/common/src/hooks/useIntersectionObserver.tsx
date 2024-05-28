'use client'

import { LegacyRef } from 'react'
import { PostItemTypes } from '@bitgouel/types';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

interface ParameterTypes {
  listData: PostItemTypes[]
  setSequence: Dispatch<SetStateAction<number>>
}

type ReturnTypes = [LegacyRef<HTMLDivElement> | null, PostItemTypes[]]

export default function useIntersectionObserver({ listData, setSequence }: ParameterTypes): ReturnTypes {
  const scrollTarget = useRef<HTMLDivElement | null>(null)
  const [last, setLast] = useState<number>(null)
  const [list, setList] = useState<PostItemTypes[]>([])

  useEffect(() => {
    if (listData) {
      if (listData?.length)setList((prev) => [...prev, ...listData])
      setLast(listData.at(-1)?.postSequence)
    }
  }, [listData])

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setSequence(last)
      }
    }, { threshold: 1 });

    if (scrollTarget.current) {
      if (listData.length) observer.observe(scrollTarget.current);
      else observer.unobserve(scrollTarget.current)
    }

    return () => {
      if (scrollTarget.current) {
        observer.unobserve(scrollTarget.current);
      }
    };
  }, [last]);

  return [scrollTarget, list];
}