'use client'

import { CommonCheckBox } from '@bitgouel/common'
import { UserItemListType } from '@outside/PageContainer/Admin/UserListPage'
import {
  CheckItemContainer,
  CheckboxUserItemContainer,
  Name,
  OtherItemText,
  ScrollBox,
} from '../style'

interface Props {
  name: string
  nameWidth: string
  userItemList: UserItemListType[]
  id: string
  ids: string[]
  handleSelectUsers: (checked: boolean, id: string) => void
}

const CheckboxUserItem = ({
  name,
  nameWidth,
  userItemList,
  id,
  ids,
  handleSelectUsers,
}: Props) => {
  return (
    <ScrollBox>
      <CheckboxUserItemContainer>
        <CheckItemContainer>
          <CommonCheckBox
            checked={ids?.includes(id) || false}
            onChange={(checked: boolean) =>
              handleSelectUsers && handleSelectUsers(checked, id)
            }
          />
          <Name width={nameWidth}>{name}</Name>
        </CheckItemContainer>
        {userItemList.map((item, idx) => (
          <OtherItemText key={idx} width={item.width}>
            {item.text}
          </OtherItemText>
        ))}
      </CheckboxUserItemContainer>
    </ScrollBox>
  )
}

export default CheckboxUserItem
