'use client'

import { usePostActivityInformation } from '@bitgouel/api'
import {
  AppropriationModal,
  Bg2,
  Chevron,
  SelectCalendarModal,
  SelectScoreModal,
  useModal
} from '@bitgouel/common'
import { StudentIdProps } from '@bitgouel/types'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'react-toastify'
import * as S from './style'

const MAXTITLELENGTH: number = 100 as const
const MAXCONTENTLENGTH: number = 1000 as const

const ActivityCreatePage: React.FC<{ studentIdProps: StudentIdProps }> = ({
  studentIdProps,
}) => {
  const { studentId, clubId } = studentIdProps

  const { openModal, closeModal } = useModal()
  const { push } = useRouter()

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
    } else if (type === '활동 날짜 선택') {
      setIsActivityDate((prev) => !prev)
      setIsScore(false)
    }
  }

  const { mutate } = usePostActivityInformation({
    onSuccess: () => {
      closeModal()
      push(`/main/club/${clubId}/student/${studentId}/activity`)
      toast.success('활동을 추가하였습니다.')
    },
  })

  const onCreate = () => {
    mutate({
      content: content,
      title: title,
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
            maxLength={MAXTITLELENGTH}
            onChange={(e) => {
              setTitle(e.target.value)
            }}
          />
          <S.InputMainText
            maxLength={MAXCONTENTLENGTH}
            placeholder='본문 입력 (1000자 이내)'
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
                  <S.SettingDateBox
                    onClick={() => openSelectModal('활동 날짜 선택')}
                  >
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
              onClick={() => {
                if (
                  title !== '' &&
                  content !== '' &&
                  activityDateText !== '활동 날짜 선택' &&
                  scoreText !== '학점 선택'
                ) {
                  openModal(
                    <AppropriationModal
                      isApprove={true}
                      question='활동을 추가하시겠습니까?'
                      title={title}
                      onAppropriation={onCreate}
                      purpose='추가하기'
                    />
                  )
                }
              }}
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
