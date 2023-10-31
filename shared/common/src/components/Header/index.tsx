import * as S from './style'
import Image from 'next/image'
import Simbol from '../../assets/png/HeaderSimple.png'
import React from 'react'

const Header = () => {
  return (
    <S.HeaderWrapper>
      <S.HeaderContainer>
        <Image width={38} height={38} src={Simbol} alt='header simbol'></Image>
        <S.MenuWrapper>
          <span>사업소개</span>
          <span>강의</span>
          <span>동아리</span>
          <span>게시글</span>
        </S.MenuWrapper>
        <S.LoginBtn>
          <span>로그인</span>
        </S.LoginBtn>
      </S.HeaderContainer>
    </S.HeaderWrapper>
  )
}
export default Header
