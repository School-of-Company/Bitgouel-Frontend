'use client'

import { del, useDeletePost, useGetPostDetail } from '@bitgouel/api'
import {
  AppropriationModal,
  AuthorityContext,
  Bg1,
  MainStyle,
  useModal,
} from '@bitgouel/common'
import { RoleEnumTypes } from '@bitgouel/types'
import dayjs from 'dayjs'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useContext } from 'react'
import { LinkTextBox, LinkTitle, LinkWrapper } from '../../detail/style'
import * as S from './style'

const roleArray: RoleEnumTypes[] = [
  'ROLE_ADMIN',
  'ROLE_COMPANY_INSTRUCTOR',
  'ROLE_PROFESSOR',
  'ROLE_GOVERNMENT',
]

const NoticeDetailPage = ({ noticeId }: { noticeId: string }) => {
  const { data } = useGetPostDetail(noticeId)
  const { mutate, isLoading: deletePending } = useDeletePost(
    noticeId,
    '공지사항'
  )
  const { openModal } = useModal()
  const { push } = useRouter()
  const authority = useContext(AuthorityContext)

  const onDelete = () =>
    openModal(
      <AppropriationModal
        isPending={deletePending}
        isApprove={false}
        question='공지사항을 삭제하시겠습니까?'
        purpose='삭제하기'
        title={data?.title || ''}
        onAppropriation={() => mutate()}
      />
    )

  return (
    <MainStyle.PageWrapper>
      <MainStyle.SlideBg url={Bg1}>
        <MainStyle.BgContainer>
          <MainStyle.PageTitle>공지사항 상세</MainStyle.PageTitle>
        </MainStyle.BgContainer>
      </MainStyle.SlideBg>
      <MainStyle.MainWrapper>
        <MainStyle.MainContainer>
          <S.Title>{data?.title}</S.Title>
          <S.SubTitle>
            <S.NumberBox>
              <S.SubTitleBox>게시일</S.SubTitleBox>
              <span>
                {dayjs(data?.modifiedAt).format('YYYY년 MM월 DD일 HH:mm')}
              </span>
            </S.NumberBox>
          </S.SubTitle>
          <S.MainText>{data?.content}</S.MainText>
          {data?.links && data.links.length > 0 && (
            <>
              <S.SharedLine />
              <LinkTextBox>
                <div>
                  <LinkTitle>관련 링크 보기</LinkTitle>
                </div>
                <LinkWrapper>
                  {data.links.map((link) => (
                    <Link href={link} passHref legacyBehavior>
                      <a target='_blank' rel='noopener noreferrer'>
                        {link}
                      </a>
                    </Link>
                  ))}
                </LinkWrapper>
              </LinkTextBox>
            </>
          )}
          <S.ButtonWrapper>
            <S.ButtonContainer>
              {roleArray.includes(authority) && (
                <S.DeleteNoticeButton onClick={onDelete}>
                  삭제하기
                </S.DeleteNoticeButton>
              )}
              <S.ModifyNoticeButton
                onClick={() =>
                  push(`/main/post/notice/detail/${noticeId}/modify`)
                }
              >
                수정하기
              </S.ModifyNoticeButton>
            </S.ButtonContainer>
          </S.ButtonWrapper>
        </MainStyle.MainContainer>
      </MainStyle.MainWrapper>
    </MainStyle.PageWrapper>
  )
}

export default NoticeDetailPage
