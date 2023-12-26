'use client'

import Bg3 from '@bitgouel/common/src/assets/png/mainBg3.png'
import * as S from './style'
import {
  useDeleteRejectLecture,
  useGetDetailLecture,
  usePatchApproveLecture,
} from '@bitgouel/api'
import { lectureToKor } from '@bitgouel/common/src/constants'
import { useModal } from '@bitgouel/common/src/hooks'
import { ApproveModal, RejectModal } from '@bitgouel/common'

const LectureDetailPage = ({ lectureId }: { lectureId: string }) => {
  const { data } = useGetDetailLecture(lectureId)
  const { openModal } = useModal()
  const { mutate: approve } = usePatchApproveLecture(lectureId)
  const { mutate: reject } = useDeleteRejectLecture(lectureId)
  return (
    <div>
      <S.SlideBg url={Bg3}>
        <S.BgContainer>
          <S.LectureTitle>강의 상세</S.LectureTitle>
        </S.BgContainer>
      </S.SlideBg>
      <S.DocumentWrapper>
        <S.Document>
          <S.TitleContainer>
            <S.SubTitle>
              <S.Professor>{data?.data.lecturer} 교수</S.Professor>
              <S.Date>{`${data?.data.createAt.slice(
                0,
                4
              )}년 ${data?.data.createAt.slice(
                5,
                7
              )}월 ${data?.data.createAt.slice(
                8,
                10
              )}일 ${data?.data.createAt.slice(11, 16)}`}</S.Date>
            </S.SubTitle>
            <S.Title>{data?.data.name}</S.Title>
            <S.SubMenuContainer>
              <S.From>
                {
                  lectureToKor[
                    data?.data.lectureType ||
                      'MUTUAL_CREDIT_RECOGNITION_PROGRAM'
                  ]
                }
              </S.From>
              <S.MenuNum>
                <div>
                  <span>신청기간: </span>
                  <span>
                    {`${data?.data.startDate.slice(
                      0,
                      4
                    )}년 ${data?.data.startDate.slice(
                      5,
                      7
                    )}월 ${data?.data.startDate.slice(
                      8,
                      10
                    )}일 ${data?.data.startDate.slice(11, 16)}`}
                  </span>
                  <span>~</span>
                  <span>
                    {`${data?.data.endDate.slice(
                      0,
                      4
                    )}년 ${data?.data.endDate.slice(
                      5,
                      7
                    )}월 ${data?.data.endDate.slice(
                      8,
                      10
                    )}일 ${data?.data.endDate.slice(11, 16)}`}
                  </span>
                </div>
                <div>
                  <span>수강정원: </span>
                  <span>
                    {data?.data.headCount}/{data?.data.maxRegisteredUser}명
                  </span>
                </div>
                <div>
                  <span>강의 시작: </span>
                  <span>{`${data?.data.completeDate.slice(
                    0,
                    4
                  )}년 ${data?.data.completeDate.slice(
                    5,
                    7
                  )}월 ${data?.data.completeDate.slice(
                    8,
                    10
                  )}일 ${data?.data.completeDate.slice(11, 16)}`}</span>
                </div>
                <div>
                  <span>학점: </span>
                  <span>{data?.data.credit}점</span>
                </div>
              </S.MenuNum>
            </S.SubMenuContainer>
          </S.TitleContainer>
          <S.MainText>{data?.data.content}</S.MainText>
          <S.ButtonWrapper>
            <S.ButtonContainer isApprove={data?.data.approveStatus}>
              <S.CreateNotApproveButton
                onClick={() =>
                  data?.data.approveStatus === 'PENDING' &&
                  openModal(
                    <RejectModal
                      type='강의 개설'
                      title={data?.data.name}
                      onAppropriation={approve}
                    />
                  )
                }
              >
                신청 거부하기
              </S.CreateNotApproveButton>
              <S.CreateApproveButton
                onClick={() =>
                  data?.data.approveStatus === 'PENDING' &&
                  openModal(
                    <ApproveModal
                      type='강의 개설'
                      title={data?.data.name}
                      onAppropriation={reject}
                    />
                  )
                }
              >
                신청 승인하기
              </S.CreateApproveButton>
            </S.ButtonContainer>
          </S.ButtonWrapper>
        </S.Document>
      </S.DocumentWrapper>
    </div>
  )
}

export default LectureDetailPage
