import { ChangeEvent, Dispatch, SetStateAction } from 'react'
import * as S from './style'

interface Props {
  modifyText: string
  setModifyText: Dispatch<SetStateAction<string>>
  nameWidth: string
}

const ModifyInput = ({ modifyText, setModifyText, nameWidth }: Props) => {
  return (
    <S.ModifyInputBox>
      <S.ModifyInput
        type='text'
        value={modifyText}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setModifyText(e.target.value)
        }
        width={nameWidth}
      />
    </S.ModifyInputBox>
  )
}

export default ModifyInput
