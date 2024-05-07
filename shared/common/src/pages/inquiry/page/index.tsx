'use client'

import { useGetInquiryList, useGetMyInquiryList } from '@bitgouel/api'
import {
  Bg5,
  FilterModal,
  FilterOut,
  InquiryItem,
  MegaPhone,
  Message,
  Plus,
  SearchIcon,
  useFilterSelect,
  useModal,
} from '@bitgouel/common'
import { AnswerStatus } from '@bitgouel/types'
import { useRouter } from 'next/navigation'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import * as S from './style'

const defaultFilterList = [
  { text: '전체', item: '전체', checked: true },
  { text: '답변 대기 중', item: 'UNANSWERED', checked: false },
  { text: '답변 완료됨', item: 'ANSWERED', checked: false },
]

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
  const { openModal } = useModal()
  const { filterList, onSelected } = useFilterSelect({
    defaultFilterList, setFilterPayload: setAnswerStatus
  })

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    refetch()
  }

  useEffect(() => {
    refetch()
  }, [answerStatus])

  useEffect(() => {
    openModal(
      <FilterModal
        title='문의 상태'
        filterList={filterList}
        onSelected={onSelected}
      />
    )
  })

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
              <S.Filter onClick={() => openModal(
                <FilterModal
                  title='문의 상태'
                  filterList={filterList}
                  onSelected={onSelected}
                />
              )}>
                <FilterOut />
                <span>필터</span>
              </S.Filter>
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
