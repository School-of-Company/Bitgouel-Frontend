'use client'

import * as S from './style'
import { HomeStyle, Agency1, Agency2, Agency3, Agency4 } from '@bitgouel/common'
import Image from 'next/image'

const blueArr: ['500', '400', '300', '200', '100'] = [
  '500',
  '400',
  '300',
  '200',
  '100',
]

const Section7 = () => {
  return (
    <S.AgencyIntroContainer>
      <HomeStyle.SemiTitleBox>
        <HomeStyle.SubTitleSub>혁신지구와 함께하는</HomeStyle.SubTitleSub>
        <HomeStyle.SubTitleMain>유관 기관 소개</HomeStyle.SubTitleMain>
      </HomeStyle.SemiTitleBox>
      <S.AgencyIntroList>
        <S.AgencyIntroItem>
          <S.AgencyValueName color={blueArr[0]}>
            미래형
            <br />
            운송기기
          </S.AgencyValueName>
          <S.AgencyNameBox>
            <Image src={Agency1} alt='Agency1' />
            <S.AgencyName>(재)광주그린카진흥원</S.AgencyName>
          </S.AgencyNameBox>
        </S.AgencyIntroItem>
        <S.AgencyIntroItem>
          <S.AgencyValueName color={blueArr[1]}>
            에너지
            <br />
            산업
          </S.AgencyValueName>
          <S.AgencyNameBox>
            <Image src={Agency2} alt='Agency2' />
            <S.AgencyName>에너지밸리기업개발원</S.AgencyName>
          </S.AgencyNameBox>
        </S.AgencyIntroItem>
      </S.AgencyIntroList>
      <S.AgencyIntroList>
        <S.AgencyIntroItem>
          <S.AgencyValueName color={blueArr[2]}>
            의료
            <br />
            헬스케어
          </S.AgencyValueName>
          <S.AgencyNameBox>
            <Image src={Agency3} alt='Agency3' priority />
            <S.AgencyName>(사)한국평생교육연합회</S.AgencyName>
          </S.AgencyNameBox>
        </S.AgencyIntroItem>
        <S.AgencyIntroItem>
          <S.AgencyValueName color={blueArr[3]}>
            AI
            <br />
            융복합
          </S.AgencyValueName>
          <S.AgencyNameBox>
            <Image src={Agency4} alt='Agency4' priority />
            <S.AgencyName>(사)스마트인재개발원</S.AgencyName>
          </S.AgencyNameBox>
        </S.AgencyIntroItem>
        <S.AgencyIntroItem>
          <S.AgencyValueName color={blueArr[4]}>
            문화
            <br />
            산업
          </S.AgencyValueName>
          <S.AgencyNameBox>
            <S.AgencyName>
              에너지밸리기업개발원
              <br />
              (재)광주정보문화산업진흥원
              <br />
              광주광역시청소년삶디자인센터
              <br />
            </S.AgencyName>
          </S.AgencyNameBox>
        </S.AgencyIntroItem>
      </S.AgencyIntroList>
    </S.AgencyIntroContainer>
  )
}

export default Section7
