'use client'

import Bg4 from '../../assets/png/mainBg4.png'
import * as S from './style'

const MyPage = () => {
  return (
    <S.MyPageWrapper url={Bg4}>
      <S.BlackBox>
        <S.WhiteBox>
          <S.ClipContainer>
            <S.Clip />
          </S.ClipContainer>
          <S.MyIdentify>
            <div>
              <div>
                <S.Name>홍길동</S.Name>
                <S.Role>학생</S.Role>
              </div>
              <div>
                <S.SchoolName>광주 소프트웨어 마이스터 고등학교</S.SchoolName>
                <S.SubEnter>소속</S.SubEnter>
              </div>
            </div>
            <S.AccountWrapper>
              <S.MyTitle>계정 정보</S.MyTitle>
              <S.AccountContainer>
                <div>
                  <S.LeftText>bitgoeul@gmail.com</S.LeftText>
                  <S.RightText>이메일</S.RightText>
                </div>
                <div>
                  <S.LeftText>010-0000-0000</S.LeftText>
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
