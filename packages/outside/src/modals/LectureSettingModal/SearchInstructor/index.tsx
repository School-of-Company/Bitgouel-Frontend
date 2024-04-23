'use client'

import { useGetInstructors } from '@bitgouel/api'
import { InputCancel, LectureInstructor, SearchIcon } from '@bitgouel/common'
import { ProfessorResponseTypes } from '@bitgouel/types'
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
  const { instructors } = data?.data || ({} as ProfessorResponseTypes)
  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
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
          <InputCancel
            onClick={() => {
              setLectureInstructor('')
              setShowInstructor('')
            }}
          />
        ) : (
          <SearchIcon onClick={() => refetch()} />
        )}
      </SearchInputBox>
      {instructors && !lectureInstructor.length && (
        <SearchListContainer>
          {instructors.map((instructor) => (
            <SearchItem
              key={instructor.id}
              onClick={() => {
                setLectureInstructor(instructor.id)
                setShowInstructor(instructor.name)
                setInstructor('')
              }}
            >
              <span>{instructor.name}</span>
              <span>{instructor.organization}</span>
            </SearchItem>
          ))}
        </SearchListContainer>
      )}
    </SearchWrapper>
  )
}

export default SearchInstructor
