'use client'

import {
  LectureEssentialComplete
} from '@bitgouel/common'
import { useRecoilState } from 'recoil'
import { EnumBox, EnumSelectContainer } from '../style'

const lectureEssentialCompleteTexts: ['필수', '선택'] = [
  '필수',
  '선택'
]

const LectureEssentialCompleteSelect = () => {
  const [lectureEssentialComplete, setLectureEssentialComplete] = useRecoilState(LectureEssentialComplete)
  return (
    <EnumSelectContainer>
      {lectureEssentialCompleteTexts.map((completeText) => (
        <EnumBox
          key={completeText}
          current={completeText}
          selected={lectureEssentialComplete ? '필수' : '선택'}
          onClick={() => setLectureEssentialComplete(completeText === '필수' ? true : false)}
        >
          <span>{completeText}</span>
        </EnumBox>
      ))}
    </EnumSelectContainer>
  )
}

export default LectureEssentialCompleteSelect
