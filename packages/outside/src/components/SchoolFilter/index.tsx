'use client'

import { Bg2, SettingOut, useModal } from '@bitgouel/common'

import { SchoolFilterModal } from '@/modals'

import * as S from './style'

const SchoolFilter = () => {
  const { openModal } = useModal()
  return (
    <S.SlideBg url={Bg2}>
      <S.BgContainer>
        <S.Title>취업 동아리 목록</S.Title>
        <S.ButtonContainer>
          <S.ClubButton onClick={() => openModal(<SchoolFilterModal />)}>
            <SettingOut />
            <span>학교 선택</span>
          </S.ClubButton>
        </S.ButtonContainer>
      </S.BgContainer>
    </S.SlideBg>
  )
}

export default SchoolFilter
