import { SignUpPage2Obj, ValueInput } from '@bitgouel/common'
import React, { ChangeEvent, useState } from 'react'
import { useRecoilState } from 'recoil'
import { PaginationInputsContainer } from '../SignUpPage1/style'
import SignUpButtonContainer from '../SignUpButtonContainer'
import SignUpScrollContainer from '../SignUpScrollContainer'

const SignUpPage2 = () => {
  const [isScrollContainer, setIsScrollContainer] = useState(false)
  const [signUpPage2Obj, setSignUpPage2Obj] = useRecoilState(SignUpPage2Obj)
  const [value, setValue] = useState<string>('')
  const [idx, setIdx] = useState<number>(0)
  const [placeholder, setPlaceholder] = useState<string>('')

  const onClear = (idx: number) => {
    const clearObj = [...signUpPage2Obj]
    if (idx === 0) {
      clearObj[idx] = { ...clearObj[idx], value: '' }
      clearObj[1] = { ...clearObj[1], value: '' }
    } else {
      clearObj[idx] = { ...clearObj[idx], value: '' }
    }

    setSignUpPage2Obj(clearObj)
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>, idx: number) => {
    const updatedObj = [...signUpPage2Obj]
    if (idx > 1) {
      updatedObj[idx] = {
        ...updatedObj[idx],
        value:
          e.target.maxLength !== -1
            ? e.target.value.slice(0, e.target.maxLength)
            : e.target.value,
      }
      setSignUpPage2Obj(updatedObj)
    } else return
  }

  return (
    <>
      <PaginationInputsContainer>
        {signUpPage2Obj.map((item, idx) => (
          <div key={idx}>
            <ValueInput
              type={item.type}
              value={item.value}
              placeholder={item.placeholder}
              length={item.value.length}
              maxLength={item.maxLength}
              onClear={() => onClear(idx)}
              onClick={() => {
                setValue(item.value)
                setIdx(idx)
                setPlaceholder(item.placeholder)
                setIsScrollContainer(true)
              }}
              onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e, idx)}
              style={{ cursor: 'pointer' }}
            />
          </div>
        ))}

        {placeholder === '학교 이름 선택' &&
          value.length <= 0 &&
          isScrollContainer && (
            <SignUpScrollContainer
              idx={idx}
              placeholder={placeholder}
              obj={signUpPage2Obj}
              setObj={setSignUpPage2Obj}
              setIsScrollContainer={setIsScrollContainer}
            />
          )}

        {placeholder === '동아리 이름 선택' &&
          signUpPage2Obj[0].value &&
          value.length <= 0 &&
          isScrollContainer && (
            <SignUpScrollContainer
              idx={idx}
              placeholder={placeholder}
              obj={signUpPage2Obj}
              setObj={setSignUpPage2Obj}
              setIsScrollContainer={setIsScrollContainer}
            />
          )}
        {placeholder === '입학년도 선택' &&
          value.length <= 0 &&
          isScrollContainer && (
            <SignUpScrollContainer
              idx={idx}
              placeholder={placeholder}
              obj={signUpPage2Obj}
              setObj={setSignUpPage2Obj}
              setIsScrollContainer={setIsScrollContainer}
            />
          )}
      </PaginationInputsContainer>
      <SignUpButtonContainer
        isNext={signUpPage2Obj.every((item) => item.value.length)}
      />
    </>
  )
}

export default SignUpPage2
