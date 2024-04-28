'use client'

import { useGetDepartment } from '@bitgouel/api'
import { InputCancel, LectureDepartment, SearchIcon } from '@bitgouel/common'
import { ChangeEvent, FormEvent, useState } from 'react'
import { useRecoilState } from 'recoil'
import {
  SearchInput,
  SearchInputBox,
  SearchItem,
  SearchListContainer,
  SearchWrapper,
} from '../style'

const SearchDepartment = () => {
  const [lectureDepartment, setLectureDepartment] =
    useRecoilState(LectureDepartment)
  const [department, setDepartment] = useState<string>('')
  const { data, refetch } = useGetDepartment(department)

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    refetch()
  }

  return (
    <SearchWrapper>
      <SearchInputBox
        onSubmit={onSubmit}
        isSelected={!!lectureDepartment.length}
      >
        <SearchInput
          type='text'
          value={lectureDepartment.length ? lectureDepartment : department}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setDepartment(e.target.value)
          }
          placeholder='학과 검색'
          disabled={!!lectureDepartment.length}
        />
        {lectureDepartment.length ? (
          <InputCancel onClick={() => setLectureDepartment('')} />
        ) : (
          <SearchIcon onClick={() => refetch()} />
        )}
      </SearchInputBox>
      {data?.departments.length && !lectureDepartment.length && (
        <SearchListContainer>
          {data?.departments.map((department) => (
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
      )}
    </SearchWrapper>
  )
}

export default SearchDepartment
