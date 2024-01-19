'use client'

import { useGetPostDetail, usePatchPostModify } from '@bitgouel/api'
import { ChangeEvent, useEffect, useState } from 'react'
import { Bg1, Link } from '../../../assets'
import { useModal } from '../../../hooks'
import { CreateModal } from '../../../modals'
import * as S from './style'

interface LinksObjectTypes {
  showValue: string
  value: string
  name: string
}

const PostModifyPage = ({ postId }: { postId: string }) => {
  const MAXLENGTH: number = 1000 as const
  const { mutate } = usePatchPostModify(postId)
  const { data } = useGetPostDetail(postId)

  const initialData = {
    title: data?.data.title,
    content: data?.data.content,
    links: data?.data.links,
  }

  const [postModifyTitle, setPostModifyTitle] = useState<string | undefined>(
    data?.data.title
  )
  const [postModifyContent, setPostModifyContent] = useState<
    string | undefined
  >(data?.data.content)

  const [postModifyLinks, setPostModifyLinks] = useState<
    LinksObjectTypes[] | string[]
  >(
    data?.data.links
      ? data.data.links.map((link, idx) => ({
          showValue: link.length > 31 ? `${link.slice(0, 32)}...` : link,
          value: link,
          name: `link${idx + 1}`,
        }))
      : []
  )

  const { openModal } = useModal()
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target

    const slicedValue = value.length > 31 ? `${value.slice(0, 32)}...` : value

    setPostModifyLinks((prevLinks) =>
      prevLinks.map((link) =>
        link.name === name ? { ...link, value, showValue: slicedValue } : link
      )
    )
  }

  const onModify = () => {
    mutate({
      title: postModifyTitle,
      content: postModifyContent,
      links: postModifyLinks.map((link) => link.value),
    })
  }

  const onModifyModal = () => {
    if (
      initialData.title !== postModifyTitle ||
      initialData.content !== postModifyContent ||
      initialData.links !== postModifyLinks
    ) {
      openModal(
        <CreateModal
          question='게시글을 수정하시겠습니까?'
          title={postModifyTitle}
          onCreate={onModify}
          createText='수정하기'
        />
      )
    }
  }

  useEffect(() => {
    if (data) {
      setPostModifyTitle(data?.data.title)
      setPostModifyContent(data?.data.content)
      setPostModifyLinks(data?.data.links)
    }
  }, [data])

  return (
    <div>
      <S.SlideBg url={Bg1}>
        <S.BgContainer>
          <S.CreateTitle>게시글 수정</S.CreateTitle>
        </S.BgContainer>
      </S.SlideBg>
      <S.DocumentInputContainer>
        <S.DocumentInput>
          <S.InputTitle
            value={postModifyTitle}
            maxLength={100}
            placeholder='게시글 제목 (100자 이내)'
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPostModifyTitle(e.target.value)
            }
          />
          <S.InputMainText
            value={postModifyContent}
            maxLength={MAXLENGTH}
            placeholder='본문 입력 (1000자 이내)'
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setPostModifyContent(e.target.value)
            }
          />
          <S.PostSetting>
            <S.SettingTitle>게시글 세부 설정</S.SettingTitle>
            <S.SettingSelectionContainer>
              {postModifyLinks?.map((link, idx) => (
                <S.SettingForm key={idx}>
                  <Link />
                  <S.SettingInput
                    type='text'
                    placeholder='링크 입력(선택)'
                    value={link?.showValue}
                    name={link?.name}
                    onChange={onChange}
                  />
                </S.SettingForm>
              ))}
            </S.SettingSelectionContainer>
          </S.PostSetting>
          <S.ButtonContainer>
            <S.ModifyButton
              isAble={
                initialData.title !== postModifyTitle ||
                initialData.content !== postModifyContent ||
                initialData.links !== postModifyLinks
              }
              onClick={onModifyModal}
            >
              게시글 수정하기
            </S.ModifyButton>
          </S.ButtonContainer>
        </S.DocumentInput>
      </S.DocumentInputContainer>
    </div>
  )
}

export default PostModifyPage
