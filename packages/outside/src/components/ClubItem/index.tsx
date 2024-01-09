'use client'

import { InClubArrow } from '@bitgouel/common/src/assets'
import * as S from './style'

const ClubItem = () => {
  return (
    <S.ClubListItemBox>
      <S.ClubName>dev GSM</S.ClubName>
      <S.InClubArrowButton>
        <span>내부인원보기</span>
        <InClubArrow />
      </S.InClubArrowButton>
    </S.ClubListItemBox>
  )
}

export default ClubItem
