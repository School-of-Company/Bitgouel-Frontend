'use client'

import { useEffect, useState } from 'react'
import { Slide1, Slide2, Slide3, Slide4 } from '@bitgouel/common'
import * as S from './style'

const ErrorPage = () => {
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
    <S.ErrorPageWrapper url={imageArr[bgNum]}>
      <S.ErrorContainer>
        <S.ErrorTextContainer>
          <b>404</b>
          <span>요청하신 페이지를 찾을 수 없습니다</span>
          <span>입력하신 주소를 확인해 주세요</span>
        </S.ErrorTextContainer>
        <S.BackButton>이전 페이지로</S.BackButton>
      </S.ErrorContainer>
    </S.ErrorPageWrapper>
  )
}

export default ErrorPage
