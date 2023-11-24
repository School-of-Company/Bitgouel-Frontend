'use client'

import Bg4 from '../../assets/png/mainBg4.png'
import * as S from './style'
import { useGetMy } from '@bitgouel/api'

const MyPage = () => {
  const { data } = useGetMy()
  console.log(data)

  return (
    <S.MyPageWrapper url={Bg4}>
      <S.BlackBox>
        <S.WhiteBox>
          <S.ClipContainer>
            <S.Clip />
          </S.ClipContainer>
          <S.MyIdentify>
            <S.MyIdentifyWrapper>
              <div>
                <S.Name>{data?.data.name}</S.Name>
                <S.Role>{data?.data.authority}</S.Role>
              </div>
              <div>
                <S.SchoolName>{data?.data.organization.split('/')[0]}</S.SchoolName>
                <S.SubEnter>소속</S.SubEnter>
              </div>
              <div>
                <S.SubId>{data?.data.organization.split('/')[1]}</S.SubId>
              </div>
              <div>
                <S.SubId>{data?.data.organization.split('/')[2]}</S.SubId>
              </div>
            </S.MyIdentifyWrapper>
            <S.AccountWrapper>
              <S.MyTitle>계정 정보</S.MyTitle>
              <S.AccountContainer>
                <div>
                  <S.LeftText>{data?.data.email}</S.LeftText>
                  <S.RightText>이메일</S.RightText>
                </div>
                <div>
                  <S.LeftText>{data?.data.phoneNumber}</S.LeftText>
                  <S.RightText>전화번호</S.RightText>
                </div>
              </S.AccountContainer>
            </S.AccountWrapper>
            <S.SharedLine />
            <S.AccountSettingWrapper>
              <S.MyTitle>계정 설정</S.MyTitle>
              <S.AccountSettingContainer>
                <div>
                  <S.LeftText>회원정보 수정</S.LeftText>
                  <S.ModifyText>비밀번호 수정</S.ModifyText>
                </div>
                <S.SharedLine />
                <div>
                  <S.LeftText>회원 탈퇴</S.LeftText>
                  <S.WithDrow>회원 탈퇴</S.WithDrow>
                </div>
              </S.AccountSettingContainer>
            </S.AccountSettingWrapper>
          </S.MyIdentify>
        </S.WhiteBox>
      </S.BlackBox>
    </S.MyPageWrapper>
  )
}

export default MyPage
