'use client'

import { CancelIcon, Portal, useModal } from '@bitgouel/common'
import { FilterModalProps } from '@bitgouel/types'
import InputRadio from './InputRadio'
import RadioItem from './RadioItem'
import * as S from './style'

const FilterModal = ({ title, filterList, onSelected }: FilterModalProps) => {
  const { closeModal } = useModal()
  return (
    <Portal onClose={closeModal}>
    <S.FilterContainer>
      <S.FilterTitleContainer>
        <S.TitleText>{title}</S.TitleText>
        <CancelIcon onClick={closeModal} />
      </S.FilterTitleContainer>
      <S.RadioListContainer>
        {filterList.map((filter) => (
          filter.text === '기타' ?
          <InputRadio key={filter.item} filter={filter} onSelected={onSelected} /> :
            <RadioItem key={filter.item} filter={filter} onSelected={onSelected} />
        ))}
      </S.RadioListContainer>
    </S.FilterContainer>
    </Portal>
  )
}

export default FilterModal
