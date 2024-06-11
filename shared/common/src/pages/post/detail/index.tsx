'use client'

import { TokenManager, useDeletePost, useGetPostDetail } from '@bitgouel/api'
import { AppropriationModal, Bg1, useModal, MainStyle, AuthorityContext } from '@bitgouel/common'
import { RoleEnumTypes } from '@bitgouel/types'
import dayjs from 'dayjs'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useContext, useEffect, useState } from 'react'
import * as S from './style'

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
  const [isRole, setIsRole] = useState<boolean>(false)
  const authority = useContext(AuthorityContext)

  useEffect(() => {
    setIsRole(roleArray.includes(authority))
  }, [])

  return (
    <MainStyle.PageWrapper>
      <MainStyle.SlideBg url={Bg1}>
        <MainStyle.BgContainer>
          <MainStyle.PageTitle>게시글 상세</MainStyle.PageTitle>
        </MainStyle.BgContainer>
      </MainStyle.SlideBg>
      <MainStyle.MainWrapper>
        <MainStyle.MainContainer>
          <S.TitleContainer>
            <S.Title>{data?.title}</S.Title>
            <S.SubTitle>
              <S.NumberBox>
                <S.SubTitleBox>게시일</S.SubTitleBox>
                <span>
                  {dayjs(data?.modifiedAt).format('YYYY년 MM월 DD일')}
                </span>
              </S.NumberBox>
            </S.SubTitle>
          </S.TitleContainer>
          <S.MainText>{data?.content}</S.MainText>
          {data?.links && data.links.length > 0 && (
            <>
              <S.SharedLine />
              <S.LinkTextBox>
                <div>
                  <S.LinkTitle>관련 링크 보기</S.LinkTitle>
                </div>
                <S.LinkWrapper>
                  {data.links.map((link) => (
                    <Link href={link} passHref legacyBehavior>
                      <a target='_blank' rel='noopener noreferrer'>
                        {link}
                      </a>
                    </Link>
                  ))}
                </S.LinkWrapper>
              </S.LinkTextBox>
            </>
          )}
          <S.ButtonWrapper>
            <S.ButtonContainer>
               {isRole && (
                <>
                  <S.DeletePostButton
                    onClick={() =>
                      openModal(
                        <AppropriationModal
                          isApprove={false}
                          question='게시글을 삭제하시겠습니까?'
                          purpose='삭제하기'
                          title={data?.title || ''}
                          onAppropriation={() => mutate()}
                        />
                      )
                    }
                  >
                    삭제하기
                  </S.DeletePostButton>

                  <S.ModifyPostButton
                    onClick={() => push(`/main/post/detail/${postId}/modify`)}
                  >
                    수정하기
                  </S.ModifyPostButton>
                </>
              )}
            </S.ButtonContainer>
          </S.ButtonWrapper>
        </MainStyle.MainContainer>
      </MainStyle.MainWrapper>
    </MainStyle.PageWrapper>
  )
}

export default PostDetailPage
