'use client'

import { useState } from 'react'
import { FilterListTypes } from '@bitgouel/types'
import RadioItem from '../RadioItem'
import * as S from './style'
import { ChangeEvent } from 'react'

interface Props {
  filter: FilterListTypes
  onChecked: (id: string, checked: boolean, inputValue?: string) => void
}

const InputRadio = ({filter, onChecked}: Props) => {
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null)
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (timerId) clearTimeout(timerId)
    const newTimerId: NodeJS.Timeout = setTimeout(() => {
      onChecked(filter.text, filter.checked, e.target.value)
    }, 500)
    setTimerId(newTimerId)
  }

  return (
    <S.InputRadioContainer>
      <RadioItem filter={filter} onChecked={onChecked} />
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