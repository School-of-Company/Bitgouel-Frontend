'use client'

import { UserItemProps } from '@bitgouel/types'
import { authorityToKor } from '../../constants'
import * as S from './style'
import { ChangeEvent } from 'react'

const UserItem = ({
  item,
  status,
  handleSelectUsers,
  userIds,
}: UserItemProps) => {
  return (
    <S.UserItem isCurrent={status === 'current'}>
      {status === 'request' && (
        <S.UserCheckBox
          type='checkbox'
          checked={userIds.includes(item.id)}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleSelectUsers(e.target.checked, item.id)
          }
        />
      )}
      <S.Name>{item.name}</S.Name>
      <S.Role>{authorityToKor[item.authority]}</S.Role>
    </S.UserItem>
  )
}

export default UserItem
