'use client'

import * as S from '../style'
import { Banner4 } from '@bitgouel/common'

const schoolList: string[] = [
  '숭의과학기술고등학교',
  '광주공업고등학교',
  '전남공업고등학교',
  '광주소프트웨어마이스터고등학교',
]

const clubList: string[][] = [
  ['캐치 어 드론'],
  ['Civil 마스터'],
  ['스카이 드론'],
  ['dev_GSM', 'SMART_IoT', '더모먼트'],
]

const ClubListContents4 = () => {
  return (
    <S.ClubListBanner url={Banner4}>
      <S.ClubListContents>
        <S.ClubValueTitle>AI 융•복합</S.ClubValueTitle>
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

export default ClubListContents4
