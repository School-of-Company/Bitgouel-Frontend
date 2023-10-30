'use client'

import ValueInput from '../../../ValueInput'
import React, { ChangeEvent, useState } from 'react'
import SignUpScrollContainer from '../SignUpScrollContainer'
import SignUpButtonContainer from '../SignUpButtonContainer'
import { useRecoilState } from 'recoil'
import { Page2Obj } from '../../../../atoms'
import { PaginationInputsContainer } from '../Page1/style'

const Page2 = ({
  page,
  setPage,
}: {
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
}) => {
  const [isScrollContainer, setIsScrollContainer] = useState(false)
  const [page2Obj, setPage2Obj] = useRecoilState(Page2Obj)

  const onClear = (idx: number) => {
    const clearObj = [...page2Obj]
    if (idx === 0) {
      clearObj[idx] = { ...clearObj[idx], value: '' }
      clearObj[1] = { ...clearObj[1], value: '' }
    } else {
      clearObj[idx] = { ...clearObj[idx], value: '' }
    }

    setPage2Obj(clearObj)
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>, idx: number) => {
    const updatedObj = [...page2Obj]
    if (idx > 1) {
      updatedObj[idx] = { ...updatedObj[idx], value: e.target.value }
      setPage2Obj(updatedObj)
    }
  }

  const [value, setValue] = useState<string>('')
  // value={item.value}
  const [idx, setIdx] = useState<number>(0)
  // idx={idx}
  const [placeholder, setPlaceholder] = useState<string>('')
  // placeholder={item.placeholder}

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <PaginationInputsContainer>
        {page2Obj.map((item, idx) => (
          <div key={idx}>
            <ValueInput
              type={item.type}
              value={item.value}
              placeholder={item.placeholder}
              length={item.value.length}
              onInput={(e: ChangeEvent<HTMLInputElement>) => {
                if (
                  e.target.type === 'number' &&
                  e.target.value.length > e.target.maxLength
                )
                  e.target.value = e.target.value.slice(0, e.target.maxLength)
              }}
              maxLength={item.maxLength}
              onClear={() => onClear(idx)}
              onClick={() => {
                setValue(item.value)
                setIdx(idx)
                setPlaceholder(item.placeholder)
                setIsScrollContainer((prev) => !prev)
              }}
              onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e, idx)}
              style={{ cursor: 'pointer' }}
            />
          </div>
        ))}

        {placeholder === '학교 이름으로 검색' &&
          !value.length &&
          isScrollContainer && (
            <SignUpScrollContainer
              value={value}
              idx={idx}
              placeholder={placeholder}
              obj={page2Obj}
              setObj={setPage2Obj}
              setIsScrollContainer={setIsScrollContainer}
            />
          )}

        {placeholder === '동아리 이름으로 검색' &&
          page2Obj[0].value &&
          !value.length &&
          isScrollContainer && (
            <SignUpScrollContainer
              value={value}
              idx={idx}
              placeholder={placeholder}
              obj={page2Obj}
              setObj={setPage2Obj}
              setIsScrollContainer={setIsScrollContainer}
            />
          )}
      </PaginationInputsContainer>
      <SignUpButtonContainer
        isNext={page2Obj.every((item) => item.value.length)}
        setPage={setPage}
        page={page}
      />
    </div>
  )
}

export default Page2
