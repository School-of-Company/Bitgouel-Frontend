import {
  ModifyClubValues,
  schoolQueryKeys,
  useDeleteClub,
  usePatchClub,
} from '@bitgouel/api'
import { AppropriationModal, CompoundListItemComponent, FieldEnumToKor, useModal } from '@bitgouel/common'
import { ClubsType, FieldEnumType } from '@bitgouel/types'
import { useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { toast } from 'react-toastify'

const ClubItem = ({ club }: { club: ClubsType }) => {
  const { openModal, closeModal } = useModal()
  const [modifyFlag, setModifyFlag] = useState<boolean>()
  const [nameModifyText, setNameModifyText] = useState<string>(club.name)
  const [fieldModifyText, setFieldModifyText] = useState<FieldEnumType>(
    club.field
  )
  const queryClient = useQueryClient()

  const onSuccess = (message: string) => {
    setModifyFlag(false)
    closeModal()
    queryClient.invalidateQueries(schoolQueryKeys.getSchool())
    toast.success(message)
  }

  const { mutate: modifyClub } = usePatchClub(club.id, {
    onSuccess: () => onSuccess('동아리 정보를 수정하였습니다.'),
  })

  const { mutate: deleteClub } = useDeleteClub(club.id, {
    onSuccess: () => onSuccess('동아리를 삭제하였습니다.'),
  })

  const onModifyClub = () => {
    if (!modifyFlag) return setModifyFlag(true)
    if (nameModifyText === club.name && fieldModifyText === club.field)
      return setModifyFlag(false)
    if (!nameModifyText.length || !fieldModifyText.length)
      return toast.info('수정할 이름을 작성해주세요.')

    const modifyClubBody: ModifyClubValues = {
      name: nameModifyText,
      field: fieldModifyText,
    }

    openModal(
      <AppropriationModal
        isApprove={true}
        question='동아리 정보를 수정하시겠습니까?'
        purpose='수정하기'
        title={`${club.name} -> ${nameModifyText}, ${
          FieldEnumToKor[club.field]
        } -> ${FieldEnumToKor[fieldModifyText]}`}
        onAppropriation={(callbacks) => modifyClub(modifyClubBody, callbacks)}
      />
    )
  }

  const onDeleteClub = () =>
    openModal(
      <AppropriationModal
        isApprove={false}
        question='동아리를 삭제하시겠습니까?'
        purpose='삭제하기'
        title={club.name}
        onAppropriation={(callbacks) => deleteClub(undefined, callbacks)}
      />
    )

  return (
    <CompoundListItemComponent>
      <CompoundListItemComponent.AdminToggleItemContainer>
        <div
          style={{
            display: 'flex',
            gap: '4rem',
          }}
        >
          <CompoundListItemComponent.OtherItem
            text={club.name}
            width='15rem'
            modifyFlag={modifyFlag}
            modifyText={nameModifyText}
            setModifyText={setNameModifyText}
          />
          <CompoundListItemComponent.AdminFieldScrollName
            name={FieldEnumToKor[club.field]}
            nameWidth='10.5rem'
            modifyFlag={modifyFlag}
            modifyText={fieldModifyText}
            setModifyText={setFieldModifyText}
            modifyWidth='10.5rem'
          />
        </div>
        <CompoundListItemComponent.ControlButton
          modifyFlag={modifyFlag}
          isModify={true}
          isDelete={true}
          onModify={onModifyClub}
          onDelete={onDeleteClub}
        />
      </CompoundListItemComponent.AdminToggleItemContainer>
    </CompoundListItemComponent>
  )
}

export default ClubItem
