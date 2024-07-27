import { FilterSearchComponent, useFilterSelect } from '@bitgouel/common'
import { AnswerStatus } from '@bitgouel/types'
import { QueryObserverResult } from '@tanstack/react-query'
import { Dispatch, FormEvent, SetStateAction } from 'react'

interface Props {
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

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    refetch()
  }

  return (
    <FilterSearchComponent
      keywordPlaceholder='키워드'
      onSubmit={onSubmit}
      keyword={keyword}
      setKeyword={setKeyword}
      refetch={refetch}
      filterProps={{ title: '문의 상태', filterList, onSelected }}
    />
  )
}

export default InquirySearch
