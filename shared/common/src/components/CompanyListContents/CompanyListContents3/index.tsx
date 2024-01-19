'use client'

import * as S from '../style'
import { Banner3 } from '../../../assets'

const CompanyListContents3 = () => {
  return (
    <S.CompanyListBanner url={Banner3}>
      <S.CompanyListContents>
        <S.CompanyValueTitle>의료 헬스케어</S.CompanyValueTitle>
        <S.CompanyMainTextArea>
          <S.CompanyTextContainer>
            <S.CompanyText>엠코테크놀로지코리아(주)</S.CompanyText>
            <S.CompanyText>(주)여보야</S.CompanyText>
            <S.CompanyText>인디제이</S.CompanyText>
            <S.CompanyText>지니소프트</S.CompanyText>
            <S.CompanyText>건주이앤씨</S.CompanyText>
            <S.CompanyText>연제측량기술원</S.CompanyText>
            <S.CompanyText>드론캐스트</S.CompanyText>
          </S.CompanyTextContainer>
        </S.CompanyMainTextArea>
      </S.CompanyListContents>
    </S.CompanyListBanner>
  )
}

export default CompanyListContents3
