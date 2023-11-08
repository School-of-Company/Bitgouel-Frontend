import * as S from './style'
import React from 'react'
import { useRecoilValue, useRecoilState } from 'recoil'
import { Page1Obj, Page2Obj, Page3Obj } from '../../../../atoms'
import { useRouter } from 'next/navigation'
import {
  usePostSignUpBbozzak,
  usePostSignUpCompanyInstructor,
  usePostSignUpGovernment,
  usePostSignUpProfessor,
  usePostSignUpStudent,
  usePostSignUpTeacher,
} from '../../../../../../api/common/src/hooks'
import { schoolToConstants } from '../../../../constants/schoolObject'

const SignUpButtonContainer = ({
  page,
  isNext,
  setPage,
}: {
  page: number
  isNext: boolean
  setPage: React.Dispatch<React.SetStateAction<number>>
}) => {
  const router = useRouter()
  const page1Obj = useRecoilValue(Page1Obj)
  const [page2Obj, setPage2Obj] = useRecoilState(Page2Obj)
  const page3Obj = useRecoilValue(Page3Obj)

  const { mutate: postStudent } = usePostSignUpStudent()
  const { mutate: postTeacher } = usePostSignUpTeacher()
  const { mutate: postBbozzak } = usePostSignUpBbozzak()
  const { mutate: postProfessor } = usePostSignUpProfessor()
  const { mutate: postGovernment } = usePostSignUpGovernment()
  const { mutate: postCompanyInstructor } = usePostSignUpCompanyInstructor()

  const onNext = async () => {
    if (isNext) {
      if (page === 1) {
        setPage2Obj((prev) => prev.slice(0, 3))
        if (page1Obj[1].value === '학생') {
          setPage2Obj((prev) => [
            ...prev,
            {
              value: '',
              placeholder: '입학년도 입력',
              type: 'number',
              maxLength: 4,
            },
            {
              value: '',
              placeholder: '학번 입력 (ex:1101)',
              type: 'number',
              maxLength: 5,
            },
          ])
        } else if (
          page1Obj[1].value === '취업동아리 선생님' ||
          page1Obj[1].value === '취업뽀짝 선생님'
        ) {
          setPage2Obj((prev) => prev)
        } else if (page1Obj[1].value === '기업 강사') {
          setPage2Obj((prev) => [
            ...prev,
            { value: '', placeholder: '소속 기업명 입력', type: 'text' },
          ])
        } else if (page1Obj[1].value === '대학 교수') {
          setPage2Obj((prev) => [
            ...prev,
            { value: '', placeholder: '대학명 입력', type: 'text' },
          ])
        } else if (page1Obj[1].value === '유관기관') {
          setPage2Obj((prev) => [
            ...prev,
            { value: '', placeholder: '소속 기관 입력', type: 'text' },
          ])
        }
        setPage((prev) => prev + 1)
      } else if (page === 2) setPage((prev) => prev + 1)
      else if (page === 3) {
        if (page1Obj[1].value === '학생') {
          postStudent({
            email: page3Obj[1].value,
            name: page2Obj[2].value,
            phoneNumber: page3Obj[0].value,
            password: page3Obj[2].value,
            highSchool: schoolToConstants[page2Obj[0].value],
            clubName: page2Obj[1].value,
            grade: +page2Obj[4].value.slice(0, 1),
            classRoom: +page2Obj[4].value.slice(1, 2),
            number: +page2Obj[4].value.slice(2),
            admissionNumber: +page2Obj[3].value,
          })
        } else if (page1Obj[1].value === '취업동아리 선생님') {
          postTeacher({
            email: page3Obj[1].value,
            name: page2Obj[2].value,
            phoneNumber: page3Obj[0].value,
            password: page3Obj[2].value,
            highSchool: schoolToConstants[page2Obj[0].value],
            clubName: page2Obj[1].value,
          })
        } else if (page1Obj[1].value === '뽀짝 선생님') {
          postBbozzak({
            email: page3Obj[1].value,
            name: page2Obj[2].value,
            phoneNumber: page3Obj[0].value,
            password: page3Obj[2].value,
            highSchool: schoolToConstants[page2Obj[0].value],
            clubName: page2Obj[1].value,
          })
        } else if (page1Obj[1].value === '대학 교수') {
          postProfessor({
            email: page3Obj[1].value,
            name: page2Obj[2].value,
            phoneNumber: page3Obj[0].value,
            password: page3Obj[2].value,
            highSchool: schoolToConstants[page2Obj[0].value],
            clubName: page2Obj[1].value,
            university: page2Obj[3].value,
          })
        } else if (page1Obj[1].value === '유관기관') {
          postGovernment({
            email: page3Obj[1].value,
            name: page2Obj[2].value,
            phoneNumber: page3Obj[0].value,
            password: page3Obj[2].value,
            highSchool: schoolToConstants[page2Obj[0].value],
            clubName: page2Obj[1].value,
            governmentName: page2Obj[3].value,
          })
        } else if (page1Obj[1].value === '기업 강사') {
          postCompanyInstructor({
            email: page3Obj[1].value,
            name: page2Obj[2].value,
            phoneNumber: page3Obj[0].value,
            password: page3Obj[2].value,
            highSchool: schoolToConstants[page2Obj[0].value],
            clubName: page2Obj[1].value,
            company: page2Obj[3].value,
          })
        }
      }
    }
  }

  return (
    <S.SignUpButtonContainer page={page}>
      <S.PreButton
        onClick={() =>
          page === 1 ? router.push('/auth/login') : setPage((prev) => prev - 1)
        }
      >
        이전으로
      </S.PreButton>
      <S.NextButton isNext={isNext} onClick={onNext}>
        {page !== 3 ? '다음으로' : '가입하기'}
      </S.NextButton>
    </S.SignUpButtonContainer>
  )
}

export default SignUpButtonContainer
