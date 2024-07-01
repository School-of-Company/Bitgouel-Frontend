'use client'

import * as S from './style'
import Link from 'next/link'

import { useScroll } from '@bitgouel/common'
import { useRef } from 'react'

const Section2 = () => {
  const target = useRef(null)
  const { isVisible } = useScroll({ target, option: { threshold: 0.2 } })

  return (
    <S.IntroduceContainer
      ref={target}
      className={isVisible ? 'fade-in' : 'hidden'}
    >
      <S.SubTitleContainer>
        <S.SubTitleWrapper>
          <S.SemiTitleBox>
            <S.SubTitleSub>지역산업 발전을 위해 당신이 필요해요</S.SubTitleSub>
            <S.SubTitleMain>빛고을 직업교육 혁신지구</S.SubTitleMain>
          </S.SemiTitleBox>
          <S.FromTextContainer>
            본 사업은{' '}
            <Link href={`https://www.gwangju.go.kr/`} passHref legacyBehavior>
              <a target='_blank' rel='noopener noreferrer'>
                광주광역시
              </a>
            </Link>
            와{' '}
            <Link href={`http://www.gen.go.kr/`} passHref legacyBehavior>
              <a target='_blank' rel='noopener noreferrer'>
                광주광역시교육청
              </a>
            </Link>
            이 함께합니다.
          </S.FromTextContainer>
        </S.SubTitleWrapper>
      </S.SubTitleContainer>
      <S.UnionListContainer>
        <S.UnionListWrapper>
          <S.UnionItem>
            <S.UnionTitle>🏫 직업계고</S.UnionTitle>
            <div>
              <li>교육과정 운영</li>
              <li>진로 지도</li>
              <li>학생 관리</li>
            </div>
          </S.UnionItem>
          <S.UnionItem>
            <S.UnionTitle>🎓 지역대학</S.UnionTitle>
            <div>
              <li>기업 연계 교육</li>
              <li>심화교육</li>
              <li>후학습지원</li>
            </div>
          </S.UnionItem>
          <S.UnionItem>
            <S.UnionTitle>🏢 지역기업</S.UnionTitle>
            <div>
              <li>현장 맞춤형 교육</li>
              <li>현장실습</li>
              <li>고졸 채용</li>
            </div>
          </S.UnionItem>
          <S.UnionItem>
            <S.UnionTitle>💼 유관기관</S.UnionTitle>
            <div>
              <li>산업 인력 분석</li>
              <li>특화프로그램 운영</li>
              <li>고졸채용네트워크 구축</li>
            </div>
          </S.UnionItem>
        </S.UnionListWrapper>
      </S.UnionListContainer>
      <S.BannerTitleWrapper>
        <div>
          <div>새내기 인재가 토박이 기술 장인으로 성장하는 혁신지구</div>
          <div>지역 미래 산업을 선도할 핵심 분야 기술 인재 육성</div>
        </div>
      </S.BannerTitleWrapper>
    </S.IntroduceContainer>
  )
}

export default Section2
