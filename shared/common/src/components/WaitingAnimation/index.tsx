'use client'
import { Loading } from '@bitgouel/common'
import Image from 'next/image'
import * as S from './style'

const WaitingAnimation = ({ isLoadingTitle }: { isLoadingTitle: string }) => {
  return (
    <S.WaitingAnimationWrapper>
      <span>{isLoadingTitle} 불러오는 중</span>
      <Image src={Loading} alt='로딩 중' />
    </S.WaitingAnimationWrapper>
  )
}

export default WaitingAnimation
