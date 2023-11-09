import Simbol1 from '../../assets/png/simbol1.png'
import Simbol2 from '../../assets/png/simbol2.png'
import * as S from './style'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Plus, Filter, MegaPhone, Message, Question } from '../../assets'

const Header = () => {
  const router = useRouter()
  const menuList = [
    { kor: '사업소개', link: '/' },
    { kor: '강의', link: '/main/lecture' },
    { kor: '동아리', link: '/main/club' },
    { kor: '게시글', link: '/main/notice' },
  ]

  const [bgColor, setBgColor] = useState<string>('')
  const [simbolNum, setSimbolNum] = useState<any>(Simbol1)
  const [btnColor, setBtnColor] = useState<string>('rgb(255, 255, 255, 0.2)')
  const [borderColor, setborderColor] = useState<string>('')
  const [spanColor, setSpanColor] = useState<string>('#fff')
  const [svgView, setSvgView] = useState<string>('none')
  const [myStatus, setMyStatus] = useState<string>('로그인')

  useEffect(() => {
    setMyStatus(
      localStorage.getItem('Bitgouel-accessToken') ? '내 정보' : '로그인'
    )

    const onScroll = () => {
      const { scrollY } = window
      if (router.pathname === '/main/home') {
        if (scrollY >= 800) {
          setBgColor('#fff')
          setSimbolNum(Simbol2)
          setBtnColor('rgb(209, 209, 209, 1)')
          setborderColor('0.0625rem solid #ebebeb')
          setSpanColor('#288BE1')
        } else {
          setBgColor('')
          setSimbolNum(Simbol1)
          setBtnColor('rgb(255, 255, 255, 0.2)')
          setborderColor('')
          setSpanColor('#fff')
        }
      } else {
        if (scrollY >= 240) {
          setBgColor('#fff')
          setSimbolNum(Simbol2)
          setBtnColor('rgb(209, 209, 209, 1)')
          setborderColor('0.0625rem solid #ebebeb')
          setSpanColor('#288BE1')
          setSvgView('block')
        } else {
          setBgColor('')
          setSimbolNum(Simbol1)
          setBtnColor('rgb(255, 255, 255, 0.2)')
          setborderColor('')
          setSpanColor('#fff')
          setSvgView('none')
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <S.HeaderWrapper bgColor={bgColor} borderColor={borderColor}>
      <S.HeaderContainer>
        <S.SimbolContainer url={simbolNum} />
        <S.MenuWrapper>
          {menuList.map((menu, idx) => (
            <S.MenuItem
              key={idx}
              onClick={() => myStatus === '내 정보' && router.push(menu.link)}
              isSameRoute={router.pathname === menu.link}
              color={spanColor}
            >
              {menu.kor}
            </S.MenuItem>
          ))}
        </S.MenuWrapper>
        <S.ButtonWrapper view={svgView}>
          {router.pathname === '/main/lecture' ? (
            <Plus />
          ) : router.pathname === '/main/notice' ? (
            <MegaPhone />
          ) : null}
          {router.pathname === '/main/lecture' ? (
            <Filter />
          ) : router.pathname === '/main/notice' ? (
            <Message />
          ) : null}
          {router.pathname === '/main/notice' ? <Question /> : null}
        </S.ButtonWrapper>
        <S.LoginButton
          onClick={() =>
            router.push(
              myStatus === '내 정보' ? '/main/lecture' : '/auth/login'
            )
          }
          color={btnColor}
        >
          <span>{myStatus}</span>
        </S.LoginButton>
      </S.HeaderContainer>
    </S.HeaderWrapper>
  )
}
export default Header
