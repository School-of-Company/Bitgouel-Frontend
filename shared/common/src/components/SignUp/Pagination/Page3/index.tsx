import React, { ChangeEvent } from 'react'
import { PaginationInputsContainer } from '../Page1/style'
import { useRecoilState } from 'recoil'
import { Page3Obj } from '../../../../atoms'
import ValueInput from '../../../ValueInput'
import SignUpButtonContainer from '../SignUpButtonContainer'
import * as S from './style'

const Page3 = ({
  page,
  setPage,
}: {
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
}) => {
  const [page3Obj, setPage3Obj] = useRecoilState(Page3Obj)

  const onClear = (idx: number) => {
    const clearObj = [...page3Obj]
    clearObj[idx] = { ...clearObj[idx], value: '' }
    setPage3Obj(clearObj)
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>, idx: number) => {
    const updatedObj = [...page3Obj]
    updatedObj[idx] = {
      ...updatedObj[idx],
      value:
        e.target.maxLength !== -1
          ? e.target.value.slice(0, e.target.maxLength)
          : e.target.value,
    }
    setPage3Obj(updatedObj)
  }

  return (
    <>
      <PaginationInputsContainer>
        {page3Obj.map((item, idx) => (
          <S.CertificationInputBox key={idx} idx={idx}>
            <ValueInput
              type={item.type}
              value={item.value}
              placeholder={item.placeholder}
              length={item.value.length}
              maxLength={item.maxLength}
              onClear={() => onClear(idx)}
              onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e, idx)}
            />
            {idx === 0 || idx === 2 ? (
              <S.CertificationButton>인증</S.CertificationButton>
            ) : null}
          </S.CertificationInputBox>
        ))}
      </PaginationInputsContainer>
      <SignUpButtonContainer
        isNext={page3Obj.every((item) => item.value.length)}
        setPage={setPage}
        page={page}
      />
    </>
  )
}

export default Page3
