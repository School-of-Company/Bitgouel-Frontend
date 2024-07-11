'use client'

import { LectureType } from '@bitgouel/common'
import { FormEvent, useState } from 'react'
import { useRecoilState } from 'recoil'
import SearchComponent from '../SearchComponent'

const LectureTypes: [
  '상호학점인정교육과정',
  '유관기관프로그램',
  '대학탐방프로그램',
  '기업산학연계직업체험프로그램'
] = [
  '상호학점인정교육과정',
  '유관기관프로그램',
  '대학탐방프로그램',
  '기업산학연계직업체험프로그램',
]

const SearchLectureType = () => {
  const [lectureType, setLectureType] = useRecoilState(LectureType)
  const [type, setType] = useState<string>('')
  const [lectureTypeList, setLectureTypeList] = useState<string[]>(LectureTypes)

  const onSubmit = (e?: FormEvent) => {
    if (e) e.preventDefault()
    const searchTypes: string[] = []
    LectureTypes.forEach((lectureTypeItem) => {
      if (lectureTypeItem.includes(type)) searchTypes.push(lectureTypeItem)
    })
    setLectureTypeList(searchTypes)
  }

  const onSelectLectureType = (lectureTypeItem: string) => {
    setLectureType(lectureTypeItem)
    setType('')
  }

  const onDeleteLectureType = () => {
    setLectureType('')
    setLectureTypeList(LectureTypes)
  }

  return (
    <SearchComponent>
      <SearchComponent.SearchInputBox
        inputValue={type}
        setInputValue={setType}
        recoilValue={lectureType}
        onSubmit={onSubmit}
        onDeleteInputValue={onDeleteLectureType}
        inputPlaceholder='유형'
      />
      {lectureType.length <= 0 && (
        <SearchComponent.SearchItemList
          searchList={lectureTypeList || []}
          inputValue={type}
          onSelectInputValue={onSelectLectureType}
          addText='유형'
        />
      )}
    </SearchComponent>
  )
}

export default SearchLectureType
