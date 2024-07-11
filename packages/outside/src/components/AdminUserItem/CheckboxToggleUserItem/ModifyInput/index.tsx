import { ChangeEvent, Dispatch, SetStateAction } from 'react'
import * as S from './style'

interface Props {
  modifyText: string
  setModifyText: Dispatch<SetStateAction<string>>
}

const ModifyInput = ({ modifyText, setModifyText }: Props) => {
  return (
    <S.ModifyInputBox>
      <S.ModifyInput
        type='text'
        value={modifyText}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setModifyText(e.target.value)
        }
      />
    </S.ModifyInputBox>
  )
}

export default ModifyInput
