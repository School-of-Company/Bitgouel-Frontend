import React from 'react'
import { CheckItemContainer, Name } from '../../style'
import { CommonCheckBox } from '@bitgouel/common'

interface Props {
  ids: string[]
  id: string
  handleSelectUsers: (checked: boolean, id: string) => void
  toggleItems: string[]
  name: string
  nameWidth: string
}

const CheckBoxText = ({
  ids,
  id,
  handleSelectUsers,
  toggleItems,
  name,
  nameWidth,
}: Props) => {
  return (
    <CheckItemContainer>
      <CommonCheckBox
        checked={ids?.includes(id) || false}
        onChange={(checked: boolean) =>
          handleSelectUsers && handleSelectUsers(checked, id)
        }
        disabled={toggleItems.length > 0}
      />
      <Name width={nameWidth}>{name}</Name>
    </CheckItemContainer>
  )
}

export default CheckBoxText
