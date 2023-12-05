'use client'

import * as S from './style'
import { useState } from 'react'
import Bg2 from '@bitgouel/common/src/assets/png/mainBg2.png'

import {
  SelectCalendarModal,
  SelectScoreModal,
  ApproveModal,
  Chevron,
  CreateModal,
  useModal,
} from '@bitgouel/common'
import { usePostActivityInformation } from '@bitgouel/api'

const ActivityCreatePage = () => {
  const MAXLENGTH: number = 1000 as const
  const { openModal } = useModal()

  const [isActivityDate, setIsActivityDate] = useState<boolean>(false)
  const [activityDate, setActivityDate] = useState<Date>(new Date())
  const [activityDateText, setActivityDateText] =
    useState<string>('활동 날짜 선택')

  const [isScore, setIsScore] = useState<boolean>(false)
  const [scoreText, setScoreText] = useState<string>('학점 선택')

  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')

  const openSelectModal = (type: string) => {
    if (type === '학점 선택') {
      setIsActivityDate(false)
      setIsScore((prev) => !prev)
    } else {
      setIsActivityDate((prev) => !prev)
      setIsScore(false)
    }
  }
  const { mutate } = usePostActivityInformation()

  const onCreate = () => {
    mutate({
      title: title,
      content: content,
      credit: +scoreText.slice(0, 1),
      activityDate: `${activityDate.getFullYear()}-${(
        activityDate.getMonth() + 1
      )
        .toString()
        .padStart(2, '0')}-${activityDate
        .getDate()
        .toString()
        .padStart(2, '0')}`,
    })
  }

  return (
    <div>
      <S.SlideBg url={Bg2}>
        <S.BgContainer>
          <S.CreateTitle>활동 추가</S.CreateTitle>
          <S.ButtonContainer></S.ButtonContainer>
        </S.BgContainer>
      </S.SlideBg>
      <S.DocumentInputContainer>
        <S.DocumentInput>
          <S.InputTitle
            placeholder='활동 제목(100자 이내)'
            maxLength={100}
            onChange={(e) => {
              setTitle(e.target.value)
            }}
          />
          <S.InputMainText
            maxLength={MAXLENGTH}
            placeholder='활동 내용 작성 (1000자 이내)'
            onChange={(e) => setContent(e.target.value)}
          />
          <S.ActivitySetting>
            <S.SettingTitle>활동 세부 설정</S.SettingTitle>
            <S.SettingSelectionContainer>
              <S.SettingSelection>
                <S.SelectModalContainer>
                  {isActivityDate && (
                    <SelectCalendarModal
                      date={activityDate}
                      setDate={setActivityDate}
                      setText={setActivityDateText}
                    />
                  )}
                  <S.SettingDateBox onClick={() => openSelectModal('')}>
                    <Chevron />
                    <S.SettingButton>{activityDateText}</S.SettingButton>
                  </S.SettingDateBox>
                </S.SelectModalContainer>
              </S.SettingSelection>
              <S.SettingSelection>
                <S.SelectModalContainer>
                  {isScore && (
                    <SelectScoreModal
                      score={scoreText}
                      setScore={setScoreText}
                      setIsScore={setIsScore}
                    />
                  )}
                  <S.SettingScoreBox
                    onClick={() => openSelectModal('학점 선택')}
                  >
                    <Chevron />
                    <S.SettingButton>{scoreText}</S.SettingButton>
                  </S.SettingScoreBox>
                </S.SelectModalContainer>
              </S.SettingSelection>
            </S.SettingSelectionContainer>
          </S.ActivitySetting>
          <S.ButtonContainer>
            <S.CreateButton
              onClick={() =>
                openModal(
                  <CreateModal
                    question='활동을 추가하시겠습니까?'
                    title={title}
                    onCreate={onCreate}
                    createText='추가하기'
                  />
                )
              }
              isAble={
                title !== '' &&
                content !== '' &&
                activityDateText !== '활동 날짜 선택' &&
                scoreText !== '학점 선택'
              }
            >
              활동 신청하기
            </S.CreateButton>
          </S.ButtonContainer>
        </S.DocumentInput>
      </S.DocumentInputContainer>
    </div>
  )
}

export default ActivityCreatePage
