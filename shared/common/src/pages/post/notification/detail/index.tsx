'use client'

import { useDeletePost, useGetPostDetail } from '@bitgouel/api'
import { RoleEnumTypes } from '@bitgouel/types'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Bg1 } from '../../../../assets'
import { useModal } from '../../../../hooks'
import { RejectModal } from '../../../../modals'
import * as S from './style'

const NoticeDetailPage = ({ noticeId }: { noticeId: string }) => {
  const { data } = useGetPostDetail(noticeId)
  const { mutate } = useDeletePost(noticeId, '공지사항')
  const { openModal } = useModal()
  const { push } = useRouter()
  const role = localStorage.getItem("Authority") as RoleEnumTypes

  return (
    <div>
      <S.SlideBg url={Bg1}>
        <S.BgContainer>
          <S.ClubTitle>공지사항 상세</S.ClubTitle>
        </S.BgContainer>
      </S.SlideBg>
      <S.DocumentWrapper>
        <S.Document>
          <S.TitleContainer>
            <S.Title>{data?.data.title}</S.Title>
            <S.SubTitle>
              <S.NumberBox>
                <S.SubTitleBox>게시일</S.SubTitleBox>
                <span>{data?.data.modifiedAt}</span>
              </S.NumberBox>
            </S.SubTitle>
          </S.TitleContainer>
          <S.MainText>{data?.data.content}</S.MainText>
          <S.SharedLine />
          <S.LinkTextBox>
            <div>
              <S.LinkTitle>관련 링크 보기</S.LinkTitle>
            </div>
            <S.LinkWrapper>
              {data?.data.links.map((link) => (
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
              {role === 'ROLE_ADMIN' ||
                role === 'ROLE_COMPANY_INSTRUCTOR' ||
                role === 'ROLE_PROFESSOR' ||
                (role === 'ROLE_GOVERNMENT' && (
                  <S.DeleteNoticeButton
                    onClick={() =>
                      openModal(
                        <RejectModal
                          type='공지사항'
                          title={data?.data.title}
                          onAppropriation={() => mutate()}
                        />
                      )
                    }
                  >
                    삭제하기
                  </S.DeleteNoticeButton>
                ))}
              <S.ModifyNoticeButton
                onClick={() =>
                  push(`/main/post/notification/modify/${noticeId}`)
                }
              >
                수정하기
              </S.ModifyNoticeButton>
            </S.ButtonContainer>
          </S.ButtonWrapper>
        </S.Document>
      </S.DocumentWrapper>
    </div>
  )
}

export default NoticeDetailPage
