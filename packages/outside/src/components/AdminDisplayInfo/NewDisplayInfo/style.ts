import styled from '@emotion/styled'

type SelectBoxTypes = 'allNew' | 'approve' | 'reject'

export const NewInfoContainer = styled.div`
  margin-top: 3.5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 1rem;
`

export const SelectBoxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
`

export const SelectBox = styled.label<{ type: SelectBoxTypes }>`
  width: 7.75rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  cursor: pointer;
  background: none;
  ${({ theme }) => theme.typo.text_md.medium};
  border: 0.0625rem solid
    ${({ theme, type }) =>
      type === 'allNew'
        ? theme.color.gray['400']
        : type === 'approve'
        ? theme.color.main
        : theme.color.error};
  color: ${({ theme, type }) =>
    type === 'allNew'
      ? theme.color.gray['400']
      : type === 'approve'
      ? theme.color.main
      : theme.color.error};

  svg {
    fill: ${({ theme, type }) =>
      type === 'allNew'
        ? theme.color.gray['400']
        : type === 'approve'
        ? theme.color.main
        : theme.color.error};
    margin-right: 0.5rem;
  }
  input {
    display: none;
  }
`
