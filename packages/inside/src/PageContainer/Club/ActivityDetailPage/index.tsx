'use client'

import {
  ApproveModal,
  Pen,
  RejectModal,
  Role,
  TrashCan,
} from '@bitgouel/common'
import Bg2 from '@bitgouel/common/src/assets/png/mainBg2.png'

import { lectureStatusToKor, roleToKor } from '@bitgouel/common/src/constants'
import { useModal } from '@bitgouel/common/src/hooks'
import { useRouter } from 'next/navigation'
import { match } from 'ts-pattern'
import * as S from './style'

import {
  useDeleteActivityReject,
  useGetActivityDetail,
  usePatchActivityApprove,
  useDeleteActivityInformationRemove,
} from '@bitgouel/api'
import { useRecoilValue } from 'recoil'

const ActivityDetailPage = ({ activityId }: { activityId: string }) => {
  const { push } = useRouter()
  const { data } = useGetActivityDetail(activityId)
  const { openModal } = useModal()
  const role = useRecoilValue(Role)

  const { mutate: approve } = usePatchActivityApprove(activityId)
  const { mutate: reject } = useDeleteActivityReject(activityId)
  const { mutate: remove } = useDeleteActivityInformationRemove(activityId)

  return (
    <div>
      <S.SlideBg url={Bg2}>
        <S.BgContainer>
          <S.ActivityTitle>게시글</S.ActivityTitle>
          <S.TitleButtonContainer>
            {roleToKor.ROLE_STUDENT && (
              <>
                <S.ActivityButton
                  onClick={() =>
                    push(`/main/club/student/activity/${activityId}`)
                  }
                >
                  <Pen />
                  <span>활동 수정</span>
                </S.ActivityButton>
                <S.ActivityButton
                  onClick={() =>
                    openModal(
                      <RejectModal
                        type='활동 추가'
                        title={data?.data.title}
                        onAppropriation={remove}
                      />
                    )
                  }
                >
                  <TrashCan />
                  <span>활동 삭제</span>
                </S.ActivityButton>
              </>
            )}
          </S.TitleButtonContainer>
        </S.BgContainer>
      </S.SlideBg>
      <S.DocumentWrapper>
        <S.Document>
          <S.TitleContainer>
            <S.Title>{data?.data.title}</S.Title>
            <S.SubTitle>
              <S.ApproveStatus
                approveColor={match(data?.data.approveStatus)
                  .with('APPROVED', () => true)
                  .otherwise(() => false)}
              >
                {lectureStatusToKor[data?.data.approveStatus]}
              </S.ApproveStatus>
              <S.NumberBox>
                <S.SubTitleBox>학점</S.SubTitleBox>
                <span>{data?.data.credit}점 수여</span>
              </S.NumberBox>
              <S.NumberBox>
                <S.SubTitleBox>활동 날짜</S.SubTitleBox>
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
          {role === 'ROLE_TEACHER' && (
            <>
              <S.ButtonWrapper>
                <S.ButtonContainer>
                  <S.CreateNotApproveButton
                    onClick={() =>
                      openModal(
                        <RejectModal
                          type='활동 추가'
                          title={data?.data.title}
                          onAppropriation={reject}
                        />
                      )
                    }
                  >
                    활동 거부하기
                  </S.CreateNotApproveButton>
                  <S.CreateApproveButton
                    onClick={() =>
                      openModal(
                        <ApproveModal
                          type='활동 추가'
                          title={data?.data.title}
                          onAppropriation={approve}
                        />
                      )
                    }
                  >
                    활동 승인하기
                  </S.CreateApproveButton>
                </S.ButtonContainer>
              </S.ButtonWrapper>
            </>
          )}
        </S.Document>
      </S.DocumentWrapper>
    </div>
  )
}

export default ActivityDetailPage
