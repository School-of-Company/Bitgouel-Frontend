'use client'

import * as S from '../style'
import { Banner4 } from '../../../assets'

const CompanyListContents4 = () => {
  return (
    <S.CompanyListBanner url={Banner4}>
      <S.CompanyListContents>
        <S.CompanyValueTitle>AI융복합</S.CompanyValueTitle>
        <S.CompanyMainTextArea>
          <S.CompanyTextContainer>
            <S.CompanyText>(주)서치</S.CompanyText>
            <S.CompanyText>동아간호학원</S.CompanyText>
            <S.CompanyText>네일온</S.CompanyText>
            <S.CompanyText>더이인나라</S.CompanyText>
            <S.CompanyText>뉴디헤어</S.CompanyText>
            <S.CompanyText>특수전사령부</S.CompanyText>
            <S.CompanyText>해병대</S.CompanyText>
          </S.CompanyTextContainer>
        </S.CompanyMainTextArea>
      </S.CompanyListContents>
    </S.CompanyListBanner>
  )
}

export default CompanyListContents4
