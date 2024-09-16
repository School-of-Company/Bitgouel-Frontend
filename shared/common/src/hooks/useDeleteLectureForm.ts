'use client'

import { useResetRecoilState } from 'recoil'
import {
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
  LecturePlace,
  LectureSemester,
  LectureStartDate,
  LectureStartTime,
  LectureType,
  ShowInstructor,
} from '../atoms'

const useDeleteLectureForm = () => {
  const resetLectureEssentialComplete = useResetRecoilState(
    LectureEssentialComplete
  )
  const resetLectureSemester = useResetRecoilState(LectureSemester)
  const resetLectureDivision = useResetRecoilState(LectureDivision)
  const resetLectureDepartment = useResetRecoilState(LectureDepartment)
  const resetLectureLine = useResetRecoilState(LectureLine)
  const resetLectureInstructor = useResetRecoilState(LectureInstructor)
  const resetLectureStartDate = useResetRecoilState(LectureStartDate)
  const resetLectureStartTime = useResetRecoilState(LectureStartTime)
  const resetLectureEndDate = useResetRecoilState(LectureEndDate)
  const resetLectureEndTime = useResetRecoilState(LectureEndTime)
  const resetLectureDates = useResetRecoilState(LectureDates)
  const resetLectureType = useResetRecoilState(LectureType)
  const resetLectureCredit = useResetRecoilState(LectureCredit)
  const resetLectureMaxRegistered = useResetRecoilState(LectureMaxRegistered)
  const resetShowInstructor = useResetRecoilState(ShowInstructor)
  const resetLecturePlace = useResetRecoilState(LecturePlace)

  const resetAllLectureForm = () => {
    resetLectureEssentialComplete()
    resetLectureSemester()
    resetLectureDivision()
    resetLectureDepartment()
    resetLectureLine()
    resetLectureInstructor()
    resetLectureStartDate()
    resetLectureStartTime()
    resetLectureEndDate()
    resetLectureEndTime()
    resetLectureDates()
    resetLectureType()
    resetLectureCredit()
    resetLectureMaxRegistered()
    resetShowInstructor()
    resetLecturePlace()
  }

  return { resetAllLectureForm }
}

export default useDeleteLectureForm
