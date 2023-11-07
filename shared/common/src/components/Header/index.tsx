import Image from 'next/image'
import Simbol1 from '../../assets/png/simbol1.png'
import Simbol2 from '../../assets/png/simbol2.png'
import * as S from './style'
import { useRouter } from 'next/navigation'
import { useEffect, useState, useCallback } from 'react'

const Header = () => {
  const router = useRouter()
  const menuList = [
    { kor: '사업소개', link: '/main/home' },
    { kor: '강의', link: '/main/lecture' },
    { kor: '동아리', link: '/main/club' },
    { kor: '게시글', link: '/main/notice' },
  ]

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const [bgColor, setBgColor] = useState('')
  const [simbolNum, setSimbolNum] = useState('')
  const [btnColor, setBtnColor] = useState('')

  const onScroll = useCallback(() => {
    const { scrollY } = window
    console.log('scrollY', scrollY)
    if (scrollY >= 800) {
      setBgColor('white')
      setSimbolNum(Simbol2)
      setBtnColor('##D1D1D1')
    } else {
      setBgColor('')
      setSimbolNum(Simbol1)
      setBtnColor('#fff')
    }
  }, [])

  return (
    <S.HeaderWrapper style={{ backgroundColor: bgColor }}>
      <S.HeaderContainer>
        <Image
          width={38}
          height={38}
          src={simbolNum}
          alt='header simbol'
        ></Image>
        <S.MenuWrapper>
          {menuList.map((menu, idx) => (
            <span key={idx} onClick={() => router.push(menu.link)}>
              {menu.kor}
            </span>
          ))}
        </S.MenuWrapper>
        <S.LoginButton
          onClick={() => router.push('/auth/login')}
          style={{ backgroundColor: btnColor }}
        >
          <span>로그인</span>
        </S.LoginButton>
      </S.HeaderContainer>
    </S.HeaderWrapper>
  )
}
export default Header
