'use client'

import { useEffect, useState } from 'react'
import {
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  Arrow,
  Sequence,
} from '@bitgouel/common'
import * as S from './style'

const Section1 = () => {
  const [bgNum, setBgNum] = useState(2)
  const imageArr = [Slide1, Slide2, Slide3, Slide4]

  useEffect(() => {
    const background = setInterval(() => {
      const random = Math.ceil(Math.random() * 4) - 1
      setBgNum(random)
    }, 5000)
    return () => clearInterval(background)
  }, [])

  return (
    <>
      <picture>
        <S.SlideBg url={imageArr[bgNum]}>
          <S.BgContainer>
            <S.HomeTitle>
              빛고을 직업교육 혁신지구
              <br />
              사업 소개
            </S.HomeTitle>
            <Sequence />
          </S.BgContainer>
          <S.ViewContainer>
            <S.View>
              <Arrow />
              둘러보기
            </S.View>
          </S.ViewContainer>
        </S.SlideBg>
      </picture>
    </>
  )
}

export default Section1
