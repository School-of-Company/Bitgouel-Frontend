'use client'

import { useGetLines } from '@bitgouel/api'
import {
  InputCancel,
  LectureDivision,
  LectureLine,
  LectureType,
  SearchIcon,
} from '@bitgouel/common'
import { LineResponseTypes } from '@bitgouel/types'
import { ChangeEvent, FormEvent, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import {
  SearchInput,
  SearchInputBox,
  SearchItem,
  SearchListContainer,
  SearchWrapper,
} from '../style'

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

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const searchTypes: string[] = []
    LectureTypes.forEach((lectureTypeItem) => {
      console.log(lectureTypeItem)
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
    <SearchWrapper>
      <SearchInputBox onSubmit={onSubmit} isSelected={!!lectureType.length}>
        <SearchInput
          type='text'
          value={lectureType.length ? lectureType : type}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setType(e.target.value)
          }
          placeholder='유형 검색 또는 임의로 추가...'
          disabled={!!lectureType.length}
        />
        {lectureType.length ? (
          <InputCancel onClick={onDeleteLectureType} />
        ) : (
          <SearchIcon onClick={onSubmit} />
        )}
      </SearchInputBox>
      {lectureTypeList && !lectureType.length && (
        <SearchListContainer>
          {lectureTypeList.map((lectureTypeItem) => (
            <SearchItem
              key={lectureTypeItem}
              onClick={() => onSelectLectureType(lectureTypeItem)}
            >
              <span>{lectureTypeItem}</span>
            </SearchItem>
          ))}
          {!lectureTypeList?.length && (
            <SearchItem onClick={() => onSelectLectureType(type)}>
              <span>{type}</span>
              <small>새 유형 추가하기...</small>
            </SearchItem>
          )}
        </SearchListContainer>
      )}
    </SearchWrapper>
  )
}

export default SearchLectureType
