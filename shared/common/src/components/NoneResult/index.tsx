'use client'
import { WhiteBox } from '@bitgouel/common'
import { NoneResultProps } from '@bitgouel/types'
import * as S from './style'

const NoneResult = ({ title }: NoneResultProps) => {
  return (
    <S.NoneResultWrapper>
      <S.NoneResultContainer>
        <WhiteBox />
        <span>{title} 없습니다</span>
      </S.NoneResultContainer>
    </S.NoneResultWrapper>
  )
}

export default NoneResult
