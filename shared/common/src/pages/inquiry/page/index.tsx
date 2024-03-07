'use client'

import { RoleEnumTypes } from '@bitgouel/types'
import { useRouter } from 'next/navigation'
import { Bg5, FilterOut, Plus } from '../../../assets'
import { InquiryItem } from '../../../components'
import * as S from './style'
import {
  TokenManager,
  useGetInquiryList,
  useGetMyInquiryList,
} from '@bitgouel/api'
import { ChangeEvent, useEffect, useState } from 'react'
import { AnswerStatus } from '@bitgouel/types/src/common/AnswerStatus'

const InquiryPage = ({ isAdmin }: { isAdmin: boolean }) => {
  const [answerStatus, setAnswerStatus] = useState<AnswerStatus | string>('')
  const { push } = useRouter()
  const tokenManager = new TokenManager()
  const { data: inquiryList, refetch } = useGetInquiryList(answerStatus)
  const { data: myInquiryList } = useGetMyInquiryList()
  const [isFilter, setIsFilter] = useState<boolean>(false)
  const [inquiryStatus, setInquiryStatus] = useState<
    { text: string; status: AnswerStatus; checked: false }[]
  >([
    { text: '답변 대기 중', status: 'UNANSWERED', checked: false },
    { text: '답변 완료됨', status: 'ANSWERED', checked: false },
  ])

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInquiryStatus((prev) =>
      prev.map((inquiry: any) =>
        inquiry.status === e.target.id
          ? { ...inquiry, checked: !inquiry.checked }
          : { ...inquiry, checked: false }
      )
    )
    if (e.target.checked) setAnswerStatus(e.target.id as AnswerStatus)
    else setAnswerStatus('UNANSWERED')
  }

  useEffect(() => {
    refetch()
  }, [answerStatus])

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <S.SlideBg url={Bg5}>
        <S.BgContainer>
          <S.InquiryTitle>문의사항</S.InquiryTitle>
          <S.ButtonContainer>
            {!isAdmin && (
              <S.InquiryButton onClick={() => push('/main/inquiry/create')}>
                <Plus />
                <span>문의사항 추가</span>
              </S.InquiryButton>
            )}
            {isAdmin && (
              <S.InquiryFilterBox>
                <S.InquiryButton onClick={() => setIsFilter((prev) => !prev)}>
                  <FilterOut />
                  <span>필터</span>
                </S.InquiryButton>
                {isFilter && (
                  <S.InquiryFilter>
                    <h3>문의 상태</h3>
                    <S.CheckListContainer>
                      {inquiryStatus.map((inquiry, idx) => (
                        <S.CheckBox key={idx} htmlFor={inquiry.status}>
                          <S.Check
                            type='checkbox'
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
            )}
          </S.ButtonContainer>
        </S.BgContainer>
      </S.SlideBg>
      <S.ListWrapper>
        <S.ListContainer>
          {tokenManager.authority === 'ROLE_ADMIN'
            ? inquiryList?.data.inquiries.map((inquiry) => (
                <InquiryItem item={inquiry} />
              ))
            : myInquiryList?.data.inquiries.map((inquiry) => (
                <InquiryItem item={inquiry} />
              ))}
        </S.ListContainer>
      </S.ListWrapper>
    </div>
  )
}

export default InquiryPage
