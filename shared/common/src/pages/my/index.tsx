'use client'

import { Bg4 } from '../../assets'
import * as S from './style'
import { useGetMy, useDeleteWithDraw } from '@bitgouel/api'
import { roleToKor } from '../../constants'

const MyPage = () => {
  const { data } = useGetMy()
  const { mutate } = useDeleteWithDraw()

  const sliceNumber = (): string => {
    return `${data?.data.phoneNumber.slice(
      0,
      3
    )}-${data?.data.phoneNumber.slice(3, 7)}-${data?.data.phoneNumber.slice(7)}`
  }

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
                <S.Role>
                  {roleToKor[data?.data.authority || 'ROLE_ADMIN']}
                </S.Role>
              </div>
              <div>
                <S.OrganizationName>
                  {data?.data.organization.split('/')[0]}
                </S.OrganizationName>
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
                  <S.LeftText>{sliceNumber()}</S.LeftText>
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
                  <S.WithDrawText onClick={() => mutate()}>
                    회원 탈퇴
                  </S.WithDrawText>
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
