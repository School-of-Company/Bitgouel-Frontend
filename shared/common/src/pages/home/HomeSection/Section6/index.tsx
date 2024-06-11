'use client'

import { HomeStyle, CompanyListSlider } from '@bitgouel/common'

const Section6 = () => {
  return (
    <div style={{ marginTop: '10rem' }}>
      <HomeStyle.SemiTitleBox>
        <HomeStyle.SubTitleSub>
          직업계고 계열별 학교현황 및 진로
        </HomeStyle.SubTitleSub>
        <HomeStyle.SubTitleMain>참여 기업 소개</HomeStyle.SubTitleMain>
      </HomeStyle.SemiTitleBox>
      <CompanyListSlider />
    </div>
  )
}

export default Section6
