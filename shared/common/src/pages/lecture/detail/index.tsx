'use client'

import {
  TokenManager,
  useGetDetailLecture,
  usePostEnrollment,
} from '@bitgouel/api'
import { AppropriationModal, Bg3, People, useModal } from '@bitgouel/common'
import dayjs from 'dayjs'
import { useRouter } from 'next/navigation'
import * as S from './style'
import { MainStyle } from '@bitgouel/common'

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
    <MainStyle.PageWrapper>
      <MainStyle.SlideBg url={Bg3}>
        <MainStyle.BgContainer>
          <MainStyle.PageTitle>강의 상세</MainStyle.PageTitle>
          <MainStyle.ButtonContainer>
            <MainStyle.SlideButton
              onClick={() => push(`/main/lecture/${lectureId}/apply`)}
            >
              <People />
              <span>신청자 명단 조회</span>
            </MainStyle.SlideButton>
          </MainStyle.ButtonContainer>
        </MainStyle.BgContainer>
      </MainStyle.SlideBg>
      <MainStyle.MainWrapper>
        <MainStyle.MainContainer>
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
          <S.LectureSection>
            <span>수강 신청 기간</span>
            {data?.lectureDates.map((date, idx) => (
              <div key={idx}>
                • {dayjs(date.completeDate).format('YYYY년 MM월 DD일')}{' '}
                {dayjs(`${date.completeDate}T${date.startTime}`).format(
                  'HH시 mm분'
                )}
                &nbsp;&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;&nbsp;
                {dayjs(`${date.completeDate}T${date.endTime}`).format(
                  'HH시 mm분'
                )}
              </div>
            ))}
          </S.LectureSection>
          <S.LectureSection>
            <span>수강 수강 날짜</span>
            {data?.lectureDates.map((date, idx) => (
              <div key={idx}>
                • {dayjs(date.completeDate).format('YYYY년 MM월 DD일')}{' '}
                {dayjs(`${date.completeDate}T${date.startTime}`).format(
                  'HH시 mm분'
                )}{' '}
                ~{' '}
                {dayjs(`${date.completeDate}T${date.endTime}`).format(
                  'HH시 mm분'
                )}
              </div>
            ))}
          </S.LectureSection>
          <S.LectureSection>
            <span>모집 정원</span>
            <div>{data?.maxRegisteredUser}명</div>
          </S.LectureSection>
          <S.WhiteBox></S.WhiteBox>
          <S.ApplyButtonWrapper>
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
          </S.ApplyButtonWrapper>
        </MainStyle.MainContainer>
      </MainStyle.MainWrapper>
    </MainStyle.PageWrapper>
  )
}

export default LectureDetailPage
