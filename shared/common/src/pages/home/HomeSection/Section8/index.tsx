'use client'

import * as S from './style'
import { Gwangju, OfficeGwangju } from '@bitgouel/common'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Section8 = () => {
  const { push } = useRouter()

  return (
    <>
      <S.Footer>
        <S.FooterTextContainer>
          <S.CopyRightsContainer>
            <S.CopyRightText>
              ©2023 [Copyright Holder] All Rights Reserved.
            </S.CopyRightText>
            <S.CopyRightLinkList>
              <span>개인정보처리방침</span>
              <span>저작권신고 및 보호규정</span>
              <span onClick={() => push('/main/post/inquiry')}>문의하기</span>
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
              <span>[주소]</span>
              <span>
                [소속1]: [전화번호]([응답 시간대]), [소속2]: [전화번호]([응답
                시간대])
              </span>
              <span>
                [소속1]: [전화번호]([응답 시간대]), [소속2]: [전화번호]([응답
                시간대])
              </span>
            </S.AddressRightText>
          </S.AddressBox>
        </S.FooterTextContainer>
      </S.Footer>
    </>
  )
}

export default Section8
