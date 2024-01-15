'use client'

import { Bg3, sliceDateTime } from '@bitgouel/common'
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
  const {
    lecturer,
    startDate,
    createAt,
    endDate,
    completeDate,
    name,
    lectureType,
    headCount,
    maxRegisteredUser,
    approveStatus,
    credit,
    content
  } = data?.data || {}

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
              <S.Professor>{lecturer} 교수</S.Professor>
              <S.Date>{sliceDateTime(createAt)}</S.Date>
            </S.SubTitle>
            <S.Title>{name}</S.Title>
            <S.SubMenuContainer>
              <S.From>
                {
                  lectureToKor[
                    lectureType || 'MUTUAL_CREDIT_RECOGNITION_PROGRAM'
                  ]
                }
              </S.From>
              <S.MenuNum>
                <div>
                  <span>신청기간: </span>
                  <span>
                    {sliceDateTime(startDate)}
                  </span>
                  <span>~</span>
                  <span>
                    {sliceDateTime(endDate)}
                  </span>
                </div>
                <div>
                  <span>수강정원: </span>
                  <span>
                    {headCount}/{maxRegisteredUser}명
                  </span>
                </div>
                <div>
                  <span>강의 시작: </span>
                  <span>{sliceDateTime(completeDate)}</span>
                </div>
                <div>
                  <span>학점: </span>
                  <span>{credit}점</span>
                </div>
              </S.MenuNum>
            </S.SubMenuContainer>
          </S.TitleContainer>
          <S.MainText>{content}</S.MainText>
          <S.ButtonWrapper>
            <S.ButtonContainer isApprove={approveStatus}>
              <S.CreateNotApproveButton
                onClick={() =>
                  approveStatus === 'PENDING' &&
                  openModal(
                    <RejectModal
                      type='강의 개설'
                      title={name}
                      onAppropriation={() => approve()}
                    />
                  )
                }
              >
                신청 거부하기
              </S.CreateNotApproveButton>
              <S.CreateApproveButton
                onClick={() =>
                  approveStatus === 'PENDING' &&
                  openModal(
                    <ApproveModal
                      type='강의 개설'
                      title={name}
                      onAppropriation={() => reject()}
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
