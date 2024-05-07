'use client'

import { FilterListTypes } from '@bitgouel/types'
import { ChangeEvent, useState } from 'react'
import RadioItem from '../RadioItem'
import * as S from './style'

interface onSelectedParameter {
  item: string
  checked: boolean
  inputValue?: string
}

interface Props {
  filter: FilterListTypes
  onSelected: (parameter: onSelectedParameter) => void
}

const InputRadio = ({ filter, onSelected }: Props) => {
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null)
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (timerId) clearTimeout(timerId)
    const newTimerId: NodeJS.Timeout = setTimeout(() => {
      onSelected({item: filter.item, checked: filter.checked, inputValue: e.target.value})
    }, 500)
    setTimerId(newTimerId)
  }

  return (
    <S.InputRadioContainer>
      <RadioItem filter={filter} onSelected={onSelected} />
      {filter.checked && (
        <S.RadioInputBox>
          <S.RadioInput 
            onChange={onChange}
            placeholder="강의 유형 입력"
          />
        </S.RadioInputBox>
      )}
    </S.InputRadioContainer>
  );
};

export default InputRadio;