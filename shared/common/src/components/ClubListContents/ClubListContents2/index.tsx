'use client'

import * as S from '../style'
import { Banner2 } from '@bitgouel/common'

const schoolList: string[] = [
  '숭의과학기술고등학교',
  '동일미래과학고등학교',
  '광주전자공업고등학교',
]

const clubList: string[][] = [
  ['볼트와 암페어'],
  ['진로맵'],
  ['ACT&ECT', 'Tesla', '전기가 미래다', '전자 히어로스'],
]

const ClubListContents2 = () => {
  return (
    <S.ClubListBanner url={Banner2}>
      <S.ClubListContents>
        <S.ClubValueTitle>에너지산업</S.ClubValueTitle>
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

export default ClubListContents2
