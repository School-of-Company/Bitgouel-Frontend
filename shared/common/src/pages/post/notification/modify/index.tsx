'use client'

import { useGetPostDetail, usePatchPostModify } from '@bitgouel/api'
import { PostModifyPayloadTypes } from '@bitgouel/types'
import { ChangeEvent, useEffect, useState } from 'react'
import { Link } from '../../../../assets'
import Bg1 from '../../../assets/png/mainBg1.png'
import * as S from './style'

const NoticeModifyPage = ({ postId }: { postId: string }) => {
  const MAXLENGTH: number = 1000 as const
  const { mutate } = usePatchPostModify(postId)
  const { data } = useGetPostDetail(postId, { staleTime: 0 })

  const [noticeModifyData, setNoticeModifyData] =
    useState<PostModifyPayloadTypes>(data?.data)
  const [noticeModifyTitle, setNoticeModifyTitle] = useState<string>(
    noticeModifyData?.title
  )
  const [noticeModifyContent, setNoticeModifyContent] = useState<string>(
    noticeModifyData?.content
  )
  const [modifyLinks, setModifyLinks] = useState<any[]>([
    noticeModifyData?.links.map((link, idx) => {
      return {
        showValue: link.length > 31 ? `${link.slice(0, 32)}...` : link,
        value: link,
        name: `link${idx + 1}`,
      }
    }),
  ])

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target

    const slicedValue = value.length > 31 ? `${value.slice(0, 32)}...` : value

    setModifyLinks((prevLinks) =>
      prevLinks.map((link) =>
        link.name === name ? { ...link, value, showValue: slicedValue } : link
      )
    )
  }

  const changeNoticeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNoticeModifyTitle(event.target.value)
  }

  const changeNoticeContent = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setNoticeModifyContent(event.target.value)
  }

  useEffect(() => {
    setNoticeModifyData(data?.data)
  }, [data])

  return (
    <div>
      <S.SlideBg url={Bg1}>
        <S.BgContainer>
          <S.CreateTitle>공지사항 수정</S.CreateTitle>
        </S.BgContainer>
      </S.SlideBg>
      <S.DocumentInputContainer>
        <S.DocumentInput>
          <S.InputTitle
            value={noticeModifyTitle}
            maxLength={100}
            placeholder='공지사항 제목 (100자 이내)'
            onChange={changeNoticeTitle}
          />
          <S.InputMainText
            value={noticeModifyContent}
            maxLength={MAXLENGTH}
            placeholder='공지사항 내용 작성 (1000자 이내)'
            onChange={changeNoticeContent}
          />
          <S.PostSetting>
            <S.SettingTitle>공지사항 세부 설정</S.SettingTitle>
            <S.SettingSelectionContainer>
              {modifyLinks?.map((link, idx) => (
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
            <S.CreateButton
              onClick={() =>
                mutate({
                  title: noticeModifyTitle,
                  content: noticeModifyContent,
                  links: modifyLinks.map((link) => link.value),
                })
              }
            >
              공지사항 추가하기
            </S.CreateButton>
          </S.ButtonContainer>
        </S.DocumentInput>
      </S.DocumentInputContainer>
    </div>
  )
}

export default NoticeModifyPage
