'use client'

import styled from '@emotion/styled'
import { useRef } from 'react'
import { CheckBoxIcon } from '../../assets'

const CommonCheckboxContainer = styled.div`
  position: relative;
  cursor: pointer;
  color: red;

  svg {
    position: absolute;
    left: 4px;
    top: 4px;
    cursor: pointer;
    pointer-events: none;
  }
`

const CommonCheckBoxStyle = styled.input`
  width: 1.25rem;
  height: 1.25rem;
  margin-left: 1.2rem;
  cursor: pointer;
  border: 0.0625rem solid ${({ theme }) => theme.color.gray['400']};
  border-radius: 0.25rem;
  background-color: ${({ theme }) => theme.color.white};
  appearance: none;

  &:checked {
    background-color: ${({ theme }) => theme.color.main};
    border: 0.0625rem solid ${({ theme }) => theme.color.main};
  }
`

const CommonCheckBox = ({
  id,
  ids,
  onChange,
}: {
  id: string
  ids: string[]
  onChange: (checked: boolean) => void
}) => {
  const checkRef = useRef<HTMLInputElement>(null)

  return (
    <CommonCheckboxContainer>
      <CommonCheckBoxStyle
        ref={checkRef}
        type='checkbox'
        checked={ids?.includes(id)}
        onChange={(e) => onChange(checkRef.current.checked)}
      />
      {ids?.includes(id) && <CheckBoxIcon />}
    </CommonCheckboxContainer>
  )
}

export default CommonCheckBox
