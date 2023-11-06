import Image from 'next/image'
import Simbol from '../../assets/png/simbol.png'
import * as S from './style'
import { useRouter } from 'next/navigation'

const Header = () => {
  const router = useRouter()
  const menuList = [
    { kor: '사업소개', link: '/main/home' },
    { kor: '강의', link: '/main/lecture' },
    { kor: '동아리', link: '/main/club' },
    { kor: '게시글', link: '/main/notice' },
  ]
  return (
    <S.HeaderWrapper>
      <S.HeaderContainer>
        <Image width={38} height={38} src={Simbol} alt='header simbol'></Image>
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
    </S.HeaderWrapper>
  )
}
export default Header
