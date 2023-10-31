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
    updatedObj[idx] = { ...updatedObj[idx], value: e.target.value }
    setPage3Obj(updatedObj)
  }

  return (
    <PaginationInputsContainer>
      {page3Obj.map((item, idx) => (
        <div
          key={idx}
          style={
            item.placeholder === '전화번호' || item.placeholder === '이메일'
              ? { display: 'flex', alignItems: 'center', width: '100%' }
              : undefined
          }
        >
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
            onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e, idx)}
            style={{
              width:
                item.placeholder === '이메일' || item.placeholder === '전화번호'
                  ? '19.2rem'
                  : '24rem',
            }}
          />
          {item.placeholder === '이메일' || item.placeholder === '전화번호' ? (
            <S.CertificationButton>인증</S.CertificationButton>
          ) : null}
        </div>
      ))}
      <SignUpButtonContainer
        isNext={page3Obj.every((item) => item.value.length)}
        setPage={setPage}
        page={page}
      />
    </PaginationInputsContainer>
  )
}

export default Page3
