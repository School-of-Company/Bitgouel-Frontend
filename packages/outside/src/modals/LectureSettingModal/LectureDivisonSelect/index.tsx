'use client'

import { lectureTypeToKor, LectureDivision, lectureDivisionToKor } from '@bitgouel/common'
import { LectureDivisionEnum } from '@bitgouel/types'
import { useRecoilState } from 'recoil'
import { EnumBox, EnumSelectContainer } from '../style'

const lectureDivisions: LectureDivisionEnum[] = [
  'AUTOMOBILE_INDUSTRY',
  'ENERGY_INDUSTRY',
  'MEDICAL_HEALTHCARE',
  'AI_CONVERGENCE',
  'CULTURAL_INDUSTRY',
]

const LectureDivisionSelect = () => {
  const [lectureDivision, setLectureDivision] = useRecoilState(LectureDivision)
  return (
    <EnumSelectContainer>
      {lectureDivisions.map((division) => (
        <EnumBox
          key={division}
          current={division}
          selected={lectureDivision}
          onClick={() => setLectureDivision(division)}
        >
          <span>{lectureDivisionToKor[division]}</span>
        </EnumBox>
      ))}
    </EnumSelectContainer>
  )
}

export default LectureDivisionSelect
