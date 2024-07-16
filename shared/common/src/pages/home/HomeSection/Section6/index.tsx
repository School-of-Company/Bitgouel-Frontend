'use client'

import { CompanyListSlider, HomeStyle, useScroll } from '@bitgouel/common'
import styled from '@emotion/styled'
import { useRef } from 'react'
import { IntersectionObserver } from '../animations'

const ParticipantsContainer = styled.div`
  ${IntersectionObserver}
`

const Section6 = () => {
  const target = useRef(null)
  const { isVisible } = useScroll({ target, option: { threshold: 0.1 } })
  return (
    <ParticipantsContainer
      ref={target}
      className={isVisible ? 'fade-in' : 'hidden'}
    >
      <div style={{ marginTop: '10rem' }}>
        <HomeStyle.SemiTitleBox>
          <HomeStyle.SubTitleSub>
            직업계고 계열별 학교현황 및 진로
          </HomeStyle.SubTitleSub>
          <HomeStyle.SubTitleMain>참여 기업 소개</HomeStyle.SubTitleMain>
        </HomeStyle.SemiTitleBox>
        <CompanyListSlider />
      </div>
    </ParticipantsContainer>
  )
}

export default Section6
