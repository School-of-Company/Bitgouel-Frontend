import React from 'react'
import * as S from './style'
import { Header } from '../../components'
import Bg1 from '../../assets/png/mainBg1.png'
import { MegaPhone, Message, Question } from '../../assets/'

const NoticePage = () => {
  return (
    <div>
      <Header />
      <S.SlideBg url={Bg1}>
        <S.BgContainer>
          <S.NoticeTitle>게시글</S.NoticeTitle>
          <S.ButtonContainer>
            <S.LectureButton>
              <MegaPhone />
              <span>공지사항</span>
            </S.LectureButton>
            <S.LectureButton>
              <Message />
              <span>취업 게시글</span>
            </S.LectureButton>
            <S.LectureButton>
              <Question />
              <span>문의사항</span>
            </S.LectureButton>
          </S.ButtonContainer>
        </S.BgContainer>
      </S.SlideBg>
    </div>
  )
}

export default NoticePage
