import { CommonCheckBox, ToggleArrowIcon } from '@bitgouel/common'
import { Dispatch, ReactNode, SetStateAction } from 'react'
import ModifyInput from './ModifyInput'
import * as S from './style'

const CompoundAdminItemComponent = ({ children }: { children: ReactNode }) => {
  return <S.ScrollBox>{children}</S.ScrollBox>
}

const AdminItemContainer = ({ children }: { children: ReactNode }) => {
  return <S.AdminItemContainer>{children}</S.AdminItemContainer>
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
  isModify: boolean
  isDelete: boolean
  modifyFlag?: boolean
  onModify?: () => void
  onDelete?: () => void
}

const ControlButton = ({
  isModify,
  isDelete,
  modifyFlag,
  onModify,
  onDelete,
}: ControlButtonProps) => {
  return (
    <S.ControlButtons onClick={onModify}>
      {isModify && (
        <S.ModifyText>{modifyFlag ? '수정완료' : '수정하기'}</S.ModifyText>
      )}
      {isDelete && <S.DeleteText onClick={onDelete}>삭제하기</S.DeleteText>}
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

CompoundAdminItemComponent.AdminItemContainer = AdminItemContainer
CompoundAdminItemComponent.AdminCheckboxItemContainer = AdminCheckboxItemContainer
CompoundAdminItemComponent.AdminToggleItemContainer = AdminToggleItemContainer
CompoundAdminItemComponent.AdminItemCheckboxName = AdminItemCheckboxName
CompoundAdminItemComponent.AdminItemName = AdminItemName
CompoundAdminItemComponent.OtherItem = OtherItem
CompoundAdminItemComponent.ControlButton = ControlButton
CompoundAdminItemComponent.ToggleIcon = ToggleIcon

export default CompoundAdminItemComponent