'use client'

import * as S from './style'
import Bg2 from '../../assets/png/mainBg2.png'

const ClubPage = () => {
  return (
    <div>
      <S.SlideBg url={Bg2}>
        <S.BgContainer>
          <S.ClubTitle>취업 동아리 목록</S.ClubTitle>
          <S.ButtonContainer>
            <S.ClubButton>
              <span>공지사항</span>
            </S.ClubButton>
          </S.ButtonContainer>
        </S.BgContainer>
      </S.SlideBg>
    </div>
  )
}

export default ClubPage
