'use client'

import * as S from './style'
import { Bg6, Check, NewUserItem, PeopleCircle } from '@bitgouel/common'
import { Plus } from '@bitgouel/common'
import { useRouter } from 'next/navigation'

const QuitUserListPage = () => {
  const { push } = useRouter()

  return (
    <div>
      <S.SlideBg url={Bg6}>
        <S.BgContainer>
          <S.ClubTitle>탈퇴 예정자 명단</S.ClubTitle>
          <S.ButtonContainer>
            <S.ButtonBox onClick={() => push('/main/admin')}>
              <PeopleCircle />
              <span>사용자 명단</span>
            </S.ButtonBox>
            <S.ButtonBox onClick={() => push('/main/admin/new')}>
              <Plus />
              <span>신규 가입자 명단</span>
            </S.ButtonBox>
          </S.ButtonContainer>
        </S.BgContainer>
      </S.SlideBg>

      <S.UserListWrapper>
        <S.UserListContainer>
          <S.RemarkBox>
            <div>
              <S.Remark>선택</S.Remark>
              <S.Remark>이름</S.Remark>
              <S.Remark>직업</S.Remark>
            </div>
            <div>
              <S.AloneCheckBox>
                <Check />
                선택 탈퇴
              </S.AloneCheckBox>
              <S.WithCheckBox>
                <PeopleCircle />
                전체 탈퇴
              </S.WithCheckBox>
            </div>
          </S.RemarkBox>
          <NewUserItem />
        </S.UserListContainer>
      </S.UserListWrapper>
    </div>
  )
}

export default QuitUserListPage
