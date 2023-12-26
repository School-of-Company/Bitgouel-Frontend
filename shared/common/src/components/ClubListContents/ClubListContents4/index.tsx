'use client'

import * as S from '../style'
import listBanner4 from '../../../assets/png/listBanner4.png'

const ClubListContents4 = () => {
  return (
    <S.ClubListBanner url={listBanner4}>
      <S.ClubListContents>
        <S.ClubValueTitle>AI 융•복합</S.ClubValueTitle>
        <S.ClubMainTextArea>
          <S.ClubLeftTextArea>
            <S.ClubLeftText>광주공업고등학교</S.ClubLeftText>
            <S.ClubLeftText>광주소프트웨어마이스터고등학교</S.ClubLeftText>
            <S.ClubLeftText>금파공업고등학교</S.ClubLeftText>
            <S.ClubLeftText>숭의과학기술고등학교</S.ClubLeftText>
            <S.ClubLeftText>전남공업고등학교</S.ClubLeftText>
          </S.ClubLeftTextArea>
          <S.ClubRightTextArea>
            <S.ClubRightTextLine>
              <S.ClubRightText>Civil 마스터</S.ClubRightText>
            </S.ClubRightTextLine>
            <S.ClubRightTextLine>
              <S.ClubRightText>dev_GSM</S.ClubRightText>
            </S.ClubRightTextLine>
            <S.ClubRightTextLine>
              <S.ClubRightText>다이나믹(Dynamic)</S.ClubRightText>
            </S.ClubRightTextLine>
            <S.ClubRightTextLine>
              <S.ClubRightText>비상</S.ClubRightText>
              <S.ClubRightText>캐치어드론</S.ClubRightText>
            </S.ClubRightTextLine>
            <S.ClubRightTextLine>
              <S.ClubRightText>스카이드론</S.ClubRightText>
            </S.ClubRightTextLine>
          </S.ClubRightTextArea>
        </S.ClubMainTextArea>
      </S.ClubListContents>
    </S.ClubListBanner>
  )
}

export default ClubListContents4
