import React, { ChangeEvent, useState } from 'react'
import { PaginationInputsContainer } from '../Page1/style'
import { useRecoilState } from 'recoil'
import {
  EmailCertificate,
  EmailCertificateText,
  IsPasswordRgx,
  IsValidate,
  Page3Obj,
  PhoneCertificate,
  PhoneCertificateText,
} from '../../../../atoms'
import ValueInput from '../../../ValueInput'
import SignUpButtonContainer from '../SignUpButtonContainer'
import * as S from './style'

const Page3 = ({
  page,
  setPage,
}: {
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
}) => {
  const regex =
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,24}$/

  const [page3Obj, setPage3Obj] = useRecoilState(Page3Obj)
  const [phoneCertificate, setPhoneCertificate] =
    useRecoilState<boolean>(PhoneCertificate)
  const [phoneCertificateText, setPhoneCertificateText] =
    useRecoilState<string>(PhoneCertificateText)
  const [emailCertificate, setEmailCertificate] =
    useRecoilState<boolean>(EmailCertificate)
  const [emailCertificateText, setEmailCertificateText] =
    useRecoilState<string>(EmailCertificateText)
  const [isPasswordRgx, setIsPasswordRgx] = useRecoilState(IsPasswordRgx)
  const [isValidate, setIsValidate] = useRecoilState(IsValidate)

  const onClear = (idx: number, placeholder: string) => {
    if (placeholder === '전화번호 (- 제외)' && phoneCertificate) {
      return
    } else if (placeholder === '이메일' && emailCertificate) {
      return
    } else {
      const clearObj = [...page3Obj]
      clearObj[idx] = { ...clearObj[idx], value: '' }
      setPage3Obj(clearObj)
    }
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>, idx: number) => {
    const updatedObj = [...page3Obj]
    if (
      e.target.placeholder ===
      '비밀번호 (8~24자 이내의 영문 / 숫자, 특수문자 1개 이상)'
    ) {
      setIsPasswordRgx(regex.test(e.target.value))
    } else if (e.target.placeholder === '비밀번호 확인') {
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

  const onCertificate = (placeholder: string, idx: number) => {
    if (placeholder === '전화번호 (- 제외)' && !phoneCertificate) {
      setPhoneCertificate(true)
      setPhoneCertificateText('완료')
      const updatedObj = [
        ...page3Obj.slice(0, idx),
        { value: '', placeholder: '인증번호', type: 'number', maxLength: 6 },
        ...page3Obj.slice(idx),
      ]
      setPage3Obj(updatedObj)
    } else if (placeholder === '이메일' && !emailCertificate) {
      setEmailCertificate(true)
      setEmailCertificateText('완료')
      const updatedObj = [
        ...page3Obj.slice(0, idx),
        { value: '', placeholder: '인증번호', type: 'number', maxLength: 6 },
        ...page3Obj.slice(idx),
      ]
      setPage3Obj(updatedObj)
    } else if (placeholder === '전화번호 (- 제외)' && phoneCertificate) {
      setPhoneCertificate(false)
      setPage3Obj((prev) => prev.filter((_, i) => i !== idx))
    } else if (placeholder === '이메일' && emailCertificate) {
      setEmailCertificate(false)
      setPage3Obj((prev) => prev.filter((_, i) => i !== idx))
    } else if (
      (placeholder === '전화번호 (- 제외)' &&
        !phoneCertificate &&
        phoneCertificateText === '완료') ||
      (placeholder === '이메일' &&
        !emailCertificate &&
        emailCertificateText === '완료')
    )
      return
  }

  return (
    <>
      <PaginationInputsContainer>
        {page3Obj.map((item, idx) => (
          <S.CertificationInputBox key={idx} placeholderText={item.placeholder}>
            <ValueInput
              type={item.type}
              value={item.value}
              placeholder={item.placeholder}
              length={item.value.length}
              maxLength={item.maxLength}
              onClear={() => onClear(idx, item.placeholder)}
              disabled={
                (item.placeholder === '전화번호 (- 제외)' &&
                  phoneCertificate) ||
                (item.placeholder === '이메일' && emailCertificate && true)
              }
              onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e, idx)}
            />

            {item.placeholder === '전화번호 (- 제외)' && (
              <S.CertificationButton
                onClick={() =>
                  item.value.length > 0 &&
                  onCertificate('전화번호 (- 제외)', idx + 1)
                }
                style={{
                  backgroundColor:
                    item.value.length > 0
                      ? !phoneCertificate && phoneCertificateText === '완료'
                        ? '#b8b8b8'
                        : '#288BE1'
                      : '#b8b8b8',
                  color:
                    item.value.length > 0
                      ? !phoneCertificate && phoneCertificateText === '완료'
                        ? '#6b6b6b'
                        : '#ffffff'
                      : '#6b6b6b',
                }}
              >
                {phoneCertificateText}
              </S.CertificationButton>
            )}
            {item.placeholder === '이메일' && (
              <S.CertificationButton
                onClick={() =>
                  item.value.length > 0 && onCertificate('이메일', idx + 1)
                }
                style={{
                  backgroundColor:
                    item.value.length > 0
                      ? !emailCertificate && emailCertificateText === '완료'
                        ? '#b8b8b8'
                        : '#288BE1'
                      : '#b8b8b8',
                  color:
                    item.value.length > 0
                      ? !emailCertificate && emailCertificateText === '완료'
                        ? '#6b6b6b'
                        : '#ffffff'
                      : '#6b6b6b',
                }}
              >
                {emailCertificateText}
              </S.CertificationButton>
            )}
            <S.ErrorText>
              {item.placeholder ===
                '비밀번호 (8~24자 이내의 영문 / 숫자, 특수문자 1개 이상)' &&
                !isPasswordRgx &&
                '비밀번호는 (정규식)으로 해주세요'}
              {item.placeholder === '비밀번호 확인' &&
                !isValidate &&
                '비밀번호가 일치하지 않습니다'}
            </S.ErrorText>
          </S.CertificationInputBox>
        ))}
      </PaginationInputsContainer>
      <SignUpButtonContainer
        isNext={
          phoneCertificateText === '완료' &&
          !phoneCertificate &&
          emailCertificateText === '완료' &&
          !emailCertificate &&
          page3Obj.every((item) => item.value.length) &&
          isValidate
        }
        setPage={setPage}
        page={page}
      />
    </>
  )
}

export default Page3
