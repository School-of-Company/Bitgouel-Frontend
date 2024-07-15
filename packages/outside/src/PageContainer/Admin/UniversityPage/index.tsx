'use client'

import { Bg6, ListManagement, MainStyle, Plus, useModal } from '@bitgouel/common'
import { ListManagementContent } from '@outside/components'
import { ScrollListModal } from '@outside/modals'
import dynamic from 'next/dynamic'

const UniversityList = dynamic(() => import('@outside/components/UniversityList'))

const UniversityPage = () => {
  const { openModal } = useModal()

  return (
    <MainStyle.PageWrapper>
      <MainStyle.SlideBg url={Bg6}>
        <MainStyle.BgContainer>
          <MainStyle.PageTitle>등록된 대학</MainStyle.PageTitle>
          <MainStyle.ButtonContainer>
            <MainStyle.SlideButton>
              <Plus />
              <span>대학등록</span>
            </MainStyle.SlideButton>
            <MainStyle.SlideButton
              onClick={() =>
                openModal(
                  <ScrollListModal
                    title='다른 목록 관리'
                    children={<ListManagementContent />}
                  />
                )
              }
            >
              <ListManagement />
              <span>다른 목록 관리</span>
            </MainStyle.SlideButton>
          </MainStyle.ButtonContainer>
        </MainStyle.BgContainer>
      </MainStyle.SlideBg>
      <MainStyle.MainWrapper>
        <MainStyle.MainContainer>
          <UniversityList />
        </MainStyle.MainContainer>
      </MainStyle.MainWrapper>
    </MainStyle.PageWrapper>
  )
}

export default UniversityPage
