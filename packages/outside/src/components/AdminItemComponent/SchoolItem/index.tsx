import {
  CreateClubValues,
  schoolQueryKeys,
  useDeleteSchool,
} from '@bitgouel/api'
import { AppropriationModal, FieldToEnum, useModal } from '@bitgouel/common'
import { ClubsType, FieldEnum } from '@bitgouel/types'
import { DisplayBarSpan } from '@outside/components/AdminDisplayInfo/style'
import { useQueryClient } from '@tanstack/react-query'
import { Dispatch, SetStateAction, useState } from 'react'
import { toast } from 'react-toastify'
import CompoundAdminItemComponent from '../CompoundAdminItemComponent'
import {
  ToggleDisplayBar,
  ToggleListContainer,
} from '../CompoundAdminItemComponent/style'
import ClubItem from './ClubItem'
import { usePostClub } from '@bitgouel/api'

interface Props {
  schoolId: string
  name: string
  nameWidth: string
  otherItemList: { width: string; text: string }[]
  clubs: ClubsType[]
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
  clubs,
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
    { width: string; text: string }[][]
  >([])

  const onAdd = () => {
    setAddToggleList((prevState) => [
      ...prevState,
      [
        { width: '15rem', text: '' },
        { width: '10.5rem', text: '' },
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
    if (!addName.length) return toast.info('학과 이름을 작성해주세요.')

    const createClubBody: CreateClubValues = {
      name: addToggleList[index][0].text,
      field: FieldToEnum[addToggleList[index][1].text],
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
    <CompoundAdminItemComponent>
      <CompoundAdminItemComponent.AdminItemContainer gap='4.75rem'>
        <CompoundAdminItemComponent.AdminItemName
          name={name}
          nameWidth={nameWidth}
        />
        {otherItemList.map((item, idx) => (
          <CompoundAdminItemComponent.OtherItem
            key={idx}
            width={item.width}
            text={item.text}
          />
        ))}
        <CompoundAdminItemComponent.ControlButton
          isModify={true}
          isDelete={true}
          onModify={() => {}}
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
          {clubs.map((club) => (
            <ClubItem key={club.id} schoolId={schoolId} club={club} />
          ))}
          {addToggleList.map((addInputList, listIndex) => (
            <CompoundAdminItemComponent.AddToggle
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
          <CompoundAdminItemComponent.AddText text='동아리' onAdd={onAdd} />
        </ToggleListContainer>
      )}
    </CompoundAdminItemComponent>
  )
}

export default SchoolItem
