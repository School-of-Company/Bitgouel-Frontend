'use client'

import {
  LectureDate,
  LectureDivisionEnum,
  LectureSemesterEnum,
  LectureTypeEnum,
  LectureTypeKor,
} from '@bitgouel/types'
import { ReactNode } from 'react'
import { atom } from 'recoil'

export const LectureTypeText = atom<LectureTypeKor>({
  key: 'LectureTypeText',
  default: '상호학점인정교육과정',
})

// Modal
export const IsModal = atom<ReactNode>({
  key: 'IsModal',
  default: null,
})

// Auth
export const Page = atom<number>({
  key: 'Page',
  default: 1,
})
export const Page1Obj = atom<
  { value: string; placeholder: string; type: string }[]
>({
  key: 'Page1Obj',
  default: [
    { value: '', placeholder: '소속', type: 'text' },
    { value: '', placeholder: '직업', type: 'text' },
  ],
})
export const Page2Obj = atom({
  key: 'Page2Obj',
  default: [
    { value: '', placeholder: '학교 이름 선택', type: 'text' },
    { value: '', placeholder: '동아리 이름 선택', type: 'text' },
    { value: '', placeholder: '이름 입력', type: 'text', maxLength: 6 },
  ],
})
export const Page3Obj = atom({
  key: 'Page3Obj',
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
export const LectureType = atom<LectureTypeEnum>({
  key: 'LectureType',
  default: 'MUTUAL_CREDIT_RECOGNITION_PROGRAM',
})
export const LectureSemester = atom<LectureSemesterEnum>({
  key: 'LectureSemester',
  default: 'FIRST_YEAR_FALL_SEMESTER',
})
export const LectureDivision = atom<LectureDivisionEnum>({
  key: 'LectureDivision',
  default: 'AUTOMOBILE_INDUSTRY',
})
export const LectureLine = atom<string>({
  key: 'LectureLine',
  default: '',
})
export const LectureDepartment = atom<string>({
  key: 'LectureDepartment',
  default: '',
})
export const LectureProfessor = atom<string>({
  key: 'LectureProfessor',
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
export const LectureDates = atom<LectureDate[]>({
  key: 'LectureDates',
  default: [{ completeDate: '', startTime: '', endTime: '' }],
})
export const LectureMaxRegistered = atom<string>({
  key: 'LectureMax',
  default: '',
})
export const LectureCredit = atom<string>({
  key: 'LectureCredit',
  default: '',
})

export const SchoolFilterText = atom<string>({
  key: 'SchoolFilterText',
  default: '',
})

export const EmailErrorText = atom<string>({
  key: 'EmailErrorText',
  default: '',
})

export const PasswordErrorText = atom<string>({
  key: 'PasswordErrorText',
  default: '',
})
