'use client'

import * as S from '../style'
import { Banner5 } from '../../../assets'

const companyList: string[] = [
  '(주)광주은행',
  '파란손해사정(주)',
  '한국조경수협회',
  '(사)일도시연구소',
  '24시노아동물메디컬센터',
  '광주동물메디컬센터',
  '(주)브레드세븐',
  '파파레브',
  '소맥베이커리',
  '스튜디오버턴',
  '공감플리서',
  '(주)195F&B',
  '가매',
  '파운데이',
]

const CompanyListContents5 = () => {
  return (
    <S.CompanyListBanner url={Banner5}>
      <S.CompanyListContents>
        <S.CompanyValueTitle>문화산업</S.CompanyValueTitle>
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

export default CompanyListContents5
