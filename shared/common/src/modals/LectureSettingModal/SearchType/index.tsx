'use client'

import { LectureCredit, LectureType, lectureTypeToKor } from '@bitgouel/common'
import { EnumBox, EnumSelectContainer } from '../style'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { LectureTypeEnum } from '@bitgouel/types'

const lectureTypes: LectureTypeEnum[] = [
  'MUTUAL_CREDIT_RECOGNITION_PROGRAM',
  'UNIVERSITY_EXPLORATION_PROGRAM',
]

const LectureTypeSelect = () => {
  const [lectureType, setLectureType] = useRecoilState(LectureType)
  const setLectureCredit = useSetRecoilState(LectureCredit)

  return (
    <EnumSelectContainer>
      {lectureTypes.map((type) => (
        <EnumBox
          key={type}
          current={type}
          selected={lectureType}
          onClick={() => {
            setLectureType(type)
            setLectureCredit(1)
          }}
        >
          <span>{lectureTypeToKor[type]}</span>
        </EnumBox>
      ))}
    </EnumSelectContainer>
  )
}

export default LectureTypeSelect
