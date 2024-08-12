'use client'

import * as S from '../style'
import { Banner5 } from '@bitgouel/common'

const schoolList: string[] = [
  '전남여자상업고등학교',
  '숭의과학기술고등학교',
  '광주자연과학고등학교',
  '광주전자공업고등학교',
  '광주공업고등학교',
  '송원여자상업고등학교',
  '전남공업고등학교',
  '광주여자상업고등학교'
]

const clubList: string[][] = [
  ['취업준비 AtoZ', '브레인z'],
  ['아키로드', '내빵네빵', '카페바리'],
  ['DCT', '베이커리 카페 CEO', '우아행', '뉴쿡'],
  ['“M lab” = 메이커 연구소'],
  ['건축연구소'],
  ['클로즈업'],
  ['그린라이트'],
  ['취사모', '소개팅', '금융실무']
]

const ClubListContents5 = () => {
  return (
    <S.ClubListBanner url={Banner5}>
      <S.ClubListContents>
        <S.ClubValueTitle>문화산업</S.ClubValueTitle>
        <S.ClubMainTextArea>
          <S.ClubLeftTextArea>
            {schoolList.map((school, idx) => (
              <S.ClubLeftText key={idx}>{school}</S.ClubLeftText>
            ))}
          </S.ClubLeftTextArea>
          <S.ClubRightTextArea>
            {clubList.map((club ,idx) => (
              <S.ClubRightTextLine key={idx}>
                {club.map((value, idx2) => (
                  <S.ClubRightText key={idx2}>{value}</S.ClubRightText>
                ))}
              </S.ClubRightTextLine>
            ))}
          </S.ClubRightTextArea>
        </S.ClubMainTextArea>
      </S.ClubListContents>
    </S.ClubListBanner>
  )
}

export default ClubListContents5
