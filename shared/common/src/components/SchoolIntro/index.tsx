'use client'

import * as S from './style'
import Image from 'next/image'

interface Type {
  item: {
    number: string
    name: string
    type: string
    img: string
    departments: string[]
  }
}

const SchoolIntro = ({ item }: Type) => {
  return (
    <S.SchoolIntroWrapper>
      <S.MainWrapperFront>
        <S.TextContainerFront>
          <S.SubText>
            {item.number}. {item.type + '계열'}
          </S.SubText>
          <S.TitleText>{item.name}</S.TitleText>
        </S.TextContainerFront>
        <S.ImgWrapper>
          {item.name === '광주소프트웨어마이스터고등학교' ? (
            <Image src={item.img} alt='school' width={100} height={50} />
          ) : (
            <Image src={item.img} alt='school' width={80} height={80} />
          )}
        </S.ImgWrapper>
      </S.MainWrapperFront>
      <S.MainWrapperBack>
        <S.TextContainerBack>
          <S.SubText>
            {item.number}. {item.type + '계열'}
          </S.SubText>
          <S.TitleText>{item.name}</S.TitleText>
        </S.TextContainerBack>
        <S.ValueTextBox>
          <span>
            {item.departments.map((department) => (
              <>
                {department}
                <br />
              </>
            ))}
          </span>
        </S.ValueTextBox>
      </S.MainWrapperBack>
    </S.SchoolIntroWrapper>
  )
}
export default SchoolIntro
