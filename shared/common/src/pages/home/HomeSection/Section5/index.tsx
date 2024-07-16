'use client'

import { useRef } from 'react'
import * as S from './style'
import { HomeStyle, useScroll } from '@bitgouel/common'

const Section5 = () => {
  const target = useRef(null)
  const { isVisible } = useScroll({ target, option: { threshold: 0.2 } })
  return (
    <S.UnionUniversityContainer
      ref={target}
      className={isVisible ? 'fade-in' : 'hidden'}
    >
      <HomeStyle.SemiTitleBox>
        <HomeStyle.SubTitleSub>
          직업계고 계열별 학교현황 및 진로
        </HomeStyle.SubTitleSub>
        <HomeStyle.SubTitleMain>연계 대학 소개</HomeStyle.SubTitleMain>
      </HomeStyle.SemiTitleBox>
      <S.UnionUniversityList>
        <S.UniversityLeftArea>
          <S.UniversityIntro>
            <S.UniversityName>송원대학교</S.UniversityName>
            <S.UniversityText>
              철도운전고나제시스템과, 철도차량전기시스템과, 미용예술학과,
              <br />
              철도운전경영과, 사회복지학과, 간호학과, 건축공학과
            </S.UniversityText>
          </S.UniversityIntro>
          <S.UniversityIntro>
            <S.UniversityName>동강대학교</S.UniversityName>
            <S.UniversityText>
              AI융합기계과, K뷰티아트과, AI드론과, 외식조리제빵과
            </S.UniversityText>
          </S.UniversityIntro>
          <S.UniversityIntro>
            <S.UniversityName>남부대학교</S.UniversityName>
            <S.UniversityText>
              자동차기계공학과, 전기공학과, 항장미용학과, 호텔조리학과
            </S.UniversityText>
          </S.UniversityIntro>
        </S.UniversityLeftArea>
        <S.WhiteSpace />
        <S.UniversityRightArea>
          <S.UniversityIntro>
            <S.UniversityName>호남대학교</S.UniversityName>
            <S.UniversityText>
              로봇드론공학과, 전기공학과, 정보통신공학과, 뷰티미용학과,
              토목환경공학과,
              <br />
              외식조리학과, 건축학과, 조경학과, 작업치료학과(수의사), 경영학과
            </S.UniversityText>
          </S.UniversityIntro>
          <S.UniversityIntro>
            <S.UniversityName>조선이공대학교</S.UniversityName>
            <S.UniversityText>
              기계설기과, 자동화시스템과, 특수전군사학과, 미래자동차과, 전자과,
              <br />
              하이테크 CAD/CAM과, 호텔조리파티쉐과
            </S.UniversityText>
          </S.UniversityIntro>
          <S.UniversityIntro>
            <S.UniversityName>서영대학교</S.UniversityName>
            <S.UniversityText>
              자동차과, 전기과, 생명공학과, 뷰티미용과, 치위생과, E크리에이터과
            </S.UniversityText>
          </S.UniversityIntro>
        </S.UniversityRightArea>
      </S.UnionUniversityList>
    </S.UnionUniversityContainer>
  )
}

export default Section5
