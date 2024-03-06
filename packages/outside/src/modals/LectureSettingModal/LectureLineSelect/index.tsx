'use client'

import { useRecoilState } from 'recoil'
import { EnumBox, EnumSelectContainer } from '../style'
import { LectureLine } from '@bitgouel/common'
import { LectureLineEnum } from '@bitgouel/types'

const lectureLines: LectureLineEnum[] = [
  '기계',
  '자동차',
  '전기전자',
  '생명화학공학',
  '뷰티',
  '의료헬스',
  '드론',
]

const LectureLineSelect = () => {
  const [lectureLine, setLectureLine] = useRecoilState(LectureLine)
  return (
    <EnumSelectContainer>
      {lectureLines.map((line) => (
        <EnumBox
          key={line}
          current={line}
          selected={lectureLine}
          onClick={() => setLectureLine(line)}
        >
          <span>{line}</span>
        </EnumBox>
      ))}
    </EnumSelectContainer>
  )
}

export default LectureLineSelect
