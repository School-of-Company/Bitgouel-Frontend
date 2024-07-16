'use client'

import { Bg6, ListManagement, MainStyle, useModal } from '@bitgouel/common'
import { ListManagementContent } from '@outside/components'
import { ScrollListModal } from '@outside/modals'
import dynamic from 'next/dynamic'

const NewUserList = dynamic(() => import('@outside/components/AdminListComponent/NewUserList'))

const NewUserListPage = () => {
  const { openModal } = useModal()

  return (
    <MainStyle.PageWrapper>
      <MainStyle.SlideBg url={Bg6}>
        <MainStyle.BgContainer>
          <MainStyle.PageTitle>신규 가입자 명단</MainStyle.PageTitle>
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
          <NewUserList />
        </MainStyle.MainContainer>
      </MainStyle.MainWrapper>
    </MainStyle.PageWrapper>
  )
}

export default NewUserListPage
