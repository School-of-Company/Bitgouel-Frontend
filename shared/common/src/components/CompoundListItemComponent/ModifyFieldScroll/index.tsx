'use client'

import { FieldEnumToKor, FieldScroll } from '@bitgouel/common'
import { Dispatch, SetStateAction, useState } from 'react'
import * as S from './style'

interface Props {
  modifyField: string
  setModifyField: Dispatch<SetStateAction<string>>
  boxWidth?: string
  underBarWidth: string
}

const ModifyFieldScroll = ({
  modifyField,
  setModifyField,
  boxWidth,
  underBarWidth,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.ModifyFieldScrollBox width={boxWidth}>
      <S.ModifyUnderBar
        width={underBarWidth}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {FieldEnumToKor[modifyField]}
      </S.ModifyUnderBar>
      {isOpen && (
        <FieldScroll
          setIsScrollOpen={setIsOpen}
          setSelectedField={setModifyField}
        />
      )}
    </S.ModifyFieldScrollBox>
  )
}

export default ModifyFieldScroll
