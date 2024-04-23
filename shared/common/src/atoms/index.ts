'use client'

import {
  LectureDate,
  LectureDivisionEnum,
  LectureSemesterEnum,
  LectureTypeEnum,
  LectureTypeKor,
  SignUpObjTypes,
} from '@bitgouel/types'
import { ReactNode } from 'react'
import { atom } from 'recoil'

interface InputLectureDatesTypes extends LectureDate {
  startShowTime: string
  endShowTime: string
}

export const LectureFilterType = atom<LectureTypeEnum | ''>({
  key: 'LectureFilterType',
  default: '',
})

// Modal
export const PwPage = atom<number>({
  key: 'PwPage',
  default: 1,
})

export const IsModal = atom<ReactNode>({
  key: 'IsModal',
  default: null,
})

// Auth
export const SignUpPageNumber = atom<number>({
  key: 'SignUpPageNumber',
  default: 1,
})
export const SignUpPage1Obj = atom<SignUpObjTypes[]>({
  key: 'SignUpPage1Obj',
  default: [
    { value: '', placeholder: '소속', type: 'text' },
    { value: '', placeholder: '직업', type: 'text' },
  ],
})
export const SignUpPage2Obj = atom<SignUpObjTypes[]>({
  key: 'SignUpPage2Obj',
  default: [
    { value: '', placeholder: '학교 이름 선택', type: 'text' },
    { value: '', placeholder: '동아리 이름 선택', type: 'text' },
    { value: '', placeholder: '이름 입력', type: 'text', maxLength: 4 },
  ],
})
export const SignUpPage3Obj = atom<SignUpObjTypes[]>({
  key: 'SignUpPage3Obj',
  default: [
    {
      value: '',
      placeholder: '전화번호 (- 제외)',
      type: 'number',
      maxLength: 11,
    },
    { value: '', placeholder: '이메일', type: 'email' },
    {
      value: '',
      placeholder: '비밀번호 (8~24자 이내의 영문 / 숫자, 특수문자 1개 이상)',
      type: 'password',
    },
    { value: '', placeholder: '비밀번호 확인', type: 'password' },
  ],
})
export const IsPasswordRgx = atom<boolean>({
  key: 'IsPasswordRgx',
  default: true,
})
export const IsValidate = atom<boolean>({
  key: 'IsValidate',
  default: true,
})

// 강의 생성
export const LectureType = atom<string>({
  key: 'LectureType',
  default: '',
})
export const LectureSemester = atom<LectureSemesterEnum>({
  key: 'LectureSemester',
  default: 'FIRST_YEAR_FALL_SEMESTER',
})
export const LectureDivision = atom<string>({
  key: 'LectureDivision',
  default: '',
})
export const LectureLine = atom<string>({
  key: 'LectureLine',
  default: '',
})
export const LectureDepartment = atom<string>({
  key: 'LectureDepartment',
  default: '',
})
export const LectureInstructor = atom<string>({
  key: 'LectureInstructor',
  default: '',
})
export const LectureStartDate = atom<string>({
  key: 'LectureStartDate',
  default: '',
})
export const LectureStartTime = atom<string>({
  key: 'LectureStartTime',
  default: '',
})
export const LectureEndDate = atom<string>({
  key: 'LectureEndDate',
  default: '',
})
export const LectureEndTime = atom<string>({
  key: 'LectureEndTime',
  default: '',
})
export const LectureDates = atom<InputLectureDatesTypes[]>({
  key: 'LectureDates',
  default: [
    {
      completeDate: '',
      startShowTime: '',
      startTime: '',
      endShowTime: '',
      endTime: '',
    },
  ],
})
export const LectureMaxRegistered = atom<string>({
  key: 'LectureMax',
  default: '',
})
export const LectureCredit = atom<number>({
  key: 'LectureCredit',
  default: 1,
})

export const SchoolFilterText = atom<string>({
  key: 'SchoolFilterText',
  default: '',
})
