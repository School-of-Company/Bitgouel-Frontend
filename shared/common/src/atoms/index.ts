import { ReactNode } from 'react'
import { atom } from 'recoil'

export const IsModal = atom<ReactNode>({
  key: 'IsModal',
  default: null,
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
    { value: '', placeholder: '이름 입력', type: 'text', maxLength: 4 },
  ],
})

export const Page3Obj = atom({
  key: 'Page3Obj',
  default: [
    { value: '', placeholder: '전화번호', type: 'number', maxLength: 11 },
    { value: '', placeholder: '인증번호', type: 'number', maxLength: 6 },
    { value: '', placeholder: '이메일', type: 'email' },
    { value: '', placeholder: '인증번호 ', type: 'number', maxLength: 6 },
    { value: '', placeholder: '비밀번호', type: 'password' },
    { value: '', placeholder: '비밀번호 확인', type: 'password' },
  ],
})
