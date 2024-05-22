'use client'

import { useGetInstructors } from '@bitgouel/api'
import { InputCancel, LectureInstructor, SearchIcon } from '@bitgouel/common'
import { InstructorsItemType } from '@bitgouel/types'
import { ChangeEvent, FormEvent, useState } from 'react'
import { useRecoilState } from 'recoil'
import {
  SearchInput,
  SearchInputBox,
  SearchItem,
  SearchListContainer,
  SearchWrapper,
} from '../style'

const SearchInstructor = () => {
  const [lectureInstructor, setLectureInstructor] =
    useRecoilState(LectureInstructor)
  const [instructor, setInstructor] = useState<string>('')
  const [showInstructor, setShowInstructor] = useState<string>('')
  const { data, refetch } = useGetInstructors(instructor)
  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    refetch()
  }

  const onSelectInstructor = (instructorItem: InstructorsItemType) => {
    setLectureInstructor(instructorItem.id)
    setShowInstructor(instructorItem.name)
    setInstructor('')
  }

  const onDeleteInstructor = () => {
    setLectureInstructor('')
    setShowInstructor('')
    refetch()
  }

  return (
    <SearchWrapper>
      <SearchInputBox
        onSubmit={onSubmit}
        isSelected={!!lectureInstructor.length}
      >
        <SearchInput
          type='text'
          value={lectureInstructor.length ? showInstructor : instructor}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setInstructor(e.target.value)
          }
          placeholder='이름 또는 기관명으로 검색...'
          disabled={!!lectureInstructor.length}
        />
        {lectureInstructor.length ? (
          <InputCancel onClick={onDeleteInstructor} />
        ) : (
          <SearchIcon onClick={() => refetch()} />
        )}
      </SearchInputBox>
      {data?.instructors && !lectureInstructor.length && (
        <SearchListContainer>
          {data.instructors.map((instructorItem) => (
            <SearchItem
              key={instructorItem.id}
              onClick={() => onSelectInstructor(instructorItem)}
            >
              <span>{instructorItem.name}</span>
              <small>{instructorItem.organization}</small>
            </SearchItem>
          ))}
        </SearchListContainer>
      )}
    </SearchWrapper>
  )
}

export default SearchInstructor
