'use client'

import {
  useGetPostDetail,
  usePatchPostModify,
  usePostPost,
} from '@bitgouel/api'
import {
  AppropriationModal,
  Bg1,
  Link,
  useModal,
  MainStyle,
} from '@bitgouel/common'
import { AppropriationModalProps, LinksObjectTypes, PostCreatePayloadTypes, PostModifyPayloadTypes } from '@bitgouel/types'
import { ChangeEvent, useEffect, useState } from 'react'
import * as S from './style'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

const MAINMAXLENGTH: number = 1000 as const
const TITLEMAXLENGTH: number = 100 as const

const NoticeWritePage = ({ noticeId }: { noticeId?: string }) => {
    const { openModal, closeModal } = useModal()
    const { push } = useRouter()
    const onSuccess = (type: 'write' | 'modify') => {
    closeModal()
    push('/main/post')
    if (type === 'write') toast.success('공지사항을 추가했습니다')
    else toast.success('공지사항을 수정했습니다')
  }
  const onError = (status: number | undefined) =>
    status === 400 && toast.error('유효하지 않은 링크입니다')

  const { mutate: createNotice, isLoading: createPending } = usePostPost({
    onSuccess: () => onSuccess('write'),
    onError: ({ response }) => onError(response?.status)
  })
  const { mutate: modifyNotice, isLoading: modifyPending } = usePatchPostModify(noticeId || '', {
    onSuccess: () => onSuccess('modify'),
    onError: ({ response }) => onError(response?.status)
  })

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

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target
    setNoticeLinks((prevLinks) =>
      prevLinks.map((link) => (link.name === name ? { ...link, value } : link))
    )
  }

  useEffect(() => {
    if (isSuccess && data) {
      setNoticeTitle(data.title)
      setNoticeContent(data.content)
      setNoticeLinks((prev) =>
        prev.map((link, idx) => {
          if (idx < data.links.length)
            return { value: data.links.length, name: link.name }
          else return link
        })
      )
    }
  }, [data])

  const isAble = (): boolean => {
    if (isSuccess && data) {
      if (
        data.title !== noticeTitle ||
        data.content !== noticeContent ||
        JSON.stringify(data?.links) !== JSON.stringify(noticeLinks.map((link) => link.value).filter((link) => link.length))
      )
        return true
      else return false
    } else {
      if (noticeTitle !== '' && noticeContent !== '') return true
      else return false
    }
  }

  const onNotice = () => {
    if (isAble()) {
      const noticePayload: PostCreatePayloadTypes | PostModifyPayloadTypes = {
        title: noticeTitle,
        content: noticeContent,
        links: noticeLinks
          .map((link) => link.value)
          .filter((link) => link !== ''),
      }
      const ModalParameter: AppropriationModalProps = {
        isPending: noticeId ? modifyPending : createPending,
        isApprove: true,
        question: noticeId ? '공지사항을 수정하시겠습니까?' : '공지사항을 추가하시겠습니까?',
        title: noticeTitle || '',
        purpose: noticeId ? '수정하기' : '추가하기',
        onAppropriation: () => noticeId ? modifyNotice(noticePayload) : createNotice({...noticePayload, feedType: 'NOTICE'})
      }

      openModal(
        <AppropriationModal
          isPending={ModalParameter.isPending}
          isApprove={ModalParameter.isApprove}
          question={ModalParameter.question}
          title={ModalParameter.title}
          purpose={ModalParameter.purpose}
          onAppropriation={ModalParameter.onAppropriation}
        />
      )
    } else return
  }

  return (
    <MainStyle.PageWrapper>
      <MainStyle.SlideBg url={Bg1}>
        <MainStyle.BgContainer>
          <MainStyle.PageTitle>
            공지사항 {noticeId ? '수정' : '추가'}
          </MainStyle.PageTitle>
        </MainStyle.BgContainer>
      </MainStyle.SlideBg>
      <MainStyle.MainWrapper>
        <MainStyle.MainContainer>
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
            <S.NoticeButton isAble={isAble()} onClick={onNotice}>
              {noticeId ? '수정하기' : '추가하기'}
            </S.NoticeButton>
          </S.ButtonContainer>
        </MainStyle.MainContainer>
      </MainStyle.MainWrapper>
    </MainStyle.PageWrapper>
  )
}

export default NoticeWritePage
