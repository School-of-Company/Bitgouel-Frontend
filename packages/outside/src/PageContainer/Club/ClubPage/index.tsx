'use client'
// 어드민 페이지
import { ClubItem } from '@/components'
import * as S from './style'
import Bg2 from '@bitgouel/common/src/assets/png/mainBg2.png'
import { useRouter } from 'next/navigation'

const ClubPage = () => {
  const { push } = useRouter()

  return (
    <div>
      <S.SlideBg url={Bg2}>
        <S.BgContainer>
          <S.Title>취업 동아리 목록</S.Title>
        </S.BgContainer>
      </S.SlideBg>
      <S.ClubWrapper>
        <S.ClubContainer>
          <S.ClubGroupBox>
            <S.ClubSchoolTitle>광주소프트웨어마이스터고등학교</S.ClubSchoolTitle>
            <S.ClubListBox>
              <ClubItem />
            </S.ClubListBox>
          </S.ClubGroupBox>
        </S.ClubContainer>
      </S.ClubWrapper>
    </div>
  )
}

export default ClubPage
