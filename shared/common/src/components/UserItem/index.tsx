'use client'

import { UserItemProps } from '@bitgouel/types'
import { authorityToKor } from '../../constants'
import * as S from './style'
import { ChangeEvent } from 'react'

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
          <S.UserCheckBox
            type='checkbox'
            checked={userIds.includes(id)}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleSelectUsers(e, id)
            }
          />
        )}
        <S.Name>{name}</S.Name>
        <S.Role>{authorityToKor[authority]}</S.Role>
      </S.UserItem>
    </div>
  )
}

export default UserItem
