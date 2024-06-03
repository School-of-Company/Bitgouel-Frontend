'use client'

import { ChangeEvent, FocusEvent, useState } from 'react'
import { useRecoilState } from 'recoil'
import SignUpButtonContainer from '../SignUpButtonContainer'
import { PaginationInputsContainer } from '../SignUpPage1/style'
import * as S from './style'
import { SignUpPage3Obj, ValueInput } from '@bitgouel/common'
import { match } from 'ts-pattern'

const SignUpPage3 = () => {
  const emailRegex = /^(?=.[A-Za-z0-9])[A-Za-z0-9!@#\$%^&]{8,24}$/
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
    updatedObj[idx] = {
      ...updatedObj[idx],
      value: e.target.value,
    }
    setSignUpPage3Obj(updatedObj)
  }

  const onBlur = (e: FocusEvent<HTMLInputElement>, idx: number) => {
    const value = e.target.value

    match(value.length)
      .with(0, () => {
        setIsPhoneRgx(true)
        setIsEmailRgx(true)
        setIsPasswordRgx(true)
        setIsPwValidate(true)
      })
      .otherwise(() => {
        match(idx).with(0, () => setIsPhoneRgx(phoneRegex.test(value)))
        match(idx).with(1, () => setIsEmailRgx(emailRegex.test(value)))
        match(idx).with(2, () => setIsPasswordRgx(passwordRegex.test(value)))
        match(idx).with(3, () =>
          setIsPwValidate(value === signUpPage3Obj[idx - 1].value)
        )
      })
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
              onBlur={(e: FocusEvent<HTMLInputElement>) => onBlur(e, idx)}
              errorText={
                idx === 0 && !isPhoneRgx
                  ? '전화번호 오류'
                  : idx === 1 && !isEmailRgx
                  ? '잘못된 이메일입니다'
                  : idx === 2 && !isPasswordRgx
                  ? '비밀번호는 정규식에 맞게 입력해주세요'
                  : idx === 3 && !isPwValidate
                  ? '비밀번호가 일치하지 않습니다'
                  : ''
              }
            />
          </S.CertificationInputBox>
        ))}
      </PaginationInputsContainer>
      <SignUpButtonContainer
        isNext={
          signUpPage3Obj.every((item) => item.value.length) &&
          isPhoneRgx &&
          isEmailRgx &&
          isPasswordRgx &&
          isPwValidate
        }
      />
    </>
  )
}

export default SignUpPage3
