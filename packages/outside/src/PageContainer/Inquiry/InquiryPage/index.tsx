'use client'

import { InquiryItem, Plus } from '@bitgouel/common'
import { Bg5 } from '@bitgouel/common'
import { useRouter } from 'next/navigation'
import * as S from './style'

const LecturePage = () => {
  const { push } = useRouter()

  return (
    <div>
      <S.SlideBg url={Bg5}>
        <S.BgContainer>
          <S.InquiryTitle>문의사항</S.InquiryTitle>
        </S.BgContainer>
      </S.SlideBg>
      <S.ListWrapper>
        <S.ListContainer>
          <InquiryItem />
        </S.ListContainer>
      </S.ListWrapper>
    </div>
  )
}

export default LecturePage
