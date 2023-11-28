'use client'

import { useEffect, useState } from 'react'
import { Arrow } from '../../assets'
import Bg1 from '../../assets/png/slide1.png'
import Bg2 from '../../assets/png/slide2.png'
import Bg3 from '../../assets/png/slide3.png'
import Bg4 from '../../assets/png/slide4.png'
import OfficeLogo from '../../assets/png/officeEducation.png'
import GwangjuLogo from '../../assets/png/gwangjuLogo.png'
import { Sequence } from '../../components/index'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import * as S from './style'

const HomePage = () => {
  const router = useRouter()
  const [bgNum, setBgNum] = useState(2)
  const imageArr = [Bg1, Bg2, Bg3, Bg4]

  useEffect(() => {
    const background = setInterval(() => {
      const random = Math.ceil(Math.random() * 4) - 1
      setBgNum(random)
    }, 5000)
    return () => clearInterval(background)
  }, [])

  return (
    <S.HomeWrapper>
      <S.SlideBg url={imageArr[bgNum]}>
        <S.BgContainer>
          <S.HomeTitle>
            빛고을 직업교육 혁신지구
            <br />
            사업 소개
          </S.HomeTitle>
          <Sequence />
        </S.BgContainer>
        <S.ViewContainer>
          <S.View>
            <Arrow />
            둘러보기
          </S.View>
        </S.ViewContainer>
      </S.SlideBg>
      <S.SubTitleContainer>
        <S.SubTitleWrapper>
          <S.SemiTitleBox>
            <S.SubTitleSub>지역산업 발전을 위해 당신이 필요해요</S.SubTitleSub>
            <S.SubTitleMain>빛고을 직업교육 혁신지구</S.SubTitleMain>
          </S.SemiTitleBox>
          <S.FromLogoContainer>
            <S.GwangjuBox
              onClick={() => router.push('https://www.gwangju.go.kr/main.do')}
            >
              <Image src={GwangjuLogo} alt='광주광역시심볼' />
              <S.BoxText>광주광역시</S.BoxText>
            </S.GwangjuBox>
            <S.OfficeBox>
              <Image src={OfficeLogo} alt='광주광역시교육청심볼' />
              <S.BoxText>광주광역시교육청</S.BoxText>
            </S.OfficeBox>
          </S.FromLogoContainer>
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
            <S.UnionTitle>🏢 지역기업</S.UnionTitle>
            <div>
              <li>기업 연계 교육</li>
              <li>심화교육</li>
              <li>후학습지원</li>
            </div>
          </S.UnionItem>
          <S.UnionItem>
            <S.UnionTitle>🎓 지역대학</S.UnionTitle>
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
          <span>새내기 인재가 토박이 기술 장인으로 성장하는 혁신지구</span>
          <br />
          <span>지역 미래 산업을 선도할 핵심 분야 기술 인재 육성</span>
        </div>
      </S.BannerTitleWrapper>
      <S.SchoolListContainer>
        <S.SemiTitleBox>
          <S.SubTitleSub>직업계고 계열별 학교현황 및 진로</S.SubTitleSub>
          <S.SubTitleMain>직업계고 소개</S.SubTitleMain>
        </S.SemiTitleBox>
      </S.SchoolListContainer>
    </S.HomeWrapper>
  )
}

export default HomePage
