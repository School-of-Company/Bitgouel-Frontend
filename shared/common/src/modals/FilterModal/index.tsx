'use client'

import { CancelIcon, Portal, useModal } from '@bitgouel/common'
import * as S from './style'

interface Props {
  title: string
  filterList: {
    text: string
    item: string
    checked: boolean
  }[]
  onChecked: (id: string, checked: boolean) => void
}

const FilterComponent = ({ title, filterList, onChecked }: Props) => {
  const { closeModal } = useModal()
  return (
    <Portal onClose={closeModal}>
    <S.FilterContainer>
      <S.FilterTitleContainer>
        <S.TitleText>{title}</S.TitleText>
        <CancelIcon />
      </S.FilterTitleContainer>
      <S.RadioListContainer>
        {filterList.map((filter) => (
          <S.RadioItem key={filter.item}  onClick={() => onChange(filter.item, filter.checked)}>
            <S.RadioBox checked={filter.checked}>
              <S.RadioCircle checked={filter.checked} />
            </S.RadioBox>
            <S.RadioText>{filter.text}</S.RadioText>
          </S.RadioItem>
        ))}
      </S.RadioListContainer>
    </S.FilterContainer>
    </Portal>
  )
}

export default FilterComponent
