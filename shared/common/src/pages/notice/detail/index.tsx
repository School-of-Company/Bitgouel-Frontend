'use client'

import * as S from './style'
import Bg1 from '../../../assets/png/mainBg1.png'

const DetailPage = () => {
  return (
    <div>
      <S.SlideBg url={Bg1}>
        <S.BgContainer>
          <S.ClubTitle>게시글 상세</S.ClubTitle>
        </S.BgContainer>
      </S.SlideBg>
    </div>
  )
}

export default DetailPage
