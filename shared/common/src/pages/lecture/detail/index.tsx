'use client'

import {
  TokenManager,
  useGetDetailLecture,
  usePostEnrollment,
} from '@bitgouel/api'
import { Bg3 } from '../../../assets'
import { lectureDivisionToKor, lectureTypeToKor } from '../../../constants'
import * as S from './style'
import { useModal } from '../../../hooks'
import { AppropriationModal } from '../../../modals'

const LectureDetailPage = ({ lectureId }: { lectureId: string }) => {
  const { data } = useGetDetailLecture(lectureId)
  const tokenManager = new TokenManager()
  const isCondition = () => {
    if (tokenManager.authority === 'ROLE_STUDENT') {
      if (!data?.data.isRegistered || data?.data.lectureStatus === 'OPEN')
        return true
      else return false
    } else return false
  }
  const { openModal } = useModal()
  const { mutate } = usePostEnrollment(lectureId)

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
            <S.LectureStatusContainer>
              <S.LectureStatusBox>
                {lectureTypeToKor[data?.data.lectureType]}
              </S.LectureStatusBox>
              <S.LectureStatusBox>
                {lectureDivisionToKor[data?.data.division]}
              </S.LectureStatusBox>
            </S.LectureStatusContainer>
            <h1>{data?.data.name}</h1>
            <S.LectureInfoContainer>
              <span>{data?.data.lecturer} 교수</span>
              <span>{`${data?.data.startDate.slice(
                0,
                4
              )}.${data?.data.startDate.slice(
                5,
                7
              )}.${data?.data.startDate.slice(8, 10)}`}</span>
            </S.LectureInfoContainer>
          </S.TitleContainer>
          <S.MainText>{data?.data.content}</S.MainText>
          <S.LectureDateWrapper>
            <h2>수강 신청 기간</h2>
            <span>
              •{' '}
              {`${data?.data.startDate.slice(
                0,
                4
              )}년 ${data?.data.startDate.slice(
                5,
                7
              )}월 ${data?.data.startDate.slice(
                8,
                10
              )}일 ${data?.data.startDate.slice(
                11,
                13
              )}시 ${data?.data.startDate.slice(14, 16)}분`}
              {'  '}~{'  '}
              {`${data?.data.endDate.slice(0, 4)}년 ${data?.data.endDate.slice(
                5,
                7
              )}월 ${data?.data.endDate.slice(
                8,
                10
              )}일 ${data?.data.startDate.slice(
                11,
                13
              )}시 ${data?.data.startDate.slice(14, 16)}분`}
            </span>
          </S.LectureDateWrapper>
          <S.LectureDateWrapper>
            <h2>강의 수강 날짜</h2>
            {data?.data.lectureDates.map((date) => (
              <span>
                •{' '}
                {`${date.completeDate.slice(0, 4)}년 ${date.completeDate.slice(
                  5,
                  7
                )}월 ${date.completeDate.slice(8, 10)}일 ${date.startTime.slice(
                  0,
                  2
                )}시 ${date.startTime.slice(3, 5)}분~${date.endTime.slice(
                  0,
                  2
                )}시 ${date.endTime.slice(3, 5)}분`}
              </span>
            ))}
          </S.LectureDateWrapper>
          <S.LectureMaxWrapper>
            <h2>모집 정원</h2>
            <span>{data?.data.maxRegisteredUser}명</span>
          </S.LectureMaxWrapper>
        </S.Document>
        <S.ApplyButton
          isAble={isCondition()}
          onClick={() =>
            isCondition() &&
            openModal(
              <AppropriationModal
                isApprove={true}
                question='수강 신청하시겠습니까?'
                title={data?.data.name}
                purpose='신청하기'
                onAppropriation={() => mutate()}
              />
            )
          }
        >
          수강 신청하기
        </S.ApplyButton>
      </S.DocumentWrapper>
    </div>
  )
}

export default LectureDetailPage
