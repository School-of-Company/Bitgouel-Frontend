'use client'

import * as S from '../style'
import { Banner2 } from '../../../assets'

const schoolList: string[] = [
  '광주공업고등학교',
  '광주자동화설비공업고등학교',
  '광주전자공업고등학교',
  '금파공업고등학교',
  '동일미래과학고등학교',
  '숭의과학기술고등학교',
]

const clubList: string[][] = [
  [
    '전기가 미래다',
    '전자 어벤져',
    '전자 히어로스'
  ],
  ['HMI 동아리', '마취제', '빛go job go', '취업진로 동아리'],
  ['블라썸(blossom)', '유선통신', '전기꿈나무'],
  ['믿고잡고'],
  ['드림온', '볼트와암페어'],
  ['에너지지키미'],
]

const ClubListContents2 = () => {
  return (
    <S.ClubListBanner url={Banner2}>
      <S.ClubListContents>
        <S.ClubValueTitle>에너지산업</S.ClubValueTitle>
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

export default ClubListContents2