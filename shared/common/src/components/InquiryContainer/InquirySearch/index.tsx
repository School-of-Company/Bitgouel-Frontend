import {
  FilterModal,
  FilterOut,
  SearchIcon,
  useFilterSelect,
  useModal,
} from '@bitgouel/common'
import { AnswerStatus } from '@bitgouel/types'
import { QueryObserverResult } from '@tanstack/react-query'
import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction
} from 'react'
import * as S from './style'

interface Props {
  isAdmin: boolean
  refetch: () => Promise<QueryObserverResult>
  keyword: string
  setKeyword: Dispatch<SetStateAction<string>>
  setAnswerStatus: Dispatch<SetStateAction<AnswerStatus | ''>>
}

const defaultFilterList = [
  { text: '전체', item: '전체', checked: true },
  { text: '답변 대기 중', item: 'UNANSWERED', checked: false },
  { text: '답변 완료됨', item: 'ANSWERED', checked: false },
]

const filterTitle: string = '문의 상태'

const InquirySearch = ({
  isAdmin,
  refetch,
  keyword,
  setKeyword,
  setAnswerStatus,
}: Props) => {
  const { filterList, onSelected } = useFilterSelect({
    defaultFilterList,
    setFilterPayload: setAnswerStatus,
    title: filterTitle,
  })
  const { openModal } = useModal()

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    refetch()
  }
  return (
    <>
      {isAdmin && (
        <S.SearchContainer>
          <S.SearchBox onSubmit={onSubmit}>
            <S.SearchInput
              type='text'
              placeholder='키워드로 검색...'
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
                  title='문의 상태'
                  filterList={filterList}
                  onSelected={onSelected}
                />
              )
            }
          >
            <FilterOut />
            <span>필터</span>
          </S.Filter>
        </S.SearchContainer>
      )}
    </>
  )
}

export default InquirySearch
