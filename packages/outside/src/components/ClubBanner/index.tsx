'use client'

import { Bg2, MainStyle, SettingOut, useModal } from '@bitgouel/common'
import { SchoolFilterModal } from '@outside/modals'

const ClubBanner = () => {
  const { openModal } = useModal()
  
  return (
    <MainStyle.SlideBg url={Bg2}>
      <MainStyle.BgContainer>
        <MainStyle.PageTitle>취업 동아리 목록</MainStyle.PageTitle>
        <MainStyle.ButtonContainer>
          <MainStyle.SlideButton
            onClick={() => openModal(<SchoolFilterModal />)}
          >
            <SettingOut />
            <span>학교 선택</span>
          </MainStyle.SlideButton>
        </MainStyle.ButtonContainer>
      </MainStyle.BgContainer>
    </MainStyle.SlideBg>
  )
}

export default ClubBanner