import {
  useGetUniversity,
  useGetUserList,
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
import { CheckboxToggleUserItem } from '../AdminUserItem'
import { UserItemListType } from '@outside/PageContainer/Admin/UserListPage'

type messageType = '대학을 수정하였습니다.' | '대학을 삭제하였습니다.'
const toggleDisplayBarList: UserItemListType[] = [
  { width: '15rem', text: '학과' },
]

const UniversityList = () => {
  const [universityIds, setUniversityIds] = useState<string[]>([])
  const [departmentsNames, setDepartmentsNames] = useState<string[]>([])
  const { data, refetch, isLoading } = useGetUniversity()
  const { openModal, closeModal } = useModal()

  const onSuccess = (message: messageType) => {
    closeModal()
    refetch()
    toast.success(message)
  }

  const { mutate } = usePatchUserApprove(universityIds, {
    onSuccess: () => onSuccess('대학을 삭제하였습니다.'),
  })

  const onDeleteModal = () => {
    if (universityIds.length === 0 || departmentsNames.length === 0) return

    openModal(
      <AppropriationModal
        isApprove={false}
        question='대학을 삭제하시겠습니까?'
        purpose='삭제하기'
        title=''
        onAppropriation={(callbacks) => mutate(undefined, callbacks)}
      />
    )
  }

  const onAll = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked)
      setUniversityIds(
        data?.universities.map((university) => String(university.id))
      )
    else setUniversityIds([])
  }

  const handleSelectUsers = (checked: boolean, userId: string) => {
    if (departmentsNames.length) setDepartmentsNames([])
    handleSelect({ checked, id: userId, setIds: setUniversityIds })
  }

  const handleSelectToggle = (checked: boolean, toggleItem: string) => {
    if (universityIds) setUniversityIds([])
    if (checked) setDepartmentsNames((prev) => [...prev, toggleItem])
    else
      setDepartmentsNames((prev) =>
        prev.filter((toggle) => toggle !== toggleItem)
      )
  }

  return (
    <>
      <UniversityDisplayInfo onAll={onAll} onDeleteModal={onDeleteModal} />
      <S.UserListContainer>
        {isLoading && <WaitingAnimation title={'대학 명단을'} />}
        {data?.universities.length <= 0 ? (
          <NoneResult title={'대학 명단이'} />
        ) : (
          data?.universities.map((university) => (
            <CheckboxToggleUserItem
              key={university.id}
              name={university.universityName}
              nameWidth='57.8rem'
              toggleDisplayBarList={toggleDisplayBarList}
              toggleList={university.departments}
              id={String(university.id)}
              ids={universityIds}
              handleSelectUsers={handleSelectUsers}
              toggleItems={departmentsNames}
              handleSelectToggle={handleSelectToggle}
            />
          ))
        )}
      </S.UserListContainer>
    </>
  )
}

export default UniversityList
