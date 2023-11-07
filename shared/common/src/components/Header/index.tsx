import Image from 'next/image'
import Simbol1 from '../../assets/png/simbol1.png'
import Simbol2 from '../../assets/png/simbol2.png'
import * as S from './style'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Route from 'next/router'
import { useRecoilValue } from 'recoil'
import { HadAccessToken } from '../../atoms'

const Header = () => {
  const router = useRouter()

  const [mainColor, setMainColor] = useState('')
  const [lectureColor, setLectureColor] = useState('')
  const [clubColor, setClubColor] = useState('')
  const [noticeColor, setNoticeColor] = useState('')

  useEffect(() => {
    if (Route.route === '/main/home') {
      setMainColor(spanColor)
      setLectureColor('#B8B8B8')
      setClubColor('#B8B8B8')
      setNoticeColor('#B8B8B8')
    } else if (Route.route === '/main/lecture') {
      setMainColor('#B8B8B8')
      setLectureColor(spanColor)
      setClubColor('#B8B8B8')
      setNoticeColor('#B8B8B8')
    } else if (Route.route === '/main/club') {
      setMainColor('#B8B8B8')
      setLectureColor('#B8B8B8')
      setClubColor(spanColor)
      setNoticeColor('#B8B8B8')
    } else if (Route.route === '/main/notice') {
      setMainColor('#B8B8B8')
      setLectureColor('#B8B8B8')
      setClubColor('#B8B8B8')
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

  useEffect(() => {
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
        } else {
          setBgColor('')
          setSimbolNum(Simbol1)
          setBtnColor('rgb(255, 255, 255, 0.2)')
          setborderColor('')
          setSpanColor('#fff')
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const hadAccessToken = useRecoilValue(HadAccessToken)

  return (
    <S.HeaderWrapper bgColor={bgColor} borderColor={borderColor}>
      <S.HeaderContainer>
        <S.SimbolContainer url={simbolNum}></S.SimbolContainer>
        <S.MenuWrapper>
          {menuList.map((menu, idx) => (
            <span
              key={idx}
              onClick={() => router.push(menu.link)}
              style={{color: (menu.color)}}
            >
              {menu.kor}
            </span>
          ))}
        </S.MenuWrapper>
        <S.LoginButton
          onClick={() =>
            router.push(hadAccessToken ? '/main/lecture' : '/auth/login')
          }
          color={btnColor}
        >
          <span>{hadAccessToken ? '내 정보' : '로그인'}</span>
        </S.LoginButton>
      </S.HeaderContainer>
    </S.HeaderWrapper>
  )
}
export default Header
