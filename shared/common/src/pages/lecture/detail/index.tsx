'use client'

import {
  useDeleteEnrollment,
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
import {
  AppropriationModalProps,
  purposeTypes,
  questionTypes,
  RoleEnumTypes,
} from '@bitgouel/types'
import dayjs from 'dayjs'
import { useRouter } from 'next/navigation'
import { useContext } from 'react'
import { toast } from 'react-toastify'
import * as S from './style'
import { match } from 'ts-pattern'

type ArgType = 'lectureDelete' | 'lectureEnrollment' | 'lectureEnrollmentDelete'

type ToastMessageType =
  | '강의를 삭제하였습니다.'
  | '수강 신청을 완료하였습니다.'
  | '수강 신청을 취소하였습니다.'

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
      if (data?.lectureStatus === 'OPENED') return true
      else return false
    } else return false
  }
  const { openModal, closeModal } = useModal()
  const { push } = useRouter()

  const onSuccess = (type: ArgType): void => {
    const toastMessage: ToastMessageType = match<ArgType, ToastMessageType>(
      type
    )
      .with('lectureDelete', () => '강의를 삭제하였습니다.')
      .with('lectureEnrollment', () => '수강 신청을 완료하였습니다.')
      .otherwise(() => '수강 신청을 취소하였습니다.')
    closeModal()
    push('/main/lecture')
    toast.success(toastMessage)
  }
  const { mutate: deleteLecture } = useDeleteLecture(lectureId, {
    onSuccess: () => onSuccess('lectureDelete'),
  })
  const { mutate: enrollLecture } = usePostEnrollment(lectureId, {
    onSuccess: () => onSuccess('lectureEnrollment'),
  })
  const { mutate: deleteEnrollment } = useDeleteEnrollment(lectureId, {
    onSuccess: () => onSuccess('lectureEnrollmentDelete'),
  })

  const onLectureModal = (type: ArgType): void => {
    if (authority === 'ROLE_STUDENT' && !isAble()) return
    const ModalParameter: AppropriationModalProps = {
      isApprove: type === 'lectureEnrollment' ? true : false,
      question: match<ArgType, questionTypes>(type)
        .with('lectureDelete', () => '강의를 삭제하시겠습니까?')
        .with('lectureEnrollment', () => '수강 신청하시겠습니까?')
        .otherwise(() => '수강 신청을 취소하시겠습니까?'),
      title: data?.name || '',
      purpose: match<ArgType, purposeTypes>(type)
        .with('lectureDelete', () => '삭제하기')
        .with('lectureEnrollment', () => '신청하기')
        .otherwise(() => '취소하기'),
      onAppropriation: (callbacks) =>
        match<ArgType, void>(type)
          .with('lectureDelete', () => deleteLecture(undefined, callbacks))
          .with('lectureEnrollment', () => enrollLecture(undefined, callbacks))
          .otherwise(() => deleteEnrollment(undefined, callbacks)),
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
            {data?.startDate && data?.endDate && (
              <div>{`• ${dayjs(data.startDate).format(
                'YYYY년 MM월 DD일 HH시 mm분'
              )}    ~    ${dayjs(data.endDate).format(
                'YYYY년 MM월 DD일 HH시 mm분'
              )}`}</div>
            )}
          </S.LectureSection>
          <S.LectureSection>
            <span>강의 장소</span>
            <div>
              • {data?.address} ({data?.locationDetails})
            </div>
            <KakaoMap
              lat={Number(data?.locationY)}
              lng={Number(data?.locationX)}
            />
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
          <S.ApplyButtonWrapper>
            {authority === 'ROLE_STUDENT' && (
              <S.ApplyButton
                isDelete={data?.isRegistered}
                isAble={isAble()}
                onClick={() =>
                  onLectureModal(
                    data?.isRegistered
                      ? 'lectureEnrollmentDelete'
                      : 'lectureEnrollment'
                  )
                }
              >
                수강 {data?.isRegistered ? '취소' : '신청'}하기
              </S.ApplyButton>
            )}
            {roleArray.includes(authority as RoleEnumTypes) && (
              <>
                <S.ApplyButton
                  isDelete
                  onClick={() => onLectureModal('lectureDelete')}
                >
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
        </MainStyle.MainContainer>
      </MainStyle.MainWrapper>
    </MainStyle.PageWrapper>
  )
}

export default LectureDetailPage
