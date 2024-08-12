'use client'

import * as S from '../style'
import { Banner1 } from '@bitgouel/common'

const schoolList: string[] = ['숭의과학기술고등학교', '광주전자공업고등학교']

const clubList: string[][] = [
  ['카페인팅'],
  ['열정 그자체', '감성 기계', '설비의 달인', '진짜 기계'],
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
