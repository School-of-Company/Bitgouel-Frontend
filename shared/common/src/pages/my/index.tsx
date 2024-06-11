'use client'

import { TokenManager, useDeleteWithDraw, useGetMy, usePostExcelUpload } from '@bitgouel/api'
import { AppropriationModal, Bg4, ChangePwModal, roleToKor, useModal } from '@bitgouel/common'
import { ChangeEvent, useCallback } from 'react'
import { toast } from 'react-toastify'
import * as S from './style'

const MyPage = ({ isAdmin }: { isAdmin: boolean }) => {
  const { openModal } = useModal()
  const tokenManager = new TokenManager()
  const { data } = useGetMy()
  const { mutate: withdraw } = useDeleteWithDraw({ onSuccess: () => {
    tokenManager.removeTokens()
    window.location.replace(`/`)
    toast.success('계정을 탈퇴하셨습니다')
  }})
  const { mutate: upload } = usePostExcelUpload()

  const onFileUpload = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const excelFile: File | string = e.currentTarget.files
      ? e.currentTarget.files[0]
      : ''
    const formData = new FormData()
    formData.append('file', excelFile)
    upload(formData)
  }, [])
  
  const onWithdraw = () => {
    openModal(
      <AppropriationModal 
        isApprove={false}
        question='회원탈퇴를 하시겠습니까?'
        purpose='탈퇴하기'
        title=''
        onAppropriation={() => withdraw()}
      />
    )
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
                <S.Name>{data?.name}</S.Name>
                <S.Role>{roleToKor[data?.authority || 'ROLE_ADMIN']}</S.Role>
              </div>
              <div>
                <S.OrganizationName>
                  {data?.organization.split('/')[0]}
                </S.OrganizationName>
                <S.SubEnter>소속</S.SubEnter>
              </div>
              <div>
                <S.SubId>{data?.organization.split('/')[1]}</S.SubId>
              </div>
              <div>
                <S.SubId>{data?.organization.split('/')[2]}</S.SubId>
              </div>
            </S.MyIdentifyWrapper>
            <S.AccountWrapper>
              <S.MyTitle>계정 정보</S.MyTitle>
              <S.AccountContainer>
                <div>
                  <S.LeftText>{data?.email}</S.LeftText>
                  <S.RightText>이메일</S.RightText>
                </div>
                <div>
                  <S.LeftText>{data?.phoneNumber}</S.LeftText>
                  <S.RightText>전화번호</S.RightText>
                </div>
              </S.AccountContainer>
            </S.AccountWrapper>
            <S.SharedLine />
            <S.AccountSettingWrapper>
              <S.MyTitle>계정 설정</S.MyTitle>
              <S.AccountSettingContainer>
                {isAdmin && (
                  <S.AccountSettingLine>
                    <S.LeftText>학생정보 일괄 삽입</S.LeftText>
                    <S.LineRightText htmlFor='excelUpload'>
                      <input
                        id='excelUpload'
                        type='file'
                        accept='.xlsx, .xls, .csv'
                        onChange={onFileUpload}
                      />
                      엑셀 파일 업로드
                    </S.LineRightText>
                  </S.AccountSettingLine>
                )}
                <S.SharedLine />
                <S.AccountSettingLine>
                  <S.LeftText>회원정보 수정</S.LeftText>
                  <S.LineRightText onClick={() => openModal(<ChangePwModal />)}>
                    비밀번호 변경
                  </S.LineRightText>
                </S.AccountSettingLine>
                <S.SharedLine />
                <S.AccountSettingLine>
                  <S.LeftText>회원 탈퇴</S.LeftText>
                  <S.WithDrawText onClick={() => onWithdraw()}>
                    회원 탈퇴
                  </S.WithDrawText>
                </S.AccountSettingLine>
              </S.AccountSettingContainer>
            </S.AccountSettingWrapper>
          </S.MyIdentify>
        </S.WhiteBox>
      </S.BlackBox>
    </S.MyPageWrapper>
  )
}

export default MyPage
