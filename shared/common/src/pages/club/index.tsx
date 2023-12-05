'use client'

import * as S from './style'
import Bg2 from '../../assets/png/mainBg2.png'
import { SettingOut } from '../../assets'
import { useRouter } from 'next/navigation'

const ClubPage = () => {
  const router = useRouter()

  return (
    <div>
      <S.SlideBg url={Bg2}>
        <S.BgContainer>
          <S.ClubTitle>취업 동아리 목록</S.ClubTitle>
          <S.ButtonContainer>
            <S.ClubButton>
              <span onClick={() => router.push('/main/club/detail')}>
                임시 상세 이동버튼
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

export default ClubPage
