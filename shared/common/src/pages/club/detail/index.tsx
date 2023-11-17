'use client'

import * as S from './style'
import Bg2 from '../../../assets/png/mainBg2.png'
import { SettingOut } from '../../../assets'
import { useRouter } from 'next/navigation'

const DetailPage = () => {
  const router = useRouter()

  return (
    <div>
      <S.SlideBg url={Bg2}>
        <S.BgContainer>
          <S.ClubTitle>취업 동아리</S.ClubTitle>
          <S.ButtonContainer>
            <S.ClubButton>
              <span onClick={() => router.push('/main/club/student')}>
                임시 학생 정보 이동버튼
              </span>
            </S.ClubButton>
            <S.ClubButton>
              <SettingOut />
              <span>학교 선택</span>
            </S.ClubButton>
          </S.ButtonContainer>
        </S.BgContainer>
      </S.SlideBg>
    </div>
  )
}

export default DetailPage
