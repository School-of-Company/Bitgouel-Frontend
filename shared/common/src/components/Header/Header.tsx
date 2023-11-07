import Image from 'next/image'
import Simbol from '../../assets/png/simbol.png'
import * as S from './style'
import { useRouter } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'

function Header() {
  const router = useRouter()
  const menuList = [
    { kor: '사업소개', link: '/main/home' },
    { kor: '강의', link: '/main/lecture' },
    { kor: '동아리', link: '/main/club' },
    { kor: '게시글', link: '/main/notice' },
  ]

  const throttle = function (callback, waitTime) {
    let timerId: NodeJS.Timeout | null = null
    return (e) => {
      if (timerId) return
      timerId = setTimeout(() => {
        callback.call(this, e)
        timerId = null
      }, waitTime)
    }
  }

  const Header = () => {
    const [hide, setHide] = useState(false)
    const [pageY, setPageY] = useState(0)
    const documentRef = useRef(document)

    const handleScroll = () => {
      const { pageYOffset } = window
      const deltaY = pageYOffset - pageY
      const hide = pageYOffset !== 0 && deltaY >= 0
      setHide(hide)
      setPageY(pageYOffset)
    }

    const throttleScroll = throttle(handleScroll, 50)

    useEffect(() => {
      documentRef.current.addEventListener('scroll', throttleScroll)
      return () =>
        documentRef.current.removeEventListener('scroll', throttleScroll)
    }, [pageY])

    return (
      <S.Header>
        <S.HeaderContainer>
          <Image
            width={38}
            height={38}
            src={Simbol}
            alt='header simbol'
          ></Image>
          <S.MenuWrapper>
            {menuList.map((menu, idx) => (
              <span key={idx} onClick={() => router.push(menu.link)}>
                {menu.kor}
              </span>
            ))}
          </S.MenuWrapper>
          <S.LoginButton onClick={() => router.push('/auth/login')}>
            <span>로그인</span>
          </S.LoginButton>
        </S.HeaderContainer>
      </S.Header>
    )
  }
  export default Header
}
