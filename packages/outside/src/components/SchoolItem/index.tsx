import styled from '@emotion/styled'
import { InputCancel } from '@bitgouel/common'

const SchoolItemContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const SchoolItemInput = styled.input<{ type: string }>`
  width: ${({ type }) => (type === '학과 이름' ? '44.5rem' : '100%')};
  height: 3.375rem;
  border-radius: 0.5rem;
  text-indent: 1.25rem;
  border: 1px solid ${({ theme }) => theme.color.gray['700']};
  outline: none;

  ::placeholder {
    color: ${({ theme }) => theme.color.gray['400']};
    ${({ theme }) => theme.typo.text_sm.regular};
  }
`

const CancelContainer = styled.div`
  cursor: pointer;
  width: fit-content;
  display: flex;
  align-items: center;
`

interface SchoolItemProps {
  placeholder: string
  type: '학교 이름' | '학과 이름'
  index?: number
  value?: string
  onChange?: (value: string) => void
  handleDelete?: () => void
}

const SchoolItem = ({
  placeholder,
  type,
  index,
  value,
  onChange,
  handleDelete,
}: SchoolItemProps) => {
  return (
    <SchoolItemContainer>
      <SchoolItemInput
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {type === '학과 이름' && index !== 0 && (
        <CancelContainer onClick={handleDelete}>
          <InputCancel />
        </CancelContainer>
      )}
    </SchoolItemContainer>
  )
}

export default SchoolItem
