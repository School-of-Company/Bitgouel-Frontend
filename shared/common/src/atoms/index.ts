import { atom } from 'recoil'

export const Page1Obj = atom({
  key: 'Page1Obj',
  default: [
    { value: '', placeholder: '소속', type: 'text' },
    { value: '', placeholder: '직업', type: 'text' },
  ],
})

export const Page2Obj = atom({
  key: 'Page2Obj',
  default: [
    { value: '', placeholder: '학교 이름으로 검색', type: 'text' },
    { value: '', placeholder: '동아리 이름으로 검색', type: 'text' },
    { value: '', placeholder: '이름 입력', type: 'text', maxLength: 3 },
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
