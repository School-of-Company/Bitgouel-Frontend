import React, { useCallback, useEffect, useState } from 'react'
import * as S from './style'
import { Header } from '../../components'
import Bg1 from '../../assets/png/mainBg1.png'
import { Filter, Plus } from '../../assets/'

const LecturePage = () => {
  return (
    <S.LectureWrraper>
      <Header />
      <S.SlideBg url={Bg1}>
        <S.BgContainer>
          <span>강의 소개</span>
          <S.ButtonContainer>
            <S.LectureButton>
              <Plus />
              <span>개설 신청하기</span>
            </S.LectureButton>
            <S.LectureButton>
              <Filter />
              <span>필터</span>
            </S.LectureButton>
          </S.ButtonContainer>
        </S.BgContainer>
      </S.SlideBg>
    </S.LectureWrraper>
  )
}

export default LecturePage
