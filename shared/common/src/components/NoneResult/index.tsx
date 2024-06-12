'use client'
import { WhiteBox } from '@bitgouel/common'
import * as S from './style'

const NoneResult = ({ notDataTitle }: { notDataTitle: string }) => {
  return (
    <S.NoneResultWrapper>
      <S.NoneResultContainer>
        <WhiteBox />
        <span>{notDataTitle} 없습니다</span>
      </S.NoneResultContainer>
    </S.NoneResultWrapper>
  )
}

export default NoneResult
