'use client'

import { TokenManager } from '@bitgouel/api'
import * as S from './style'
import { Gwangju, OfficeGwangju } from '@bitgouel/common'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import { match } from 'ts-pattern'

const Section8 = () => {
  const { push } = useRouter()
  const tokenManager = new TokenManager()

  const ToInquiry = () => {
    match(!!tokenManager.accessToken)
      .with(true, () => push('/main/post/inquiry'))
      .otherwise(() => toast.info('로그인 후 이용해주세요'))
  }

  return (
    <S.Footer>
      <S.FooterTextContainer>
        <S.CopyRightsContainer>
          <S.CopyRightText>
            Copyright© 광주광역시교육청 취업지원센터. All right reserved.
          </S.CopyRightText>
          <S.CopyRightLinkList>
            <span>개인정보처리방침</span>
            <span>저작권신고 및 보호규정</span>
            <span onClick={ToInquiry}>문의하기</span>
          </S.CopyRightLinkList>
        </S.CopyRightsContainer>
        <S.FromLogoContainer>
          <Image src={Gwangju} alt='광주광역시' />
          <Image src={OfficeGwangju} alt='광주광역시교육청' />
        </S.FromLogoContainer>
        <S.AddressBox>
          <S.AddressRightTitle>
            <span>우편</span>
            <span>전화번호</span>
            <span>팩스</span>
          </S.AddressRightTitle>
          <S.AddressLine></S.AddressLine>
          <S.AddressRightText>
            <span>
              광주광역시 북구 설죽로 315번길 14(광주공업고 내 실습4동 1층)
            </span>
            <span>062-570-2970~2978</span>
            <span>062-570-2975</span>
          </S.AddressRightText>
        </S.AddressBox>
      </S.FooterTextContainer>
    </S.Footer>
  )
}

export default Section8
