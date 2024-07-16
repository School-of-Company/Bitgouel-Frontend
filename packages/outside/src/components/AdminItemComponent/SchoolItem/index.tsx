import {
  schoolQueryKeys,
  universityQueryKeys,
  useDeleteDepartment,
  useDeleteSchool,
  useDeleteUniversity,
  usePatchSchool,
  usePatchUniversity,
  usePostDepartment,
} from '@bitgouel/api'
import { AppropriationModal, useModal } from '@bitgouel/common'
import { useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { DisplayBarSpan } from '../../AdminDisplayInfo/style'
import CompoundAdminItemComponent from '../CompoundAdminItemComponent'
import {
  ToggleDisplayBar,
  ToggleListContainer,
} from '../CompoundAdminItemComponent/style'
import { ClubsType } from '@bitgouel/types'

interface Props {
  schoolId: string
  name: string
  nameWidth: string
  clubs: ClubsType[]
}

const ToggleDisplayBarList = [
  { width: '15rem', text: '동아리 이름' },
  { width: 'auto', text: '분야' },
]

const UniversityItem = ({ schoolId, name, nameWidth, clubs }: Props) => {
  const [modifyFlag, setModifyFlag] = useState(false)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const { openModal, closeModal } = useModal()
  const queryClient = useQueryClient()
  const onSuccess = (message: string) => {
    setModifyFlag(false)
    closeModal()
    queryClient.invalidateQueries(schoolQueryKeys.getSchool())
    toast.success(message)
  }

  const { mutate: deleteSchool } = useDeleteSchool(schoolId, {
    onSuccess: () => onSuccess('학교를 삭제하였습니다.'),
  })

  const onDeleteSchool = () =>
    openModal(
      <AppropriationModal
        isApprove={false}
        question='학교를 삭제하시겠습니까?'
        purpose='삭제하기'
        title={name}
        onAppropriation={(callbacks) => deleteSchool(undefined, callbacks)}
      />
    )

  return (
    <CompoundAdminItemComponent>
      <CompoundAdminItemComponent.AdminItemContainer gap='4.75rem'>
        <CompoundAdminItemComponent.AdminItemName
          name={name}
          nameWidth={nameWidth}
        />

        <CompoundAdminItemComponent.ControlButton
          modifyFlag={modifyFlag}
          isModify={true}
          isDelete={true}
          onDelete={onDeleteSchool}
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
              <DisplayBarSpan
                key={toggleDisplay.text}
                width={toggleDisplay.width}
              >
                {toggleDisplay.text}
              </DisplayBarSpan>
            ))}
          </ToggleDisplayBar>
        </ToggleListContainer>
      )}
    </CompoundAdminItemComponent>
  )
}

export default UniversityItem
