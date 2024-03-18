'use client'

import { usePostPost } from '@bitgouel/api'
import { AppropriationModal, Bg1, Link, useModal } from '@bitgouel/common'
import { ChangeEvent, useState } from 'react'
import * as S from './style'

const NoticeCreatePage = () => {
  const MAXLENGTH: number = 1000 as const
  const { openModal } = useModal()

  const [links, setLinks] = useState<
    { showValue: string; value: string; name: string }[]
  >([
    { showValue: '', name: 'link1', value: '' },
    { showValue: '', name: 'link2', value: '' },
    { showValue: '', name: 'link3', value: '' },
    { showValue: '', name: 'link4', value: '' },
  ])

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target

    const slicedValue = value.length > 31 ? `${value.slice(0, 32)}...` : value

    setLinks((prevLinks) =>
      prevLinks.map((link) =>
        link.name === name ? { ...link, value, showValue: slicedValue } : link
      )
    )
  }

  const [noticeTitle, setNoticeTitle] = useState<string>('')
  const [noticeContent, setNoticeContent] = useState<string>('')
  const { mutate } = usePostPost('공지')

  const saveNoticeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setNoticeTitle(event.target.value)
  }

  const saveNoticeMainText = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setNoticeContent(event.target.value)
  }

  const onCreateModal = () => {
    if (noticeTitle !== '' && noticeContent !== '') {
      openModal(
        <AppropriationModal
          isApprove={true}
          question='공지사항을 추가하시겠습니까?'
          title={noticeTitle}
          purpose='추가하기'
          onAppropriation={() =>
            mutate({
              title: noticeTitle,
              content: noticeContent,
              links: links
                .filter((link) => link.value.length !== 0)
                .map((link) => link.value),
              feedType: 'NOTICE',
            })
          }
        />
      )
    } else return
  }

  return (
    <div>
      <S.SlideBg url={Bg1}>
        <S.BgContainer>
          <S.CreateTitle>공지사항 추가</S.CreateTitle>
        </S.BgContainer>
      </S.SlideBg>
      <S.DocumentInputContainer>
        <S.DocumentInput>
          <S.InputTitle
            value={noticeTitle}
            maxLength={100}
            placeholder='공지사항 제목 (100자 이내)'
            onChange={saveNoticeTitle}
          />
          <S.InputMainText
            value={noticeContent}
            maxLength={MAXLENGTH}
            placeholder='본문 입력 (1000자 이내)'
            onChange={saveNoticeMainText}
          />
          <S.NoticeSetting>
            <S.SettingTitle>공지사항 세부 설정</S.SettingTitle>
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
          </S.NoticeSetting>
          <S.ButtonContainer>
            <S.CreateButton
              isAble={noticeTitle !== '' && noticeContent !== ''}
              onClick={onCreateModal}
            >
              공지사항 추가하기
            </S.CreateButton>
          </S.ButtonContainer>
        </S.DocumentInput>
      </S.DocumentInputContainer>
    </div>
  )
}

export default NoticeCreatePage
