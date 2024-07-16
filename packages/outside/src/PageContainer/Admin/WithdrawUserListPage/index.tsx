'use client'

import {
  Bg6,
  ListManagement,
  MainStyle,
  useModal
} from '@bitgouel/common'
import { ListManagementContent } from '@outside/components'
import { ScrollListModal } from '@outside/modals'
import dynamic from 'next/dynamic'

const WithdrawUserList = dynamic(() => import('@outside/components/AdminListComponent/WithdrawUserList'))

const WithdrawUserListPage = () => {
  const { openModal } = useModal()

  return (
    <MainStyle.PageWrapper>
      <MainStyle.SlideBg url={Bg6}>
        <MainStyle.BgContainer>
          <MainStyle.PageTitle>탈퇴 예정자 명단</MainStyle.PageTitle>
          <MainStyle.ButtonContainer>
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
          <WithdrawUserList />
        </MainStyle.MainContainer>
      </MainStyle.MainWrapper>
    </MainStyle.PageWrapper>
  )
}

export default WithdrawUserListPage
