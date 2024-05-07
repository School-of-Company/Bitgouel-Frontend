'use client'

import { FilterListTypes } from '@bitgouel/types';
import * as S from './style';

interface Props {
  filter: FilterListTypes
  onChecked: (text: string, checked: boolean, inputValue?: string) => void
}

const RadioItem = ({ filter, onChecked }: Props) => {
  return (
    <S.RadioItemContainer key={filter.text} onClick={() => onChecked(filter.text, filter.checked)}>
      <S.RadioBox checked={filter.checked}>
        <S.RadioCircle checked={filter.checked} />
      </S.RadioBox>
      <S.RadioText>{filter.text}</S.RadioText>
    </S.RadioItemContainer>
  );
};

export default RadioItem;