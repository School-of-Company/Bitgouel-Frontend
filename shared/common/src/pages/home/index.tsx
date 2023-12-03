'use client'

import { useEffect, useState } from 'react'
import { Arrow } from '../../assets'
import Bg1 from '../../assets/png/slide1.png'
import Bg2 from '../../assets/png/slide2.png'
import Bg3 from '../../assets/png/slide3.png'
import Bg4 from '../../assets/png/slide4.png'
import OfficeLogo from '../../assets/png/officeEducation.png'
import GwangjuLogo from '../../assets/png/gwangjuLogo.png'
import Banner1 from '../../assets/png/clubListBanner1.png'
import Agency1 from '../../assets/png/agencySymbols/agency1.png'
import Agency2 from '../../assets/png/agencySymbols/agency2.png'
import Agency3 from '../../assets/png/agencySymbols/agency3.png'
import Agency4 from '../../assets/png/agencySymbols/agency4.png'
import { Sequence, SchoolIntro } from '../../components/index'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import * as S from './style'
import { SchoolIntroObjects } from '../../constants'

const HomePage = () => {
  const router = useRouter()
  const [bgNum, setBgNum] = useState(2)
  const imageArr = [Bg1, Bg2, Bg3, Bg4]
  const bannerArr = [Banner1]
  const blueArr = ['500', '400', '300', '200', '100']

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
          <div>새내기 인재가 토박이 기술 장인으로 성장하는 혁신지구</div>
          <div>지역 미래 산업을 선도할 핵심 분야 기술 인재 육성</div>
        </div>
      </S.BannerTitleWrapper>
      <S.SchoolListContainer>
        <S.SemiTitleBox>
          <S.SubTitleSub>직업계고 계열별 학교현황 및 진로</S.SubTitleSub>
          <S.SubTitleMain>직업계고 소개</S.SubTitleMain>
        </S.SemiTitleBox>
        <S.SchoolIntroWrapper>
          <S.SchoolIntroListContainer>
            <S.SchoolIntroListLeftFirst>
              {SchoolIntroObjects.schoolIntroFirst.map((intro, idx) => (
                <SchoolIntro key={idx} item={intro} />
              ))}
            </S.SchoolIntroListLeftFirst>
            <S.SchoolIntroListLeftSecond>
              {SchoolIntroObjects.schoolIntroFirst.map((intro, idx) => (
                <SchoolIntro key={idx} item={intro} />
              ))}
            </S.SchoolIntroListLeftSecond>
          </S.SchoolIntroListContainer>
          <S.SchoolIntroListContainer>
            <S.SchoolIntroListRightFirst>
              {SchoolIntroObjects.schoolIntroSecond.map((intro, idx) => (
                <SchoolIntro key={idx} item={intro} />
              ))}
            </S.SchoolIntroListRightFirst>
            <S.SchoolIntroListRightSecond>
              {SchoolIntroObjects.schoolIntroSecond.map((intro, idx) => (
                <SchoolIntro key={idx} item={intro} />
              ))}
            </S.SchoolIntroListRightSecond>
          </S.SchoolIntroListContainer>
        </S.SchoolIntroWrapper>
      </S.SchoolListContainer>
      <S.ClubListContainer>
        <S.SemiTitleBox>
          <S.SubTitleSub>직업계고 계열별 학교현황 및 진로</S.SubTitleSub>
          <S.SubTitleMain>취업동아리 소개</S.SubTitleMain>
        </S.SemiTitleBox>
        <S.ClubIntroList>
          <S.ClubIntroListWrapper>
            <S.ClubIntro>
              <S.ClubIntroSubTitleWrapper>
                <S.ClubIntroTitle>취동쌤</S.ClubIntroTitle>
                <S.ClubIntroSubTitle>취업동아리 담당교사</S.ClubIntroSubTitle>
                <S.ClubIntroSubTitle>동아리 운영</S.ClubIntroSubTitle>
              </S.ClubIntroSubTitleWrapper>
              <S.ClubIntroText>
                <li>취업동아리 지도교사 멘토</li>
                <li>동아리 학생 선발, 학생관리, 프로그램, 학생지원</li>
                <li>전공기초 방과후 운영, 컨설턴트 멘토 매칭 및 상담지</li>
              </S.ClubIntroText>
            </S.ClubIntro>
            <S.ClubIntro>
              <S.ClubIntroSubTitleWrapper>
                <S.ClubIntroTitle>취업뽀짝쌤</S.ClubIntroTitle>
                <S.ClubIntroSubTitle>취업진로컨설턴트</S.ClubIntroSubTitle>
                <S.ClubIntroSubTitle>1:1 취업진로컨설팅</S.ClubIntroSubTitle>
              </S.ClubIntroSubTitleWrapper>
              <S.ClubIntroText>
                <li>학생 1인당 연간 4회 1:1 취업진로 컨설팅</li>
                <li>심리검사를 통한 맞춤 진로설계</li>
                <li>개인별 맞춤 진로성장 지원 멘토</li>
              </S.ClubIntroText>
            </S.ClubIntro>
            <S.ClubIntro>
              <S.ClubIntroSubTitleWrapper>
                <S.ClubIntroTitle>취동선후배</S.ClubIntroTitle>
                <S.ClubIntroSubTitle>취업동아리 선•후배</S.ClubIntroSubTitle>
                <S.ClubIntroSubTitle>협력 지지 활동</S.ClubIntroSubTitle>
              </S.ClubIntroSubTitleWrapper>
              <S.ClubIntroText>
                <li>학교에서 끌어주고, 밀어주는 또래 멘토</li>
                <li>졸업 후에는 재직자 선배 멘토로 현장 실무 및 비전 지원</li>
                <li>재직 기업 채용 시 동아리 후배 추천</li>
              </S.ClubIntroText>
            </S.ClubIntro>
          </S.ClubIntroListWrapper>
          <S.ClubIntroListWrapper>
            <S.ClubIntro>
              <S.ClubIntroSubTitleWrapper>
                <S.ClubIntroTitle>대학교수</S.ClubIntroTitle>
                <S.ClubIntroSubTitle>
                  현장 실무형 교육 및 멘토
                </S.ClubIntroSubTitle>
              </S.ClubIntroSubTitleWrapper>
              <S.ClubIntroText>
                <li>일학습병행 경로 선이수 학점 운영</li>
                <li>대학 학과체험 프로그램, 채용 연계 지원</li>
                <li>전공 심화 맞춤 교육, 진로 지원 취업 동아리 1:1 멘토</li>
              </S.ClubIntroText>
            </S.ClubIntro>
            <S.ClubIntro>
              <S.ClubIntroSubTitleWrapper>
                <S.ClubIntroTitle>기업 현장 교사</S.ClubIntroTitle>
                <S.ClubIntroSubTitle>
                  기업 맞춤형 교육 및 멘토
                </S.ClubIntroSubTitle>
              </S.ClubIntroSubTitleWrapper>
              <S.ClubIntroText>
                <li>현장중심직무체험, 직무교육운영</li>
                <li>취업경로 학생 취업 연계 지원</li>
                <li>현장 실무 중심 맞춤 지원 및 동아리 1:1 멘토</li>
              </S.ClubIntroText>
            </S.ClubIntro>
            <S.ClubIntro>
              <S.ClubIntroSubTitleWrapper>
                <S.ClubIntroTitle>유관기관 강사</S.ClubIntroTitle>
                <S.ClubIntroSubTitle>
                  현장 실무형 교육 및 멘토
                </S.ClubIntroSubTitle>
              </S.ClubIntroSubTitleWrapper>
              <S.ClubIntroText>
                <li>취업경로 현장 실무형 맞춤 교육 운영</li>
                <li>참여기업 채용 연계 지원</li>
                <li>현장 실무 중심 지원 멘토 활동</li>
              </S.ClubIntroText>
            </S.ClubIntro>
          </S.ClubIntroListWrapper>
        </S.ClubIntroList>
        <S.ClubListWrapper>
          <S.ClubListTitle>핵심 분야 및 취업동아리 목록</S.ClubListTitle>
        </S.ClubListWrapper>
        <S.ClubListBanner url={bannerArr[0]}>
          <S.ClubListContents>
            <S.ClubValueTitle>미래형 운송기기</S.ClubValueTitle>
            <S.ClubMainTextArea>
              <S.ClubLeftTextArea>
                <S.ClubLeftText>광주공업고등학교</S.ClubLeftText>
                <S.ClubLeftText>광주전자공업고등학교</S.ClubLeftText>
                <S.ClubLeftText>금파공업고등학교</S.ClubLeftText>
                <S.ClubLeftText>동일미래과학고등학교</S.ClubLeftText>
                <S.ClubLeftText>숭의과학기술고등학교</S.ClubLeftText>
                <S.ClubLeftText>전남공업고등학교</S.ClubLeftText>
              </S.ClubLeftTextArea>
              <S.ClubRightTextArea>
                <S.ClubRightTextLine>
                  <S.ClubRightText>SMART JOB PROJECT</S.ClubRightText>
                  <S.ClubRightText>
                    나의 미래는 내가 주인공이다!
                  </S.ClubRightText>
                  <S.ClubRightText>설비의 달인</S.ClubRightText>
                  <S.ClubRightText>특수용접 화이팅</S.ClubRightText>
                </S.ClubRightTextLine>
                <S.ClubRightTextLine>
                  <S.ClubRightText>감성기계</S.ClubRightText>
                  <S.ClubRightText>열정 그 자체</S.ClubRightText>
                </S.ClubRightTextLine>
                <S.ClubRightTextLine>
                  <S.ClubRightText>레프리</S.ClubRightText>
                </S.ClubRightTextLine>
                <S.ClubRightTextLine>
                  <S.ClubRightText>놀GO잡GO</S.ClubRightText>
                </S.ClubRightTextLine>
                <S.ClubRightTextLine>
                  <S.ClubRightText>서전트스나이퍼</S.ClubRightText>
                  <S.ClubRightText>카-페인팅</S.ClubRightText>
                </S.ClubRightTextLine>
                <S.ClubRightTextLine>
                  <S.ClubRightText>진짜기계</S.ClubRightText>
                  <S.ClubRightText>핫앤쿨</S.ClubRightText>
                </S.ClubRightTextLine>
              </S.ClubRightTextArea>
            </S.ClubMainTextArea>
          </S.ClubListContents>
        </S.ClubListBanner>
      </S.ClubListContainer>
      <S.UnionUniversityContainer>
        <S.SemiTitleBox>
          <S.SubTitleSub>직업계고 계열별 학교현황 및 진로</S.SubTitleSub>
          <S.SubTitleMain>연계 대학 소개</S.SubTitleMain>
        </S.SemiTitleBox>
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
                기계설기과, 자동화시스템과, 특수전군사학과, 미래자동차과,
                전자과,
                <br />
                하이테크 CAD/CAM과, 호텔조리파티쉐과
              </S.UniversityText>
            </S.UniversityIntro>
            <S.UniversityIntro>
              <S.UniversityName>서영대학교</S.UniversityName>
              <S.UniversityText>
                자동차과, 전기과, 생명공학과, 뷰티미용과, 치위생과,
                E크리에이터과
              </S.UniversityText>
            </S.UniversityIntro>
          </S.UniversityRightArea>
        </S.UnionUniversityList>
      </S.UnionUniversityContainer>
      <S.CompanyIntroContainer>
        <S.SemiTitleBox>
          <S.SubTitleSub>직업계고 계열별 학교현황 및 진로</S.SubTitleSub>
          <S.SubTitleMain>참여 기업 소개</S.SubTitleMain>
        </S.SemiTitleBox>
      </S.CompanyIntroContainer>
      <S.AgencyIntroContainer>
        <S.SemiTitleBox>
          <S.SubTitleSub>혁신지구와 함께하는</S.SubTitleSub>
          <S.SubTitleMain>유관 기관 소개</S.SubTitleMain>
        </S.SemiTitleBox>
        <S.AgencyIntroList>
          <S.AgencyIntroItem>
            <S.AgencyValueName color={blueArr[0]}>
              미래형
              <br />
              운송기기
            </S.AgencyValueName>
            <S.AgencyNameBox>
              <Image src={Agency1} alt='Agency1' />
              <S.AgencyName>(재)광주그린카진흥원</S.AgencyName>
            </S.AgencyNameBox>
          </S.AgencyIntroItem>
          <S.AgencyIntroItem>
            <S.AgencyValueName color={blueArr[1]}>
              에너지
              <br />
              산업
            </S.AgencyValueName>
            <S.AgencyNameBox>
              <Image src={Agency2} alt='Agency2' />
              <S.AgencyName>에너지밸리기업개발원</S.AgencyName>
            </S.AgencyNameBox>
          </S.AgencyIntroItem>
        </S.AgencyIntroList>
        <S.AgencyIntroList>
          <S.AgencyIntroItem>
            <S.AgencyValueName color={blueArr[2]}>
              의료
              <br />
              헬스케어
            </S.AgencyValueName>
            <S.AgencyNameBox>
              <Image src={Agency3} alt='Agency3' />
              <S.AgencyName>(사)한국평생교육연합회</S.AgencyName>
            </S.AgencyNameBox>
          </S.AgencyIntroItem>
          <S.AgencyIntroItem>
            <S.AgencyValueName color={blueArr[3]}>
              AI
              <br />
              융복합
            </S.AgencyValueName>
            <S.AgencyNameBox>
              <Image src={Agency4} alt='Agency4' />
              <S.AgencyName>(사)스마트인재개발원</S.AgencyName>
            </S.AgencyNameBox>
          </S.AgencyIntroItem>
          <S.AgencyIntroItem>
            <S.AgencyValueName color={blueArr[4]}>
              문화
              <br />
              산업
            </S.AgencyValueName>
            <S.AgencyNameBox>
              <S.AgencyName>
                에너지밸리기업개발원
                <br />
                (재)광주정보문화산업진흥원
                <br />
                광주광역시청소년삶디자인센터
                <br />
              </S.AgencyName>
            </S.AgencyNameBox>
          </S.AgencyIntroItem>
        </S.AgencyIntroList>
      </S.AgencyIntroContainer>
    </S.HomeWrapper>
  )
}

export default HomePage
