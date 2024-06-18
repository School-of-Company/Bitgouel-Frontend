'use client'

import { useGetInstructors } from '@bitgouel/api'
import {
  InputCancel,
  LectureInstructor,
  SearchIcon,
  ShowInstructor,
} from '@bitgouel/common'
import { InstructorsItemType } from '@bitgouel/types'
import { ChangeEvent, FormEvent, useState } from 'react'
import { atom, useRecoilState } from 'recoil'
import {
  SearchInput,
  SearchInputBox,
  SearchItem,
  SearchListContainer,
  SearchWrapper,
} from '../LectureSearchComponent/style'

const SearchInstructor = () => {
  const [lectureInstructor, setLectureInstructor] =
    useRecoilState(LectureInstructor)
  const [instructor, setInstructor] = useState<string>('')
  const [showInstructor, setShowInstructor] = useRecoilState(ShowInstructor)
  const { data, refetch } = useGetInstructors(instructor)
  const onSubmit = (e?: FormEvent) => {
    if (e) e.preventDefault()
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
    setInstructor('')
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
          value={showInstructor.length ? showInstructor : instructor}
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
      {lectureInstructor.length <= 0 && (
        <SearchListContainer>
          {data?.instructors && data.instructors.length <= 0 ? (
            <div>일치하는 교육자가 없습니다.</div>
          ) : (
            data?.instructors.map((instructorItem) => (
              <SearchItem
                key={instructorItem.id}
                onClick={() => onSelectInstructor(instructorItem)}
              >
                <span>{instructorItem.name}</span>
                <small>{instructorItem.organization}</small>
              </SearchItem>
            ))
          )}
        </SearchListContainer>
      )}
    </SearchWrapper>
  )
}

export default SearchInstructor
