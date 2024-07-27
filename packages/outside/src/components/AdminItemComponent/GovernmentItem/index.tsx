import { governmentQueryKeys, useDeleteGovernment, useDeleteUniversity } from '@bitgouel/api'
import { AppropriationModal, useModal } from '@bitgouel/common'
import { useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import CompoundAdminItemComponent from '../CompoundAdminItemComponent'

interface Props {
  governmentId: string
  name: string
  nameWidth: string
  otherName: string
  otherNameWidth: string
}

const GovernmentItem = ({
  governmentId,
  name,
  nameWidth,
  otherName,
  otherNameWidth,
}: Props) => {
  const { openModal, closeModal } = useModal()
  const queryClient = useQueryClient()
  const onSuccess = (message: string) => {
    closeModal()
    queryClient.invalidateQueries(governmentQueryKeys.getGovernment())
    toast.success(message)
  }

  const { mutate: deleteGovernment } = useDeleteGovernment(governmentId, {
    onSuccess: () => onSuccess('유관기관을 삭제하였습니다.'),
  })

  const onDeleteUniversity = () =>
    openModal(
      <AppropriationModal
        isApprove={false}
        question='유관기관을 삭제하시겠습니까?'
        purpose='삭제하기'
        title={name}
        onAppropriation={(callbacks) => deleteGovernment(undefined, callbacks)}
      />
    )

  return (
    <CompoundAdminItemComponent>
      <CompoundAdminItemComponent.AdminItemContainer gap='1.5rem'>
        <CompoundAdminItemComponent.AdminItemName
          name={name}
          nameWidth={nameWidth}
        />
        <CompoundAdminItemComponent.OtherItem
          text={otherName}
          width={otherNameWidth}
        />
        <CompoundAdminItemComponent.ControlButton
          isModify={true}
          isDelete={true}
          onDelete={onDeleteUniversity}
          deleteTextWidth='4rem'
        />
      </CompoundAdminItemComponent.AdminItemContainer>
    </CompoundAdminItemComponent>
  )
}

export default GovernmentItem
