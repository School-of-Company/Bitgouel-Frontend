'use client'

import { RoleEnumTypes } from '@bitgouel/types'
import { useRouter } from 'next/navigation'
import { Bg5, Plus } from '../../../assets'
import { InquiryItem } from '../../../components'
import * as S from './style'
import { TokenManager, useGetInquiryList, useGetMyInquiryList } from '@bitgouel/api'

const InquiryPage = () => {
  const { push } = useRouter()
  const tokenManager = new TokenManager()
  const { data: inquiryList } = useGetInquiryList()
  const { data: myInquiryList } = useGetMyInquiryList()

  return (
    <div>
      <S.SlideBg url={Bg5}>
        <S.BgContainer>
          <S.InquiryTitle>문의사항</S.InquiryTitle>
          <S.ButtonContainer>
            {tokenManager.authority !== 'ROLE_ADMIN' && (
              <S.InquiryButton onClick={() => push('/main/inquiry/create')}>
                <Plus />
                <span>문의사항 추가</span>
              </S.InquiryButton>
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
