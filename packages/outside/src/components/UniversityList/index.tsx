import {
  universityQueryKeys,
  useDeleteUserWithdraw,
  useGetUniversity,
  useGetUserList,
  usePatchUniversity,
  usePatchUserApprove,
} from '@bitgouel/api'
import {
  AppropriationModal,
  NoneResult,
  WaitingAnimation,
  handleSelect,
  useModal,
} from '@bitgouel/common'
import { ChangeEvent, useState } from 'react'
import { toast } from 'react-toastify'
import { UniversityDisplayInfo } from '../AdminDisplayInfo'
import * as S from './style'
import { useQueryClient } from '@tanstack/react-query'
import AdminItemComponent from '../AdminItemComponent'

const toggleDisplayBarList: { width: string; text: string }[] = [
  { width: '15rem', text: '학과' },
]

const UniversityList = () => {
  const [universityIds, setUniversityIds] = useState<string[]>([])
  const [departmentsNames, setDepartmentsNames] = useState<string[]>([])
  const { data, refetch, isLoading } = useGetUniversity()
  const { openModal, closeModal } = useModal()
  const [universityId, setUniversityId] = useState<string>('')

  const onSuccess = () => {
    closeModal()
    refetch()
    toast.success('대학을 삭제하였습니다.')
  }

  const { mutate: deleteUniversity } = useDeleteUserWithdraw(universityIds, {
    onSuccess,
  })

  const onDeleteModal = () => {
    if (universityIds.length === 0 || departmentsNames.length === 0) return

    openModal(
      <AppropriationModal
        isApprove={false}
        question='대학을 삭제하시겠습니까?'
        purpose='삭제하기'
        title=''
        onAppropriation={(callbacks) => deleteUniversity(undefined, callbacks)}
      />
    )
  }

  const queryClient = useQueryClient()
  const { mutate: modifyUniversity } = usePatchUniversity(universityId, {
    onSuccess: () => {
      queryClient.invalidateQueries(universityQueryKeys.getUniversity())
      closeModal()
      toast.success('대학을 수정하였습니다.')
    },
  })

  const onUniversityModify = (universityId: string, modifyText: string) => {
    setUniversityId(universityId)
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

  return (
    <>
      <UniversityDisplayInfo />
      <S.UserListContainer>
        {isLoading && <WaitingAnimation title={'대학 명단을'} />}
        {data?.universities.length <= 0 ? (
          <NoneResult title={'대학 명단이'} />
        ) : (
          data?.universities.map((university) => (
            <AdminItemComponent>
              <AdminItemComponent.AdminItemName
                name={university.universityName}
                nameWidth='53.5rem'
              />
            </AdminItemComponent>
          ))
        )}
      </S.UserListContainer>
    </>
  )
}

export default UniversityList
