'use client'

import { AppropriationModal, ToggleArrowIcon, useModal } from '@bitgouel/common'
import { UserItemListType } from '@outside/PageContainer/Admin/UserListPage'
import { DisplayBarSpan } from '@outside/components/AdminDisplayInfo/style'
import { useState } from 'react'
import { toast } from 'react-toastify'
import {
  CheckboxUserItemContainer,
  ModifyText,
  OtherItemText,
  ScrollBox,
  ToggleDisplayBar,
  ToggleListContainer,
  ToggleSvg,
} from '../style'
import CheckBoxText from './CheckBoxText'
import ModifyInput from './ModifyInput'
import ToggleItem from './ToggleItem'
import { universityQueryKeys, usePatchUniversity } from '@bitgouel/api'
import { useQueryClient } from '@tanstack/react-query'

interface Props {
  name: string
  nameWidth: string
  toggleDisplayBarList: UserItemListType[]
  userItemList?: UserItemListType[]
  toggleList: string[]
  id: string
  ids: string[]
  handleSelectUsers: (checked: boolean, id: string) => void
  toggleItems: string[]
  handleSelectToggle: (checked: boolean, toggleItem: string) => void
}

const CheckboxToggleUserItem = ({
  name,
  nameWidth,
  toggleDisplayBarList,
  userItemList,
  toggleList,
  id,
  ids,
  handleSelectUsers,
  toggleItems,
  handleSelectToggle,
}: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isModify, setIsModify] = useState<boolean>(false)
  const [modifyText, setModifyText] = useState<string>(name)
  const { openModal, closeModal } = useModal()
  const queryClient = useQueryClient()

  const { mutate } = usePatchUniversity(id, {
    onSuccess: () => {
      queryClient.invalidateQueries(universityQueryKeys.getUniversity())
      setIsModify(false)
      closeModal()
      toast.success('대학을 수정하였습니다.')
    },
  })

  const onModify = () => {
    if (!isModify) return setIsModify(true)
    if (modifyText === name) return setIsModify(false)
    if (!modifyText.length) return toast.info('대학교 이름을 적어주세요.')

    openModal(
      <AppropriationModal
        isApprove={true}
        question='대학을 수정하시겠습니까?'
        purpose='수정하기'
        title={modifyText}
        onAppropriation={(callbacks) =>
          mutate({ universityName: modifyText }, callbacks)
        }
      />
    )
  }

  return (
    <ScrollBox>
      <CheckboxUserItemContainer>
        {!isModify && (
          <CheckBoxText
            id={id}
            ids={ids}
            handleSelectUsers={handleSelectUsers}
            toggleItems={toggleItems}
            name={name}
            nameWidth={nameWidth}
          />
        )}
        {isModify && (
          <ModifyInput modifyText={modifyText} setModifyText={setModifyText} />
        )}
        {userItemList &&
          userItemList.map((item, idx) => (
            <OtherItemText key={idx} width={item.width}>
              {item.text}
            </OtherItemText>
          ))}
        <ModifyText onClick={onModify}>
          {isModify ? '수정완료' : '수정하기'}
        </ModifyText>
        <ToggleSvg isOpen={isOpen} onClick={() => setIsOpen((prev) => !prev)}>
          <ToggleArrowIcon />
        </ToggleSvg>
      </CheckboxUserItemContainer>
      {isOpen && (
        <ToggleListContainer>
          <ToggleDisplayBar>
            {toggleDisplayBarList.map((toggleDisplay) => (
              <DisplayBarSpan width={toggleDisplay.width}>
                {toggleDisplay.text}
              </DisplayBarSpan>
            ))}
          </ToggleDisplayBar>
          {toggleList.map((item) => (
            <ToggleItem
              key={item}
              name={item}
              ids={ids}
              nameWidth='58.25rem'
              toggleItem={item}
              toggleItems={toggleItems}
              handleSelectToggle={handleSelectToggle}
            />
          ))}
        </ToggleListContainer>
      )}
    </ScrollBox>
  )
}

export default CheckboxToggleUserItem
