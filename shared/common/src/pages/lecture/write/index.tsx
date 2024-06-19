'use client'

import { useGetDetailLecture, usePostLecture } from '@bitgouel/api'
import {
  AppropriationModal,
  AuthorityContext,
  Bg3,
  FilterOut,
  LectureCredit,
  LectureDates,
  LectureDepartment,
  LectureDivision,
  LectureEndDate,
  LectureEndTime,
  LectureEssentialComplete,
  LectureInstructor,
  LectureLine,
  LectureMaxRegistered,
  LectureSemester,
  LectureSettingModal,
  LectureStartDate,
  LectureStartTime,
  LectureType,
  MainStyle,
  PrivateRouter,
  ShowInstructor,
  useModal,
} from '@bitgouel/common'
import { LectureCreatePayloadTypes, LectureDate, RoleEnumTypes } from '@bitgouel/types'
import dayjs from 'dayjs'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useRecoilState, useSetRecoilState } from 'recoil'
import * as S from './style'

const TITLE_MAX_LENGTH: number = 1000 as const
const MAIN_MAX_LENGTH: number = 1000 as const

const roleArray: RoleEnumTypes[] = [
  'ROLE_ADMIN',
  'ROLE_PROFESSOR',
  'ROLE_COMPANY_INSTRUCTOR',
  'ROLE_GOVERNMENT'
]

