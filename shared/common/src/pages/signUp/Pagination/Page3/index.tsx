'use client'

import React, { ChangeEvent, useState } from 'react'
import { useRecoilState } from 'recoil'
import { IsPasswordRgx, IsValidate, Page3Obj } from '../../../../atoms'
import { ValueInput } from '../../../../components'
import { PaginationInputsContainer } from '../Page1/style'
import SignUpButtonContainer from '../SignUpButtonContainer'
import * as S from './style'

const Page3 = ({
  page,
  setPage,
}: {
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
}) => {
  const emailRegex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
  const passwordRegex = new RegExp(
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,24}$/
  )
  const phoneRegex = new RegExp(/^[0-9]{11}$/)

  const [page3Obj, setPage3Obj] = useRecoilState(Page3Obj)
  const [isPhoneRgx, setIsPhoneRgx] = useState<boolean>(true)
  const [isEmailRgx, setIsEmailRgx] = useState<boolean>(true)
  const [isPasswordRgx, setIsPasswordRgx] = useState<boolean>(true)
  const [isValidate, setIsValidate] = useState<boolean>(true)

  const onClear = (idx: number) => {
    const clearObj = [...page3Obj]
    clearObj[idx] = { ...clearObj[idx], value: '' }
    setPage3Obj(clearObj)
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>, idx: number) => {
    const updatedObj = [...page3Obj]
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
      if (e.target.value === '') setIsValidate(true)
      else
        setIsValidate(
          e.target.value === page3Obj.filter((_, i) => i === idx - 1)[0].value
        )
    }

    updatedObj[idx] = {
      ...updatedObj[idx],
      value:
        e.target.maxLength !== -1
          ? e.target.value.slice(0, e.target.maxLength)
          : e.target.value,
    }
    setPage3Obj(updatedObj)
  }

  return (
    <>
      <PaginationInputsContainer>
        {page3Obj.map((item, idx) => (
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
              {idx === 3 && !isValidate && '비밀번호가 일치하지 않습니다'}
            </S.ErrorText>
          </S.CertificationInputBox>
        ))}
      </PaginationInputsContainer>
      <SignUpButtonContainer
        isNext={
          page3Obj.every((item) => item.value.length) &&
          isEmailRgx &&
          isPasswordRgx &&
          isValidate
        }
        setPage={setPage}
        page={page}
      />
    </>
  )
}

export default Page3
