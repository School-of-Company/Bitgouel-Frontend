'use client'

import * as S from './style'
import Bg1 from '@bitgouel/common/src/assets/png/mainBg1.png'
import { Link } from '@bitgouel/common'
import { ChangeEvent, useState } from 'react'

const NotificationCreatePage = () => {
  const MAXLENGTH: number = 1000 as const
  const [links, setLinks] = useState<
    { showValue: string; value: string; name: string }[]
  >([
    { showValue: '', name: 'link1', value: '' },
    { showValue: '', name: 'link2', value: '' },
    { showValue: '', name: 'link3', value: '' },
    { showValue: '', name: 'link4', value: '' },
  ])

  const [notificationTitle, setNotificationTitle] = useState<string>('')
  const [notificationContent, setNotificationContent] = useState<string>('')

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target

    const slicedValue = value.length > 31 ? `${value.slice(0, 32)}...` : value

    setLinks((prevLinks) =>
      prevLinks.map((link) =>
        link.name === name ? { ...link, value, showValue: slicedValue } : link
      )
    )
  }

  const saveNotificationTitle = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNotificationTitle(event.target.value)
  }

  const saveNotificationMainText = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setNotificationContent(event.target.value)
  }

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
            type='text'
            value={notificationTitle}
            maxLength={100}
            placeholder='공지글 제목 (100자 이내)'
            onChange={saveNotificationTitle}
          />
          <S.InputMainText
            value={notificationContent}
            maxLength={MAXLENGTH}
            placeholder='공지글 내용 작성 (1000자 이내)'
            onChange={saveNotificationMainText}
          />
          <S.PostSetting>
            <S.SettingTitle>공지글 세부 설정</S.SettingTitle>
            <S.SettingSelectionContainer>
              {links.map((link, idx) => (
                <S.SettingForm key={idx}>
                  <Link />
                  <S.SettingInput
                    type='text'
                    placeholder='링크 입력(선택)'
                    value={link.showValue}
                    name={link.name}
                    onChange={onChange}
                  />
                </S.SettingForm>
              ))}
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

export default NotificationCreatePage
