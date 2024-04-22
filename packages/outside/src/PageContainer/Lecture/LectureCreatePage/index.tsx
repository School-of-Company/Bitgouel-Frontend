'use client'

import { LectureSettingModal } from '@/modals'
import { usePostLecture } from '@bitgouel/api'
import {
  AppropriationModal,
  Bg3,
  FilterOut,
  LectureCredit,
  LectureDates,
  LectureDepartment,
  LectureDivision,
  LectureEndDate,
  LectureEndTime,
  LectureLine,
  LectureMaxRegistered,
  LectureProfessor,
  LectureSemester,
  LectureStartDate,
  LectureStartTime,
  LectureType,
  useModal,
} from '@bitgouel/common'
import { ChangeEvent, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import * as S from './style'

const MAXLENGTH: number = 1000 as const
const LectureCreatePage = () => {
  const [lectureTitle, setLectureTitle] = useState<string>('')
  const [lectureContent, setLectureContent] = useState<string>('')
  const lectureSemester = useRecoilValue(LectureSemester)
  const lectureDivision = useRecoilValue(LectureDivision)
  const lectureDepartment = useRecoilValue(LectureDepartment)
  const lectureLine = useRecoilValue(LectureLine)
  const lectureProfessor = useRecoilValue(LectureProfessor)
  const lectureStartDate = useRecoilValue(LectureStartDate)
  const lectureStartTime = useRecoilValue(LectureStartTime)
  const lectureEndDate = useRecoilValue(LectureEndDate)
  const lectureEndTime = useRecoilValue(LectureEndTime)
  const [lectureDates, setLectureDates] = useRecoilState(LectureDates)
  const lectureType = useRecoilValue(LectureType)
  const lectureCredit = useRecoilValue(LectureCredit)
  const lectureMaxRegisteredUser = useRecoilValue(LectureMaxRegistered)
  const { openModal } = useModal()
  const { mutate } = usePostLecture()

  const isCondition = (): boolean => {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/
    const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/

    if (
      lectureTitle.length &&
      lectureContent.length &&
      lectureLine.length &&
      lectureProfessor.length &&
      dateRegex.test(lectureStartDate) &&
      timeRegex.test(lectureStartTime) &&
      dateRegex.test(lectureEndDate) &&
      timeRegex.test(lectureEndTime) &&
      lectureDates.every((date) => dateRegex.test(date.completeDate)) &&
      lectureDates.every((date) => timeRegex.test(date.startShowTime)) &&
      lectureDates.every((date) => timeRegex.test(date.endShowTime)) &&
      lectureMaxRegisteredUser.length
    )
      return true
    return false
  }

  const openCreateModal = () => {
    if (!isCondition()) return
    const filteredDates = lectureDates.map(
      ({ startShowTime, endShowTime, ...filtered }) => filtered
    )
    openModal(
      <AppropriationModal
        isApprove={true}
        question='강의를 개설하시겠습니까?'
        title={lectureTitle}
        purpose='개설하기'
        onAppropriation={() =>
          mutate({
            name: lectureTitle,
            content: lectureContent,
            semester: lectureSemester,
            division: lectureDivision,
            department: lectureDepartment,
            line: lectureLine,
            userId: lectureProfessor,
            startDate: `${lectureStartDate}T${lectureStartTime}:00`,
            endDate: `${lectureEndDate}T${lectureEndTime}:00`,
            lectureDates: filteredDates,
            lectureType,
            credit: lectureCredit,
            maxRegisteredUser: +lectureMaxRegisteredUser,
          })
        }
      />
    )
  }

  return (
    <div>
      <S.SlideBg url={Bg3}>
        <S.BgContainer>
          <S.CreateTitle>강의 개설</S.CreateTitle>
          <S.TitleButtonContainer>
            <S.LectureButton onClick={() => openModal(<LectureSettingModal />)}>
              <FilterOut />
              <span>강의 세부 설정</span>
            </S.LectureButton>
          </S.TitleButtonContainer>
        </S.BgContainer>
      </S.SlideBg>
      <S.DocumentInputContainer>
        <S.DocumentInput>
          <S.InputTitle
            value={lectureTitle}
            maxLength={100}
            placeholder='강의 제목 (100자 이내)'
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setLectureTitle(e.target.value)
            }
          />
          <S.InputMainText
            value={lectureContent}
            maxLength={MAXLENGTH}
            placeholder='강의 설명 작성 (1000자 이내)'
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setLectureContent(e.target.value)
            }
          />
          <S.CreateButton onClick={openCreateModal} isAble={isCondition()}>
            강의 개설하기
          </S.CreateButton>
        </S.DocumentInput>
      </S.DocumentInputContainer>
    </div>
  )
}

export default LectureCreatePage
