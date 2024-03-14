'use client'

import { useGetLine } from '@bitgouel/api'
import { LectureLine, SearchIcon } from '@bitgouel/common'
import { ChangeEvent, FormEvent, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import {
    SearchInput,
    SearchInputBox,
    SearchItem,
    SearchListContainer,
    SearchWrapper,
} from '../style'

const SearchLine = () => {
  const [line, setLine] = useState<string>('')
  const setLectureLine = useSetRecoilState(LectureLine)
  const { data, refetch } = useGetLine({
    keyword: line,
    division: 'AI_CONVERGENCE',
  })

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    refetch()
  }

  return (
    <SearchWrapper>
      <SearchInputBox onSubmit={onSubmit}>
        <SearchInput
          type='text'
          value={line}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setLine(e.target.value)
          }
          placeholder='계열 검색 또는 임의로 추가...'
        />
        <SearchIcon onClick={() => refetch()} />
      </SearchInputBox>
      <SearchListContainer>
        {data?.data.lines.map((line) => (
          <SearchItem
            key={line}
            onClick={() => {
              setLectureLine(line)
              setLine('')
            }}
          >
            <span>{line}</span>
            <span>계열 추가하기...</span> 
          </SearchItem>
        ))}
      </SearchListContainer>
    </SearchWrapper>
  )
}

export default SearchLine