'use client'

import { SignUpPageNumber, useSignUp } from '@bitgouel/common'
import { useRouter } from 'next/navigation'
import { useRecoilState } from 'recoil'
import { match } from 'ts-pattern'
import * as S from './style'

const SignUpButtonContainer = ({ isNext }: { isNext: boolean }) => {
  const { push } = useRouter()
  const [signUpPageNumber, setSignUpPageNumber] =
    useRecoilState(SignUpPageNumber)
  const [onNext] = useSignUp({ isNext })

  return (
    <S.SignUpButtonContainer page={signUpPageNumber}>
      <S.PreButton
        type='button'
        onClick={() =>
          match(signUpPageNumber)
            .with(1, () => push('/auth/login'))
            .otherwise(() => setSignUpPageNumber((prev) => prev - 1))
        }
      >
        이전으로
      </S.PreButton>
      <S.NextButton type='submit' isNext={isNext} onClick={onNext}>
        {signUpPageNumber !== 3 ? '다음으로' : '가입하기'}
      </S.NextButton>
    </S.SignUpButtonContainer>
  )
}

export default SignUpButtonContainer
