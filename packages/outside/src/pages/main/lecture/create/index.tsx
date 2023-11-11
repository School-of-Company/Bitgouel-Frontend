import React, { useState } from 'react'
import * as S from '../../../../styles/create/style'
import { Header } from '@common/components'
import Bg3 from '@common/assets/png/mainBg3.png'
import { Chevron, People } from '@common/assets'
import { title } from 'process'

const Create = () => {
  const MAXLENGTH: number = 1000 as const

  const [lectureTitle, setLectuerTitle] = useState<string>('')
  const [lectureMainText, setLectuerMainText] = useState<string>('')

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
              <S.SettingSelection>
                <Chevron />
                <S.SettingButton>강의 유형 선택</S.SettingButton>
              </S.SettingSelection>
              <S.SettingSelection>
                <Chevron />
                <S.SettingButton>신청 시작일</S.SettingButton>
                <S.DateRange> ~ </S.DateRange>
                <Chevron />
                <S.SettingButton>신청 마감일</S.SettingButton>
              </S.SettingSelection>
              <S.SettingSelection>
                <Chevron />
                <S.SettingButton>강의 시작일 선택</S.SettingButton>
              </S.SettingSelection>
              <S.SettingSelection>
                <Chevron />
                <S.SettingButton>학점 선택</S.SettingButton>
              </S.SettingSelection>
              <S.SettingSelection>
                <People />
                <S.SettingButton>최대 수강인원 입력</S.SettingButton>
              </S.SettingSelection>
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
