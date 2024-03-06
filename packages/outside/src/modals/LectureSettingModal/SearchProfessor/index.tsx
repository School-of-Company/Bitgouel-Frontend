'use client'

import { useGetProfessor } from '@bitgouel/api'
import { LectureProfessor, SearchIcon } from '@bitgouel/common'
import { ChangeEvent, FormEvent, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import * as S from './style'

const SearchProfessor = () => {
  const [professor, setProfessor] = useState<string>('')
  const setLectureProfessor = useSetRecoilState(LectureProfessor)
  const { data, refetch } = useGetProfessor(professor)

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    refetch()
  }

  return (
    <S.SearchProfessorWrapper>
      <S.SearchInputBox onSubmit={onSubmit}>
        <S.SearchInput
          type='text'
          value={professor}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setProfessor(e.target.value)
          }
          placeholder='이름 또는 학교명으로 검색...'
        />
        <SearchIcon onClick={() => refetch()} />
      </S.SearchInputBox>
      <S.ProfessorListContainer>
        {data?.data.instructors.map((professor) => (
          <S.ProfessorItem
            key={professor.id}
            onClick={() => {
              setLectureProfessor(professor.name)
              setProfessor('')
            }}
          >
            <span>{professor.name}</span>
            <span>{professor.organization}</span>
          </S.ProfessorItem>
        ))}
      </S.ProfessorListContainer>
    </S.SearchProfessorWrapper>
  )
}

export default SearchProfessor
