'use client'

import * as S from './style'
import Bg2 from '@bitgouel/common/src/assets/png/mainBg2.png'
import { useRouter } from 'next/navigation'

const ClubPage = () => {
  const { push } = useRouter()

  return (
    <div>
      <S.SlideBg url={Bg2}>
        <S.BgContainer>
          <S.ClubTitle>취업 동아리</S.ClubTitle>
        </S.BgContainer>
      </S.SlideBg>
      <S.ClubWrapper>
        
      </S.ClubWrapper>
    </div>
  )
}

export default ClubPage
