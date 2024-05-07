'use client'

import { FilterListTypes } from '@bitgouel/types';
import * as S from './style';

interface onSelectedParameter {
  item: string
  checked: boolean
  inputValue?: string
}

interface Props {
  filter: FilterListTypes
  onSelected: (parameter: onSelectedParameter) => void
}

const RadioItem = ({ filter, onSelected }: Props) => {
  return (
    <S.RadioItemContainer onClick={() => onSelected({item: filter.item, checked: filter.checked})}>
      <S.RadioBox checked={filter.checked}>
        <S.RadioCircle checked={filter.checked} />
      </S.RadioBox>
      <S.RadioText>{filter.text}</S.RadioText>
    </S.RadioItemContainer>
  );
};

export default RadioItem;