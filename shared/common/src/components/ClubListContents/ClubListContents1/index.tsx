'use client'

import * as S from '../style'
import { Banner1 } from '@bitgouel/common'

const schoolList: string[] = [
  '광주공업고등학교',
  '광주전자공업고등학교',
  '금파공업고등학교',
  '동일미래과학고등학교',
  '숭의과학기술고등학교',
  '전남공업고등학교',
]

const clubList: string[][] = [
  [
    'SMART JOB PROJECT',
    '나의 미래는 내가 주인공이다!',
    '설비의 달인',
    '특수용접 화이팅',
  ],
  ['감성기계', '열정 그 자체'],
  ['레프리'],
  ['놀GO잡GO'],
  ['서전트 스나이퍼', '카-페인팅'],
  ['진짜기계', '핫앤쿨'],
]

const ClubListContents1 = () => {
  return (
    <S.ClubListBanner url={Banner1}>
      <S.ClubListContents>
        <S.ClubValueTitle>미래형 운송기기</S.ClubValueTitle>
        <S.ClubMainTextArea>
          <S.ClubLeftTextArea>
            {schoolList.map((school, idx) => (
              <S.ClubLeftText key={idx}>{school}</S.ClubLeftText>
            ))}
          </S.ClubLeftTextArea>
          <S.ClubRightTextArea>
            {clubList.map((club, idx) => (
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

export default ClubListContents1
