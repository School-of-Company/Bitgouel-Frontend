'use client'

import { FieldEnum, FieldToEnum, SearchComponent } from '@bitgouel/common'
import { SchoolTypeEnum } from '@bitgouel/types'
import { useState } from 'react'
import { useRecoilState } from 'recoil'

const CreateField: [
  '미래형 운송기기',
  '에너지 산업',
  '의료 헬스케어',
  'AI 융복합',
  '문화산업'
] = ['미래형 운송기기', '에너지 산업', '의료 헬스케어', 'AI 융복합', '문화산업']

const SearchFieldEnum = () => {
  const [fieldEnum, setFieldEnum] = useRecoilState(FieldEnum)
  const [inputValue, setInputValue] = useState<string>('')
  const [fieldKor, setFieldKor] = useState<string>('')
  const [fieldList, setFieldList] = useState<string[]>(CreateField)

  const onSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault()
    const searchFields: string[] = CreateField.filter((item) =>
      item.includes(fieldKor.trim())
    )
    setFieldList(searchFields)
  }

  const onSelectFieldEnum = (fieldItem: SchoolTypeEnum) => {
    const selectedField = FieldToEnum[fieldItem]
    if (selectedField) {
      setFieldEnum(selectedField) //영어
      setInputValue(fieldItem) //한국어
    }

    setFieldKor('')
  }

  const onDeleteSearchSchoolType = () => {
    setFieldEnum('')
    setFieldList(CreateField)
  }

  return (
    <SearchComponent>
      <SearchComponent.SearchInputBox
        inputValue={inputValue}
        setInputValue={setFieldKor}
        recoilValue={fieldEnum}
        onSubmit={onSubmit}
        onDeleteInputValue={onDeleteSearchSchoolType}
        inputPlaceholder='분야 검색'
        isSearch={false}
        isAdd={false}
      />
      {fieldEnum.length <= 0 && (
        <SearchComponent.SearchItemList
          searchList={fieldList || []}
          onSelectInputValue={onSelectFieldEnum}
          type='계열'
        />
      )}
    </SearchComponent>
  )
}

export default SearchFieldEnum
