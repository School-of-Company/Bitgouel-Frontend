'use client'

import * as S from '../style'
import { Banner1 } from '../../../assets'

const companyList: string[] = [
  '보람엔지니어링',
  '(주)인탑스테크닉',
  '(주)삼도환경',
  '에이테크솔루션(주)',
  '창원종합사격장',
  '제3함대(해군)',
  '동양통상',
  '다이나믹 디자인',
]

const CompanyListContents1 = () => {
  return (
    <S.CompanyListBanner url={Banner1}>
      <S.CompanyListContents>
        <S.CompanyValueTitle>미래형 운송기기</S.CompanyValueTitle>
        <S.CompanyMainTextArea>
          <S.CompanyTextContainer>
            {companyList.map((company) => (
              <S.CompanyText>{company}</S.CompanyText>
            ))}
          </S.CompanyTextContainer>
        </S.CompanyMainTextArea>
      </S.CompanyListContents>
    </S.CompanyListBanner>
  )
}

export default CompanyListContents1
