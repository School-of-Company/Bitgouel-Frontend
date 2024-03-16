'use client'

import { useGetProfessor } from '@bitgouel/api'
import { LectureProfessor, SearchIcon } from '@bitgouel/common'
import { ChangeEvent, FormEvent, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import {
  SearchInput,
  SearchInputBox,
  SearchItem,
  SearchListContainer,
  SearchWrapper,
} from '../style'

const SearchProfessor = () => {
  const [professor, setProfessor] = useState<string>('')
  const setLectureProfessor = useSetRecoilState(LectureProfessor)
  const { data, refetch } = useGetProfessor(professor)

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    refetch()
  }

  return (
    <SearchWrapper>
      <SearchInputBox onSubmit={onSubmit}>
        <SearchInput
          type='text'
          value={professor}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setProfessor(e.target.value)
          }
          placeholder='이름 또는 학교명으로 검색...'
        />
        <SearchIcon onClick={() => refetch()} />
      </SearchInputBox>
      <SearchListContainer>
        {data?.data.instructors.map((professor) => (
          <SearchItem
            key={professor.id}
            onClick={() => {
              setLectureProfessor(professor.name)
              setProfessor('')
            }}
          >
            <span>{professor.name}</span>
            <span>{professor.organization}</span>
          </SearchItem>
        ))}
      </SearchListContainer>
    </SearchWrapper>
  )
}

export default SearchProfessor
