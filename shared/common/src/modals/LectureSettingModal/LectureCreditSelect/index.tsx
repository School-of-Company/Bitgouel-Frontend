'use client'

import { LectureCredit, lectureDivisionToKor } from '@bitgouel/common'
import { useRecoilState } from 'recoil'
import { EnumBox, EnumSelectContainer } from '../style'

const lectureCredits: [1, 2] = [1, 2]

const LectureCreditSelect = () => {
  const [lectureCredit, setLectureCredit] = useRecoilState(LectureCredit)
  return (
    <EnumSelectContainer>
      {lectureCredits.map((credit) => (
        <EnumBox
          key={credit}
          current={credit + ''}
          selected={lectureCredit + ''}
          onClick={() => setLectureCredit(credit)}
        >
          <span>{credit}점</span>
        </EnumBox>
      ))}
    </EnumSelectContainer>
  )
}

export default LectureCreditSelect
