'use client'

import { RejectModal } from '../../../modals'
import { useDeletePost, useGetPostDetail } from '@bitgouel/api'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Bg1 from '../../../assets/png/mainBg1.png'
import { useModal } from '../../../hooks'
import * as S from './style'
import { useRecoilValue } from 'recoil'
import { Role } from '../../../atoms'

const PostDetailPage = ({ postId }: { postId: string }) => {
  const { data } = useGetPostDetail(postId)
  const { mutate } = useDeletePost(postId, '게시글')
  const { openModal } = useModal()
  const { push } = useRouter()
  const role = useRecoilValue(Role)

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
                <span>{`${data?.data.modifiedAt.slice(
                    0,
                    4
                  )}년 ${data?.data.modifiedAt.slice(
                    5,
                    7
                  )}월 ${data?.data.modifiedAt.slice(8, 10)}일`}
                  </span>
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
                  <S.DeletePostButton
                    onClick={() =>
                      openModal(
                        <RejectModal
                          type='게시글'
                          title={data?.data.title}
                          onAppropriation={() => mutate()}
                        />
                      )
                    }
                  >
                    삭제하기
                  </S.DeletePostButton>
                ))}
              <S.ModifyPostButton
                onClick={() => push(`/main/post/modify/${postId}`)}
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
