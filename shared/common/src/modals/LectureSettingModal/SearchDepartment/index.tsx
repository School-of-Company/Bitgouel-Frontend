'use client'

import { useGetDepartments } from '@bitgouel/api'
import { InputCancel, LectureDepartment, SearchIcon } from '@bitgouel/common'
import { DepartmentsResponseTypes } from '@bitgouel/types'
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

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    refetch()
  }

  const onSelectDepartment = (departmentItem: string) => {
    setLectureDepartment(departmentItem)
    setDepartment('')
  }

  const onDeleteDepartment = () => {
    setLectureDepartment('')
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
          <InputCancel onClick={onDeleteDepartment} />
        ) : (
          <SearchIcon onClick={() => refetch()} />
        )}
      </SearchInputBox>
      {data?.departments && lectureDepartment.length <= 0 && (
        <SearchListContainer>
          {data.departments.map((departmentItem) => (
            <SearchItem
              key={departmentItem}
              onClick={() => onSelectDepartment(departmentItem)}
            >
              <span>{departmentItem}</span>
            </SearchItem>
          ))}
          {data.departments.length <= 0 && (
            <SearchItem onClick={() => onSelectDepartment(department)}>
              <span>{department}</span>
              <small>새 학과 추가하기...</small>
            </SearchItem>
          )}
        </SearchListContainer>
      )}
    </SearchWrapper>
  )
}

export default SearchDepartment
