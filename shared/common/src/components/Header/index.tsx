'use client'

import * as S from './style'
import Symbol1 from '../../assets/png/symbol1.png'
import Symbol2 from '../../assets/png/symbol2.png'

const Header = () => {
  const menuList = [
    { kor: '사업소개' },
    { kor: '강의' },
    { kor: '동아리' },
    { kor: '게시글' },
  ]

  return (
    <S.HeaderWrapper>
      <S.MenuContainer>
        <S.Symbol url={Symbol1} />
        <S.MenuList>
          {menuList.map((menu, idx) => (
            <S.MenuItem key={idx}>{menu.kor}</S.MenuItem>
          ))}
        </S.MenuList>
      </S.MenuContainer>
    </S.HeaderWrapper>
  )
}
export default Header
