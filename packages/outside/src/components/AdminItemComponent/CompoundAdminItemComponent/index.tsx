import {
  AddToggleCancelIcon,
  CommonCheckBox,
  ToggleArrowIcon,
} from '@bitgouel/common'
import { Dispatch, ReactNode, SetStateAction } from 'react'
import ModifyInputComponent from './ModifyInputComponent'
import * as S from './style'
import ModifyFieldScroll from './ModifyFieldScroll'
import { FieldEnum } from '@bitgouel/types'

const CompoundAdminItemComponent = ({ children }: { children: ReactNode }) => {
  return <S.ScrollBox>{children}</S.ScrollBox>
}

const AdminItemContainer = ({
  children,
  gap,
}: {
  children: ReactNode
  gap?: string
}) => {
  return <S.AdminItemContainer gap={gap}>{children}</S.AdminItemContainer>
}

const AdminCheckboxItemContainer = ({ children }: { children: ReactNode }) => {
  return <S.CheckboxAdminItemContainer>{children}</S.CheckboxAdminItemContainer>
}

const AdminToggleItemContainer = ({ children }: { children: ReactNode }) => {
  return <S.ToggleItemContainer>{children}</S.ToggleItemContainer>
}

interface AdminItemCheckboxNameProps {
  checkList: string[]
  checkItem: string
  handleSelectCheck: (checked: boolean, checkItem: string) => void
  name: string
  nameWidth: string
  modifyFlag?: boolean
  modifyText?: string
  setModifyText?: Dispatch<SetStateAction<string>>
  modifyWidth?: string
}

const AdminItemCheckboxName = ({
  checkList,
  checkItem,
  handleSelectCheck,
  name,
  nameWidth,
  modifyFlag,
  modifyText,
  setModifyText,
  modifyWidth,
}: AdminItemCheckboxNameProps) => {
  return (
    <S.CheckItemContainer>
      <CommonCheckBox
        checked={checkList?.includes(checkItem) || false}
        onChange={(checked: boolean) =>
          handleSelectCheck && handleSelectCheck(checked, checkItem)
        }
      />
      {!modifyFlag && <S.Name width={nameWidth}>{name}</S.Name>}
      {modifyFlag && (
        <ModifyInputComponent
          modifyText={modifyText}
          setModifyText={setModifyText}
          boxWidth={nameWidth}
          inputWidth={modifyWidth}
        />
      )}
    </S.CheckItemContainer>
  )
}

interface AdminItemNameProps {
  name: string
  nameWidth: string
  modifyFlag?: boolean
  modifyText?: string
  setModifyText?: Dispatch<SetStateAction<string>>
  modifyWidth?: string
}

const AdminItemName = ({
  name,
  nameWidth,
  modifyFlag,
  modifyText,
  setModifyText,
  modifyWidth,
}: AdminItemNameProps) => {
  return (
    <>
      {!modifyFlag && <S.Name width={nameWidth}>{name}</S.Name>}
      {modifyFlag && (
        <ModifyInputComponent
          modifyText={modifyText}
          setModifyText={setModifyText}
          boxWidth={nameWidth}
          inputWidth={modifyWidth}
        />
      )}
    </>
  )
}

interface OtherItemProps {
  width: string
  text: string
  modifyFlag?: boolean
  modifyText?: string
  setModifyText?: Dispatch<SetStateAction<string>>
  modifyWidth?: string
}

const OtherItem = ({
  text,
  width,
  modifyFlag,
  modifyText,
  setModifyText,
  modifyWidth,
}: OtherItemProps) => {
  return (
    <>
      {!modifyFlag && <S.OtherItemText width={width}>{text}</S.OtherItemText>}
      {modifyFlag && (
        <ModifyInputComponent
          modifyText={modifyText}
          setModifyText={setModifyText}
          boxWidth={width}
          inputWidth={modifyWidth}
        />
      )}
    </>
  )
}

