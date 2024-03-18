'use client'

import {
  TokenManager,
  useDeleteInformationRemove,
  useGetActivityDetail,
} from '@bitgouel/api'
import {
  AppropriationModal,
  Bg2,
  Pen,
  TrashCan,
  useModal,
} from '@bitgouel/common'
import { ActivityDetailProps } from '@bitgouel/types'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import * as S from './style'

const ActivityDetailPage: React.FC<ActivityDetailProps> = ({
  studentIdProps,
  activityId,
}) => {
  const { push } = useRouter()
  const { openModal, closeModal } = useModal()

  const tokenManager = new TokenManager()

  const { studentId, clubId } = studentIdProps

  const { data } = useGetActivityDetail(activityId)
  const { mutate } = useDeleteInformationRemove(activityId)

  const [isStudent, setIsStudent] = useState<boolean>(false)

  useEffect(() => {
    setIsStudent(tokenManager.authority === 'ROLE_STUDENT')
  }, [])

  return (
    <div>
      <S.SlideBg url={Bg2}>
        <S.BgContainer>
          <S.ActivityTitle>게시글</S.ActivityTitle>
          {isStudent && (
            <S.TitleButtonContainer>
              <S.ActivityButton
                onClick={() =>
                  push(
                    `/main/club/${clubId}/student/${studentId}/activity/${activityId}/modify`
                  )
                }
              >
                <Pen />
                <span>활동 수정</span>
              </S.ActivityButton>
              <S.ActivityButton
                onClick={() =>
                  openModal(
                    <AppropriationModal
                      isApprove={true}
                      title={data?.data.title}
                      question='활동을 삭제하시겠습니까?'
                      purpose='삭제하기'
                      onAppropriation={() => {
                        mutate()
                        closeModal()
                        push(
                          `/main/club/${clubId}/student/${studentId}/activity`
                        )
                        toast.success('삭제되었습니다.')
                      }}
                    />
                  )
                }
              >
                <TrashCan />
                <span>활동 삭제</span>
              </S.ActivityButton>
            </S.TitleButtonContainer>
          )}
        </S.BgContainer>
      </S.SlideBg>
      <S.DocumentWrapper>
        <S.Document>
          <S.TitleContainer>
            <S.Title>{data?.data.title}</S.Title>
            <S.SubTitle>
              <S.NumberBox>
                <S.SubTitleBox>학점</S.SubTitleBox>
                <span>{data?.data.credit}점 수여</span>
              </S.NumberBox>
              <S.NumberBox>
                <S.SubTitleBox>학점</S.SubTitleBox>
                <span>
                  {`${data?.data.activityDate.slice(
                    0,
                    4
                  )}년 ${data?.data.activityDate.slice(
                    5,
                    7
                  )}월 ${data?.data.activityDate.slice(8, 10)}일`}
                </span>
              </S.NumberBox>
              <S.NumberBox>
                <S.SubTitleBox>최근 수정일</S.SubTitleBox>
                <span>
                  {`${data?.data.modifiedAt.slice(
                    0,
                    4
                  )}년 ${data?.data.modifiedAt.slice(
                    5,
                    7
                  )}월 ${data?.data.modifiedAt.slice(8, 10)}일
                  `}
                </span>
              </S.NumberBox>
            </S.SubTitle>
          </S.TitleContainer>
          <S.MainText>{data?.data.content}</S.MainText>
        </S.Document>
      </S.DocumentWrapper>
    </div>
  )
}

export default ActivityDetailPage
