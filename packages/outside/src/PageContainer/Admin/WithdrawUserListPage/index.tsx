'use client'

import {
  Bg6,
  MainStyle,
  PeopleCircle,
  Plus
} from '@bitgouel/common'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'

const WithdrawUserList = dynamic(() => import('../../../components/WithdrawUserContainter'))

const WithdrawUserListPage = () => {
  const { push } = useRouter()

  return (
    <MainStyle.PageWrapper>
      <MainStyle.SlideBg url={Bg6}>
        <MainStyle.BgContainer>
          <MainStyle.PageTitle>탈퇴 예정자 명단</MainStyle.PageTitle>
          <MainStyle.ButtonContainer>
            <MainStyle.SlideButton onClick={() => push('/main/admin')}>
              <PeopleCircle />
              <span>사용자 명단</span>
            </MainStyle.SlideButton>
            <MainStyle.SlideButton onClick={() => push('/main/admin/new')}>
              <Plus />
              <span>신규 가입자 명단</span>
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
