import {
  companyQueryKeys,
  useDeleteCompany
} from '@bitgouel/api'
import { AppropriationModal, CompoundListItemComponent, FieldEnumToKor, useModal } from '@bitgouel/common'
import { useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify'

interface Props {
  companyId: string
  name: string
  nameWidth: string
  otherName: string
  otherNameWidth: string
}

const CompanyItem = ({
  companyId,
  name,
  nameWidth,
  otherName,
  otherNameWidth,
}: Props) => {
  const { openModal, closeModal } = useModal()
  const queryClient = useQueryClient()

  const onSuccess = (message: string) => {
    closeModal()
    queryClient.invalidateQueries(companyQueryKeys.getCompany())
    toast.success(message)
  }

  const { mutate: deleteUniversity } = useDeleteCompany(companyId, {
    onSuccess: () => onSuccess('기업을 삭제하였습니다.'),
  })

  const onDeleteCompany = () =>
    openModal(
      <AppropriationModal
        isApprove={false}
        question='기업을 삭제하시겠습니까?'
        purpose='삭제하기'
        title={name}
        onAppropriation={(callbacks) => deleteUniversity(undefined, callbacks)}
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
          text={FieldEnumToKor[otherName]}
          width={otherNameWidth}
        />
        <CompoundListItemComponent.ControlButton
          isModify={false}
          isDelete={true}
          onDelete={onDeleteCompany}
          deleteTextWidth='4rem'
        />
      </CompoundListItemComponent.AdminItemContainer>
    </CompoundListItemComponent>
  )
}

export default CompanyItem
