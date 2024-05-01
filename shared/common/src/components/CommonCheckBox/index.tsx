'use client'

import { CheckBoxIcon } from '@bitgouel/common'
import * as S from './style'

export const CommonCheckBox = ({
  checked,
  onChange,
}: {
  checked: boolean
  onChange: (checked: boolean) => void
}) => {
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
