'use client'

import { useGetDivisions } from '@bitgouel/api'
import {
  InputCancel,
  LectureDivision,
  LectureLine,
  SearchIcon,
} from '@bitgouel/common'
import { ChangeEvent, FormEvent, useState, useEffect } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import {
  SearchInput,
  SearchInputBox,
  SearchItem,
  SearchListContainer,
  SearchWrapper,
} from '../style'

const SearchDivision = () => {
  const setLectureLine = useSetRecoilState(LectureLine)
  const [lectureDivision, setLectureDivision] = useRecoilState(LectureDivision)
  const [division, setDivision] = useState<string>('')
  const { data, refetch } = useGetDivisions(division)

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    refetch()
  }

  const onSelectDivision = (divisionItem: string) => {
    setLectureDivision(divisionItem)
    setDivision('')
  }

  const onDeleteDivision = () => {
    setLectureDivision('')
    setLectureLine('')
    setDivision('')
  }

  return (
    <SearchWrapper>
      <SearchInputBox onSubmit={onSubmit} isSelected={!!lectureDivision.length}>
        <SearchInput
          type='text'
          value={lectureDivision.length ? lectureDivision : division}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setDivision(e.target.value)
          }
          placeholder='구분 검색 또는 임의로 추가...'
          disabled={!!lectureDivision.length}
        />
        {lectureDivision.length ? (
          <InputCancel onClick={onDeleteDivision} />
        ) : (
          <SearchIcon onClick={() => refetch()} />
        )}
      </SearchInputBox>
      {data?.divisions && lectureDivision.length <= 0 && (
        <SearchListContainer>
          {data.divisions.map((divisionItem) => (
            <SearchItem
              key={divisionItem}
              onClick={() => onSelectDivision(divisionItem)}
            >
              <span>{divisionItem}</span>
            </SearchItem>
          ))}
          {data.divisions.length <= 0 && (
            <SearchItem onClick={() => onSelectDivision(division)}>
              <span>{division}</span>
              <small>새 구분 추가하기...</small>
            </SearchItem>
          )}
        </SearchListContainer>
      )}
    </SearchWrapper>
  )
}

export default SearchDivision
