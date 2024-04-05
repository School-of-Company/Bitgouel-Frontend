'use client'

import { TokenManager, useDeleteLogout, useGetLectureList } from '@bitgouel/api'
import { usePathname, useRouter } from 'next/navigation'
import { ChangeEvent, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useRecoilState } from 'recoil'
import { match } from 'ts-pattern'
import {
  Filter,
  FilterComponent,
  LectureFilterType,
  Message,
  Plus,
  Question,
  Symbol1,
  Symbol2,
  theme,
} from '@bitgouel/common'
import * as S from './style'
import { LectureTypeEnum, LectureTypesFilterListTypes } from '@bitgouel/types'

const menuList = [
  { kor: '사업소개', link: '/' },
  { kor: '강의', link: '/main/lecture' },
  { kor: '동아리', link: '/main/club' },
  { kor: '게시판', link: '/main/post' },
  { kor: '관리자', link: '/main/admin' },
]

const Header = ({ is_admin }: { is_admin: boolean }) => {
  const tokenManager = new TokenManager()
  const { push } = useRouter()
  const pathname = usePathname()
  const [bgColor, setBgColor] = useState<string>('')
  const [symbolNum, setSymbolNum] = useState<any>(Symbol1)
  const [btnColor, setBtnColor] = useState<string>('rgb(255, 255, 255, 0.2)')
  const [borderColor, setBorderColor] = useState<string>('')
  const [spanColor, setSpanColor] = useState<string>(`${theme.color.white}`)
  const [svgView, setSvgView] = useState<string>('none')
  const [isLectureType, setIsLectureType] = useState<boolean>(false)
  const [lectureTypes, setLectureTypes] = useState<
    LectureTypesFilterListTypes[]
  >([
    { text: '전체', item: 'all', checked: true },
    {
      text: '상호학점인정교육과정',
      item: 'MUTUAL_CREDIT_RECOGNITION_PROGRAM',
      checked: false,
    },
    {
      text: '대학탐방프로그램',
      item: 'UNIVERSITY_EXPLORATION_PROGRAM',
      checked: false,
    },
  ])
  const [lectureType, setLectureType] = useRecoilState<LectureTypeEnum | ''>(
    LectureFilterType
  )
  const [text, setText] = useState<string>('로그인')
  const { mutate } = useDeleteLogout()

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLectureTypes((prev) =>
      prev.map((type) =>
        type.item === e.target.id
          ? { ...type, checked: true }
          : { ...type, checked: false }
      )
    )
    if (e.target.checked && e.target.id === 'all') setLectureType('')
    else if (e.target.checked) setLectureType(e.target.id as LectureTypeEnum)
  }

  useEffect(() => {
    const onScroll = () => {
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
        if (scrollY >= 240) {
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
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  useEffect(() => {
    if (tokenManager.accessToken) {
      if (pathname === '/main/my') setText('로그아웃')
      else if (pathname !== '/main/my') setText('내 정보')
    }
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
        <S.MenuWrapper is_admin={is_admin}>
          {menuList
            .filter((menu, idx) => (is_admin ? menu : idx !== 4))
            .map((menu, idx) => (
              <S.MenuItem
                key={idx}
                onClick={() =>
                  tokenManager.accessToken
                    ? push(menu.link)
                    : toast.info('로그인 후 이용해 주세요.')
                }
                isSameRoute={match(idx)
                  .with(0, () => pathname === menu.link)
                  .otherwise(() => pathname.includes(menu.link))}
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
            tokenManager.accessToken
              ? match(pathname)
                  .with('/main/my', () => mutate())
                  .otherwise(() => push('/main/my'))
              : push('/auth/login')
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
