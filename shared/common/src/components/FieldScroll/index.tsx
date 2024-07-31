'use client'

import { FieldEnumType } from '@bitgouel/types'
import { Dispatch, SetStateAction } from 'react'
import * as S from './style'

export interface OptionProps {
  value: FieldEnumType
  label: string
}

const FilterOptions: OptionProps[] = [
  { value: 'FUTURISTIC_TRANSPORTATION_EQUIPMENT', label: '미래형 운송기기' },
  { value: 'ENERGY', label: '에너지산업' },
  { value: 'MEDICAL_HEALTHCARE', label: '의료•헬스케어' },
  { value: 'AI_CONVERGENCE', label: 'AI 융•복합' },
  { value: 'CULTURE', label: '문화산업' },
]

interface Props {
  setSelectedField: Dispatch<SetStateAction<string>>
  setIsScrollOpen: Dispatch<SetStateAction<boolean>>
}

const FieldScroll = ({ setSelectedField, setIsScrollOpen }: Props) => {
  const handleSelect = (option: OptionProps) => {
    setSelectedField(option.value)
    setIsScrollOpen(false)
  }

  return (
    <S.ListMember>
      {FilterOptions.map((option) => (
        <S.ListButton
          key={option.value}
          type='button'
          onClick={() => handleSelect(option)}
        >
          {option.label}
        </S.ListButton>
      ))}
    </S.ListMember>
  )
}

export default FieldScroll
