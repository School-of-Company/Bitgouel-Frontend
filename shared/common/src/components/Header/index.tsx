import Simbol1 from '../../assets/png/simbol1.png'
import Simbol2 from '../../assets/png/simbol2.png'
import * as S from './style'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Route from 'next/router'
import { useRecoilValue } from 'recoil'
import { HadAccessToken } from '../../atoms'
import { Plus, Filter, MegaPhone, Message, Question } from '../../assets'

const Header = () => {
  const router = useRouter()

  const [mainColor, setMainColor] = useState('')
  const [lectureColor, setLectureColor] = useState('')
  const [clubColor, setClubColor] = useState('')
  const [noticeColor, setNoticeColor] = useState('')

  useEffect(() => {
    if (Route.route === '/main/home') {
      setMainColor(spanColor)
      setLectureColor('')
      setClubColor('')
      setNoticeColor('')
    } else if (Route.route === '/main/lecture') {
      setMainColor('')
      setLectureColor(spanColor)
      setClubColor('')
      setNoticeColor('')
    } else if (Route.route === '/main/club') {
      setMainColor('')
      setLectureColor('')
      setClubColor(spanColor)
      setNoticeColor('')
    } else if (Route.route === '/main/notice') {
      setMainColor('')
      setLectureColor('')
      setClubColor('')
      setNoticeColor(spanColor)
    }
  })

  const menuList = [
    { kor: '사업소개', link: '/main/home', color: mainColor },
    { kor: '강의', link: '/main/lecture', color: lectureColor },
    { kor: '동아리', link: '/main/club', color: clubColor },
    { kor: '게시글', link: '/main/notice', color: noticeColor },
  ]

  const [bgColor, setBgColor] = useState('')
  const [simbolNum, setSimbolNum] = useState(Simbol1)
  const [btnColor, setBtnColor] = useState('rgb(255, 255, 255, 0.2)')
  const [borderColor, setborderColor] = useState('')
  const [spanColor, setSpanColor] = useState('#fff')
  const [svgView, setSvgView] = useState('none')
  const [myStatus, setMyStatus] = useState('로그인')
  const [route, setRoute] = useState('')

  useEffect(() => {
    setMyStatus(
      localStorage.getItem('Bitgouel-accessToken') ? '내 정보' : '로그인'
      )

    setRoute(Route.route)
    const onScroll = () => {
      const { scrollY } = window
      if (Route.route === '/main/home') {
        if (scrollY >= 800) {
          setBgColor('#fff')
          setSimbolNum(Simbol2)
          setBtnColor('rgb(209, 209, 209, 1)')
          setborderColor('1px solid #ebebeb')
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
          setborderColor('1px solid #ebebeb')
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
            <span
              key={idx}
              onClick={() => router.push(menu.link)}
              style={{ color: menu.color }}
            >
              {menu.kor}
            </span>
          ))}
        </S.MenuWrapper>
        <S.ButtonWrapper view={svgView}>
          {route === '/main/lecture' ? (
            <Plus />
          ) : route === '/main/notice' ? (
            <MegaPhone />
          ) : null}
          {route === '/main/lecture' ? (
            <Filter />
          ) : route === '/main/notice' ? (
            <Message />
          ) : null}
          {route === '/main/notice' ? <Question /> : null}
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
