'use client'

import * as S from './style'
import listBanner1 from '../../../assets/png/listBanner1.png'

const CompanyListContents1 = () => {
  return (
    <S.CompanyListBanner url={listBanner1}>
      <S.CompanyListContents>
        <S.CompanyValueTitle>미래형 운송기기</S.CompanyValueTitle>
        <S.CompanyMainTextArea>
          <S.CompanyTextContainer>
            <S.CompanyText>보람엔지니어링</S.CompanyText>
            <S.CompanyText>(주)인탑스테크닉</S.CompanyText>
            <S.CompanyText>(주)삼도환경</S.CompanyText>
            <S.CompanyText>에이테크솔루션(주)</S.CompanyText>
            <S.CompanyText>창원종합사격장</S.CompanyText>
            <S.CompanyText>제3함대(해군)</S.CompanyText>
            <S.CompanyText>동양통상</S.CompanyText>
            <S.CompanyText>다이나믹 디자인</S.CompanyText>
            <S.CompanyText>다이나믹 디자인</S.CompanyText>
            <S.CompanyText>다이나믹 디자인</S.CompanyText>
            <S.CompanyText>다이나믹 디자인</S.CompanyText>
            <S.CompanyText>다이나믹 디자인</S.CompanyText>
          </S.CompanyTextContainer>
        </S.CompanyMainTextArea>
      </S.CompanyListContents>
    </S.CompanyListBanner>
  )
}

export default CompanyListContents1
