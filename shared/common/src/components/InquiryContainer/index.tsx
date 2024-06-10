import { useGetInquiryList, useGetMyInquiryList } from '@bitgouel/api'
import { AnswerStatus } from '@bitgouel/types'
import { useEffect, useState } from 'react'
import InquiryList from './InquiryList'
import InquirySearch from './InquirySearch'

interface Props {
  isAdmin: boolean
}

const InquiryContainer = ({ isAdmin }: Props) => {
  const [keyword, setKeyword] = useState<string>('')
  const [answerStatus, setAnswerStatus] = useState<AnswerStatus | ''>('')
  const { data: inquiryList, refetch } = isAdmin
    ? useGetInquiryList({
        keyword,
        answerStatus,
      })
    : useGetMyInquiryList()

  useEffect(() => {
    refetch()
  }, [answerStatus])

  return (
    <>
      <InquirySearch
        isAdmin={isAdmin}
        refetch={() => refetch()}
        keyword={keyword}
        setKeyword={setKeyword}
        setAnswerStatus={setAnswerStatus}
      />
      <InquiryList inquiryList={inquiryList} />
    </>
  )
}

export default InquiryContainer
