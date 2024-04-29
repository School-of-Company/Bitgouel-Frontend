'use client'

import { useGetInquiryList, useGetMyInquiryList } from '@bitgouel/api'
import {
  Bg5,
  FilterComponent,
  FilterOut,
  InquiryItem,
  MegaPhone,
  Message,
  Plus,
  SearchIcon,
} from '@bitgouel/common'
import { AnswerStatus, InquiryStatusFilterListTypes } from '@bitgouel/types'
import { useRouter } from 'next/navigation'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import * as S from './style'

const InquiryPage = ({ isAdmin }: { isAdmin: boolean }) => {
  const [keyword, setKeyword] = useState<string>('')
  const [answerStatus, setAnswerStatus] = useState<AnswerStatus | ''>('')
  const { push } = useRouter()
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
  const [inquiryStatus, setInquiryStatus] = useState<
    InquiryStatusFilterListTypes[]
  >([
    { text: '전체', item: 'all', checked: true },
    { text: '답변 대기 중', item: 'UNANSWERED', checked: false },
    { text: '답변 완료됨', item: 'ANSWERED', checked: false },
  ])

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInquiryStatus((prev) =>
      prev.map((inquiry) =>
        inquiry.item === e.target.id
          ? { ...inquiry, checked: true }
          : { ...inquiry, checked: false }
      )
    )
    if (e.target.checked && e.target.id === 'all') setAnswerStatus('')
    else if (e.target.checked) setAnswerStatus(e.target.id as AnswerStatus)
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
                <FilterComponent
                  title='문의 상태'
                  filterList={inquiryStatus}
                  onChange={onChange}
                />
              )}
            </S.InquiryFilterBox>
          </S.SearchContainer>
        )}
        <S.ListWrapper>
          <S.ListContainer>
            {isAdmin
              ? inquiryList?.inquiries.map((inquiry) => (
                  <InquiryItem item={inquiry} key={inquiry.id} />
                ))
              : myInquiryList?.inquiries.map((inquiry) => (
                  <InquiryItem item={inquiry} key={inquiry.id} />
                ))}
          </S.ListContainer>
        </S.ListWrapper>
      </S.InquiryWrapper>
    </div>
  )
}

export default InquiryPage
