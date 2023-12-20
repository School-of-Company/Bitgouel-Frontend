'use client'

import * as S from './style'
import Bg2 from '../../../assets/png/mainBg2.png'
import { Card, PersonOut } from '../../../assets'
import { useRouter } from 'next/navigation'

const StudentPage = () => {
  const { push } = useRouter()

  return (
    <div>
      <S.SlideBg url={Bg2}>
        <S.BgContainer>
          <S.ClubTitle>학생 정보</S.ClubTitle>
          <S.ButtonContainer>
            <S.ClubButton>
              <span onClick={() => push('/main/club/student/activity/my')}>
                임시 학생 활동 이동버튼
              </span>
            </S.ClubButton>
            <S.ClubButton>
              <Card />
              <span>자격증</span>
            </S.ClubButton>
            <S.ClubButton>
              <PersonOut />
              <span>학생 활동</span>
            </S.ClubButton>
          </S.ButtonContainer>
        </S.BgContainer>
      </S.SlideBg>
    </div>
  )
}

export default StudentPage
