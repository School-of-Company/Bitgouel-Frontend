import styled from '@emotion/styled'

export const DisplayBar = styled.div<{ gap?: string}>`
  width: 100%;
  display: flex;
  align-items: center;
  height: 1.25rem;
  gap: ${({ gap }) => gap || '4rem'};
  padding: 0 0 1rem 1rem;
  margin-top: 3.75rem;
`

export const RequestDisplayBar = styled(DisplayBar)`
  padding-bottom: 0;

  div {
    display: flex;
    align-items: center;
    gap: 1.1875rem;
  }
`

export const DisplayBarSpan = styled.span<{ width: string }>`
  width: ${({ width }) => width};
  color: ${({ theme }) => theme.color.gray['400']};
  ${({ theme }) => theme.typo.text_sm.medium};
`
