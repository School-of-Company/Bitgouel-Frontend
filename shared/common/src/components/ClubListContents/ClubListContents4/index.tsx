'use client'

import * as S from '../style'
import { Banner4 } from '../../../assets'

const schoolList: string[] = [
  '광주공업고등학교',
  '광주소프트웨어마이스터고등학교',
  '금파공업고등학교',
  '숭의과학기술고등학교',
  '전남공업고등학교',
]

const clubList: string[][] = [
  ['Civil 마스터'],
  ['dev_GSM'],
  ['다이나믹(Dynamic)'],
  ['비상', '캐치어드론'],
  ['스카이드론'],
]

const ClubListContents4 = () => {
  return (
    <S.ClubListBanner url={Banner4}>
      <S.ClubListContents>
        <S.ClubValueTitle>AI 융•복합</S.ClubValueTitle>
        <S.ClubMainTextArea>
          <S.ClubLeftTextArea>
            {schoolList.map((school) => (
              <S.ClubLeftText>{school}</S.ClubLeftText>
            ))}
          </S.ClubLeftTextArea>
          <S.ClubRightTextArea>
            {clubList.map((club) => (
              <S.ClubRightTextLine>
                {club.map((value) => (
                  <S.ClubRightText>{value}</S.ClubRightText>
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
