'use client'

import { TokenManager, useDeletePost, useGetPostDetail } from '@bitgouel/api'
import {
  AppropriationModal,
  Bg1,
  useModal,
} from '@bitgouel/common'
import { RoleEnumTypes } from '@bitgouel/types'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import * as S from './style'
import dayjs from 'dayjs'

const roleArray: RoleEnumTypes[] = [
  'ROLE_ADMIN',
  'ROLE_COMPANY_INSTRUCTOR',
  'ROLE_PROFESSOR',
  'ROLE_GOVERNMENT',
]

const PostDetailPage = ({ postId }: { postId: string }) => {
  const { mutate } = useDeletePost(postId, '게시글')
  const { openModal } = useModal()
  const { push } = useRouter()
  const { data } = useGetPostDetail(postId)
  const { title, content, links, modifiedAt } = data?.data || {}
  const tokenManager = new TokenManager()
  const [isRole, setIsRole] = useState<boolean>(false)

  useEffect(() => {
    setIsRole(
      tokenManager.authority
        ? roleArray.includes(tokenManager.authority)
        : false
    )
  }, [])

  return (
    <div>
      <S.SlideBg url={Bg1}>
        <S.BgContainer>
          <S.CreateTitle>게시글 상세</S.CreateTitle>
        </S.BgContainer>
      </S.SlideBg>
      <S.DocumentWrapper>
        <S.Document>
          <S.TitleContainer>
            <S.Title>{data?.data.title}</S.Title>
            <S.SubTitle>
              <S.NumberBox>
                <S.SubTitleBox>게시일</S.SubTitleBox>
                <span>{dayjs(modifiedAt).format('YYYY년 MM월 DD일')}</span>
              </S.NumberBox>
            </S.SubTitle>
          </S.TitleContainer>
          <S.MainText>{content}</S.MainText>
          <S.SharedLine />
          <S.LinkTextBox>
            <div>
              <S.LinkTitle>관련 링크 보기</S.LinkTitle>
            </div>
            <S.LinkWrapper>
              {links?.map((link) => (
                <Link href={link} passHref legacyBehavior>
                  <a target='_blank' rel='noopener noreferrer'>
                    {link}
                  </a>
                </Link>
              ))}
            </S.LinkWrapper>
          </S.LinkTextBox>
          <S.ButtonWrapper>
            <S.ButtonContainer>
              {isRole && (
                <S.DeletePostButton
                  onClick={() =>
                    openModal(
                      <AppropriationModal
                        isApprove={false}
                        question='게시글을 삭제하시겠습니까?'
                        purpose='삭제하기'
                        title={title || ''}
                        onAppropriation={() => mutate()}
                      />
                    )
                  }
                >
                  삭제하기
                </S.DeletePostButton>
              )}
              <S.ModifyPostButton
                onClick={() => push(`/main/post/${postId}/modify`)}
              >
                수정하기
              </S.ModifyPostButton>
            </S.ButtonContainer>
          </S.ButtonWrapper>
        </S.Document>
      </S.DocumentWrapper>
    </div>
  )
}

export default PostDetailPage
