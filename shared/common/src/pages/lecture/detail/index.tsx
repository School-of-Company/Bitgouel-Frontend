'use client'

import {
  TokenManager,
  useGetDetailLecture,
  usePostEnrollment,
} from '@bitgouel/api'
import {
  AppropriationModal,
  Bg3,
  People,
  useModal
} from '@bitgouel/common'
import dayjs from 'dayjs'
import { useRouter } from 'next/navigation'
import * as S from './style'

const LectureDetailPage = ({ lectureId }: { lectureId: string }) => {
  const { data } = useGetDetailLecture(lectureId)
  const tokenManager = new TokenManager()
  const isAble = () => {
    if (tokenManager.authority === 'ROLE_STUDENT') {
      if (!data?.isRegistered || data?.lectureStatus === 'OPEN') return true
      else return false
    } else return false
  }
  const { openModal } = useModal()
  const { mutate } = usePostEnrollment(lectureId)
  const { push } = useRouter()

  return (
    <div>
      <S.SlideBg url={Bg3}>
        <S.BgContainer>
          <S.LectureTitle>강의 상세</S.LectureTitle>
          <S.ButtonContainer>
            <S.LectureButton onClick={() => push(`/main/lecture/${lectureId}/apply`)}>
              <People />
              <span>신청자 명단 조회</span>
            </S.LectureButton>
          </S.ButtonContainer>
        </S.BgContainer>
      </S.SlideBg>
      <S.DocumentWrapper>
        <S.Document>
          <S.TitleContainer>
            <S.LectureStatusContainer>
              <S.LectureStatusBox>{data?.lectureType}</S.LectureStatusBox>
              <S.LectureStatusBox>{data?.division}</S.LectureStatusBox>
            </S.LectureStatusContainer>
            <h1>{data?.name}</h1>
            <S.LectureInfoContainer>
              <span>{data?.lecturer} 교수</span>
              <span>{dayjs(data?.createAt).format('YYYY.MM.DD')}</span>
            </S.LectureInfoContainer>
          </S.TitleContainer>
          <S.MainText>{data?.content}</S.MainText>
          <S.LectureDateWrapper>
            <h2>수강 신청 기간</h2>
            <S.LectureDateText>
              • {dayjs(data?.startDate).format('YYYY년 MM월 DD일 HH시 mm분')} ~{' '}
              {dayjs(data?.endDate).format('YYYY년 MM월 DD일 HH시 mm분')}
            </S.LectureDateText>
          </S.LectureDateWrapper>
          <S.LectureDateWrapper>
            <h2>강의 수강 날짜</h2>
            {data?.lectureDates.map((date, idx) => (
              <S.LectureDateText key={idx}>
                • {dayjs(date.completeDate).format('YYYY년 MM월 DD일')}{' '}
                {dayjs(`${date.completeDate}T${date.startTime}`).format(
                  'HH시 mm분'
                )}{' '}
                ~{' '}
                {dayjs(`${date.completeDate}T${date.endTime}`).format(
                  'HH시 mm분'
                )}
              </S.LectureDateText>
            ))}
          </S.LectureDateWrapper>
          <S.LectureMaxWrapper>
            <h2>모집 정원</h2>
            <S.LectureMaxText>{data?.maxRegisteredUser}명</S.LectureMaxText>
          </S.LectureMaxWrapper>
        </S.Document>
        <S.ApplyButton
          isAble={isAble()}
          onClick={() =>
            isAble() &&
            openModal(
              <AppropriationModal
                isApprove={true}
                question='수강 신청하시겠습니까?'
                title={data?.name || ''}
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
