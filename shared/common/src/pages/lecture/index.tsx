import React, { useCallback, useEffect, useState } from 'react'
import * as S from './style'
import { Header } from '../../components'
import Bg1 from '../../assets/png/mainBg1.png'
import { Filter, Plus } from '../../assets/index'

const LecturePage = () => {
  return (
    <S.lectureWrraper>
      <Header />
      <S.slideBg url={Bg1}>
        <S.bgContainer>
          <span>강의 소개</span>
          <S.buttonContainer>
            <S.lectureButton><Plus /><span>개설 신청하기</span></S.lectureButton>
            <S.lectureButton><Filter/><span>필터</span></S.lectureButton>
          </S.buttonContainer>
        </S.bgContainer>
      </S.slideBg>
    </S.lectureWrraper>
  )
}

export default LecturePage
