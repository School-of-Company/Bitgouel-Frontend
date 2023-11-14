import { SelectCalendarModal, SelectScoreModal } from '@/modals'
import { Chevron, People } from '@common/assets'
import Bg3 from '@common/assets/png/mainBg3.png'
import { LectureTypeModal } from '@common/modals'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import * as S from '../../../../styles/lecture/create/style'

const Create = () => {
  const MAXLENGTH: number = 1000 as const

  const [lectureTitle, setLectuerTitle] = useState<string>('')
  const [lectureMainText, setLectuerMainText] = useState<string>('')

  const [isLectureType, setIsLectureType] = useState<boolean>(false)
  const [lectureTypeText, setLectureTypeText] =
    useState<string>('강의 유형 선택')

  const [isStart, setIsStart] = useState<boolean>(false)
  const [startDate, setStartDate] = useState<Date>(new Date())
  const [startDateText, setStartDateText] = useState<string>('신청 시작일 선택')

  const [isEnd, setIsEnd] = useState<boolean>(false)
  const [endDate, setEndDate] = useState<Date>(new Date())
  const [endDateText, setEndDateText] = useState<string>('신청 마감일 선택')

  const [isComplete, setIsComplete] = useState<boolean>(false)
  const [completeDate, setCompleteDate] = useState<Date>(new Date())
  const [completeDateText, setCompleteDateText] =
    useState<string>('강의 시작일 선택')

  const [isScore, setIsScore] = useState<boolean>(false)
  const [scoreText, setScoreText] = useState<string>('학점 선택')

  const [people, setPeople] = useState<number | undefined>()
  const [isInput, setIsInput] = useState<boolean>(true)

  const saveLectureTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLectuerTitle(event.target.value)
  }

  const saveLectureMainText = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setLectuerMainText(event.target.value)
  }

  const openSelectModal = (type: string) => {
    if (type === '신청 시작') {
      setIsStart((prev) => !prev)
      setIsEnd(false)
      setIsComplete(false)
      setIsLectureType(false)
      setIsScore(false)
    } else if (type === '신청 마감') {
      setIsStart(false)
      setIsEnd((prev) => !prev)
      setIsComplete(false)
      setIsLectureType(false)
      setIsScore(false)
    } else if (type === '강의 시작') {
      setIsStart(false)
      setIsEnd(false)
      setIsComplete((prev) => !prev)
      setIsScore(false)
      setIsLectureType(false)
    } else if (type === '학점') {
      setIsScore((prev) => !prev)
      setIsStart(false)
      setIsEnd(false)
      setIsComplete(false)
      setIsLectureType(false)
    } else {
      setIsLectureType((prev) => !prev)
      setIsStart(false)
      setIsEnd(false)
      setIsComplete(false)
      setIsScore(false)
    }
  }

  const onPeopleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setIsInput(false)
  }

  return (
    <div>
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
              <S.SelectModalContainer>
                {isLectureType && (
                  <LectureTypeModal
                    location='개설'
                    text={lectureTypeText}
                    setText={setLectureTypeText}
                    setIsLectureType={setIsLectureType}
                  />
                )}
                <S.SettingSelection onClick={() => openSelectModal('')}>
                  <Chevron />
                  <S.SettingButton>{lectureTypeText}</S.SettingButton>
                </S.SettingSelection>
              </S.SelectModalContainer>
              <S.SettingSelection>
                <S.SelectModalContainer>
                  {isStart && (
                    <SelectCalendarModal
                      date={startDate}
                      setDate={setStartDate}
                      setText={setStartDateText}
                    />
                  )}
                  <S.SettingDateBox
                    onClick={() => openSelectModal('신청 시작')}
                  >
                    <Chevron />
                    <S.SettingButton>{startDateText}</S.SettingButton>
                  </S.SettingDateBox>
                </S.SelectModalContainer>
                <S.DateRange> ~ </S.DateRange>
                <S.SelectModalContainer>
                  {isEnd && (
                    <SelectCalendarModal
                      date={endDate}
                      setDate={setEndDate}
                      setText={setEndDateText}
                    />
                  )}
                  <S.SettingDateBox
                    onClick={() => openSelectModal('신청 마감')}
                  >
                    <Chevron />
                    <S.SettingButton>{endDateText}</S.SettingButton>
                  </S.SettingDateBox>
                </S.SelectModalContainer>
              </S.SettingSelection>
              <S.SettingSelection>
                <S.SelectModalContainer>
                  {isComplete && (
                    <SelectCalendarModal
                      date={completeDate}
                      setDate={setCompleteDate}
                      setText={setCompleteDateText}
                    />
                  )}
                  <S.SettingDateBox
                    onClick={() => openSelectModal('강의 시작')}
                  >
                    <Chevron />
                    <S.SettingButton>{completeDateText}</S.SettingButton>
                  </S.SettingDateBox>
                </S.SelectModalContainer>
              </S.SettingSelection>
              {lectureTypeText !== '대학탐방프로그램' && (
                <S.SettingSelection>
                  <S.SelectModalContainer>
                    {isScore && (
                      <SelectScoreModal
                        score={scoreText}
                        setScore={setScoreText}
                        setIsScore={setIsScore}
                      />
                    )}
                    <S.SettingScoreBox onClick={() => openSelectModal('학점')}>
                      <Chevron />
                      <S.SettingButton>학점 선택</S.SettingButton>
                    </S.SettingScoreBox>
                  </S.SelectModalContainer>
                </S.SettingSelection>
              )}
              <S.SettingForm
                onSubmit={onPeopleSubmit}
                onBlur={() => setIsInput(false)}
              >
                <People />
                {isInput ? (
                  <S.SettingInput
                    value={people}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setPeople(+e.target.value)
                    }
                    type='number'
                    placeholder='최대 수강 인원 입력'
                    maxLength={3}
                  />
                ) : (
                  <S.ShowPeople onClick={() => setIsInput(true)}>
                    {people}명
                  </S.ShowPeople>
                )}
              </S.SettingForm>
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