const AdminFieldScrollName = ({
  name,
  nameWidth,
  modifyFlag,
  modifyText,
  setModifyText,
  modifyWidth,
}: AdminItemNameProps) => {
  console.log(modifyText)
  return (
    <>
      {!modifyFlag && <S.Name width={nameWidth}>{name}</S.Name>}
      {modifyFlag && (
        <ModifyFieldScroll
          modifyField={modifyText}
          setModifyField={setModifyText}
          boxWidth={nameWidth}
          underBarWidth={modifyWidth}
        />
      )}
    </>
  )
}

interface ControlButtonProps {
  isModify: boolean
  isDelete: boolean
  modifyFlag?: boolean
  onModify?: () => void
  onDelete?: () => void
  modifyTextWidth?: string
  deleteTextWidth?: string
}

const ControlButton = ({
  isModify,
  isDelete,
  modifyFlag,
  onModify,
  onDelete,
  modifyTextWidth,
  deleteTextWidth,
}: ControlButtonProps) => {
  return (
    <S.ControlButtons>
      {isModify && (
        <S.ModifyText onClick={onModify}>
          {modifyFlag ? '수정완료' : '수정하기'}
        </S.ModifyText>
      )}
      {isDelete && (
        <S.DeleteText width={deleteTextWidth} onClick={onDelete}>
          삭제하기
        </S.DeleteText>
      )}
    </S.ControlButtons>
  )
}

interface ToggleIconProps {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

const ToggleIcon = ({ isOpen, setIsOpen }: ToggleIconProps) => {
  return (
    <S.ToggleSvg isOpen={isOpen} onClick={() => setIsOpen((prev) => !prev)}>
      <ToggleArrowIcon />
    </S.ToggleSvg>
  )
}

interface AddTextProps {
  text: string
  onAdd: () => void
}

const AddText = ({ text, onAdd }: AddTextProps) => {
  return <S.AddText onClick={onAdd}>+ {text} 추가하기</S.AddText>
}

interface AddToggleProps {
  index: number
  addInputList:
    | { width: string; text: string | FieldEnum; isField: boolean }[]
    | { width: string; text: string }[]
  setAddText: (text: string, inputIndex: number) => void
  onCancel: (index: number) => void
  onComplete: (index: number) => void
}

const AddToggle = ({
  index,
  addInputList,
  setAddText,
  onCancel,
  onComplete,
}: AddToggleProps) => {
  return (
    <S.AddToggleContainer>
      <S.AddToggleBox>
        <AddToggleCancelIcon onClick={() => onCancel(index)} />
        <S.AddInputContainer>
          {addInputList.map((addInput, inputIndex) => {
            if (addInput.isField)
              return (
                <ModifyFieldScroll
                  modifyField={addInput.text}
                  setModifyField={(text: FieldEnum) =>
                    setAddText(text, inputIndex)
                  }
                  boxWidth={addInput.width}
                  underBarWidth={addInput.width}
                />
              )
            return (
              <ModifyInputComponent
                key={inputIndex}
                modifyText={addInput.text}
                setModifyText={(text: string) => setAddText(text, inputIndex)}
                inputWidth={addInput.width}
              />
            )
          })}
        </S.AddInputContainer>
      </S.AddToggleBox>
      <S.CompleteText onClick={() => onComplete(index)}>
        추가완료
      </S.CompleteText>
    </S.AddToggleContainer>
  )
}

CompoundAdminItemComponent.AdminItemContainer = AdminItemContainer
CompoundAdminItemComponent.AdminCheckboxItemContainer =
  AdminCheckboxItemContainer
CompoundAdminItemComponent.AdminToggleItemContainer = AdminToggleItemContainer
CompoundAdminItemComponent.AdminItemCheckboxName = AdminItemCheckboxName
CompoundAdminItemComponent.AdminItemName = AdminItemName
CompoundAdminItemComponent.OtherItem = OtherItem
CompoundAdminItemComponent.AdminFieldScrollName = AdminFieldScrollName
CompoundAdminItemComponent.ControlButton = ControlButton
CompoundAdminItemComponent.ToggleIcon = ToggleIcon
CompoundAdminItemComponent.AddText = AddText
CompoundAdminItemComponent.AddToggle = AddToggle

export default CompoundAdminItemComponent
