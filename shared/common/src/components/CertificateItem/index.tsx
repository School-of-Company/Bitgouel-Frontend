import { ChangeEvent, useState } from 'react'
import * as S from './style'
import { usePostCertificate, usePatchModifyCertificate } from '@bitgouel/api'
import { Certificate, CertificateRequest } from '@bitgouel/types'
import { AddCertificate, CalendarIcon } from '../../assets'
import { useModal } from '../../hooks'
import { CreateModal, SelectCalendarModal } from '../../modals'
import { theme } from '../../styles'
import { useRecoilValue } from 'recoil'
import { toast } from 'react-toastify'

interface CertificateProps {
  certificateItems: Certificate
  student_id: string
  isAddCertificate: boolean
}

const CertificateItem: React.FC<CertificateProps> = ({
  certificateItems,
  student_id,
  isAddCertificate,
}) => {
  const { id, name, acquisitionDate } = certificateItems
  const { mutate: postCertificateMutate } = usePostCertificate()
  const { mutate: patchModifyCertificateMutate } = usePatchModifyCertificate(
    student_id,
    id
  )

  const [certificateText, setCertificateText] = useState<string>('')
  const [isCertificateDate, setIsCertificateDate] = useState<boolean>(false)
  const [modifyText, setModifyText] = useState<string>('')
  const [modifyDateText, setModifyDateText] = useState<string>('')
  const [certificateDate, setCertificateDate] = useState<Date>(new Date())
  const [certificateDateText, setCertificateDateText] = useState<string>('')
  const { openModal, closeModal } = useModal()

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
    postCertificateMutate(payload)
  }

  //   const onModify = (id: number, name: string, date: string) => {
  //     setCertificateList((prev) => {
  //       const changedModify = prev.map((certificate) =>
  //         certificate.id === id
  //           ? { ...certificate, isModify: true }
  //           : { ...certificate, isModify: false }
  //       )
  //       return changedModify
  //     })
  //     setModifyText(name)
  //     setModifyDateText(
  //       date
  //         .split('')
  //         .map((v) => (v === '-' ? '.' : v))
  //         .join('')
  //     )
  //   }

  //   const cancelModify = (id: number) => {
  //     setCertificateList((prev) => {
  //       const changedModify = prev.map((certificate) =>
  //         certificate.id === id
  //           ? { ...certificate, isModify: false }
  //           : certificate
  //       )
  //       return changedModify
  //     })
  //     setModifyText('')
  //     setModifyDateText('')
  //   }

  console.log(isAddCertificate)

  return (
    <>
      {/* {isAddCertificate ? (
        <S.AddCertificateBox>
          <S.ListToggle list='추가' />
          <S.AddCertificateInput
            type='text'
            value={name}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setModifyText(e.target.value)
            }
          />
          <S.AddCertificateDateBox>
            <S.SelectDateContainer>
              {isCertificateDate && (
                <SelectCalendarModal
                  date={certificateDate}
                  setDate={setCertificateDate}
                  setText={setModifyDateText}
                />
              )}
              <div onClick={() => setIsCertificateDate((prev) => !prev)}>
                <CalendarIcon />
              </div>
            </S.SelectDateContainer>
            <S.ShowDateText>{acquisitionDate}</S.ShowDateText>
          </S.AddCertificateDateBox>
          <S.AddCertificateIcon
          // onClick={() =>
          //   (modifyText.trim() !== '' &&
          //     modifyDateText.trim() !== '' &&
          //     name !== modifyText) ||
          //   acquisitionDate
          //     .split('')
          //     .map((v) => (v === '-' ? '.' : v))
          //     .join('') !== modifyDateText
          //     ? openModal(
          //         <CreateModal
          //           question='자격증 정보를 수정하시겠습니까?'
          //           title={modifyText}
          //           onCreate={() => onModify()}
          //           createText='수정하기'
          //         />
          //       )
          //     : name === modifyText &&
          //       acquisitionDate
          //         .split('')
          //         .map((v) => (v === '-' ? '.' : v))
          //         .join('') === modifyDateText &&
          //       cancelModify()
          // }
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
      ) : ( */}
      <S.CertificateItemBox id={id}>
        <S.ListToggle list='추가됨' />
        <span>{name}</span>
        <span>
          {acquisitionDate
            .split('')
            .map((v) => (v === '-' ? '.' : v))
            .join('')}
        </span>
        <S.ModifyText>수정하기</S.ModifyText>
      </S.CertificateItemBox>
      {/* )} */}
    </>
  )
}

export default CertificateItem
