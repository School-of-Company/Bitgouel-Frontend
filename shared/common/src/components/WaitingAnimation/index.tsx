'use client'
import { Loading } from '@bitgouel/common'
import { LoadingAnimationProps } from '@bitgouel/types'
import Image from 'next/image'
import * as S from './style'

const WaitingAnimation = ({ title }: LoadingAnimationProps) => {
  return (
    <S.WaitingAnimationWrapper>
      <span>{title} 불러오는 중</span>
      <Image src={Loading} alt='로딩 중' />
    </S.WaitingAnimationWrapper>
  )
}

export default WaitingAnimation
