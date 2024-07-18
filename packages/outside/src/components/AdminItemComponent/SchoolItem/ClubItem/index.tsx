import { ModifyClubValues, useDeleteClub, usePatchClub } from '@bitgouel/api'
import {
  AppropriationModal,
  FieldEnumToKor,
  FieldToEnum,
  useModal,
} from '@bitgouel/common'
import { ClubsType } from '@bitgouel/types'
import { useState } from 'react'
import { toast } from 'react-toastify'
import CompoundAdminItemComponent from '../../CompoundAdminItemComponent'

interface Props {
  schoolId: string
  club: ClubsType
  onSuccess: (message: string) => void
}

const ClubItem = ({ schoolId, club, onSuccess }: Props) => {
  const { openModal, closeModal } = useModal()
  const [modifyFlag, setModifyFlag] = useState<boolean>()
  const [nameModifyText, setNameModifyText] = useState<string>(club.name)
  const [fieldModifyText, setFieldModifyText] = useState<string>(
    FieldEnumToKor[club.field]
  )

  const { mutate: modifyClub } = usePatchClub(club.id, {
    onSuccess: () => onSuccess('동아리 정보를 수정하였습니다.'),
  })

  const { mutate: deleteClub } = useDeleteClub(club.id, {
    onSuccess: () => onSuccess('동아리를 삭제하였습니다.'),
  })

  const onModifyClub = () => {
    if (!modifyFlag) return setModifyFlag(true)
    if (
      nameModifyText === club.name &&
      fieldModifyText === FieldEnumToKor[club.field]
    )
      return setModifyFlag(false)
    if (!nameModifyText.length || !fieldModifyText.length)
      return toast.info('수정할 이름을 작성해주세요.')

    const modifyClubBody: ModifyClubValues = {
      name: nameModifyText,
      field: FieldToEnum[fieldModifyText],
      schoolId,
    }

    openModal(
      <AppropriationModal
        isApprove={true}
        question='동아리 정보를 수정하시겠습니까?'
        purpose='수정하기'
        title={`${club.name} -> ${nameModifyText}, ${
          FieldEnumToKor[club.field]
        } -> ${fieldModifyText}`}
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
    <CompoundAdminItemComponent>
      <CompoundAdminItemComponent.AdminToggleItemContainer>
        <div
          style={{
            display: 'flex',
            gap: '4rem',
          }}
        >
          <CompoundAdminItemComponent.OtherItem
            text={club.name}
            width='15rem'
            modifyFlag={modifyFlag}
            modifyText={nameModifyText}
            setModifyText={setNameModifyText}
          />
          <CompoundAdminItemComponent.OtherItem
            text={FieldEnumToKor[club.field]}
            width='10.5rem'
            modifyFlag={modifyFlag}
            modifyText={fieldModifyText}
            setModifyText={setFieldModifyText}
          />
        </div>
        <CompoundAdminItemComponent.ControlButton
          modifyFlag={modifyFlag}
          isModify={true}
          isDelete={true}
          onModify={onModifyClub}
          onDelete={onDeleteClub}
        />
      </CompoundAdminItemComponent.AdminToggleItemContainer>
    </CompoundAdminItemComponent>
  )
}

export default ClubItem
