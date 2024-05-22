'use client'

import * as S from '../style'
import { Banner2 } from '@bitgouel/common'

const companyList: string[] = [
  '(유)삼환',
  '(주)휘라포토닉스',
  '(주)스위코진광',
  'LG이노텍(주)',
  '(주)유진테크노',
  '(주)LCM에너지솔루션',
  '동양통상',
  '주식회사 금철',
  '주식회사 칼선',
  '(주)남양에스티엔',
  '주식회사 유니컴퍼니',
  '제이제이파트너스(주)',
  '인텍전기전자',
]

const CompanyListContents2 = () => {
  return (
    <S.CompanyListBanner url={Banner2}>
      <S.CompanyListContents>
        <S.CompanyValueTitle>에너지산업</S.CompanyValueTitle>
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

export default CompanyListContents2
