'use client'

import * as S from './style'
import Bg2 from '@common/assets/png/mainBg2.png'
import { Chevron } from '@common/assets'
import { useState } from 'react'
import { SelectCalendarModal, SelectScoreModal } from '@common/modals'

const ActivityCreatePage = () => {
  const MAXLENGTH: number = 1000 as const

  const [isActivityDate, setIsActivityDate] = useState<boolean>(false)
  const [activityDate, setActivityDate] = useState<Date>(new Date())
  const [activityDateText, setActivityDateText] =
    useState<string>('활동 날짜 선택')

  const [isScore, setIsScore] = useState<boolean>(false)
  const [scoreText, setScoreText] = useState<string>('학점 선택')

  const openSelectModal = (type: string) => {
    if (type === '학점 선택') {
      setIsActivityDate(false)
      setIsScore((prev) => !prev)
    } else {
      setIsActivityDate((prev) => !prev)
      setIsScore(false)
    }
  }

  return (
    <div>
      <S.SlideBg url={Bg2}>
        <S.BgContainer>
          <S.CreateTitle>활동 추가</S.CreateTitle>
        </S.BgContainer>
      </S.SlideBg>
      <S.DocumentInputContainer>
        <S.DocumentInput>
          <S.InputTitle placeholder='활동 제목(100자 이내)' maxLength={100} />
          <S.InputMainText
            maxLength={MAXLENGTH}
            placeholder='활동 내용 작성 (1000자 이내)'
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
            <S.CreateButton>개설 신청하기</S.CreateButton>
          </S.ButtonContainer>
        </S.DocumentInput>
      </S.DocumentInputContainer>
    </div>
  )
}

export default ActivityCreatePage
