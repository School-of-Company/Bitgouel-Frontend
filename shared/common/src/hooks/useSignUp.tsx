'use client'

import {
  usePostSignUpBbozzak,
  usePostSignUpCompanyInstructor,
  usePostSignUpGovernment,
  usePostSignUpProfessor,
  usePostSignUpStudent,
  usePostSignUpTeacher,
} from '@bitgouel/api'
import {
  SignUpPage1Obj,
  SignUpPage2Obj,
  SignUpPage3Obj,
  SignUpPageNumber,
} from '@bitgouel/common'
import { SignUpCommonPayloadTypes } from '@bitgouel/types'
import { toast } from 'react-toastify'
import { useRecoilState, useRecoilValue } from 'recoil'

const useSignUp = ({ isNext }: { isNext: boolean }) => {
  const signUpPage1Obj = useRecoilValue(SignUpPage1Obj)
  const [signUpPage2Obj, setSignUpPage2Obj] = useRecoilState(SignUpPage2Obj)
  const signUpPage3Obj = useRecoilValue(SignUpPage3Obj)
  const [signUpPageNumber, setSignUpPageNumber] =
    useRecoilState(SignUpPageNumber)

  const onSuccess = () => {
    toast.success('회원가입이 완료되었습니다.')
    setSignUpPageNumber(4)
  }
  const onError = (error) =>
    toast.error(error?.response.data.message.split('.')[0])

  const signUpMutate = {
    student: usePostSignUpStudent({ onSuccess, onError }),
    teacher: usePostSignUpTeacher({ onSuccess, onError }),
    bbozzak: usePostSignUpBbozzak({ onSuccess, onError }),
    professor: usePostSignUpProfessor({ onSuccess, onError }),
    government: usePostSignUpGovernment({ onSuccess, onError }),
    companyInstructor: usePostSignUpCompanyInstructor({
      onSuccess,
      onError,
    }),
  }

  const { mutate: postStudent } = signUpMutate.student
  const { mutate: postTeacher } = signUpMutate.teacher
  const { mutate: postBbozzak } = signUpMutate.bbozzak
  const { mutate: postProfessor } = signUpMutate.professor
  const { mutate: postGovernment } = signUpMutate.government
  const { mutate: postCompanyInstructor } = signUpMutate.companyInstructor

  const commonPayload: SignUpCommonPayloadTypes = {
    email: signUpPage3Obj[1].value,
    name: signUpPage2Obj[2].value,
    phoneNumber: signUpPage3Obj[0].value,
    password: signUpPage3Obj[2].value,
    highSchool: signUpPage2Obj[0].value,
    clubName: signUpPage2Obj[1].value,
  }

  const onNext = () => {
    if (isNext) {
      if (signUpPageNumber === 1) {
        setSignUpPage2Obj((prev) => prev.slice(0, 3))
        if (signUpPage1Obj[1].value === '학생') {
          setSignUpPage2Obj((prev) => [
            ...prev,
            {
              value: '',
              placeholder: '입학년도 선택',
              type: 'number',
              maxLength: 4,
              pattern: '2021|2022|2023|2024',
            },
            {
              value: '',
              placeholder: '학번 입력 (ex:30415)',
              type: 'number',
              maxLength: 5,
            },
          ])
        } else if (
          signUpPage1Obj[1].value === '취업동아리 선생님' ||
          signUpPage1Obj[1].value === '취업뽀짝 선생님'
        ) {
          setSignUpPage2Obj((prev) => prev)
        } else if (signUpPage1Obj[1].value === '기업 강사') {
          setSignUpPage2Obj((prev) => [
            ...prev,
            { value: '', placeholder: '소속 기업명 입력', type: 'text' },
          ])
        } else if (signUpPage1Obj[1].value === '대학 교수') {
          setSignUpPage2Obj((prev) => [
            ...prev,
            { value: '', placeholder: '대학명 입력', type: 'text' },
          ])
        } else if (signUpPage1Obj[1].value === '유관기관') {
          setSignUpPage2Obj((prev) => [
            ...prev,
            { value: '', placeholder: '소속 기관명 입력', type: 'text' },
            { value: '', placeholder: '본인의 직책 입력', type: 'text' },
            { value: '', placeholder: '소속 기관의 업종 입력', type: 'text' },
          ])
        }
        setSignUpPageNumber((prev) => prev + 1)
      } else if (signUpPageNumber === 2) setSignUpPageNumber((prev) => prev + 1)
      else if (signUpPageNumber === 3) {
        if (signUpPage1Obj[1].value === '학생') {
          postStudent({
            ...commonPayload,
            grade: +signUpPage2Obj[4].value.slice(0, 1),
            classRoom: +signUpPage2Obj[4].value.slice(1, 2),
            number: +signUpPage2Obj[4].value.slice(2),
            admissionNumber: +signUpPage2Obj[3].value,
          })
        } else if (signUpPage1Obj[1].value === '취업동아리 선생님') {
          postTeacher(commonPayload)
        } else if (signUpPage1Obj[1].value === '뽀짝 선생님') {
          postBbozzak(commonPayload)
        } else if (signUpPage1Obj[1].value === '대학 교수') {
          postProfessor({
            ...commonPayload,
            university: signUpPage2Obj[3].value,
          })
        } else if (signUpPage1Obj[1].value === '유관기관') {
          postGovernment({
            ...commonPayload,
            governmentName: signUpPage2Obj[3].value,
            position: signUpPage2Obj[4].value,
            sectors: signUpPage2Obj[5].value,
          })
        } else if (signUpPage1Obj[1].value === '기업 강사') {
          postCompanyInstructor({
            ...commonPayload,
            company: signUpPage2Obj[3].value,
          })
        }
      }
    }
  }

  return [onNext]
}

export default useSignUp
