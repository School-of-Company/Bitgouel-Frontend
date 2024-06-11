'use client'

import * as S from './style'
import { HomeStyle, ClubListSlider } from '@bitgouel/common'

const Section4 = () => {
  return (
    <>
      <S.ClubListContainer>
        <HomeStyle.SemiTitleBox>
          <HomeStyle.SubTitleSub>
            직업계고 계열별 학교현황 및 진로
          </HomeStyle.SubTitleSub>
          <HomeStyle.SubTitleMain>취업동아리 소개</HomeStyle.SubTitleMain>
        </HomeStyle.SemiTitleBox>
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
          <ClubListSlider />
        </S.ClubListWrapper>
      </S.ClubListContainer>
    </>
  )
}

export default Section4
