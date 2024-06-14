import { CautionIcon, LectureMaxRegistered } from '@bitgouel/common'
import { ChangeEvent } from 'react'
import { useRecoilState } from 'recoil'
import * as S from './style'

const MAX_LENGTH: 2 = 2 as const

const LectureMaxInput = () => {
  const [lectureMax, setLectureMax] = useRecoilState(LectureMaxRegistered)
  return (
    <S.LectureMaxInputWrapper>
      <S.LectureMaxInputContainer>
        <S.MaxInputBox length={lectureMax.length}>
          <input
            type='string'
            value={lectureMax}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setLectureMax(e.target.value)
            }
            maxLength={MAX_LENGTH}
          />
        </S.MaxInputBox>
        <span>명</span>
      </S.LectureMaxInputContainer>
      <S.CautionTextContainer>
        <CautionIcon />
        <span>인원 제한은 5~15명입니다</span>
      </S.CautionTextContainer>
    </S.LectureMaxInputWrapper>
  )
}

export default LectureMaxInput
