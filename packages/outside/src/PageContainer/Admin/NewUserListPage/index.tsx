'use client'

import * as S from './style'
import { Bg6, Check, NewUserItem, People, PeopleCircle } from '@bitgouel/common'
import { Minus } from '@bitgouel/common'
import { useRouter } from 'next/navigation'

const NewUserListPage = () => {
  const { push } = useRouter()

  return (
    <div>
      <S.SlideBg url={Bg6}>
        <S.BgContainer>
          <S.ClubTitle>신규 가입자 명단</S.ClubTitle>
          <S.ButtonContainer>
            <S.ButtonBox onClick={() => push('/main/admin')}>
              <PeopleCircle banner={true} />
              <span>사용자 명단</span>
            </S.ButtonBox>
            <S.ButtonBox onClick={() => push('/main/admin/quit')}>
              <Minus />
              <span>탈퇴 예정자 명단</span>
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
            <S.SelectBoxContainer>
              <S.SelectBox type='all'>
                <PeopleCircle banner={false} />
                전체 선택
              </S.SelectBox>
              <S.SelectBox type='approve'>
                <Check />
                선택 수락
              </S.SelectBox>
              <S.SelectBox type='reject'>
                <Check />
                선택 거절
              </S.SelectBox>
            </S.SelectBoxContainer>
          </S.RemarkBox>
          <NewUserItem />
        </S.UserListContainer>
      </S.UserListWrapper>
    </div>
  )
}

export default NewUserListPage
