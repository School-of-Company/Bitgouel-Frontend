import { useState } from 'react'
import { useRecoilState } from 'recoil'
import SearchComponent from '@bitgouel/common/src/modals/LectureSettingModal/SearchComponent'
import { SchoolType } from '@bitgouel/common'
import { SchoolTypeEnum, schoolTypeMappings } from '@bitgouel/types'

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
  const [inputValue, setInputValue] = useState<string>('')
  const [type, setType] = useState<string>('')
  const [schoolTypeList, setSchoolTypeList] =
    useState<string[]>(CreateSchoolTypes)

  const onSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault()
    const searchTypes: string[] = CreateSchoolTypes.filter((item) =>
      item.includes(type)
    )
    setSchoolTypeList(searchTypes)
  }

  const onSelectSchoolType = (schoolTypeItem: SchoolTypeEnum) => {
    const selectedType = schoolTypeMappings[schoolTypeItem]
    if (selectedType) {
      setSchoolType(selectedType) //영어
      setInputValue(schoolTypeItem) //한국어
    }

    setType('')
  }

  const onDeleteSearchSchoolType = () => {
    setSchoolType('')
    setSchoolTypeList(CreateSchoolTypes)
  }

  return (
    <SearchComponent>
      <SearchComponent.SearchInputBox
        inputValue={inputValue}
        setInputValue={setType}
        recoilValue={schoolType}
        onSubmit={onSubmit}
        onDeleteInputValue={onDeleteSearchSchoolType}
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
