'use client'

import { LectureSessionEnum } from '@bitgouel/types'
import { useRecoilState } from 'recoil'
import { EnumBox, EnumSelectContainer } from '../style'
import { LectureSession } from '@bitgouel/common'

const lectureSessions: LectureSessionEnum[] = [
  '1학년 2학기',
  '2학년 1학기',
  '2학년 2학기',
  '3학년 1학기',
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
          <span>{session}</span>
        </EnumBox>
      ))}
    </EnumSelectContainer>
  )
}

export default LectureLineSelect
