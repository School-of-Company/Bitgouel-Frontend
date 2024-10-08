'use client'

import {
  useGetPostDetail,
  usePatchPostModify,
  usePostPost,
} from '@bitgouel/api'
import {
  AppropriationModal,
  AuthorityContext,
  Bg1,
  Link,
  MainStyle,
  PrivateRouter,
  useModal,
} from '@bitgouel/common'
import { AppropriationModalProps, LinksObjectTypes, PostPayloadTypes, RoleEnumTypes } from '@bitgouel/types'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import * as S from './style'

const MAIN_MAX_LENGTH: number = 1000 as const
const TITLE_MAX_LENGTH: number = 100 as const

const roleArray: RoleEnumTypes[] = [
  'ROLE_ADMIN',
  'ROLE_PROFESSOR',
  'ROLE_COMPANY_INSTRUCTOR',
  'ROLE_GOVERNMENT'
]

const PostWritePage = ({ postId }: { postId?: string }) => {
  const { openModal, closeModal } = useModal()
  const { push } = useRouter()

  const onSuccess = (type: 'write' | 'modify') => {
    closeModal()
    push('/main/post')
    if (type === 'write') toast.success('게시글을 추가했습니다')
    else toast.success('게시글을 수정했습니다')
  }
  const onError = (status: number | undefined) =>
    status === 400 && toast.error('유효하지 않은 링크입니다')

  const { mutate: createPost } = usePostPost({
    onSuccess: () => onSuccess('write'),
    onError: ({ response }) => onError(response?.status)
  })
  const { mutate: modifyPost } = usePatchPostModify(
    postId || '',
    {
      onSuccess: () => onSuccess('modify'),
      onError: ({ response }) => onError(response?.status)
    }
  )
  const [postTitle, setPostTitle] = useState<string>('')
  const [postContent, setPostContent] = useState<string>('')
  const [postLinks, setPostLinks] = useState<LinksObjectTypes[] | string[]>([
    { value: '', name: 'link1' },
    { value: '', name: 'link2' },
    { value: '', name: 'link3' },
    { value: '', name: 'link4' },
  ])
  const { data, isSuccess } = useGetPostDetail(postId || '', {
    enabled: !!postId,
  })
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target
    setPostLinks((prevLinks) =>
      prevLinks.map((link) => (link.name === name ? { ...link, value } : link))
    )
  }

  useEffect(() => {
    if (isSuccess && data) {
      setPostTitle(data.title)
      setPostContent(data.content)
      setPostLinks((prev) =>
        prev.map((link, idx) => {
          if (idx < data.links.length)
            return { value: data.links[idx], name: link.name }
          else return link
        })
      )
    }
  }, [data])

  const isAble = (): boolean => {
    if (isSuccess && data) {
      if (
        data.title !== postTitle ||
        data.content !== postContent ||
        JSON.stringify(data?.links) !== JSON.stringify(postLinks.map((link) => link.value).filter((link) => link.length))
      )
        return true
      else return false
    } else {
      if (postTitle !== '' && postContent !== '') return true
      else return false
    }
  }

 const onPost = () => {
    if (isAble()) {
      const postPayload: Omit<PostPayloadTypes,'feedType'>  = {
        title: postTitle,
        content: postContent,
        links: postLinks
          .map((link) => link.value)
          .filter((link) => link !== ''),
      }
      const ModalParameter: AppropriationModalProps = {
        isApprove: true,
        question: postId ? '게시글을 수정하시겠습니까?' : '게시글을 추가하시겠습니까?',
        title: postId || '',
        purpose: postId ? '수정하기' : '추가하기',
        onAppropriation: (callbacks) => postId ? modifyPost(postPayload, callbacks) : createPost({...postPayload, feedType: 'EMPLOYMENT'}, callbacks)
      }

      openModal(
        <AppropriationModal
          isApprove={ModalParameter.isApprove}
          question={ModalParameter.question}
          title={ModalParameter.title}
          purpose={ModalParameter.purpose}
          onAppropriation={ModalParameter.onAppropriation}
        />
      )
    } else return
  }

  const authority = useContext(AuthorityContext)

  return (
    <PrivateRouter isRedirect={!roleArray.includes(authority as RoleEnumTypes)}>
      <MainStyle.PageWrapper>
        <MainStyle.SlideBg url={Bg1}>
          <MainStyle.BgContainer>
            <MainStyle.PageTitle>
              게시글 {postId ? '수정' : '추가'}
            </MainStyle.PageTitle>
          </MainStyle.BgContainer>
        </MainStyle.SlideBg>
        <MainStyle.MainWrapper>
          <MainStyle.MainContainer>
            <S.InputTitle
              type='text'
              value={postTitle}
              maxLength={TITLE_MAX_LENGTH}
              placeholder='게시글 제목 (100자 이내)'
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPostTitle(e.target.value)
              }
            />
            <S.InputMainText
              value={postContent}
              maxLength={MAIN_MAX_LENGTH}
              placeholder='본문 입력 (1000자 이내)'
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                setPostContent(e.target.value)
              }
            />
            <S.PostSetting>
              <S.SettingTitle>게시글 세부 설정</S.SettingTitle>
              <S.SettingSelectionContainer>
                {postLinks?.map((link, idx) => (
                  <S.SettingForm key={idx}>
                    <Link />
                    <S.SettingInput
                      type='text'
                      value={link?.value}
                      onChange={onChange}
                      placeholder='링크 입력(선택)'
                      name={link?.name}
                    />
                  </S.SettingForm>
                ))}
              </S.SettingSelectionContainer>
            </S.PostSetting>
            <S.ButtonContainer>
              <S.PostButton isAble={isAble()} onClick={onPost}>
                {postId ? '수정하기' : '추가하기'}
              </S.PostButton>
            </S.ButtonContainer>
          </MainStyle.MainContainer>
        </MainStyle.MainWrapper>
      </MainStyle.PageWrapper>
    </PrivateRouter>
  )
}

export default PostWritePage
