'use client'

import * as S from './style'
import Bg1 from '@bitgouel/common/src/assets/png/mainBg1.png'
import { Link } from '@bitgouel/common'

const LectureCreatePage = () => {
  const MAXLENGTH: number = 1000 as const

  return (
    <div>
      <S.SlideBg url={Bg1}>
        <S.BgContainer>
          <S.CreateTitle>공지글 추가</S.CreateTitle>
        </S.BgContainer>
      </S.SlideBg>
      <S.DocumentInputContainer>
        <S.DocumentInput>
          <S.InputTitle
            maxLength={100}
            placeholder='공지글 제목 (100자 이내)'
          />
          <S.InputMainText
            maxLength={MAXLENGTH}
            placeholder='공지글 내용 작성 (1000자 이내)'
          />
          <S.PostSetting>
            <S.SettingTitle>공지글 세부 설정</S.SettingTitle>
            <S.SettingSelectionContainer>
              <S.SettingForm>
                <Link />
                <S.SettingInput placeholder='링크 입력(선택)' />
              </S.SettingForm>
              <S.SettingForm>
                <Link />
                <S.SettingInput placeholder='링크 입력(선택)' />
              </S.SettingForm>
              <S.SettingForm>
                <Link />
                <S.SettingInput placeholder='링크 입력(선택)' />
              </S.SettingForm>
              <S.SettingForm>
                <Link />
                <S.SettingInput placeholder='링크 입력(선택)' />
              </S.SettingForm>
            </S.SettingSelectionContainer>
          </S.PostSetting>
          <S.ButtonContainer>
            <S.CreateButton>공지 추가하기</S.CreateButton>
          </S.ButtonContainer>
        </S.DocumentInput>
      </S.DocumentInputContainer>
    </div>
  )
}

export default LectureCreatePage
