import { LectureMaxRegistered } from '@bitgouel/common'
import { ChangeEvent } from 'react'
import { useRecoilState } from 'recoil'
import * as S from './style'

const LectureMaxInput = () => {
  const [lectureMax, setLectureMax] = useRecoilState(LectureMaxRegistered)
  return (
    <S.LectureMaxInputWrapper>
      <S.MaxInputBox length={lectureMax.length}>
        <input
          type='text'
          value={lectureMax}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setLectureMax(e.target.value)
          }
          maxLength={2}
        />
      </S.MaxInputBox>
      <span>명</span>
    </S.LectureMaxInputWrapper>
  )
}

export default LectureMaxInput
