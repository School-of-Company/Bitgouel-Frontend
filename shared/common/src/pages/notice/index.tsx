'use client'

import { MegaPhone, Message, Question } from '../../assets/'
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
              <Message />
              <span>취업 게시글</span>
            </S.NoticeButton>
            <S.NoticeButton>
              <Question />
              <span>문의사항</span>
            </S.NoticeButton>
          </S.ButtonContainer>
        </S.BgContainer>
      </S.SlideBg>
    </div>
  )
}

export default NoticePage
