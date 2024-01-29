'use client'

import * as S from '../style'
import { Banner3 } from '../../../assets'

const companyList = [
  '엠코테크놀로지코리아(주)',
  '(주)여보야',
  '인디제이',
  '지니소프트',
  '건주이앤씨',
  '연제측량기술원',
  '드론캐스트',
]

const CompanyListContents3 = () => {
  return (
    <S.CompanyListBanner url={Banner3}>
      <S.CompanyListContents>
        <S.CompanyValueTitle>의료 헬스케어</S.CompanyValueTitle>
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

export default CompanyListContents3
