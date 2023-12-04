'use client'

import * as S from './style'
import Banner2 from '../../../assets/png/clubListBanner2.png'

const ClubListContents1 = () => {
  return (
    <S.ClubListBanner url={Banner2}>
      <S.ClubListContents>
        <S.ClubValueTitle>에너지산업</S.ClubValueTitle>
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
              <S.ClubRightText>나의 미래는 내가 주인공이다!</S.ClubRightText>
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
  )
}

export default ClubListContents1
