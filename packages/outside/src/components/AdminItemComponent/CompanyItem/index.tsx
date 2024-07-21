import { companyQueryKeys, useDeleteUniversity } from '@bitgouel/api'
import { AppropriationModal, useModal } from '@bitgouel/common'
import { useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import CompoundAdminItemComponent from '../CompoundAdminItemComponent'

interface Props {
  companyId: string
  name: string
  nameWidth: string
}

const CompanyItem = ({ companyId, name, nameWidth }: Props) => {
  const { openModal, closeModal } = useModal()
  const queryClient = useQueryClient()

  const onSuccess = (message: string) => {
    closeModal()
    queryClient.invalidateQueries(companyQueryKeys.getCompany())
    toast.success(message)
  }

  const { mutate: deleteUniversity } = useDeleteUniversity(companyId, {
    onSuccess: () => onSuccess('기업을 삭제하였습니다.'),
  })

  const onDeleteCompany = () =>
    openModal(
      <AppropriationModal
        isApprove={false}
        question='대학을 삭제하시겠습니까?'
        purpose='삭제하기'
        title={name}
        onAppropriation={(callbacks) => deleteUniversity(undefined, callbacks)}
      />
    )

  return (
    <CompoundAdminItemComponent>
      <CompoundAdminItemComponent.AdminItemContainer gap='1.5rem'>
        <CompoundAdminItemComponent.AdminItemName
          name={name}
          nameWidth={nameWidth}
        />
        <CompoundAdminItemComponent.ControlButton
          isModify={false}
          isDelete={true}
          onDelete={onDeleteCompany}
        />
      </CompoundAdminItemComponent.AdminItemContainer>
    </CompoundAdminItemComponent>
  )
}

export default CompanyItem
