'use client'

import * as S from './style'
import Image from 'next/image'
import JEONNAM_TECHNICAL_HIGH_SCHOOL from '../../assets/png/schoolSymbols/JEONNAM_TECHNICAL_HIGH_SCHOOL.png'

const SchoolIntro = () => {
  return (
    <S.SchoolIntroWrapper>
      <S.MainWrapperFront>
        <S.TextContainerFront>
          <S.SubText>II. 공업계열</S.SubText>
          <S.TitleText>전남공업고등학교</S.TitleText>
        </S.TextContainerFront>
        <S.ImgWrapper>
          <Image src={JEONNAM_TECHNICAL_HIGH_SCHOOL} alt='전남공업고등학교' />
        </S.ImgWrapper>
      </S.MainWrapperFront>
      <S.MainWrapperBack>
        <S.TextContainerBack>
          <S.SubText>II. 공업계열</S.SubText>
          <S.TitleText>전남공업고등학교</S.TitleText>
        </S.TextContainerBack>
        <S.ValueTextBox>
          <span>
            건축인테리어과 <br />
            자동차과 <br />
            스마트드론전자과 <br />
            전기과 조리제빵과 <br />
            토탈뷰티과
          </span>
        </S.ValueTextBox>
      </S.MainWrapperBack>
    </S.SchoolIntroWrapper>
  )
}
export default SchoolIntro
