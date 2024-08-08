'use client'

import {
  Bg6,
  ListManagement,
  MainStyle,
  Plus,
  useModal,
} from '@bitgouel/common'
import { ListManagementContent } from '@outside/components'
import { SchoolModal, ScrollListModal } from '@outside/modals'
import dynamic from 'next/dynamic'

const SchoolList = dynamic(
  () => import('@outside/components/AdminListComponent/SchoolList')
)

const SchoolPage = () => {
  const { openModal } = useModal()

  return (
    <MainStyle.PageWrapper>
      <MainStyle.SlideBg url={Bg6}>
        <MainStyle.BgContainer>
          <MainStyle.PageTitle>등록된 학교</MainStyle.PageTitle>
          <MainStyle.ButtonContainer>
            <MainStyle.SlideButton
              onClick={() => openModal(<SchoolModal type='새로운 학교 생성'/>)}
            >
              <Plus />
              <span>학교등록</span>
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
          <SchoolList />
        </MainStyle.MainContainer>
      </MainStyle.MainWrapper>
    </MainStyle.PageWrapper>
  )
}

export default SchoolPage
