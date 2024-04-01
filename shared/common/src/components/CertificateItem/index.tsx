'use client'

import { TokenManager, usePatchModifyCertificate } from '@bitgouel/api'
import {
  AddCertificate,
  AppropriationModal,
  CalendarIcon,
  SelectCalendarModal,
  theme,
  useModal,
} from '@bitgouel/common'
import {
  CertificateProps,
  CertificateRequest,
  RoleEnumTypes,
} from '@bitgouel/types'
import { ChangeEvent, useEffect, useState } from 'react'

import * as S from './style'

const roleArray: RoleEnumTypes[] = ['ROLE_STUDENT', 'ROLE_TEACHER']

const CertificateItem: React.FC<CertificateProps> = ({
  certificateItems,
  isOpenCalendar,
  refetchModify,
}) => {
  const { id, name, acquisitionDate } = certificateItems

  const tokenManager = new TokenManager()

  const { mutate } = usePatchModifyCertificate(id, {
    onSuccess: () => {
      closeModal()
      refetchModify()
      setIsModify(false)
    },
  })
  const [isCertificateDate, setIsCertificateDate] = useState<boolean>(false)
  const [modifyText, setModifyText] = useState<string>(certificateItems.name)
  const [modifyDateText, setModifyDateText] = useState<string>(
    certificateItems.acquisitionDate
  )
  const [certificateDate, setCertificateDate] = useState<Date>(new Date())
  const { openModal, closeModal } = useModal()

  const [isModify, setIsModify] = useState<boolean>(false)
  const [isRole, setIsRole] = useState<boolean>(false)

  const onModify = () => {
    const payload: CertificateRequest = {
      name: modifyText,
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

  useEffect(() => {
    setIsRole(
      tokenManager.authority
        ? roleArray.includes(tokenManager.authority)
        : false
    )
  }, [])

  return (
    <>
      {isModify ? (
        <S.AddCertificateBox>
          <S.ListToggle list='추가' />
          <S.AddCertificateInput
            type='text'
            value={modifyText}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setModifyText(e.target.value)
            }
          />
          <S.AddCertificateDateBox>
            <S.SelectDateContainer>
              {isCertificateDate && isOpenCalendar && (
                <SelectCalendarModal
                  date={certificateDate}
                  setDate={setCertificateDate}
                  setText={(value) => {
                    setModifyDateText(value)
                  }}
                />
              )}
              <div onClick={() => setIsCertificateDate((prev) => !prev)}>
                <CalendarIcon />
              </div>
            </S.SelectDateContainer>
            <S.ShowDateText>{modifyDateText}</S.ShowDateText>
          </S.AddCertificateDateBox>
          <S.AddCertificateIcon
            onClick={() =>
              (modifyText.trim() !== '' &&
                modifyDateText.trim() !== '' &&
                name !== modifyText) ||
              acquisitionDate
                .split('')
                .map((v) => (v === '-' ? '.' : v))
                .join('') !== modifyDateText
                ? openModal(
                    <AppropriationModal
                      isApprove={true}
                      question='자격증 정보를 수정하시겠습니까?'
                      title={modifyText as ''}
                      purpose='수정하기'
                      onAppropriation={onModify}
                    />
                  )
                : name === modifyText &&
                  acquisitionDate
                    .split('')
                    .map((v) => (v === '-' ? '.' : v))
                    .join('') === modifyDateText
            }
          >
            <AddCertificate
              color={
                (modifyText.trim() !== '' &&
                  modifyDateText.trim() !== '' &&
                  name !== modifyText) ||
                acquisitionDate
                  .split('')
                  .map((v) => (v === '-' ? '.' : v))
                  .join('') !== modifyDateText
                  ? theme.color.main
                  : theme.color.gray['700']
              }
            />
          </S.AddCertificateIcon>
        </S.AddCertificateBox>
      ) : (
        <S.CertificateItemBox id={id}>
          <S.ListToggle list='추가됨' />
          <span>{name}</span>
          <span>
            {acquisitionDate
              .split('')
              .map((v) => (v === '-' ? '.' : v))
              .join('')}
          </span>
          {isRole && (
            <S.ModifyText
              onClick={() => {
                setIsModify(true)
              }}
            >
              수정하기
            </S.ModifyText>
          )}
        </S.CertificateItemBox>
      )}
    </>
  )
}

export default CertificateItem
