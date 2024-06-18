'use client'

import { useGetDepartments } from '@bitgouel/api'
import { LectureDepartment } from '@bitgouel/common'
import { FormEvent, useState } from 'react'
import { useRecoilState } from 'recoil'
import LectureSearchComponent from '../LectureSearchComponent'

const SearchDepartment = () => {
  const [lectureDepartment, setLectureDepartment] =
    useRecoilState(LectureDepartment)
  const [department, setDepartment] = useState<string>('')
  const { data, refetch } = useGetDepartments(department)

  const onSubmit = (e?: FormEvent) => {
    if(e) e.preventDefault()
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
    <LectureSearchComponent>
      <LectureSearchComponent.SearchInputBox
        inputValue={department}
        setInputValue={setDepartment}
        recoilValue={lectureDepartment}
        onSubmit={onSubmit}
        onDeleteInputValue={onDeleteDepartment}
      />
      {lectureDepartment.length <= 0 && (
      <LectureSearchComponent.SearchItemList
        searchList={data?.departments || []}
        inputValue={department}
        onSelectInputValue={onSelectDepartment}
      />
      )}
    </LectureSearchComponent>
  )
}

export default SearchDepartment
