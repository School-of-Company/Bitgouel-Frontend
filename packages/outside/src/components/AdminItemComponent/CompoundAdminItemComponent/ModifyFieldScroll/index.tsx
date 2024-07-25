import { FieldScroll } from '@outside/components'
import { Dispatch, SetStateAction, useState } from 'react'
import * as S from './style'
import { FieldEnumToKor } from '@bitgouel/common'

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
