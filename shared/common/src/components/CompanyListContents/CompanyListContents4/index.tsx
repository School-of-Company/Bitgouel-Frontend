'use client'

import * as S from '../style'
import { Banner4 } from '../../../assets'

const companyList: string[] = [
  '(주)서치',
  '동아간호학원',
  '네일온',
  '더이인나라',
  '뉴디헤어',
  '특수전사령부',
  '해병대',
]

const CompanyListContents4 = () => {
  return (
    <S.CompanyListBanner url={Banner4}>
      <S.CompanyListContents>
        <S.CompanyValueTitle>AI융복합</S.CompanyValueTitle>
        <S.CompanyMainTextArea>
          <S.CompanyTextContainer>
            {companyList.map((company, idx) => (
              <S.CompanyText key={idx}>{company}</S.CompanyText>
            ))}
          </S.CompanyTextContainer>
        </S.CompanyMainTextArea>
      </S.CompanyListContents>
    </S.CompanyListBanner>
  )
}

export default CompanyListContents4
