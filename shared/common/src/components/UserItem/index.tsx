'use client'

import { CommonCheckBox, authorityToKor, insertHyphen } from '@bitgouel/common'
import { UserItemProps } from '@bitgouel/types'
import * as S from './style'

const UserItem = ({
  id,
  userIds,
  name,
  authority,
  phoneNumber,
  email,
  status,
  handleSelectUsers,
}: UserItemProps) => {
  return (
    <S.ScrollBox>
      <S.UserItem>
        {status === 'request' && (
          <S.CheckItemContainer>
            <CommonCheckBox
              checked={userIds?.includes(id) || false}
              onChange={(checked: boolean) =>
                handleSelectUsers && handleSelectUsers(checked, id)
              }
            />
            <S.Name>{name}</S.Name>
          </S.CheckItemContainer>
        )}
        {status === 'current' && <S.Name>{name}</S.Name>}
        <S.Role>{authorityToKor[authority]}</S.Role>
        <S.PhoneNumber>{insertHyphen(phoneNumber)}</S.PhoneNumber>
        <S.Email>{email}</S.Email>
      </S.UserItem>
    </S.ScrollBox>
  )
}

export default UserItem
