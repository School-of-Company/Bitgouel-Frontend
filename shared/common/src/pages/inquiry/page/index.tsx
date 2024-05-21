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
  MainStyle,
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

const filterTitle: string = '문의 상태'

const InquiryPage = ({ isAdmin }: { isAdmin: boolean }) => {
  const [keyword, setKeyword] = useState<string>('')
  const [answerStatus, setAnswerStatus] = useState<AnswerStatus | ''>('')
  const { push } = useRouter()
  const { data: inquiryList, refetch } = isAdmin
    ? useGetInquiryList(
        {
          keyword,
          answerStatus,
        },
        { enabled: isAdmin === true }
      )
    : useGetMyInquiryList()
  const { openModal } = useModal()
  const { filterList, onSelected } = useFilterSelect({
    defaultFilterList,
    setFilterPayload: setAnswerStatus,
    title: filterTitle,
  })

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    refetch()
  }

  useEffect(() => {
    refetch()
  }, [answerStatus])

  return (
    <MainStyle.PageWrapper>
      <MainStyle.SlideBg url={Bg5}>
        <MainStyle.BgContainer>
          <MainStyle.PageTitle>문의사항</MainStyle.PageTitle>
          <MainStyle.ButtonContainer>
            <MainStyle.SlideButton onClick={() => push(`/main/post`)}>
              <Message />
              <span>게시글</span>
            </MainStyle.SlideButton>
            <MainStyle.SlideButton onClick={() => push(`/main/post/notice`)}>
              <MegaPhone />
              <span>공지사항</span>
            </MainStyle.SlideButton>
            {!isAdmin && (
              <MainStyle.SlideButton
                onClick={() => push('/main/post/inquiry/create')}
              >
                <Plus />
                <span>문의사항 추가</span>
              </MainStyle.SlideButton>
            )}
          </MainStyle.ButtonContainer>
        </MainStyle.BgContainer>
      </MainStyle.SlideBg>
      <MainStyle.MainWrapper>
        <MainStyle.MainContainer>
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
          <S.ListWrapper>
            <S.ListContainer>
              {isAdmin
                ? inquiryList?.inquiries.map((inquiry) => (
                    <InquiryItem item={inquiry} key={inquiry.id} />
                  ))
                : inquiryList?.inquiries.map((inquiry) => (
                    <InquiryItem item={inquiry} key={inquiry.id} />
                  ))}
            </S.ListContainer>
          </S.ListWrapper>
        </MainStyle.MainContainer>
      </MainStyle.MainWrapper>
    </MainStyle.PageWrapper>
  )
}

export default InquiryPage
