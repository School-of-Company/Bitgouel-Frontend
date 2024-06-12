'use client'

import { useDeleteInformationRemove, useGetActivityDetail } from '@bitgouel/api'
import {
  AppropriationModal,
  AuthorityContext,
  Bg2,
  MainStyle,
  Pen,
  PrivateRouter,
  TrashCan,
  useModal,
} from '@bitgouel/common'
import { ActivityDetailProps } from '@bitgouel/types'
import dayjs from 'dayjs'
import { useRouter } from 'next/navigation'
import { useContext } from 'react'
import { toast } from 'react-toastify'
import * as S from './style'

const ActivityDetailPage: React.FC<ActivityDetailProps> = ({
  studentIdProps,
  activityId,
}) => {
  const { push } = useRouter()
  const { openModal, closeModal } = useModal()
  const { studentId, clubId } = studentIdProps || {}
  const { data } = useGetActivityDetail(activityId || '')
  const authority = useContext(AuthorityContext)
  const { mutate } = useDeleteInformationRemove(activityId || '', {
    onSuccess: () => {
      closeModal()
      push(`/main/club/detail/${clubId}/student/detail/${studentId}/activity`)
      toast.success('삭제되었습니다')
    },
  })

  const onDeleteActivity = () =>
    openModal(
      <AppropriationModal
        isApprove={true}
        title={data?.title || ''}
        question='활동을 삭제하시겠습니까?'
        purpose='삭제하기'
        onAppropriation={(callbacks) => mutate(undefined, callbacks)}
      />
    )

  return (
    <PrivateRouter>
      <MainStyle.PageWrapper>
        <MainStyle.SlideBg url={Bg2}>
          <MainStyle.BgContainer>
            <MainStyle.PageTitle>게시글</MainStyle.PageTitle>
            {authority === 'ROLE_STUDENT' && (
              <MainStyle.ButtonContainer>
                <MainStyle.SlideButton
                  onClick={() =>
                    push(
                      `/main/club/detail/${clubId}/student/detail/${studentId}/activity/${activityId}/modify`
                    )
                  }
                >
                  <Pen />
                  <span>활동 수정</span>
                </MainStyle.SlideButton>
                <MainStyle.SlideButton onClick={onDeleteActivity}>
                  <TrashCan />
                  <span>활동 삭제</span>
                </MainStyle.SlideButton>
              </MainStyle.ButtonContainer>
            )}
          </MainStyle.BgContainer>
        </MainStyle.SlideBg>
        <MainStyle.MainWrapper>
          <MainStyle.MainContainer>
            <S.Title>{data?.title}</S.Title>
            <S.SubTitle>
              <S.NumberBox>
                <S.SubTitleBox>학점</S.SubTitleBox>
                <span>{data?.credit}점 수여</span>
              </S.NumberBox>
              <S.NumberBox>
                <S.SubTitleBox>활동 날짜</S.SubTitleBox>
                <span>
                  {dayjs(data?.activityDate).format('YYYY년 MM월 DD일')}
                </span>
              </S.NumberBox>
              <S.NumberBox>
                <S.SubTitleBox>최근 수정일</S.SubTitleBox>
                <span>
                  {dayjs(data?.modifiedAt).format('YYYY년 MM월 DD일')}
                </span>
              </S.NumberBox>
            </S.SubTitle>
            <S.MainText>{data?.content}</S.MainText>
          </MainStyle.MainContainer>
        </MainStyle.MainWrapper>
      </MainStyle.PageWrapper>
    </PrivateRouter>
  )
}

export default ActivityDetailPage
