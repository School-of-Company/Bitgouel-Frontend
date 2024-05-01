'use client'

import { CommonCheckBox, authorityToKor } from '@bitgouel/common'
import { UserItemProps } from '@bitgouel/types'
import * as S from './style'

const UserItem = ({
  id,
  userIds,
  name,
  authority,
  status,
  handleSelectUsers,
}: UserItemProps) => {
  return (
    <div>
      <S.UserItem isCurrent={status === 'current'}>
        {status === 'request' && (
          <CommonCheckBox
            checked={userIds?.includes(id) || false}
            onChange={(checked: boolean) =>
              handleSelectUsers && handleSelectUsers(checked, id)
            }
          />
        )}
        <S.Name>{name}</S.Name>
        {authority && <S.Role>{authorityToKor[authority]}</S.Role>}
      </S.UserItem>
    </div>
  )
}

export default UserItem
