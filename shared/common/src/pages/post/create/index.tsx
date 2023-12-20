'use client'

import * as S from './style'
import Bg1 from '../../../assets/png/mainBg1.png'
import { Link } from '../../../assets'
import { ChangeEvent, useState } from 'react'

const PostCreatePage = () => {
  const MAXLENGTH: number = 1000 as const

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

  const [postTitle, setPostTitle] = useState<string>('')
  const [postContent, setPostContent] = useState<string>('')

  const savePostTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPostTitle(event.target.value)
  }

  const savePostMainText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPostContent(event.target.value)
  }

  return (
    <div>
      <S.SlideBg url={Bg1}>
        <S.BgContainer>
          <S.CreateTitle>게시글 추가</S.CreateTitle>
        </S.BgContainer>
      </S.SlideBg>
      <S.DocumentInputContainer>
        <S.DocumentInput>
          <S.InputTitle
            value={postTitle}
            maxLength={100}
            placeholder='게시글 제목 (100자 이내)'
            onChange={savePostTitle}
          />
          <S.InputMainText
            value={postContent}
            maxLength={MAXLENGTH}
            placeholder='게시글 내용 작성 (1000자 이내)'
            onChange={savePostMainText}
          />
          <S.PostSetting>
            <S.SettingTitle>게시글 세부 설정</S.SettingTitle>
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
            <S.CreateButton>게시글 추가하기</S.CreateButton>
          </S.ButtonContainer>
        </S.DocumentInput>
      </S.DocumentInputContainer>
    </div>
  )
}

export default PostCreatePage
