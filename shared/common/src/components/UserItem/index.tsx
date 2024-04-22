'use client'

import { CommonCheckBox, authorityToKor } from '@bitgouel/common'
import { UserItemProps } from '@bitgouel/types'
import { ChangeEvent } from 'react'
import * as S from './style'

const UserItem = ({
  id,
  name,
  authority,
  status,
  handleSelectUsers,
  userIds,
}: UserItemProps) => {
  return (
    <div>
      <S.UserItem isCurrent={status === 'current'}>
        {status === 'request' && (
          <CommonCheckBox
            id={id}
            ids={userIds}
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
