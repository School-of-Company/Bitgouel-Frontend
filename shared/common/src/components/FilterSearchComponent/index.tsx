'use client'

import { FilterModal, FilterOut, SearchIcon, useModal } from '@bitgouel/common'
import { FilterModalProps } from '@bitgouel/types'
import { QueryObserverResult } from '@tanstack/react-query'
import { ChangeEvent, Dispatch, FormEvent, SetStateAction } from 'react'
import * as S from './style'

interface Props {
  keywordPlaceholder: '이름' | '키워드'
  onSubmit: (e: FormEvent) => void
  keyword: string
  setKeyword: Dispatch<SetStateAction<string>>
  refetch: () => Promise<QueryObserverResult>
  filterProps: FilterModalProps
}

const FilterSearchComponent = ({
  keywordPlaceholder,
  onSubmit,
  keyword,
  setKeyword,
  refetch,
  filterProps,
}: Props) => {
  const { openModal } = useModal()
  return (
    <S.SearchContainer>
      <S.SearchBox onSubmit={onSubmit}>
        <S.SearchInput
          type='text'
          placeholder={`${keywordPlaceholder}로 검색...`}
          value={keyword}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setKeyword(e.target.value)
          }
        />
        <SearchIcon onClick={() => refetch()} />
      </S.SearchBox>
      <S.Filter
        onClick={() =>
          openModal(
            <FilterModal
              title={filterProps.title}
              filterList={filterProps.filterList}
              onSelected={filterProps.onSelected}
            />
          )
        }
      >
        <FilterOut />
        <span>필터</span>
      </S.Filter>
    </S.SearchContainer>
  )
}

export default FilterSearchComponent
