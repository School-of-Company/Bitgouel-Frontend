import Symbol1 from '../../assets/png/symbol1.png'
import Symbol2 from '../../assets/png/symbol2.png'
import * as S from './style'
import { match } from 'ts-pattern'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Plus, Filter, MegaPhone, Message, Question } from '../../assets'
import { SelectFilterContainer } from '../../../../../packages/inside/src/styles/lecture/style'
import { LectureTypeModal } from '../../modals'
import { useRecoilState } from 'recoil'
import { LectureTypeText } from '../../atoms'

const Header = ({ inside }: { inside: boolean }) => {
  const router = useRouter()
  const pathname = usePathname()
  const menuList = [
    { kor: '사업소개', link: '/' },
    { kor: '강의', link: '/main/lecture' },
    { kor: '동아리', link: '/main/club' },
    { kor: '게시글', link: '/main/notice' },
  ]

  const [bgColor, setBgColor] = useState<string>('')
  const [symbolNum, setSymbolNum] = useState<any>(Symbol1)
  const [btnColor, setBtnColor] = useState<string>('rgb(255, 255, 255, 0.2)')
  const [borderColor, setBorderColor] = useState<string>('')
  const [spanColor, setSpanColor] = useState<string>('#fff')
  const [svgView, setSvgView] = useState<string>('none')
  const [myStatus, setMyStatus] = useState<string>('로그인')
  const [isLectureType, setIsLectureType] = useState<boolean>(false)
  const [lectureTypeText, setLectureTypeText] =
    useRecoilState<string>(LectureTypeText)

  useEffect(() => {
    setMyStatus(
      localStorage.getItem('Bitgouel-accessToken') ? '내 정보' : '로그인'
    )

    const onScroll = () => {
      const { scrollY } = window
      if (pathname === '/main/home') {
        if (scrollY >= 800) {
          setBgColor('#fff')
          setSymbolNum(Symbol2)
          setBtnColor('rgb(209, 209, 209, 1)')
          setBorderColor('0.0625rem solid #ebebeb')
          setSpanColor('#288BE1')
        } else {
          setBgColor('')
          setSymbolNum(Symbol1)
          setBtnColor('rgb(255, 255, 255, 0.2)')
          setBorderColor('')
          setSpanColor('#fff')
        }
      } else {
        if (scrollY >= 240) {
          setBgColor('#fff')
          setSymbolNum(Symbol2)
          setBtnColor('rgb(209, 209, 209, 1)')
          setBorderColor('0.0625rem solid #ebebeb')
          setSpanColor('#288BE1')
          setSvgView('flex')
        } else {
          setBgColor('')
          setSymbolNum(Symbol1)
          setBtnColor('rgb(255, 255, 255, 0.2)')
          setBorderColor('')
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
    <S.HeaderWrapper
      bgColor={bgColor}
      borderColor={borderColor}
      isAuth={match(pathname)
        .with('/auth/login', () => true)
        .with('/auth/signUp', () => true)
        .otherwise(() => false)}
    >
      <S.HeaderContainer>
        <S.SymbolContainer url={symbolNum} />
        <S.MenuWrapper>
          {menuList.map((menu, idx) => (
            <S.MenuItem
              key={idx}
              onClick={() => myStatus === '내 정보' && router.push(menu.link)}
              isSameRoute={pathname === menu.link}
              color={spanColor}
            >
              {menu.kor}
            </S.MenuItem>
          ))}
        </S.MenuWrapper>
        <S.ButtonWrapper view={svgView}>
          {match(pathname)
            .with('/main/lecture', () => (
              <S.CreateIcon
                onClick={() => {
                  router.push('/main/lecture/create')
                }}
                view={match(inside)
                  .with(true, () => 'none')
                  .otherwise(() => '')}
              >
                <Plus />
              </S.CreateIcon>
            ))
            .with('/main/notice', () => <MegaPhone />)
            .otherwise(() => null)}
          {match(pathname)
            .with('/main/lecture', () => (
              <SelectFilterContainer>
                <div onClick={() => setIsLectureType((prev) => !prev)}>
                  <Filter />
                </div>
                {isLectureType && (
                  <LectureTypeModal
                    location='헤더'
                    text={lectureTypeText}
                    setText={setLectureTypeText}
                    setIsLectureType={setIsLectureType}
                  />
                )}
              </SelectFilterContainer>
            ))
            .with('/main/notice', () => <Message />)
            .otherwise(() => null)}
          {match(pathname)
            .with('/main/notice', () => <Question />)
            .otherwise(() => null)}
        </S.ButtonWrapper>
        <S.LoginButton
          onClick={() =>
            router.push(
              match(myStatus)
                .with('내 정보', () => '/main/lecture')
                .otherwise(() => '/auth/login')
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
