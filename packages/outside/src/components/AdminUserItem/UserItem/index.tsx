'use client'

import { UserItemListType } from '@outside/PageContainer/Admin/UserListPage';
import { Name, OtherItemText, ScrollBox, UserItemContainer } from '../style';

interface Props {
  name: string
  nameWidth: string
  userItemList: UserItemListType[]
}

const UserItem = ({
  name,
  nameWidth,
  userItemList,
}: Props) => {
  return (
    <ScrollBox>
      <UserItemContainer>
        <Name width={nameWidth}>{name}</Name>
        {userItemList.map((item, idx) => (
          <OtherItemText key={idx} width={item.width}>
            {item.text}
          </OtherItemText>
        ))}
      </UserItemContainer>
    </ScrollBox>
  )
}

export default UserItem