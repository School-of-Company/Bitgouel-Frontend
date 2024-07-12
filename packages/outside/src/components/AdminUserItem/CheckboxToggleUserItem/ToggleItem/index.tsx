'use client'

import { CommonCheckBox } from '@bitgouel/common'
import { UserItemListType } from '@outside/PageContainer/Admin/UserListPage'
import {
  CheckItemContainer,
  ScrollBox,
  ToggleItemContainer,
} from '../../style'
import * as S from './style'

interface Props<T> {
  name: string
  nameWidth: string
  ids: string[]
  toggleItemList?: UserItemListType[]
  toggleItem: string
  toggleItems: string[]
  handleSelectToggle: (checked: boolean, toggleItem: T) => void
}

const ToggleItem = ({
  name,
  nameWidth,
  ids,
  toggleItem,
  toggleItemList,
  toggleItems,
  handleSelectToggle,
}: Props<string>) => {
  return (
    <ScrollBox>
      <ToggleItemContainer>
        <CheckItemContainer>
          <CommonCheckBox
            checked={toggleItems?.includes(toggleItem) || false}
            onChange={(checked: boolean) =>
              handleSelectToggle && handleSelectToggle(checked, toggleItem)
            }
            disabled={ids?.length > 0}
          />
          <S.ToggleName width={nameWidth}>{name}</S.ToggleName>
        </CheckItemContainer>
        { toggleItemList && toggleItemList.map((item, idx) => (
          <S.ToggleOtherItemText key={idx} width={item.width}>
            {item.text}
          </S.ToggleOtherItemText>
        ))}
      </ToggleItemContainer>
    </ScrollBox>
  )
}

export default ToggleItem
