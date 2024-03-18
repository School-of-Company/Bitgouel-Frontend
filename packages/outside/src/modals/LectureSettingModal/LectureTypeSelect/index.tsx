'use client'

import { LectureType, lectureTypeToKor } from '@bitgouel/common'
import { EnumBox, EnumSelectContainer } from '../style'
import { useRecoilState } from 'recoil'
import { LectureTypeEnum } from '@bitgouel/types'

const lectureTypes: LectureTypeEnum[] = [
  'MUTUAL_CREDIT_RECOGNITION_PROGRAM',
  'UNIVERSITY_EXPLORATION_PROGRAM',
]

const LectureTypeSelect = () => {
  const [lectureType, setLectureType] = useRecoilState(LectureType)
  return (
    <EnumSelectContainer>
      {lectureTypes.map((type) => (
        <EnumBox
          key={type}
          current={type}
          selected={lectureType}
          onClick={() => setLectureType(type)}
        >
          <span>{lectureTypeToKor[type]}</span>
        </EnumBox>
      ))}
    </EnumSelectContainer>
  )
}

export default LectureTypeSelect