'use client'

import * as S from './style'
import { Bg1 } from '../../../../assets'
import Link from 'next/link'
import { useDeletePost, useGetPostDetail } from '@bitgouel/api'
import { RejectModal } from '../../../../modals'
import { useRouter } from 'next/navigation'
import { useModal } from '../../../../hooks'
import { useRecoilValue } from 'recoil'
import { Role } from '../../../../atoms'
import { sliceDate } from '../../../../utils'

const NoticeDetailPage = ({ noticeId }: { noticeId: string }) => {
  const { data } = useGetPostDetail(noticeId)
  const { title, content, modifiedAt, links } = data?.data || {}
  const { mutate } = useDeletePost(noticeId, '공지사항')
  const { openModal } = useModal()
  const { push } = useRouter()
  const role = useRecoilValue(Role)

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
            <S.Title>{title}</S.Title>
            <S.SubTitle>
              <S.NumberBox>
                <S.SubTitleBox>게시일</S.SubTitleBox>
                <span>{sliceDate(modifiedAt)}</span>
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
              {role === 'ROLE_ADMIN' ||
                role === 'ROLE_COMPANY_INSTRUCTOR' ||
                role === 'ROLE_PROFESSOR' ||
                (role === 'ROLE_GOVERNMENT' && (
                  <S.DeleteNoticeButton
                    onClick={() =>
                      openModal(
                        <RejectModal
                          type='공지사항'
                          title={title}
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
