import { CautionIcon, LectureMaxRegistered } from '@bitgouel/common'
import { ChangeEvent } from 'react'
import { useRecoilState } from 'recoil'
import * as S from './style'

const MaxInputMaxLength: 2 = 2 as const

const LectureMaxInput = () => {
  const [lectureMax, setLectureMax] = useRecoilState(LectureMaxRegistered)
  return (
    <S.LectureMaxInputWrapper>
      <S.LectureMaxInputContainer>
        <S.MaxInputBox length={lectureMax.length}>
          <input
            type='text'
            value={lectureMax}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setLectureMax(e.target.value)
            }
            maxLength={MaxInputMaxLength}
          />
        </S.MaxInputBox>
        <span>명</span>
      </S.LectureMaxInputContainer>
      <S.CautionTextContainer>
        <CautionIcon />
        <span>최대 인원은 10명입니다</span>
      </S.CautionTextContainer>
    </S.LectureMaxInputWrapper>
  )
}

export default LectureMaxInput
