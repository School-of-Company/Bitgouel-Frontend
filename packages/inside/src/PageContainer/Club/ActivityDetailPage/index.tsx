'use client'

import { ApproveModal, Pen, RejectModal, TrashCan } from '@bitgouel/common'
import Bg2 from '@bitgouel/common/src/assets/png/mainBg2.png'

import * as S from './style'
import { useRouter } from 'next/navigation'
import { lectureStatusToKor, roleToKor } from '@bitgouel/common/src/constants'
import { match } from 'ts-pattern'
import { useModal } from '@bitgouel/common/src/hooks'

import { ApproveStatusEnum } from '@bitgouel/types'

import {
  useDeleteRejectActivity,
  useGetActivityDetail,
  usePatchActivityApprove,
} from '@bitgouel/api'

const ActivityDetailPage = ({ activity_Id }: { activity_Id: string }) => {
  const router = useRouter()
  const { data } = useGetActivityDetail(activity_Id)
  const { openModal } = useModal()

  const { mutate: approve } = usePatchActivityApprove(activity_Id)
  const { mutate: reject } = useDeleteRejectActivity(activity_Id)

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
                    router.push('/main/club/student/activity/detail/modify')
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
                        onAppropriation={reject}
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
                {lectureStatusToKor['']}
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
                    ${data?.data.modifiedAt.slice(
                      13,
                      15
                    )}:${data?.data.modifiedAt.slice(16, 18)}
                  `}
                </span>
              </S.NumberBox>
            </S.SubTitle>
          </S.TitleContainer>
          <S.MainText>{data?.data.content}</S.MainText>
          {roleToKor.ROLE_TEACHER && (
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
