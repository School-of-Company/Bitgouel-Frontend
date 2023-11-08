import ValueInput from '../../../ValueInput'
import React, { useState } from 'react'
import SignUpScrollContainer from '../SignUpScrollContainer'
import SignUpButtonContainer from '../SignUpButtonContainer'
import * as S from './style'
import { useRecoilState } from 'recoil'
import { Page1Obj } from '../../../../atoms'

const Page1 = ({
  page,
  setPage,
}: {
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
}) => {
  const [isScrollContainer, setIsScrollContainer] = useState(false)
  const [page1Obj, setPage1Obj] = useRecoilState(Page1Obj)
  const [value, setValue] = useState<string>('')
  const [idx, setIdx] = useState<number>(0)
  const [placeholder, setPlaceholder] = useState<string>('')

  const onClear = (idx: number) => {
    const clearObj = [...page1Obj]
    if (idx === 0) {
      clearObj[idx] = { ...clearObj[idx], value: '' }
      clearObj[1] = { ...clearObj[1], value: '' }
    } else {
      clearObj[idx] = { ...clearObj[idx], value: '' }
    }
    setPage1Obj(clearObj)
  }

  return (
    <>
      <S.PaginationInputsContainer>
        {page1Obj.map((item, idx) => (
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
                obj={page1Obj}
                setObj={setPage1Obj}
                setIsScrollContainer={setIsScrollContainer}
              />
            )
          : page1Obj[0].value &&
            !value.length &&
            isScrollContainer && (
              <SignUpScrollContainer
                idx={idx}
                placeholder={placeholder}
                obj={page1Obj}
                setObj={setPage1Obj}
                setIsScrollContainer={setIsScrollContainer}
              />
            )}
      </S.PaginationInputsContainer>
      <SignUpButtonContainer
        page={page}
        isNext={page1Obj.every((item) => item.value.length)}
        setPage={setPage}
      />
    </>
  )
}

export default Page1
