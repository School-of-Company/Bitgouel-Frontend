import React, { useState } from 'react'
import * as S from '../../../../styles/create/style'
import { Header } from '@common/components'
import Bg3 from '@common/assets/png/mainBg3.png'
import { Chevron, People } from '@common/assets'
import { title } from 'process'

const Create = () => {
  const menuList = [
    { kor: '강의 유형 선택', svg: <Chevron /> },
    { kor: '신청 기간 선택', svg: <Chevron /> },
    { kor: '학점 선택', svg: <Chevron /> },
    { kor: '최대 수강 인원 입력', svg: <People /> },
  ]

  const MAXLENGTH: number = 1000

  const [lectureTitle, setLectuerTitle] = useState('')
  const [lectureMainText, setLectuerMainText] = useState('')

  const saveLectureTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLectuerTitle(event.target.value)
  }

  const saveLectureMainText = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setLectuerMainText(event.target.value)
  }

  return (
    <div>
      <Header />
      <S.SlideBg url={Bg3}>
        <S.BgContainer>
          <S.CreateTitle>강의 개설</S.CreateTitle>
        </S.BgContainer>
      </S.SlideBg>
      <S.DocumentInputContainer>
        <S.DocumentInput>
          <S.InputTitle placeholder='강의 제목' onChange={saveLectureTitle} />
          <S.InputMainText
            maxLength={MAXLENGTH}
            placeholder='강의 설명 작성 (1000자 이내)'
            onChange={saveLectureMainText}
          />
          <S.LectureSetting>
            <S.SettingTitle>강의 세부 설정</S.SettingTitle>
            <S.SettingSelectionContainer>
              {menuList.map((menu, idx) => (
                <S.SettingSelection key={idx}>
                  {menu.svg}
                  <S.SettingButton>{menu.kor}</S.SettingButton>
                </S.SettingSelection>
              ))}
            </S.SettingSelectionContainer>
          </S.LectureSetting>
          <S.ButtonContainer>
            <S.CreateButton>개설 신청하기</S.CreateButton>
          </S.ButtonContainer>
        </S.DocumentInput>
      </S.DocumentInputContainer>
    </div>
  )
}

export default Create
