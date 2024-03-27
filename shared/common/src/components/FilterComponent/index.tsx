'use client'

import { FilterOut } from '@bitgouel/common'
import { ChangeEvent, useState } from 'react'
import * as S from './style'

interface Props {
  title: string
  filterList: {
    text: string
    item: string
    checked: boolean
  }[]
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const FilterComponent = ({ title, filterList, onChange }: Props) => {
  return (
    <S.Filter>
      <h3>{title}</h3>
      <S.CheckListContainer>
        {filterList.map((filter, idx) => (
          <S.CheckLabel key={idx} htmlFor={filter.item}>
            <S.CheckBox
              type='radio'
              id={filter.item}
              checked={filter.checked}
              onChange={onChange}
            />
            <span>{filter.text}</span>
          </S.CheckLabel>
        ))}
      </S.CheckListContainer>
    </S.Filter>
  )
}

export default FilterComponent
