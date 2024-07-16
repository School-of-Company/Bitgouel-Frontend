'use client'

import { CheckBoxIcon } from '@bitgouel/common'
import * as S from './style'

interface Props {
  checked: boolean
  onChange: (checked: boolean) => void
  disabled?: boolean
}

export const CommonCheckBox = ({ checked, onChange, disabled }: Props) => {
  return (
    <S.CommonCheckBoxContainer>
      <S.CommonCheckBoxStyle
        type='checkbox'
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      {checked && <CheckBoxIcon />}
    </S.CommonCheckBoxContainer>
  )
}

export default CommonCheckBox
