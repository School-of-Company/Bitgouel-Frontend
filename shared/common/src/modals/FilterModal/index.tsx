'use client'

import { CancelIcon, Portal, useModal } from '@bitgouel/common'
import { FilterListTypes } from '@bitgouel/types'
import * as S from './style'
import RadioItem from './RadioItem'
import InputRadio from './InputRadio'

interface onSelectedParameter {
  text: string
  checked: boolean
  inputValue?: string
}

interface Props {
  title: string
  filterList: FilterListTypes[]
  onSelected: (parameter: onSelectedParameter) => void
}

const FilterModal = ({ title, filterList, onSelected }: Props) => {
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
          <InputRadio key={filter.text} filter={filter} onSelected={onSelected} /> :
            <RadioItem key={filter.text} filter={filter} onSelected={onSelected} />
        ))}
      </S.RadioListContainer>
    </S.FilterContainer>
    </Portal>
  )
}

export default FilterModal
