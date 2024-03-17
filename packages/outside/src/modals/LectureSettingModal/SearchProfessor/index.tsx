'use client'

import { useGetProfessor } from '@bitgouel/api'
import { InputCancel, LectureProfessor, SearchIcon } from '@bitgouel/common'
import { ChangeEvent, FormEvent, useState } from 'react'
import { useRecoilState } from 'recoil'
import {
  SearchInput,
  SearchInputBox,
  SearchItem,
  SearchListContainer,
  SearchWrapper,
} from '../style'

const SearchProfessor = () => {
  const [lectureProfessor, setLectureProfessor] =
    useRecoilState(LectureProfessor)
  const [professor, setProfessor] = useState<string>('')
  const [showProfessor, setShowProfessor] = useState<string>('')
  const { data, refetch } = useGetProfessor(professor)

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    refetch()
  }

  return (
    <SearchWrapper>
      <SearchInputBox
        onSubmit={onSubmit}
        isSelected={!!lectureProfessor.length}
      >
        <SearchInput
          type='text'
          value={lectureProfessor.length ? showProfessor : professor}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setProfessor(e.target.value)
          }
          placeholder='이름 또는 학교명으로 검색...'
          disabled={!!lectureProfessor.length}
        />
        {lectureProfessor.length ? (
          <InputCancel
            onClick={() => {
              setLectureProfessor('')
              setShowProfessor('')
            }}
          />
        ) : (
          <SearchIcon onClick={() => refetch()} />
        )}
      </SearchInputBox>
      {data?.data.instructors && !lectureProfessor.length && (
        <SearchListContainer>
          {data?.data.instructors.map((professor) => (
            <SearchItem
              key={professor.id}
              onClick={() => {
                setLectureProfessor(professor.id)
                setShowProfessor(professor.name)
                setProfessor('')
              }}
            >
              <span>{professor.name}</span>
              <span>{professor.organization}</span>
            </SearchItem>
          ))}
        </SearchListContainer>
      )}
    </SearchWrapper>
  )
}

export default SearchProfessor
