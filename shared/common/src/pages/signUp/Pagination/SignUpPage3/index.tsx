'use client'

import { ChangeEvent, useState } from 'react'
import { useRecoilState } from 'recoil'
import SignUpButtonContainer from '../SignUpButtonContainer'
import { PaginationInputsContainer } from '../SignUpPage1/style'
import * as S from './style'
import { SignUpPage3Obj, ValueInput } from '@bitgouel/common'

const SignUpPage3 = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const passwordRegex =
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,24}$/
  const phoneRegex = /^010[0-9]{8}$/

  const [signUpPage3Obj, setSignUpPage3Obj] = useRecoilState(SignUpPage3Obj)
  const [isPhoneRgx, setIsPhoneRgx] = useState<boolean>(true)
  const [isEmailRgx, setIsEmailRgx] = useState<boolean>(true)
  const [isPasswordRgx, setIsPasswordRgx] = useState<boolean>(true)
  const [isPwValidate, setIsPwValidate] = useState<boolean>(true)

  const onClear = (idx: number) => {
    const clearObj = [...signUpPage3Obj]
    clearObj[idx] = { ...clearObj[idx], value: '' }
    setSignUpPage3Obj(clearObj)
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>, idx: number) => {
    const updatedObj = [...signUpPage3Obj]
    if (idx === 0) {
      if (e.target.value === '') setIsPhoneRgx(true)
      else setIsPhoneRgx(phoneRegex.test(e.target.value))
    } else if (idx === 1) {
      if (e.target.value === '') setIsEmailRgx(true)
      else setIsEmailRgx(emailRegex.test(e.target.value))
    } else if (idx === 2) {
      if (e.target.value === '') setIsPasswordRgx(true)
      else setIsPasswordRgx(passwordRegex.test(e.target.value))
    } else if (idx === 3) {
      if (e.target.value === '') setIsPwValidate(true)
      else
        setIsPwValidate(
          e.target.value ===
            signUpPage3Obj.filter((_, i) => i === idx - 1)[0].value
        )
    }

    updatedObj[idx] = {
      ...updatedObj[idx],
      value:
        e.target.maxLength !== -1
          ? e.target.value.slice(0, e.target.maxLength)
          : e.target.value,
    }
    setSignUpPage3Obj(updatedObj)
  }

  return (
    <>
      <PaginationInputsContainer>
        {signUpPage3Obj.map((item, idx) => (
          <S.CertificationInputBox key={idx}>
            <ValueInput
              type={item.type}
              value={item.value}
              placeholder={item.placeholder}
              length={item.value.length}
              maxLength={item.maxLength}
              onClear={() => onClear(idx)}
              onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e, idx)}
            />
            <S.ErrorText>
              {idx === 0 && !isPhoneRgx && '전화번호 오류'}
              {idx === 1 && !isEmailRgx && '잘못된 이메일입니다'}
              {idx === 2 &&
                !isPasswordRgx &&
                '비밀번호는 (정규식)으로 해주세요'}
              {idx === 3 && !isPwValidate && '비밀번호가 일치하지 않습니다'}
            </S.ErrorText>
          </S.CertificationInputBox>
        ))}
      </PaginationInputsContainer>
      <SignUpButtonContainer
        isNext={
          signUpPage3Obj.every((item) => item.value.length) &&
          isEmailRgx &&
          isPasswordRgx &&
          isPwValidate
        }
      />
    </>
  )
}

export default SignUpPage3
