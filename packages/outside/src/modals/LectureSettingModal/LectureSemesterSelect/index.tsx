'use client'

import {
  LectureSemester,
  LectureSemesterToKor
} from '@bitgouel/common'
import { LectureSemesterEnum } from '@bitgouel/types'
import { useRecoilState } from 'recoil'
import { EnumBox, EnumSelectContainer } from '../style'

const lectureSemesters: LectureSemesterEnum[] = [
  'FIRST_YEAR_FALL_SEMESTER',
  'SECOND_YEAR_SPRING_SEMESTER',
  'SECOND_YEAR_FALL_SEMESTER',
  'THIRD_YEAR_SPRING_SEMESTER',
]

const LectureSemesterSelect = () => {
  const [lectureSemester, setLectureSemester] = useRecoilState(LectureSemester)
  return (
    <EnumSelectContainer>
      {lectureSemesters.map((session) => (
        <EnumBox
          key={session}
          current={session}
          selected={lectureSemester}
          onClick={() => setLectureSemester(session)}
        >
          <span>{LectureSemesterToKor[session]}</span>
        </EnumBox>
      ))}
    </EnumSelectContainer>
  )
}

export default LectureSemesterSelect
