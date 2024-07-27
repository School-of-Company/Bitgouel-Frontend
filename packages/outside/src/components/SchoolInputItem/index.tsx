import { InputCancel } from '@bitgouel/common'
import * as S from './style'

interface SchoolItemProps {
  placeholder: string
  type: '학교 이름' | '학과 이름'
  index?: number
  value?: string
  onChange?: (value: string) => void
  handleDelete?: () => void
}

const SchoolInputItem = ({
  placeholder,
  type,
  index,
  value,
  onChange,
  handleDelete,
}: SchoolItemProps) => {
  return (
    <S.SchoolItemInputContainer>
      <S.SchoolItemInput
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {type === '학과 이름' && index !== 0 && (
        <S.CancelContainer onClick={handleDelete}>
          <InputCancel />
        </S.CancelContainer>
      )}
    </S.SchoolItemInputContainer>
  )
}

export default SchoolInputItem
