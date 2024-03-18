'use client'

import {
  lectureTypeToKor,
  LectureDivision,
  lectureDivisionToKor,
  LectureLine,
} from '@bitgouel/common'
import { LectureDivisionEnum } from '@bitgouel/types'
import { useRecoilState, useSetRecoilState } from 'recoil'
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
  const setLectureLine = useSetRecoilState(LectureLine)
  return (
    <EnumSelectContainer>
      {lectureDivisions.map((division) => (
        <EnumBox
          key={division}
          current={division}
          selected={lectureDivision}
          onClick={() => {
            if (division !== lectureDivision) setLectureLine('')
            setLectureDivision(division)
          }}
        >
          <span>{lectureDivisionToKor[division]}</span>
        </EnumBox>
      ))}
    </EnumSelectContainer>
  )
}

export default LectureDivisionSelect
