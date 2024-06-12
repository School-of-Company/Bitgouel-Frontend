'use client'

import {
  useGetActivityDetail,
  usePatchActivityModifyInformation,
  usePostActivityInformation,
} from '@bitgouel/api'
import {
  AppropriationModal,
  Bg2,
  Chevron,
  PrivateRouter,
  SelectCalendarModal,
  SelectScoreModal,
  useModal,
  MainStyle,
} from '@bitgouel/common'
import {
  ActivityDetailProps,
  ActivityPayloadTypes,
  AppropriationModalProps,
} from '@bitgouel/types'
import dayjs from 'dayjs'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import * as S from './style'

const MAXTITLELENGTH: number = 100 as const
const MAXCONTENTLENGTH: number = 1000 as const

const ActivityWritePage = ({
  studentIdProps,
  activityId,
}: ActivityDetailProps) => {
  const { openModal, closeModal } = useModal()
  const { push } = useRouter()

  const { studentId, clubId } = studentIdProps || {}
  const [isActivityDate, setIsActivityDate] = useState<boolean>(false)
  const [activityTaskDate, setActivityTaskDate] = useState<Date>(new Date())
  const [activityDateText, setActivityDateText] =
    useState<string>('활동 날짜 선택')
  const [isScore, setIsScore] = useState<boolean>(false)
  const [scoreText, setScoreText] = useState<string>('학점 선택')

  const [activityTitle, setActivityTitle] = useState<string>('')
  const [activityContent, setActivityContent] = useState<string>('')

  const openSelectModal = (type: '학점 선택' | '활동 날짜 선택') => {
    if (type === '학점 선택') {
      setIsActivityDate(false)
      setIsScore((prev) => !prev)
    } else if (type === '활동 날짜 선택') {
      setIsActivityDate((prev) => !prev)
      setIsScore(false)
    }
  }

  const isAble = () => {
    if (isSuccess && data) {
      if (
        data.title !== activityTitle ||
        (data.content !== activityContent &&
          activityDateText !== '활동 날짜 선택' &&
          scoreText !== '학점 선택')
      )
        return true
      else return false
    } else {
      if (
        activityTitle !== '' &&
        activityContent !== '' &&
        activityDateText !== '활동 날짜 선택' &&
        scoreText !== '학점 선택'
      )
        return true
      else return false
    }
  }

  const { data, refetch, isSuccess } = useGetActivityDetail(activityId || '', {
    enabled: !!studentId,
  })

  const { mutate: createActivity } = usePostActivityInformation({
    onSuccess: () => {
      closeModal()
      push(`/main/club/detail/${clubId}/student/detail/${studentId}/activity`)
      toast.success('활동을 추가하였습니다.')
    },
  })

  const { mutate: modifyActivity } = usePatchActivityModifyInformation(
    activityId || '',
    {
      onSuccess: () => {
        closeModal()
        push(`/main/club/detail/${clubId}/student/detail/${studentId}/activity`)
        toast.success('수정하였습니다.')
        refetch()
      },
    }
  )

  const onSubmit = () => {
    const condition: boolean = !!(studentId && clubId && activityId)
    const activityPayload: ActivityPayloadTypes = {
      title: activityTitle,
      content: activityContent,
      credit: Number(scoreText?.slice(0, 1)),
      activityDate: `${activityTaskDate.getFullYear()}-${(
        activityTaskDate.getMonth() + 1
      )
        .toString()
        .padStart(2, '0')}-${activityTaskDate
        .getDate()
        .toString()
        .padStart(2, '0')}`,
    }
    const ModalParameter: AppropriationModalProps = {
      isApprove: condition ? true : false,
      question: condition
        ? '활동을 수정하시겠습니까?'
        : '활동을 추가하시겠습니까?',
      title: activityTitle || '',
      purpose: condition ? '수정하기' : '추가하기',
      onAppropriation: (callbacks) =>
        condition
          ? createActivity(activityPayload, callbacks)
          : modifyActivity(activityPayload, callbacks),
    }

    openModal(
      <AppropriationModal
        isApprove={ModalParameter.isApprove}
        question={ModalParameter.question}
        title={ModalParameter.title}
        purpose={ModalParameter.purpose}
        onAppropriation={ModalParameter.onAppropriation}
      />
    )
  }

  useEffect(() => {
    if (isSuccess) {
      setActivityTitle(data?.title || '')
      setActivityContent(data?.content || '')
      setScoreText(data?.credit + '점' || '')
      setActivityDateText(dayjs(data?.activityDate).format('YYYY.MM.DD'))
    }
  }, [data])

  return (
    <PrivateRouter>
      <MainStyle.PageWrapper>
        <MainStyle.SlideBg url={Bg2}>
          <MainStyle.BgContainer>
            <MainStyle.PageTitle>
              활동 {studentId ? '수정' : '추가'}
            </MainStyle.PageTitle>
          </MainStyle.BgContainer>
        </MainStyle.SlideBg>
        <MainStyle.MainWrapper>
          <MainStyle.MainContainer>
            <S.InputTitle
              value={activityTitle}
              placeholder='활동 제목(100자 이내)'
              maxLength={MAXTITLELENGTH}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setActivityTitle(e.target.value)
              }
            />
            <S.InputMainText
              value={activityContent}
              maxLength={MAXCONTENTLENGTH}
              placeholder='본문 입력 (1000자 이내)'
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                setActivityContent(e.target.value)
              }
            />
            <S.ActivitySetting>
              <S.SettingTitle>활동 세부 설정</S.SettingTitle>
              <S.SettingSelectionContainer>
                <S.SettingSelection>
                  <S.SelectModalContainer>
                    {isActivityDate && (
                      <SelectCalendarModal
                        date={activityTaskDate}
                        setDate={setActivityTaskDate}
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
                        score={
                          Number.isInteger(Number(scoreText))
                            ? scoreText + '점'
                            : scoreText
                        }
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
                onClick={() => isAble() && onSubmit()}
                isAble={isAble()}
              >
                {activityId ? '수정하기' : '추가하기'}
              </S.CreateButton>
            </S.ButtonContainer>
          </MainStyle.MainContainer>
        </MainStyle.MainWrapper>
      </MainStyle.PageWrapper>
    </PrivateRouter>
  )
}
export default ActivityWritePage
