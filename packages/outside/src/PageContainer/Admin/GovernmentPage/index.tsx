'use client'

import {
  Bg6,
  ListManagement,
  MainStyle,
  Plus,
  useModal,
} from '@bitgouel/common'
import { ListManagementContent } from '@outside/components'
import { CreateGovernmentModal, ScrollListModal } from '@outside/modals'
import dynamic from 'next/dynamic'

const GovernmentList = dynamic(
  () => import('@outside/components/AdminListComponent/GovernmentList')
)

const GovernmentPage = () => {
  const { openModal } = useModal()

  return (
    <MainStyle.PageWrapper>
      <MainStyle.SlideBg url={Bg6}>
        <MainStyle.BgContainer>
          <MainStyle.PageTitle>등록된 유관기관</MainStyle.PageTitle>
          <MainStyle.ButtonContainer>
            <MainStyle.SlideButton
              onClick={() => openModal(<CreateGovernmentModal />)}
            >
              <Plus />
              <span>유관기관 등록</span>
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
          <GovernmentList />
        </MainStyle.MainContainer>
      </MainStyle.MainWrapper>
    </MainStyle.PageWrapper>
  )
}

export default GovernmentPage
