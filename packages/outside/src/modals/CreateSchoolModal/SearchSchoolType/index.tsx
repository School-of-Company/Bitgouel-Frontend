'use client'

import { SchoolType } from '@bitgouel/common'
import { FormEvent, useState } from 'react'
import { useRecoilState } from 'recoil'
import SearchComponent from '@bitgouel/common/src/modals/LectureSettingModal/SearchComponent'

const CreateSchoolTypes: [
  'I. 산업수요 맞춤형계열',
  'II. 공업계열',
  'III. 상업계열',
  'IV. 농업생명/보건의료계열'
] = [
  'I. 산업수요 맞춤형계열',
  'II. 공업계열',
  'III. 상업계열',
  'IV. 농업생명/보건의료계열',
]

const SearchSchoolType = () => {
  const [schoolType, setSchoolType] = useRecoilState(SchoolType)
  const [type, setType] = useState<string>('')
  const [schoolTypeList, setSchoolTypeList] =
    useState<string[]>(CreateSchoolTypes)

  const onSubmit = (e?: FormEvent) => {
    if (e) e.preventDefault()
    const searchTypes: string[] = []
    CreateSchoolTypes.forEach((lectureTypeItem) => {
      if (lectureTypeItem.includes(type)) searchTypes.push(lectureTypeItem)
    })
    setSchoolTypeList(searchTypes)
  }

  const onSelectSchoolType = (schoolTypeItem: string) => {
    setSchoolType(schoolTypeItem)
    setType('')
  }

  const onDeleteLectureType = () => {
    setSchoolType('')
    setSchoolTypeList(CreateSchoolTypes)
  }

  return (
    <SearchComponent>
      <SearchComponent.SearchInputBox
        inputValue={type}
        setInputValue={setType}
        recoilValue={schoolType}
        onSubmit={onSubmit}
        onDeleteInputValue={onDeleteLectureType}
        inputPlaceholder='계열 검색'
        isSearch={false}
      />
      {schoolType.length <= 0 && (
        <SearchComponent.SearchItemList
          searchList={schoolTypeList || []}
          inputValue={type}
          onSelectInputValue={onSelectSchoolType}
          type='계열'
        />
      )}
    </SearchComponent>
  )
}

export default SearchSchoolType
