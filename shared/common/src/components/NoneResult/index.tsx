'use client'
import { WhiteBox } from '@bitgouel/common'
import * as S from './style'

const NoneResult = () => {
  return (
    <S.NoneResultWrapper>
      <S.NoneResultContainer>
        <WhiteBox />
        <span>검색 결과가 없습니다</span>
      </S.NoneResultContainer>
    </S.NoneResultWrapper>
  )
}

export default NoneResult
