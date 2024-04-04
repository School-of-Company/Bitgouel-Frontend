'use client'

import {
  TokenManager,
  useGetDetailLecture,
  usePostEnrollment,
} from '@bitgouel/api'
import {
  AppropriationModal,
  Bg3,
  lectureDivisionToKor,
  lectureTypeToKor,
  useModal,
} from '@bitgouel/common'
import * as S from './style'
import dayjs from 'dayjs'

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
  const {
    lectureType,
    name,
    lecturer,
    startDate,
    content,
    endDate,
    division,
    createAt,
    maxRegisteredUser,
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
            <S.LectureStatusContainer>
              <S.LectureStatusBox>
                {lectureTypeToKor[lectureType || '']}
              </S.LectureStatusBox>
              <S.LectureStatusBox>
                {lectureDivisionToKor[division || '']}
              </S.LectureStatusBox>
            </S.LectureStatusContainer>
            <h1>{name}</h1>
            <S.LectureInfoContainer>
              <span>{lecturer} 교수</span>
              <span>{dayjs(createAt).format('YYYY.MM.DD')}</span>
            </S.LectureInfoContainer>
          </S.TitleContainer>
          <S.MainText>{content}</S.MainText>
          <S.LectureDateWrapper>
            <h2>수강 신청 기간</h2>
            <S.LectureDateText>
              • {dayjs(startDate).format('YYYY년 MM월 DD일 HH시 mm분')}
              {'  '}~{'  '}•{' '}
              {dayjs(endDate).format('YYYY년 MM월 DD일 HH시 mm분')}
            </S.LectureDateText>
          </S.LectureDateWrapper>
          <S.LectureDateWrapper>
            <h2>강의 수강 날짜</h2>
            {data?.data.lectureDates.map((date) => (
              <S.LectureDateText>
                • {dayjs(date.completeDate).format('YYYY년 MM월 DD일')}~
                {dayjs(date.endTime).format('HH시 mm분')}
                {dayjs(date.startTime).format('HH시 mm분')}
              </S.LectureDateText>
            ))}
          </S.LectureDateWrapper>
          <S.LectureMaxWrapper>
            <h2>모집 정원</h2>
            <S.LectureMaxText>{maxRegisteredUser}명</S.LectureMaxText>
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
                title={name || ''}
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
