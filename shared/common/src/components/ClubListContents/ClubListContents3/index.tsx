'use client'

import * as S from './style'
import listBanner3 from '../../../assets/png/listBanner3.png'

const ClubListContents3 = () => {
  return (
    <S.ClubListBanner url={listBanner3}>
      <S.ClubListContents>
        <S.ClubValueTitle>의료•헬스케어</S.ClubValueTitle>
        <S.ClubMainTextArea>
          <S.ClubLeftTextArea>
            <S.ClubLeftText>광주전자공업고등학교</S.ClubLeftText>
            <S.ClubLeftText>금파공업고등학교</S.ClubLeftText>
            <S.ClubLeftText>동일미래과학고등학교</S.ClubLeftText>
            <S.ClubLeftText>송원여자상업고등학교</S.ClubLeftText>
            <S.ClubLeftText>숭의과학기술고등학교</S.ClubLeftText>
            <S.ClubLeftText>전남공업고등학교</S.ClubLeftText>
          </S.ClubLeftTextArea>
          <S.ClubRightTextArea>
            <S.ClubRightTextLine>
              <S.ClubRightText>발자국</S.ClubRightText>
            </S.ClubRightTextLine>
            <S.ClubRightTextLine>
              <S.ClubRightText>어썸(awescome)</S.ClubRightText>
            </S.ClubRightTextLine>
            <S.ClubRightTextLine>
              <S.ClubRightText>따고잡고</S.ClubRightText>
              <S.ClubRightText>쓰고잡고</S.ClubRightText>
              <S.ClubRightText>하고잡고</S.ClubRightText>
            </S.ClubRightTextLine>
            <S.ClubRightTextLine>
              <S.ClubRightText>건강지킴이</S.ClubRightText>
              <S.ClubRightText>미용서비스</S.ClubRightText>
              <S.ClubRightText>뷰티아트</S.ClubRightText>
            </S.ClubRightTextLine>
            <S.ClubRightTextLine>
              <S.ClubRightText>크로스핏마스터</S.ClubRightText>
            </S.ClubRightTextLine>
            <S.ClubRightTextLine>
              <S.ClubRightText>라온하제</S.ClubRightText>
            </S.ClubRightTextLine>
          </S.ClubRightTextArea>
        </S.ClubMainTextArea>
      </S.ClubListContents>
    </S.ClubListBanner>
  )
}

export default ClubListContents3
