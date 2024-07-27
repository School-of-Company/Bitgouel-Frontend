'use client'

import {
  Bg6,
  ListManagement,
  MainStyle,
  Plus,
  useModal,
} from '@bitgouel/common'
import { ListManagementContent } from '@outside/components'
import { CreateCompanyModal, ScrollListModal } from '@outside/modals'
import dynamic from 'next/dynamic'

const CompanyList = dynamic(() => import('@outside/components/CompanyList'))

const CompanyPage = () => {
  const { openModal } = useModal()

  return (
    <MainStyle.PageWrapper>
      <MainStyle.SlideBg url={Bg6}>
        <MainStyle.BgContainer>
          <MainStyle.PageTitle>등록된 기업</MainStyle.PageTitle>
          <MainStyle.ButtonContainer>
            <MainStyle.SlideButton
              onClick={() => openModal(<CreateCompanyModal />)}
            >
              <Plus />
              <span>기업 등록</span>
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
          <CompanyList />
        </MainStyle.MainContainer>
      </MainStyle.MainWrapper>
    </MainStyle.PageWrapper>
  )
}

export default CompanyPage
