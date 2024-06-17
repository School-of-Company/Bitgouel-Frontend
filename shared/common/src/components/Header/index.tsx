'use client'

import { TokenManager, useDeleteLogout } from '@bitgouel/api'
import {
  AppropriationModal,
  Message,
  Question,
  Symbol1,
  Symbol2,
  theme,
  useModal,
} from '@bitgouel/common'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { match } from 'ts-pattern'
import * as S from './style'

const menuList = [
  { kor: '사업소개', link: '/' },
  { kor: '강의', link: '/main/lecture' },
  { kor: '동아리', link: '/main/club' },
  { kor: '게시판', link: '/main/post' },
  { kor: '관리자', link: '/main/admin' },
]

const Header = ({ isAdmin }: { isAdmin: boolean }) => {
  const tokenManager = new TokenManager()
  const { push } = useRouter()
  const pathname = usePathname()
  const [bgColor, setBgColor] = useState<string>('')
  const [symbolNum, setSymbolNum] = useState<any>(Symbol1)
  const [btnColor, setBtnColor] = useState<string>('rgb(255, 255, 255, 0.2)')
  const [borderColor, setBorderColor] = useState<string>('')
  const [spanColor, setSpanColor] = useState<string>(`${theme.color.white}`)
  const [svgView, setSvgView] = useState<string>('none')
  const [text, setText] = useState<string>('로그인')
  const { mutate } = useDeleteLogout({
    onSuccess: () => {
      tokenManager.removeTokens()
      match(pathname)
        .with('/auth/find', () => toast.info('다시 로그인 해주세요'))
        .otherwise(() => {
          toast.success('로그아웃 했습니다')
          window.location.replace(`/`)
        })
    },
  })
  const { openModal } = useModal()

  const onLogoutModal = () =>
    openModal(
      <AppropriationModal
        isApprove={false}
        question='로그아웃을 하시겠습니까?'
        purpose='로그아웃'
        title=''
        onAppropriation={(callbacks) => mutate(undefined, callbacks)}
      />
    )

  useEffect(() => {
    const throttledScrollHandler = () => {
      const { scrollY } = window
      if (pathname === '/') {
        if (scrollY >= 700) {
          setBgColor(`${theme.color.white}`)
          setSymbolNum(Symbol2)
          setBtnColor('rgb(209, 209, 209, 1)')
          setBorderColor(`0.0625rem solid ${theme.color.gray['900']}`)
          setSpanColor(`${theme.color.main}`)
        } else {
          setBgColor('')
          setSymbolNum(Symbol1)
          setBtnColor('rgb(255, 255, 255, 0.2)')
          setBorderColor('')
          setSpanColor(`${theme.color.white}`)
        }
      } else {
        if (scrollY >= 160) {
          setBgColor(`${theme.color.white}`)
          setSymbolNum(Symbol2)
          setBtnColor('rgb(209, 209, 209, 1)')
          setBorderColor(`0.0625rem solid ${theme.color.gray['900']}`)
          setSpanColor(`${theme.color.main}`)
          setSvgView('flex')
        } else {
          setBgColor('')
          setSymbolNum(Symbol1)
          setBtnColor('rgb(255, 255, 255, 0.2)')
          setBorderColor('')
          setSpanColor(`${theme.color.white}`)
          setSvgView('none')
        }
      }
    }

    const throttle = (callback: () => void, delay: number) => {
      let timerId: NodeJS.Timeout | null = null
      return (...args: any[]) => {
        if (!timerId) {
          timerId = setTimeout(() => {
            callback.apply(null, args)
            timerId = null
          }, delay)
        }
      }
    }

    const throttledScrollHandlerWithThrottle = throttle(
      throttledScrollHandler,
      200
    )

    const intervalId = setInterval(throttledScrollHandlerWithThrottle, 200)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  useEffect(() => {
    match(!!tokenManager.accessToken)
      .with(true, () =>
        match(pathname)
          .with('/main/my', () => setText('로그아웃'))
          .otherwise(() => setText('내 정보'))
      )
      .otherwise(() => setText('로그인'))
  }, [pathname])

  return (
    <S.HeaderWrapper
      bgColor={bgColor}
      borderColor={borderColor}
      isAuth={match(pathname)
        .with('/auth/login', () => true)
        .with('/auth/signUp', () => true)
        .with('/auth/find', () => true)
        .otherwise(() => false)}
    >
      <S.HeaderContainer>
        <S.SymbolContainer url={symbolNum} onClick={() => push('/')} />
        <S.MenuWrapper isAdmin={isAdmin}>
          {menuList
            .filter((menu, idx) => (isAdmin ? menu : idx !== 4))
            .map((menu, idx) => (
              <S.MenuItem
                key={idx}
                onClick={() =>
                  tokenManager.accessToken
                    ? push(menu.link)
                    : toast.info('로그인 후 이용해 주세요')
                }
                isSameRoute={match(idx)
                  .with(0, () => pathname === menu.link)
                  .otherwise(() =>
                    pathname ? pathname.includes(menu.link) : false
                  )}
                color={spanColor}
              >
                {menu.kor}
              </S.MenuItem>
            ))}
        </S.MenuWrapper>
        <S.ButtonWrapper view={svgView}>
          {match(pathname)
            .with('/main/post', () => (
              <>
                <Message onClick={() => push('/main/post/notice')} />
                <Question onClick={() => push('/main/post/inquiry')} />
              </>
            ))
            .otherwise(() => null)}
        </S.ButtonWrapper>
        <S.LoginButton
          onClick={() =>
            match(text)
              .with('로그인', () => push('/auth/login'))
              .otherwise(() =>
                match(pathname)
                  .with('/main/my', () => onLogoutModal())
                  .otherwise(() => push('/main/my'))
              )
          }
          color={btnColor}
        >
          <span>{text}</span>
        </S.LoginButton>
      </S.HeaderContainer>
    </S.HeaderWrapper>
  )
}
export default Header
