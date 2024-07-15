import { ChangeEvent, Dispatch, SetStateAction } from 'react'
import * as S from './style'

interface Props {
  modifyText: string
  setModifyText: Dispatch<SetStateAction<string>>
  boxWidth?: string
  inputWidth: string
}

const ModifyInputComponent = ({
  modifyText,
  setModifyText,
  boxWidth,
  inputWidth,
}: Props) => {
  return (
    <S.ModifyInputBox width={boxWidth}>
      <S.ModifyInput
        type='text'
        value={modifyText}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setModifyText(e.target.value)
        }
        width={inputWidth}
      />
    </S.ModifyInputBox>
  )
}

export default ModifyInputComponent
