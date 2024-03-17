'use client'

import { useState } from 'react'
import * as S from './style'
import { useRouter } from 'next/navigation'
import { useSetRecoilState } from 'recoil'
import { PwPage } from '../../../../atoms'

const NumberValid = () => {
  const { push } = useRouter()
  const [validStatus, setValidStatus] = useState(false)
  const setPwPage = useSetRecoilState(PwPage)

  const nextOnclick = () => {
    setPwPage(3)
  }

  return (
    <>
      <S.EmailInputContainer>찌야야야</S.EmailInputContainer>
      <S.ButtonContainer>
        <S.PreButton onClick={() => setPwPage(1)}>이전으로</S.PreButton>
        <S.NextButton statusColor={validStatus} onClick={nextOnclick}>
          다음으로
        </S.NextButton>
      </S.ButtonContainer>
    </>
  )
}

export default NumberValid
