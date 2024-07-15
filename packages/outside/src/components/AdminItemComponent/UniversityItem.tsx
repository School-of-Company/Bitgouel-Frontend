import {
  universityQueryKeys,
  useDeleteDepartment,
  useDeleteUniversity,
  usePatchUniversity,
} from '@bitgouel/api'
import { AppropriationModal, useModal } from '@bitgouel/common'
import { useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { DisplayBarSpan } from '../AdminDisplayInfo/style'
import CompoundAdminItemComponent from './CompoundAdminItemComponent'
import {
  ToggleDisplayBar,
  ToggleListContainer,
} from './CompoundAdminItemComponent/style'

interface Props {
  universityId: string
  name: string
  nameWidth: string
  departments: string[]
}

const ToggleDisplayBarList = [{ width: '15rem', text: '학과' }]

const UniversityItem = ({
  universityId,
  name,
  nameWidth,
  departments,
}: Props) => {
  const [modifyFlag, setModifyFlag] = useState(false)
  const [modifyText, setModifyText] = useState(name)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const { openModal, closeModal } = useModal()
  const queryClient = useQueryClient()
  const onSuccess = (message: string) => {
    setModifyFlag(false)
    closeModal()
    queryClient.invalidateQueries(universityQueryKeys.getUniversity())
    toast.success(message)
  }
  const { mutate: modifyUniversity } = usePatchUniversity(universityId, {
    onSuccess: () => onSuccess('대학을 수정하였습니다.'),
  })
  const { mutate: deleteUniversity } = useDeleteUniversity(universityId, {
    onSuccess: () => onSuccess('대학을 삭제하였습니다.'),
  })
  const { mutate: deleteDepartment } = useDeleteDepartment(universityId, {
    onSuccess: () => onSuccess('학과를 삭제하였습니다.'),
  })

  const onModifyUniversity = () => {
    if (!modifyFlag) return setModifyFlag(true)
    if (modifyText === name)
      return toast.info('기존과 다른 이름을 작성해주세요.')
    if (!modifyText.length) return toast.info('대학 이름을 작성해주세요.')

    openModal(
      <AppropriationModal
        isApprove={true}
        question='대학을 수정하시겠습니까?'
        purpose='수정하기'
        title={modifyText}
        onAppropriation={(callbacks) =>
          modifyUniversity({ universityName: modifyText }, callbacks)
        }
      />
    )
  }

  const onDeleteUniversity = () =>
    openModal(
      <AppropriationModal
        isApprove={false}
        question='대학을 삭제하시겠습니까?'
        purpose='삭제하기'
        title={name}
        onAppropriation={(callbacks) => deleteUniversity(undefined, callbacks)}
      />
    )

  const onDeleteDepartment = () =>
    openModal(
      <AppropriationModal
        isApprove={false}
        question='학과를 삭제하시겠습니까?'
        purpose='삭제하기'
        title={name}
        onAppropriation={(callbacks) => deleteDepartment(undefined, callbacks)}
      />
    )

  return (
    <CompoundAdminItemComponent>
      <CompoundAdminItemComponent.AdminItemContainer>
        <CompoundAdminItemComponent.AdminItemName
          name={name}
          nameWidth={nameWidth}
          modifyFlag={modifyFlag}
          modifyText={modifyText}
          setModifyText={setModifyText}
        />
        <CompoundAdminItemComponent.ControlButton
          modifyFlag={modifyFlag}
          isModify={true}
          isDelete={true}
          onModify={onModifyUniversity}
          onDelete={onDeleteUniversity}
        />
        <CompoundAdminItemComponent.ToggleIcon
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </CompoundAdminItemComponent.AdminItemContainer>
      {isOpen && (
        <ToggleListContainer>
          <ToggleDisplayBar>
            {ToggleDisplayBarList.map((toggleDisplay) => (
              <DisplayBarSpan width={toggleDisplay.width}>
                {toggleDisplay.text}
              </DisplayBarSpan>
            ))}
          </ToggleDisplayBar>
          {departments.map((department) => (
            <CompoundAdminItemComponent>
              <CompoundAdminItemComponent.AdminToggleItemContainer>
                <CompoundAdminItemComponent.OtherItem
                  text={department}
                  width='6rem'
                  modifyFlag={false}
                />
                <CompoundAdminItemComponent.ControlButton
                  isModify={false}
                  isDelete={true}
                  onDelete={onDeleteDepartment}
                />
              </CompoundAdminItemComponent.AdminToggleItemContainer>
            </CompoundAdminItemComponent>
          ))}
        </ToggleListContainer>
      )}
    </CompoundAdminItemComponent>
  )
}

export default UniversityItem
