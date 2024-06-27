'use client'

import { Bg2, MainStyle, SettingOut, useModal } from '@bitgouel/common'
import { ScrollListModal } from '@outside/modals'
import SchoolContent from '../SchoolContent'

const ClubBanner = () => {
  const { openModal } = useModal()
  
  return (
    <MainStyle.SlideBg url={Bg2}>
      <MainStyle.BgContainer>
        <MainStyle.PageTitle>취업 동아리 목록</MainStyle.PageTitle>
        <MainStyle.ButtonContainer>
          <MainStyle.SlideButton
            onClick={() => openModal(<ScrollListModal title='학교 선택' children={<SchoolContent />} />)}
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