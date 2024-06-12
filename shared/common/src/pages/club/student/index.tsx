'use client'

import {
  TokenManager,
  useGetCertificateList,
  useGetCertificateListTeacher,
  useGetCompleteLecture,
  useGetStudentDetail,
  usePostCertificate,
} from '@bitgouel/api'
import {
  AddCertificate,
  AppropriationModal,
  AuthorityContext,
  Bg2,
  CalendarIcon,
  CertificateItem,
  CompleteLectureItem,
  MainStyle,
  PersonOut,
  PlusCertificate,
  SelectCalendarModal,
  theme,
  useModal,
} from '@bitgouel/common'
import {
  CertificateRequest,
  RoleEnumTypes,
  StudentIdProps,
} from '@bitgouel/types'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useContext, useState } from 'react'
import { toast } from 'react-toastify'
import * as S from './style'

const roleArray: RoleEnumTypes[] = [
  'ROLE_STUDENT',
  'ROLE_TEACHER',
  'ROLE_ADMIN',
]

const StudentPage: React.FC<{ studentIdProps: StudentIdProps }> = ({
  studentIdProps,
}) => {
  const { studentId, clubId } = studentIdProps || {}
  const { push } = useRouter()
  const tokenManager = new TokenManager()
  const [isAddCertificate, setIsAddCertificate] = useState<boolean>(false)
  const [certificateText, setCertificateText] = useState<string>('')
  const [isCertificateDate, setIsCertificateDate] = useState<boolean>(false)
  const [certificateDate, setCertificateDate] = useState<Date>(new Date())
  const [certificateDateText, setCertificateDateText] = useState<string>('')
  const [certificateIndex, setCertificateIndex] = useState<number>(-1)
  const { openModal, closeModal } = useModal()
  const authority = useContext(AuthorityContext)

  const { data: clubStudent } = useGetStudentDetail(clubId, studentId)
  const { data: certificateList, refetch } =
    authority === 'ROLE_STUDENT'
      ? useGetCertificateList()
      : useGetCertificateListTeacher(studentId)

  const { data: completeLectureList } = useGetCompleteLecture(studentId)

  const { mutate } = usePostCertificate({
    onSuccess: () => {
      refetch()
      closeModal()
      setIsAddCertificate(false)
      toast.success('자격증을 추가하였습니다')
    },
  })

  const onAddCertificate = () => {
    const payload: CertificateRequest = {
      name: certificateText,
      acquisitionDate: `${certificateDate.getFullYear()}-${(
        certificateDate.getMonth() + 1
      )
        .toString()
        .padStart(2, '0')}-${certificateDate
        .getDate()
        .toString()
        .padStart(2, '0')}`,
    }

    if (certificateText.trim() !== '' && certificateDateText.trim() !== '')
      return openModal(
        <AppropriationModal
          isApprove={true}
          question='자격증 정보를 추가하시겠습니까?'
          title={certificateText}
          purpose='추가하기'
          onAppropriation={(callbacks) => mutate(payload, callbacks)}
        />
      )
    toast.info('자격증 정보를 입력해주세요')
  }

  return (
    <MainStyle.PageWrapper>
      <MainStyle.SlideBg url={Bg2}>
        <MainStyle.BgContainer>
          <MainStyle.PageTitle>학생 정보</MainStyle.PageTitle>
          {roleArray.includes(authority) && (
            <MainStyle.ButtonContainer>
              <MainStyle.SlideButton
                onClick={() =>
                  push(
                    `/main/club/detail/${clubId}/student/detail/${studentId}/activity`
                  )
                }
              >
                <PersonOut />
                <span>학생 활동</span>
              </MainStyle.SlideButton>
            </MainStyle.ButtonContainer>
          )}
        </MainStyle.BgContainer>
      </MainStyle.SlideBg>
      <MainStyle.MainWrapper>
        <MainStyle.MainContainer>
          <S.ProfileBox>
            <span>{clubStudent?.name}</span>
            <span>{clubStudent?.email}</span>
            <span>
              {clubStudent?.phoneNumber.slice(0, 3)}-
              {clubStudent?.phoneNumber.slice(3, 7)}-
              {clubStudent?.phoneNumber.slice(7)}
            </span>
            <span>
              총 학점 <b>{clubStudent?.credit}</b>
            </span>
          </S.ProfileBox>
          <S.CertificateBox>
            <span>
              자격증{' '}
              <div onClick={() => setIsAddCertificate((prev) => !prev)}>
                {authority === 'ROLE_STUDENT' && <PlusCertificate />}
              </div>
            </span>
            <S.CertificateListBox>
              {isAddCertificate && (
                <S.AddCertificateBox>
                  <S.ListToggle list='추가' />
                  <S.AddCertificateInput
                    type='text'
                    value={certificateText}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setCertificateText(e.target.value)
                    }
                  />
                  <S.AddCertificateDateBox>
                    <S.SelectDateContainer>
                      {isCertificateDate && certificateIndex < 0 && (
                        <SelectCalendarModal
                          date={certificateDate}
                          setDate={setCertificateDate}
                          setText={setCertificateDateText}
                        />
                      )}
                      <div
                        onClick={() => {
                          setIsCertificateDate((prev) => !prev)
                          setCertificateIndex(-1)
                        }}
                      >
                        <CalendarIcon />
                      </div>
                    </S.SelectDateContainer>
                    <S.ShowDateText>{certificateDateText}</S.ShowDateText>
                  </S.AddCertificateDateBox>
                  <S.AddCertificateIcon onClick={onAddCertificate}>
                    <AddCertificate
                      color={
                        certificateText.trim() !== '' &&
                        certificateDateText.trim() !== ''
                          ? theme.color.main
                          : theme.color.gray['700']
                      }
                    />
                  </S.AddCertificateIcon>
                </S.AddCertificateBox>
              )}
              {certificateList?.certifications.map((certificate, idx) => (
                <div
                  onClick={() => {
                    setCertificateIndex(idx)
                  }}
                  key={idx}
                >
                  <CertificateItem
                    key={idx}
                    certificateItems={certificate}
                    isOpenCalendar={idx === certificateIndex}
                    refetchModify={refetch}
                  />
                </div>
              ))}
            </S.CertificateListBox>
          </S.CertificateBox>
          {roleArray.includes(authority) && (
            <S.LectureListBox>
              <b>신청한 강의 목록</b>
              <S.LectureList>
                {completeLectureList?.lectures.map((completeLecture) => (
                  <CompleteLectureItem
                    key={completeLecture.id}
                    item={completeLecture}
                  />
                ))}
              </S.LectureList>
            </S.LectureListBox>
          )}
        </MainStyle.MainContainer>
      </MainStyle.MainWrapper>
    </MainStyle.PageWrapper>
  )
}

export default StudentPage
