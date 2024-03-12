'use client'

import { useGetDepartment } from '@bitgouel/api'
import { LectureDepartment, SearchIcon } from '@bitgouel/common'
import { ChangeEvent, FormEvent, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import {
  SearchInput,
  SearchInputBox,
  SearchItem,
  SearchListContainer,
  SearchWrapper,
} from '../style'

const SearchLine = () => {
  const [department, setDepartment] = useState<string>('')
  const setLectureDepartment = useSetRecoilState(LectureDepartment)
  const { data, refetch } = useGetDepartment()

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    refetch()
  }

  return (
    <SearchWrapper>
      <SearchInputBox onSubmit={onSubmit}>
        <SearchInput
          type='text'
          value={department}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setDepartment(e.target.value)
          }
          placeholder='학과 검색'
        />
        <SearchIcon onClick={() => refetch()} />
      </SearchInputBox>
      <SearchListContainer>
        {data?.data.departments.map((department) => (
          <SearchItem
            key={department}
            onClick={() => {
              setLectureDepartment(department)
              setDepartment('')
            }}
          >
            <span>{department}</span>
            <span>계열 추가하기...</span>
          </SearchItem>
        ))}
      </SearchListContainer>
    </SearchWrapper>
  )
}

export default SearchLine
