'use client'

import { MegaPhone, Plus, Question } from '../../assets/'
import { NoticeItem } from '../../components'
import Bg1 from '../../assets/png/mainBg1.png'
import * as S from './style'

const NoticePage = () => {
  return (
    <div>
      <S.SlideBg url={Bg1}>
        <S.BgContainer>
          <S.NoticeTitle>게시글</S.NoticeTitle>
          <S.ButtonContainer>
            <S.NoticeButton>
              <MegaPhone />
              <span>공지사항</span>
            </S.NoticeButton>
            <S.NoticeButton>
              <Question />
              <span>문의사항</span>
            </S.NoticeButton>
            <S.NoticeButton>
              <Plus />
              <span>게시글 추가</span>
            </S.NoticeButton>
          </S.ButtonContainer>
        </S.BgContainer>
      </S.SlideBg>
      <S.NoticeListWrapper>
        <S.NoticeListContainer>
          <NoticeItem />
          <NoticeItem />
          <NoticeItem />
          <NoticeItem />
          <NoticeItem />
          <NoticeItem />
          <NoticeItem />
        </S.NoticeListContainer>
      </S.NoticeListWrapper>
    </div>
  )
}

export default NoticePage
