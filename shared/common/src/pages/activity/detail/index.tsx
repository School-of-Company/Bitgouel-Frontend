'use client'

import { Bg2, Pen, TrashCan } from '../../../assets'
import { useModal } from '../../../hooks'
import { AppropriationModal } from '../../../modals'
import { StudentIdProps, ActivityDetailTypes } from '@bitgouel/types'
import { useRouter } from 'next/navigation'
import * as S from './style'
import { useGetActivityDetail, useDeleteInformationRemove } from '@bitgouel/api'
import { toast } from 'react-toastify'

interface Props {
  studentIdProps: {
    activityId: string
    studentId: string
    clubId: string
  }
}

const ActivityDetailPage: React.FC<Props> = ({ studentIdProps }) => {
  console.log(studentIdProps)
  const { push } = useRouter()
  const { openModal, closeModal } = useModal()

  const { studentId, clubId } = studentIdProps

  const { data } = useGetActivityDetail(studentIdProps.activityId)
  const { mutate } = useDeleteInformationRemove(studentIdProps.activityId)

  return (
    <div>
      <S.SlideBg url={Bg2}>
        <S.BgContainer>
          <S.ActivityTitle>게시글</S.ActivityTitle>
          <S.TitleButtonContainer>
            <S.ActivityButton
              onClick={() =>
                push(
                  `/main/club/${clubId}/student/${studentId}/activity/${studentIdProps.activityId}/modify`
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
                      push(`/main/club/${clubId}/student/${studentId}/activity`)
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
