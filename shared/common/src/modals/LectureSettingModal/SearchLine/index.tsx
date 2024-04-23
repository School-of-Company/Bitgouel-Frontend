'use client'

import { useGetLines } from '@bitgouel/api'
import {
  InputCancel,
  LectureDivision,
  LectureLine,
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

const SearchLine = () => {
  const [lectureLine, setLectureLine] = useRecoilState(LectureLine)
  const lectureDivision = useRecoilValue(LectureDivision)
  const [line, setLine] = useState<string>('')
  const { data, refetch } = useGetLines({
    keyword: line,
    division: lectureDivision,
  })

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    refetch()
  }

  const { lines } = data?.data || ({} as LineResponseTypes)

  return (
    <SearchWrapper>
      <SearchInputBox onSubmit={onSubmit} isSelected={!!lectureLine.length}>
        <SearchInput
          type='text'
          value={lectureLine.length ? lectureLine : line}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setLine(e.target.value)
          }
          placeholder='계열 검색 또는 임의로 추가...'
          disabled={!!lectureLine.length}
        />
        {lectureLine.length ? (
          <InputCancel
            onClick={() => {
              setLectureLine('')
              refetch()
            }}
          />
        ) : (
          <SearchIcon onClick={() => refetch()} />
        )}
      </SearchInputBox>
      {lines && !lectureLine.length && (
        <SearchListContainer>
          {lines.map((line) => (
            <SearchItem
              key={line}
              onClick={() => {
                setLectureLine(line)
                setLine('')
              }}
            >
              <span>{line}</span>
            </SearchItem>
          ))}
          {!lines?.length && (
            <SearchItem
              onClick={() => {
                setLectureLine(line)
                setLine('')
              }}
            >
              <span>{line}</span>
              <span>새 계열 추가하기...</span>
            </SearchItem>
          )}
        </SearchListContainer>
      )}
    </SearchWrapper>
  )
}

export default SearchLine
