import { CommonCheckBox, ToggleArrowIcon } from '@bitgouel/common'
import { Dispatch, ReactNode, SetStateAction } from 'react'
import ModifyInput from './ModifyInput'
import * as S from './style'

const AdminItemComponent = ({ children }: { children: ReactNode }) => {
  return <S.ScrollBox>{children}</S.ScrollBox>
}

const AdminItemContainer = ({ children }: { children: ReactNode }) => {
  return <S.AdminItemContainer>{children}</S.AdminItemContainer>
}

const AdminCheckboxItemContainer = ({ children }: { children: ReactNode }) => {
  return <S.CheckboxAdminItemContainer>{children}</S.CheckboxAdminItemContainer>
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
        <ModifyInput
          modifyText={modifyText}
          setModifyText={setModifyText}
          nameWidth={nameWidth}
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
}

const AdminItemName = ({
  name,
  nameWidth,
  modifyFlag,
  modifyText,
  setModifyText,
}: AdminItemNameProps) => {
  return (
    <>
      {!modifyFlag && <S.Name width={nameWidth}>{name}</S.Name>}
      {modifyFlag && (
        <ModifyInput
          modifyText={modifyText}
          setModifyText={setModifyText}
          nameWidth={nameWidth}
        />
      )}{' '}
    </>
  )
}

interface OtherItemProps {
  width: string
  text: string
  modifyFlag?: boolean
  modifyText?: string
  setModifyText?: Dispatch<SetStateAction<string>>
}

const OtherItem = ({
  text,
  width,
  modifyFlag,
  modifyText,
  setModifyText,
}: OtherItemProps) => {
  return (
    <>
      {!modifyFlag && <S.OtherItemText width={width}>{text}</S.OtherItemText>}
      {modifyFlag && (
        <ModifyInput
          modifyText={modifyText}
          setModifyText={setModifyText}
          nameWidth={width}
        />
      )}
    </>
  )
}

interface ControlButtonProps {
  modifyFlag: boolean
  setModifyFlag: Dispatch<SetStateAction<boolean>>
  isModify: boolean
  isDelete: boolean
  onModify?: () => void
  onDelete?: () => void
}

const ControlButton = ({
  modifyFlag,
  onModify,
  onDelete,
}: ControlButtonProps) => {
  return (
    <S.ControlButtons onClick={onModify}>
      <S.ModifyText>{modifyFlag ? '수정완료' : '수정하기'}</S.ModifyText>
      <S.DeleteText onClick={onDelete}>삭제하기</S.DeleteText>
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

AdminItemComponent.AdminItemContainer = AdminItemContainer
AdminItemComponent.AdminCheckboxItemContainer = AdminCheckboxItemContainer
AdminItemComponent.AdminItemCheckboxName = AdminItemCheckboxName
AdminItemComponent.AdminItemName = AdminItemName
AdminItemComponent.OtherItem = OtherItem
AdminItemComponent.ControlButton = ControlButton
AdminItemComponent.ToggleIcon = ToggleIcon

export default AdminItemComponent
