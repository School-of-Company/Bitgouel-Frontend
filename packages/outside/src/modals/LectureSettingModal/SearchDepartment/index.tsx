'use client'

import { useGetDepartments } from '@bitgouel/api'
import { InputCancel, LectureDepartment, SearchIcon } from '@bitgouel/common'
import { DepartmentResponseTypes } from '@bitgouel/types'
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
  const { data, refetch } = useGetDepartments(department)
  const { departments } = data?.data || ({} as DepartmentResponseTypes)

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
          <InputCancel
            onClick={() => {
              setLectureDepartment('')
              refetch()
            }}
          />
        ) : (
          <SearchIcon onClick={() => refetch()} />
        )}
      </SearchInputBox>
      {departments && !lectureDepartment.length && (
        <SearchListContainer>
          {departments.map((departmentItem) => (
            <SearchItem
              key={departmentItem}
              onClick={() => {
                setLectureDepartment(departmentItem)
                setDepartment('')
              }}
            >
              <span>{departmentItem}</span>
            </SearchItem>
          ))}
          {!departments.length && (
            <SearchItem
              onClick={() => {
                setLectureDepartment(department)
                setDepartment('')
              }}
            >
              <span>{department}</span>
              <span>새 학과 추가하기...</span>
            </SearchItem>
          )}
        </SearchListContainer>
      )}
    </SearchWrapper>
  )
}

export default SearchDepartment
