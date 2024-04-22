'use client'

import { CheckBoxIcon } from '../../assets'
import * as S from './style'

const CommonCheckBox = ({
  id,
  ids,
  onChange,
}: {
  id: string
  ids: string[]
  onChange: (checked: boolean) => void
}) => {
  return (
    <S.CommonCheckboxContainer>
      <S.CommonCheckBoxStyle
        type='checkbox'
        checked={ids?.includes(id)}
        onChange={(e) => onChange(e.target.checked)}
      />
      {ids?.includes(id) && <CheckBoxIcon />}
    </S.CommonCheckboxContainer>
  )
}

export default CommonCheckBox
