'use client'

import {
  TokenManager,
  useGetInquiryList,
  useGetMyInquiryList,
} from '@bitgouel/api'
import { InquiryFiltersTypes } from '@bitgouel/types'
import { AnswerStatus } from '@bitgouel/types/src/common/AnswerStatus'
import { useRouter } from 'next/navigation'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import {
  Bg5,
  FilterOut,
  MegaPhone,
  Message,
  Plus,
  SearchIcon,
} from '../../../assets'
import { InquiryItem } from '../../../components'
import * as S from './style'

const InquiryPage = ({ isAdmin }: { isAdmin: boolean }) => {
  const [keyword, setKeyword] = useState<string>('')
  const [answerStatus, setAnswerStatus] = useState<AnswerStatus | ''>('')
  const { push } = useRouter()
  const tokenManager = new TokenManager()
  const { data: inquiryList, refetch } = useGetInquiryList(
    {
      keyword,
      answerStatus,
    },
    { enabled: !!isAdmin }
  )
  const { data: myInquiryList } = useGetMyInquiryList({
    enabled: !isAdmin,
  })
  const [isFilter, setIsFilter] = useState<boolean>(false)
  const [inquiryStatus, setInquiryStatus] = useState<InquiryFiltersTypes[]>([
    { text: '전체', status: '', checked: true },
    { text: '답변 대기 중', status: 'UNANSWERED', checked: false },
    { text: '답변 완료됨', status: 'ANSWERED', checked: false },
  ])

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInquiryStatus((prev) =>
      prev.map((inquiry: any) =>
        inquiry.status === e.target.id
          ? { ...inquiry, checked: true }
          : { ...inquiry, checked: false }
      )
    )
    if (e.target.checked) setAnswerStatus(e.target.id as AnswerStatus)
    else return
  }
  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    refetch()
  }

  useEffect(() => {
    refetch()
  }, [answerStatus])

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <S.SlideBg url={Bg5}>
        <S.BgContainer>
          <S.InquiryTitle>문의사항</S.InquiryTitle>
          <S.ButtonContainer>
            <S.InquiryButton onClick={() => push(`/main/post`)}>
              <Message />
              <span>게시글</span>
            </S.InquiryButton>
            <S.InquiryButton onClick={() => push(`/main/post/notice`)}>
              <MegaPhone />
              <span>공지사항</span>
            </S.InquiryButton>
            {!isAdmin && (
              <S.InquiryButton
                onClick={() => push('/main/post/inquiry/create')}
              >
                <Plus />
                <span>문의사항 추가</span>
              </S.InquiryButton>
            )}
          </S.ButtonContainer>
        </S.BgContainer>
      </S.SlideBg>
      <S.InquiryWrapper>
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
            <S.InquiryFilterBox>
              <S.Filter onClick={() => setIsFilter((prev) => !prev)}>
                <FilterOut />
                <span>필터</span>
              </S.Filter>
              {isFilter && (
                <S.InquiryFilter>
                  <h3>문의 상태</h3>
                  <S.CheckListContainer>
                    {inquiryStatus.map((inquiry, idx) => (
                      <S.CheckBox key={idx} htmlFor={inquiry.status}>
                        <S.Check
                          type='radio'
                          id={inquiry.status}
                          checked={inquiry.checked}
                          onChange={onChange}
                        />
                        <span>{inquiry.text}</span>
                      </S.CheckBox>
                    ))}
                  </S.CheckListContainer>
                </S.InquiryFilter>
              )}
            </S.InquiryFilterBox>
          </S.SearchContainer>
        )}
        <S.ListWrapper>
          <S.ListContainer>
            {isAdmin
              ? inquiryList?.data.inquiries.map((inquiry) => (
                  <InquiryItem item={inquiry} key={inquiry.id} />
                ))
              : myInquiryList?.data.inquiries.map((inquiry) => (
                  <InquiryItem item={inquiry} key={inquiry.id} />
                ))}
          </S.ListContainer>
        </S.ListWrapper>
      </S.InquiryWrapper>
    </div>
  )
}

export default InquiryPage
