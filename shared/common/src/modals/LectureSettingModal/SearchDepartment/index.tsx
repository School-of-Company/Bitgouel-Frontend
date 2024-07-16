'use client'

import { useGetDepartments } from '@bitgouel/api'
import { LectureDepartment } from '@bitgouel/common'
import { FormEvent, useState } from 'react'
import { useRecoilState } from 'recoil'
import SearchComponent from '../SearchComponent'

const SearchDepartment = () => {
  const [lectureDepartment, setLectureDepartment] =
    useRecoilState(LectureDepartment)
  const [department, setDepartment] = useState<string>('')
  const { data, refetch } = useGetDepartments(department)

  const onSubmit = (e?: FormEvent) => {
    if (e) e.preventDefault()
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
    <SearchComponent>
      <SearchComponent.SearchInputBox
        inputValue={department}
        setInputValue={setDepartment}
        recoilValue={lectureDepartment}
        onSubmit={onSubmit}
        onDeleteInputValue={onDeleteDepartment}
        inputPlaceholder='학과'
      />
      {lectureDepartment.length <= 0 && (
        <SearchComponent.SearchItemList
          searchList={data?.departments || []}
          inputValue={department}
          onSelectInputValue={onSelectDepartment}
          addText='학과'
        />
      )}
    </SearchComponent>
  )
}

export default SearchDepartment
