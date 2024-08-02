import {
  CreateClubValues,
  schoolQueryKeys,
  useDeleteSchool,
  usePostClub,
} from '@bitgouel/api'

import {
  AppropriationModal,
  CompoundListItemComponent,
  useModal,
} from '@bitgouel/common'

import { FieldEnumType, SchoolsType } from '@bitgouel/types'

import { DisplayBarSpan } from '@outside/components/AdminDisplayInfo/style'
import { CreateSchoolModal } from '@outside/modals'
import { useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'

import {
  ToggleDisplayBar,
  ToggleListContainer,
} from '@bitgouel/common/src/components/CompoundListItemComponent/style'
import { toast } from 'react-toastify'
import ClubItem from './ClubItem'

interface Props {
  schoolId: string
  name: string
  nameWidth: string
  otherItemList: { width: string; text: string }[]
  schools: SchoolsType
}

const ToggleDisplayBarList = [
  { width: '15rem', text: '동아리 이름' },
  { width: 'auto', text: '분야' },
]

const SchoolItem = ({
  schoolId,
  name,
  nameWidth,
  otherItemList,
  schools,
}: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { openModal, closeModal } = useModal()
  const queryClient = useQueryClient()
  const onSuccess = (message: string) => {
    closeModal()
    queryClient.invalidateQueries(schoolQueryKeys.getSchool())
    toast.success(message)
  }

  const { mutate: createClub } = usePostClub(schoolId, {
    onSuccess: () => onSuccess('동아리를 생성했습니다.'),
  })

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

  const [addToggleList, setAddToggleList] = useState<
    { width: string; text: string | FieldEnumType; isField: boolean }[][]
  >([])

  const onAdd = () => {
    setAddToggleList((prevState) => [
      ...prevState,
      [
        { width: '15rem', text: '', isField: false },
        { width: '10.5rem', text: '', isField: true },
      ],
    ])
  }

  const onCancel = (index: number) => {
    const newAddInputList = [...addToggleList]
    newAddInputList.splice(index, 1)
    setAddToggleList(newAddInputList)
  }

  const handleChange = (listIndex, inputIndex, text) => {
    const newToggls = [...addToggleList]
    newToggls[listIndex][inputIndex].text = text
    setAddToggleList(newToggls)
  }

  const onComplete = (index: number) => {
    const addName: string = addToggleList[index][0].text
    if (!addName.length) return toast.info('동아리 정보를 작성해주세요.')

    const createClubBody: CreateClubValues = {
      name: addToggleList[index][0].text,
      field: addToggleList[index][1].text as FieldEnumType,
    }

    openModal(
      <AppropriationModal
        isApprove={true}
        question='학과를 추가하시겠습니까?'
        purpose='추가하기'
        title={addName}
        onAppropriation={(callbacks) => createClub(createClubBody, callbacks)}
      />
    )
  }

  return (
    <CompoundListItemComponent>
      <CompoundListItemComponent.AdminItemContainer gap='4.75rem'>
        <CompoundListItemComponent.AdminItemName
          name={name}
          nameWidth={nameWidth}
        />
        {otherItemList.map((item, idx) => (
          <CompoundListItemComponent.OtherItem
            key={idx}
            width={item.width}
            text={item.text}
          />
        ))}
        <CompoundListItemComponent.ControlButton
          isModify={true}
          isDelete={true}
          onModify={() => {
            openModal(
              <CreateSchoolModal type='학교 정보 수정' schoolItems={schools} />
            )
          }}
          onDelete={onDeleteSchool}
        />
        <CompoundListItemComponent.ToggleIcon
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </CompoundListItemComponent.AdminItemContainer>
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
          {schools.clubs.map((club) => (
            <ClubItem key={club.id} club={club} />
          ))}
          {addToggleList.map((addInputList, listIndex) => (
            <CompoundListItemComponent.AddToggle
              key={listIndex}
              index={listIndex}
              addInputList={addInputList}
              setAddText={(text, inputIndex) =>
                handleChange(listIndex, inputIndex, text)
              }
              onCancel={onCancel}
              onComplete={(index: number) => onComplete(index)}
            />
          ))}
          <CompoundListItemComponent.AddText text='동아리' onAdd={onAdd} />
        </ToggleListContainer>
      )}
    </CompoundListItemComponent>
  )
}

export default SchoolItem
