'use client'

import {
  useGetPostDetail,
  usePatchPostModify,
  usePostPost,
} from '@bitgouel/api'
import { AppropriationModal, Bg1, Link, useModal } from '@bitgouel/common'
import { LinksObjectTypes } from '@bitgouel/types'
import { ChangeEvent, useEffect, useState } from 'react'
import * as S from './style'

const MAINMAXLENGTH: number = 1000 as const
const TITLEMAXLENGTH: number = 100 as const

const NoticeWritePage = ({ noticeId }: { noticeId?: string }) => {
  const { mutate: createNotice } = usePostPost('공지')
  const { mutate: modifyNotice } = usePatchPostModify(noticeId || '', '공지')
  const [noticeTitle, setNoticeTitle] = useState<string>('')
  const [noticeContent, setNoticeContent] = useState<string>('')
  const [noticeLinks, setNoticeLinks] = useState<LinksObjectTypes[] | string[]>(
    [
      { value: '', name: 'link1' },
      { value: '', name: 'link2' },
      { value: '', name: 'link3' },
      { value: '', name: 'link4' },
    ]
  )
  const { data, isSuccess } = useGetPostDetail(noticeId, {
    enabled: !!noticeId,
  })
  const { title, content, links } = data?.data || {}

  const { openModal } = useModal()
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target
    setNoticeLinks((prevLinks) =>
      prevLinks.map((link) => (link.name === name ? { ...link, value } : link))
    )
  }

  useEffect(() => {
    if (data) {
      setNoticeTitle(title)
      setNoticeContent(content)
      setNoticeLinks((prev) =>
        prev.map((link, idx) => {
          if (idx < data?.data.links.length)
            return { value: data?.data.links.length, name: link.name }
          else return link
        })
      )
    }
  }, [data])

  const isCondition = (): boolean => {
    if (isSuccess) {
      if (
        title !== noticeTitle ||
        content !== noticeContent ||
        links?.some((link, i) => link !== noticeLinks[i]['value'])
      )
        return true
      else return false
    } else {
      if (noticeTitle !== '' && noticeContent !== '') return true
      else return false
    }
  }

  const onPost = () => {
    if (isCondition()) {
      if (noticeId) {
        openModal(
          <AppropriationModal
            isApprove={true}
            question='공지사항을 수정하시겠습니까?'
            title={noticeTitle || ''}
            purpose='수정하기'
            onAppropriation={() =>
              modifyNotice({
                title: noticeTitle,
                content: noticeContent,
                links: noticeLinks
                  .map((link) => link.value)
                  .filter((link) => link !== ''),
              })
            }
          />
        )
      } else {
        openModal(
          <AppropriationModal
            isApprove={true}
            question='공지사항을 추가하시겠습니까?'
            title={noticeTitle || ''}
            purpose='추가하기'
            onAppropriation={() =>
              createNotice({
                title: noticeTitle,
                content: noticeContent,
                links: noticeLinks
                  .map((link) => link.value)
                  .filter((link) => link !== ''),
                feedType: 'NOTICE',
              })
            }
          />
        )
      }
    } else return
  }

  return (
    <div>
      <S.SlideBg url={Bg1}>
        <S.BgContainer>
          <S.CreateTitle>공지사항 {noticeId ? '수정' : '추가'}</S.CreateTitle>
        </S.BgContainer>
      </S.SlideBg>
      <S.DocumentInputContainer>
        <S.DocumentInput>
          <S.InputTitle
            value={noticeTitle}
            maxLength={TITLEMAXLENGTH}
            placeholder='공지사항 제목 (100자 이내)'
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setNoticeTitle(e.target.value)
            }
          />
          <S.InputMainText
            value={noticeContent}
            maxLength={MAINMAXLENGTH}
            placeholder='본문 입력 (1000자 이내)'
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setNoticeContent(e.target.value)
            }
          />
          <S.NoticeSetting>
            <S.SettingTitle>공지사항 세부 설정</S.SettingTitle>
            <S.SettingSelectionContainer>
              {noticeLinks?.map((link, idx) => (
                <S.SettingForm key={idx}>
                  <Link />
                  <S.SettingInput
                    value={link?.value}
                    type='text'
                    placeholder='링크 입력(선택)'
                    name={link?.name}
                    onChange={onChange}
                  />
                </S.SettingForm>
              ))}
            </S.SettingSelectionContainer>
          </S.NoticeSetting>
          <S.ButtonContainer>
            <S.NoticeButton isAble={isCondition()} onClick={onPost}>
              {noticeId ? '수정완료' : '공지사항 추가하기'}
            </S.NoticeButton>
          </S.ButtonContainer>
        </S.DocumentInput>
      </S.DocumentInputContainer>
    </div>
  )
}

export default NoticeWritePage
