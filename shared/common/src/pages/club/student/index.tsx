'use client'

import {
  TokenManager,
  useGetCertificateList,
  useGetCertificateListTeacher,
  useGetMy,
  useGetStudentDetail,
  usePostCertificate,
} from '@bitgouel/api'
import {
  AddCertificate,
  AppropriationModal,
  Bg2,
  CalendarIcon,
  CertificateItem,
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
import { ChangeEvent, useEffect, useState } from 'react'
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
  const { studentId, clubId } = studentIdProps
  const { push } = useRouter()
  const [isAddCertificate, setIsAddCertificate] = useState<boolean>(false)
  const [certificateText, setCertificateText] = useState<string>('')
  const [isCertificateDate, setIsCertificateDate] = useState<boolean>(false)
  const [certificateDate, setCertificateDate] = useState<Date>(new Date())
  const [certificateDateText, setCertificateDateText] = useState<string>('')
  const [certificateIndex, setCertificateIndex] = useState<number>(-1)
  const [isRole, setIsRole] = useState<boolean>(false)
  const [isStudent, setIsStudent] = useState<boolean>(false)

  const { openModal, closeModal } = useModal()

  const { data: clubStudent } = useGetStudentDetail(clubId, studentId)
  const { data: myPageData } = useGetMy()

  const tokenManager = new TokenManager()

  const { data: certificateList, refetch } = isStudent
    ? useGetCertificateList()
    : useGetCertificateListTeacher(studentId)
  const onCreate = () => {
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
    mutate(payload)
  }

  const { mutate } = usePostCertificate({
    onSuccess: () => {
      refetch()
      closeModal()
      setIsAddCertificate(false)
      toast.success('자격증을 추가하였습니다.')
    },
  })
  useEffect(() => {
    setIsRole(
      tokenManager.authority
        ? roleArray.includes(tokenManager.authority)
        : false
    )
    setIsStudent(tokenManager.authority === 'ROLE_STUDENT')
  }, [])

  return (
    <div>
      <S.SlideBg url={Bg2}>
        <S.BgContainer>
          <S.ClubTitle>학생 정보</S.ClubTitle>
          {isRole && (
            <S.ButtonContainer>
              <S.ClubButton
                onClick={() =>
                  push(`/main/club/${clubId}/student/${studentId}/activity`)
                }
              >
                <PersonOut />
                <span>학생 활동</span>
              </S.ClubButton>
            </S.ButtonContainer>
          )}
        </S.BgContainer>
      </S.SlideBg>
      <S.CertificateWrapper>
        <S.CertificateContainer>
          <S.ProfileBox>
            <h3>{clubStudent?.data.name}</h3>
            <S.ProfileInfoBox>
              <span>{clubStudent?.data.phoneNumber}</span>
              <span>{clubStudent?.data.email}</span>
              <span>
                총 학점 <b>{clubStudent?.data.credit}</b>
              </span>
            </S.ProfileInfoBox>
          </S.ProfileBox>
          <S.CertificateBox>
            <S.CertificatePlusBox>
              <h3>자격증</h3>
              <S.PlusCertificateIcon
                onClick={() => setIsAddCertificate((prev) => !prev)}
              >
                {isStudent && <PlusCertificate />}
              </S.PlusCertificateIcon>
            </S.CertificatePlusBox>
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
                  <S.AddCertificateIcon
                    onClick={() =>
                      certificateText.trim() !== '' &&
                      certificateDateText.trim() !== ''
                        ? openModal(
                            <AppropriationModal
                              isApprove={true}
                              question='자격증 정보를 추가하시겠습니까?'
                              title={certificateText}
                              purpose='추가하기'
                              onAppropriation={onCreate}
                            />
                          )
                        : toast.info('자격증 정보를 입력해주세요')
                    }
                  >
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
              {certificateList?.data?.certifications.map((certificate, idx) => (
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
        </S.CertificateContainer>
      </S.CertificateWrapper>
    </div>
  )
}

export default StudentPage
