'use client'

import { SignUpPage1Obj, ValueInput } from '@bitgouel/common'
import { SignUpObjTypes } from '@bitgouel/types'
import { useState } from 'react'
import { useRecoilState } from 'recoil'
import SignUpButtonContainer from '../SignUpButtonContainer'
import SignUpScrollContainer from '../SignUpScrollContainer'
import * as S from './style'

const SignUpPage1 = () => {
  const [isScrollContainer, setIsScrollContainer] = useState<boolean>(false)
  const [signUpPage1Obj, setSignUpPage1Obj] = useRecoilState(SignUpPage1Obj)
  const [value, setValue] = useState<string>('')
  const [idx, setIdx] = useState<number>(0)
  const [placeholder, setPlaceholder] = useState<string>('')

  const onClear = (idx: number) => {
    const clearObj: SignUpObjTypes[] = [...signUpPage1Obj]
    if (idx === 0) {
      clearObj[idx] = { ...clearObj[idx], value: '' }
      clearObj[1] = { ...clearObj[1], value: '' }
    } else {
      clearObj[idx] = { ...clearObj[idx], value: '' }
    }
    setSignUpPage1Obj(clearObj)
  }

  return (
    <>
      <S.PaginationInputsContainer>
        {signUpPage1Obj.map((item, idx) => (
          <div key={idx}>
            <ValueInput
              type={item.type}
              value={item.value}
              placeholder={item.placeholder}
              length={item.value.length}
              onClear={() => onClear(idx)}
              onClick={() => {
                setValue(item.value)
                setIdx(idx)
                setPlaceholder(item.placeholder)
                setIsScrollContainer(true)
              }}
              onChange={() => {}}
              style={{ cursor: 'pointer' }}
            />
          </div>
        ))}

        {idx === 0
          ? !value.length &&
            isScrollContainer && (
              <SignUpScrollContainer
                idx={idx}
                placeholder={placeholder}
                obj={signUpPage1Obj}
                setObj={setSignUpPage1Obj}
                setIsScrollContainer={setIsScrollContainer}
              />
            )
          : signUpPage1Obj[0].value &&
            !value.length &&
            isScrollContainer && (
              <SignUpScrollContainer
                idx={idx}
                placeholder={placeholder}
                obj={signUpPage1Obj}
                setObj={setSignUpPage1Obj}
                setIsScrollContainer={setIsScrollContainer}
              />
            )}
      </S.PaginationInputsContainer>
      <SignUpButtonContainer
        isNext={signUpPage1Obj.every((item) => item.value.length)}
      />
    </>
  )
}

export default SignUpPage1
