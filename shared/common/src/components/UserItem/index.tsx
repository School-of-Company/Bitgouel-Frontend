'use client'

import { CheckBoxIcon, authorityToKor } from '@bitgouel/common'
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
          <>
            <S.UserCheckBox
              type='checkbox'
              checked={userIds?.includes(id)}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleSelectUsers && handleSelectUsers(e, id)
              }
            />
            {userIds?.includes(id) && <CheckBoxIcon />}
          </>
        )}
        <S.Name>{name}</S.Name>
        {authority && <S.Role>{authorityToKor[authority]}</S.Role>}
      </S.UserItem>
    </div>
  )
}

export default UserItem
