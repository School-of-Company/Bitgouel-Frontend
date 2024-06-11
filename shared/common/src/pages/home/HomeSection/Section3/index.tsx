'use client'

import * as S from './style'
import { SchoolIntro, HomeStyle, SchoolIntroObjects } from '@bitgouel/common'

const Section3 = () => {
  return (
    <S.SchoolListContainer>
      <HomeStyle.SemiTitleBox>
        <HomeStyle.SubTitleSub>
          직업계고 계열별 학교현황 및 진로
        </HomeStyle.SubTitleSub>
        <HomeStyle.SubTitleMain>직업계고 소개</HomeStyle.SubTitleMain>
      </HomeStyle.SemiTitleBox>
      <S.SchoolIntroWrapper>
        <S.SchoolIntroListContainer>
          <S.SchoolIntroListLeftFirst>
            {SchoolIntroObjects.schoolIntroFirst.map((intro, idx) => (
              <SchoolIntro key={idx} item={intro} />
            ))}
          </S.SchoolIntroListLeftFirst>
          <S.SchoolIntroListLeftSecond>
            {SchoolIntroObjects.schoolIntroFirst.map((intro, idx) => (
              <SchoolIntro key={idx} item={intro} />
            ))}
          </S.SchoolIntroListLeftSecond>
        </S.SchoolIntroListContainer>
        <S.SchoolIntroListContainer>
          <S.SchoolIntroListRightFirst>
            {SchoolIntroObjects.schoolIntroSecond.map((intro, idx) => (
              <SchoolIntro key={idx} item={intro} />
            ))}
          </S.SchoolIntroListRightFirst>
          <S.SchoolIntroListRightSecond>
            {SchoolIntroObjects.schoolIntroSecond.map((intro, idx) => (
              <SchoolIntro key={idx} item={intro} />
            ))}
          </S.SchoolIntroListRightSecond>
        </S.SchoolIntroListContainer>
      </S.SchoolIntroWrapper>
    </S.SchoolListContainer>
  )
}

export default Section3