const LectureWritePage = ({ lectureId }: { lectureId?: string }) => {
  const [lectureTitle, setLectureTitle] = useState<string>('')
  const [lectureContent, setLectureContent] = useState<string>('')
  const [lectureEssentialComplete, setLectureEssentialComplete] =
    useRecoilState(LectureEssentialComplete)
  const [lectureSemester, setLectureSemester] = useRecoilState(LectureSemester)
  const [lectureDivision, setLectureDivision] = useRecoilState(LectureDivision)
  const [lectureDepartment, setLectureDepartment] =
    useRecoilState(LectureDepartment)
  const [lectureLine, setLectureLine] = useRecoilState(LectureLine)
  const [lectureInstructor, setLectureInstructor] =
    useRecoilState(LectureInstructor)
  const [lectureStartDate, setLectureStartDate] =
    useRecoilState(LectureStartDate)
  const [lectureStartTime, setLectureStartTime] =
    useRecoilState(LectureStartTime)
  const [lectureEndDate, setLectureEndDate] = useRecoilState(LectureEndDate)
  const [lectureEndTime, setLectureEndTime] = useRecoilState(LectureEndTime)
  const [lectureDates, setLectureDates] = useRecoilState(LectureDates)
  const [lectureType, setLectureType] = useRecoilState(LectureType)
  const [lectureCredit, setLectureCredit] = useRecoilState(LectureCredit)
  const [lectureMaxRegisteredUser, setLectureMaxRegisteredUser] =
    useRecoilState(LectureMaxRegistered)
  const setShowInstructor = useSetRecoilState(ShowInstructor)
  const { openModal, closeModal } = useModal()
  const { push } = useRouter()
  const authority = useContext(AuthorityContext)

  const onSuccess = () => {
    closeModal()
    toast.success('강의를 개설했습니다')
    push(`/main/lecture`)
    setLectureEssentialComplete(true)
    setLectureSemester('FIRST_YEAR_FALL_SEMESTER')
    setLectureDivision('')
    setLectureDepartment('')
    setLectureLine('')
    setLectureInstructor('')
    setLectureStartDate('')
    setLectureStartTime('')
    setLectureEndDate('')
    setLectureEndTime('')
    setLectureDates([])
    setLectureType('')
    setLectureCredit(1)
    setLectureMaxRegisteredUser('')
    setShowInstructor('')
  }

  const { mutate } = usePostLecture({
    onSuccess,
  })

  const isAble = (): boolean => {
    if (
      lectureTitle.length &&
      lectureContent.length &&
      lectureLine.length &&
      lectureInstructor.length &&
      lectureStartDate.length &&
      lectureStartTime.length &&
      lectureEndDate.length &&
      lectureEndTime.length &&
      lectureDates.every((date) => date.completeDate.length) &&
      lectureDates.every((date) => date.startShowTime) &&
      lectureDates.every((date) => date.endShowTime.length) &&
      lectureMaxRegisteredUser.length
    )
      return true
    return false
  }

  const openCreateModal = () => {
    if (!isAble()) return toast.error('입력 요소들을 다시 확인해주세요')
    const filteredDates: LectureDate[] = lectureDates.map(
      ({ startShowTime, endShowTime, ...filtered }) => ({
        ...filtered,
        completeDate: dayjs(filtered.completeDate).format('YYYY-MM-DD'),
      })
    )

    const formatLectureStateDate = dayjs(lectureStartDate)
    const formatLectureEndDate = dayjs(lectureEndDate)

    const payload: LectureCreatePayloadTypes = {
      name: lectureTitle,
      content: lectureContent,
      semester: lectureSemester,
      division: lectureDivision,
      department: lectureDepartment,
      line: lectureLine,
      userId: lectureInstructor,
      startDate: `${formatLectureStateDate.format(
        'YYYY-MM-DD'
      )}T${lectureStartTime}:00`,
      endDate: `${formatLectureEndDate.format(
        'YYYY-MM-DD'
      )}T${lectureEndTime}:00`,
      lectureDates: filteredDates,
      lectureType,
      credit: lectureCredit,
      maxRegisteredUser: +lectureMaxRegisteredUser,
      essentialComplete: lectureEssentialComplete,
    }

    openModal(
      <AppropriationModal
        isApprove={true}
        question='강의를 개설하시겠습니까?'
        title={lectureTitle}
        purpose='개설하기'
        onAppropriation={(callbacks) => mutate(payload, callbacks)}
      />
    )
  }

  const { data } = useGetDetailLecture(lectureId || '', {
    enabled: !!lectureId
  })

  useEffect(() => {
    if (lectureId && data) {
      setLectureTitle(data.name)
      setLectureContent(data.content)
      setLectureEssentialComplete(data.essentialComplete)
      setLectureSemester(data.semester)
      setLectureDivision(data.division)
      setLectureDepartment(data.department)
      setLectureLine(data.line)
      // setLectureInstructor(data.userId)
      setLectureStartDate(dayjs(data.startDate).format('YYYYMMDD'))
      setLectureStartTime(dayjs(data.startDate).format('HH:mm'))
      setLectureEndDate(dayjs(data.endDate).format('YYYYMMDD'))
      setLectureEndTime(dayjs(data.endDate).format('HH:mm'))
      setLectureDates(
        data.lectureDates.map((date) => {
          return {
            ...date,
            startShowTime: date.startTime + ':00',
            endShowTime: date.endTime + ':00',
          }
        })
      )
      setLectureType(data.lectureType)
      setLectureCredit(data.credit as 1 | 2)
      setLectureMaxRegisteredUser(data.maxRegisteredUser.toString())
      setShowInstructor(data.lecturer)
    }
  }, [data])

  return (
    <PrivateRouter isRedirect={!roleArray.includes(authority as RoleEnumTypes)}>
      <MainStyle.PageWrapper>
        <MainStyle.SlideBg url={Bg3}>
          <MainStyle.BgContainer>
            <MainStyle.PageTitle>강의 개설</MainStyle.PageTitle>
            <MainStyle.ButtonContainer>
              <MainStyle.SlideButton
                onClick={() => openModal(<LectureSettingModal />)}
              >
                <FilterOut />
                <span>강의 세부 설정</span>
              </MainStyle.SlideButton>
            </MainStyle.ButtonContainer>
          </MainStyle.BgContainer>
        </MainStyle.SlideBg>
        <MainStyle.MainWrapper>
          <MainStyle.MainContainer>
            <S.InputTitle
              value={lectureTitle}
              maxLength={TITLE_MAX_LENGTH}
              placeholder='강의 제목 (100자 이내)'
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setLectureTitle(e.target.value)
              }
            />
            <S.InputMainText
              value={lectureContent}
              maxLength={MAIN_MAX_LENGTH}
              placeholder='강의 설명 작성 (1000자 이내)'
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                setLectureContent(e.target.value)
              }
            />
          </MainStyle.MainContainer>
          <S.CreateButtonWrapper>
            <S.CreateButton onClick={openCreateModal} isAble={isAble()}>
              강의 개설하기
            </S.CreateButton>
          </S.CreateButtonWrapper>
        </MainStyle.MainWrapper>
      </MainStyle.PageWrapper>
    </PrivateRouter>
  )
}

export default LectureWritePage
