'use client'

import * as S from './style'
import { Bg6 } from '@bitgouel/common'
import { Plus, Minus } from '@bitgouel/common'
import { useRouter } from 'next/navigation'

const UserListPage = () => {
  const { push } = useRouter()

  return (
    <div>
      <S.SlideBg url={Bg6}>
        <S.BgContainer>
          <S.ClubTitle>사용자 명단</S.ClubTitle>
          <S.ButtonContainer>
            <S.ButtonBox
              onClick={() => push('/main/club/student/activity/create')}
            >
              <Plus />
              <span>신규 가입자 명단</span>
            </S.ButtonBox>
            <S.ButtonBox
              onClick={() => push('/main/club/student/activity/create')}
            >
              <Minus />
              <span>탈퇴 예정자 명단</span>
            </S.ButtonBox>
          </S.ButtonContainer>
        </S.BgContainer>
      </S.SlideBg>

      <S.UserListWrapper>
        <S.UserListContainer></S.UserListContainer>
      </S.UserListWrapper>
    </div>
  )
}

export default UserListPage
