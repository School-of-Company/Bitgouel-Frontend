'use client'

import {
  useDeleteLecture,
  useGetDetailLecture,
  usePostEnrollment,
} from '@bitgouel/api'
import {
  AppropriationModal,
  AuthorityContext,
  Bg3,
  KakaoMap,
  MainStyle,
  People,
  useModal,
} from '@bitgouel/common'
import dayjs from 'dayjs'
import { useRouter } from 'next/navigation'
import { useContext } from 'react'
import * as S from './style'
import { AppropriationModalProps, RoleEnumTypes } from '@bitgouel/types'
import { toast } from 'react-toastify'

const roleArray: RoleEnumTypes[] = [
  'ROLE_ADMIN',
  'ROLE_PROFESSOR',
  'ROLE_COMPANY_INSTRUCTOR',
  'ROLE_GOVERNMENT',
]

const LectureDetailPage = ({ lectureId }: { lectureId: string }) => {
  const { data } = useGetDetailLecture(lectureId)
  const authority = useContext(AuthorityContext)
  const isAble = () => {
    if (authority === 'ROLE_STUDENT') {
      if (!data?.isRegistered || data?.lectureStatus === 'OPEN') return true
      else return false
    } else return false
  }
  const { openModal, closeModal } = useModal()
  const { push } = useRouter()

  const onSuccess = (isDelete: boolean): void => {
    const toastMessage: string = isDelete
      ? '강의를 삭제하였습니다'
      : '수강신청을 완료하였습니다'
    closeModal()
    push('/main/lecture')
    toast.success(toastMessage)
  }
  const { mutate: enrollLecture } = usePostEnrollment(lectureId, {
    onSuccess: () => onSuccess(false)
  })
  const { mutate: deleteLecture } = useDeleteLecture(lectureId, {
    onSuccess: () => onSuccess(true)
  })

  const onLectureModal = (isDelete: boolean): void => {
    if (authority === 'ROLE_STUDENT' && !isAble()) return
    const ModalParameter: AppropriationModalProps = {
      isApprove: isDelete ? false : true,
      question: isDelete
        ? '강의를 삭제하시겠습니까?'
        : '수강 신청하시겠습니까?',
      title: data?.name || '',
      purpose: isDelete ? '삭제하기' : '신청하기',
      onAppropriation: (callbacks) =>
        isDelete
          ? deleteLecture(undefined, callbacks)
          : enrollLecture(undefined, callbacks),
    }

    openModal(
      <AppropriationModal
        isApprove={ModalParameter.isApprove}
        question={ModalParameter.question}
        title={ModalParameter.title}
        purpose={ModalParameter.purpose}
        onAppropriation={ModalParameter.onAppropriation}
      />
    )
  }

  const formatStartDate = dayjs(data?.startDate).format(
    'YYYY년 MM월 DD일 HH시 mm분'
  )
  const formatEndDate = dayjs(data?.endDate).format(
    'YYYY년 MM월 DD일 HH시 mm분'
  )

  return (
    <MainStyle.PageWrapper>
      <MainStyle.SlideBg url={Bg3}>
        <MainStyle.BgContainer>
          <MainStyle.PageTitle>강의 상세</MainStyle.PageTitle>
          {authority !== 'ROLE_STUDENT' && (
            <MainStyle.ButtonContainer>
              <MainStyle.SlideButton
                onClick={() => push(`/main/lecture/detail/${lectureId}/apply`)}
              >
                <People />
                <span>신청자 명단 조회</span>
              </MainStyle.SlideButton>
            </MainStyle.ButtonContainer>
          )}
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
            <div>{`• ${formatStartDate}    ~    ${formatEndDate}`}</div>
          </S.LectureSection>
          <S.LectureSection>
            <span>강의 장소</span>
            <KakaoMap lat={33.5563} lng={126.79581} />
          </S.LectureSection>
          <S.LectureSection>
            <span>강의 수강 날짜</span>
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
          {(roleArray.includes(authority as RoleEnumTypes) ||
            authority === 'ROLE_STUDENT') && (
            <S.ApplyButtonWrapper>
              {authority === 'ROLE_STUDENT' && (
                <S.ApplyButton
                  isAble={isAble()}
                  onClick={() => onLectureModal(false)}
                >
                  수강 신청하기
                </S.ApplyButton>
              )}
              {roleArray.includes(authority as RoleEnumTypes) && (
                <>
                  <S.ApplyButton isDelete onClick={() => onLectureModal(true)}>
                    삭제하기
                  </S.ApplyButton>
                  <S.ApplyButton
                    isAble
                    onClick={() =>
                      push(`/main/lecture/detail/${lectureId}/modify`)
                    }
                  >
                    수정하기
                  </S.ApplyButton>
                </>
              )}
            </S.ApplyButtonWrapper>
          )}
        </MainStyle.MainContainer>
      </MainStyle.MainWrapper>
    </MainStyle.PageWrapper>
  )
}

export default LectureDetailPage
