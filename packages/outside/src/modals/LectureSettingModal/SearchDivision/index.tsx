'use client'

import { useGetLines } from '@bitgouel/api'
import {
  InputCancel,
  LectureDivision,
  LectureLine,
  SearchIcon,
} from '@bitgouel/common'
import { LineResponseTypes } from '@bitgouel/types'
import { ChangeEvent, FormEvent, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import {
  SearchInput,
  SearchInputBox,
  SearchItem,
  SearchListContainer,
  SearchWrapper,
} from '../style'

const SearchDivision = () => {
  const [lectureDivision, setLectureDivision] = useRecoilState(LectureDivision)
  const [division, setDivision] = useState<string>('')
  const { data, refetch } = useGetDivisions({
    keyword: division,
  })

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    refetch()
  }

  const { divisions } = data?.data || ({} as DivisionResponseTypes)

  return (
    <SearchWrapper>
      <SearchInputBox onSubmit={onSubmit} isSelected={!!lectureDivision.length}>
        <SearchInput
          type='text'
          value={lectureDivision.length ? lectureDivision : division}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setDivision(e.target.value)
          }
          placeholder='계열 검색 또는 임의로 추가...'
          disabled={!!lectureDivision.length}
        />
        {lectureDivision.length ? (
          <InputCancel
            onClick={() => {
              setLectureDivision('')
              refetch()
            }}
          />
        ) : (
          <SearchIcon onClick={() => refetch()} />
        )}
      </SearchInputBox>
      {divisions && !lectureDivision.length && (
        <SearchListContainer>
          {divisions.map((division) => (
            <SearchItem
              key={division}
              onClick={() => {
                setLectureDivision(division)
                setDivision('')
              }}
            >
              <span>{division}</span>
            </SearchItem>
          ))}
          {!divisions?.length && (
            <SearchItem
              onClick={() => {
                setLectureDivision(division)
                setDivision('')
              }}
            >
              <span>{division}</span>
              <span>새 구분 추가하기...</span>
            </SearchItem>
          )}
        </SearchListContainer>
      )}
    </SearchWrapper>
  )
}

export default SearchDivision
// const lectureDivisions: LectureDivisionEnum[] = [
//   'AUTOMOBILE_INDUSTRY',
//   'ENERGY_INDUSTRY',
//   'MEDICAL_HEALTHCARE',
//   'AI_CONVERGENCE',
//   'CULTURAL_INDUSTRY',
// ]
