'use client'

import {
  LectureSession,
  lectureSessionToKor
} from '@bitgouel/common'
import { LectureSessionEnum } from '@bitgouel/types'
import { useRecoilState } from 'recoil'
import { EnumBox, EnumSelectContainer } from '../style'

const lectureSessions: LectureSessionEnum[] = [
  'FIRST_YEAR_FALL_SEMESTER',
  'SECOND_YEAR_SPRING_SEMESTER',
  'SECOND_YEAR_FALL_SEMESTER',
  'THIRD_YEAR_SPRING_SEMESTER',
]

const LectureLineSelect = () => {
  const [lectureSession, setLectureSession] = useRecoilState(LectureSession)
  return (
    <EnumSelectContainer>
      {lectureSessions.map((session) => (
        <EnumBox
          key={session}
          current={session}
          selected={lectureSession}
          onClick={() => setLectureSession(session)}
        >
          <span>{lectureSessionToKor[session]}</span>
        </EnumBox>
      ))}
    </EnumSelectContainer>
  )
}

export default LectureLineSelect
