import {
  governmentQueryKeys,
  useDeleteGovernment
} from '@bitgouel/api'
import { AppropriationModal, CompoundListItemComponent, useModal } from '@bitgouel/common'
import { useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify'

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
    onError(error) {
      if (error.response?.status === 400)
        toast.error('아직 유관기관 강사가 존재합니다.')
      else toast.error('유관기관 삭제에 오류가 발생했습니다.')
    },
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
    <CompoundListItemComponent>
      <CompoundListItemComponent.AdminItemContainer gap='1.5rem'>
        <CompoundListItemComponent.AdminItemName
          name={name}
          nameWidth={nameWidth}
        />
        <CompoundListItemComponent.OtherItem
          text={otherName}
          width={otherNameWidth}
        />
        <CompoundListItemComponent.ControlButton
          isModify={false}
          isDelete={true}
          onDelete={onDeleteUniversity}
          deleteTextWidth='4rem'
        />
      </CompoundListItemComponent.AdminItemContainer>
    </CompoundListItemComponent>
  )
}

export default GovernmentItem
