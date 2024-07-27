import styled from '@emotion/styled'

export const CreateModalWrapper = styled.div`
  height: 100vh;
  width: 50rem;
  background-color: ${({ theme }) => theme.color.white};
  overflow: auto;
`

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 1.5625rem;
  height: 1.875rem;
  align-items: center;
  position: fixed;
  background-color: ${({ theme }) => theme.color.white};
`

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 35rem;
  width: 100%;
  justify-content: space-between;
`

export const CancelIconBox = styled.div`
  cursor: pointer;
`

export const Title = styled.span`
  color: ${({ theme }) => theme.color.black};
  ${({ theme }) => theme.typo.title_sm.semibold};
`

export const CreateModalContainer = styled.div`
  padding: 1.5rem;
  flex-direction: column;
`

export const SelectWrapper = styled.div<{ gap?: string }>`
  margin-top: 4.375rem;
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => gap || '2rem'};
`

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const SubmitContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 1.875rem;
`

export const SubmitButton = styled.button`
  width: 11.25rem;
  height: 3.25rem;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.main};
  color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.typo.text_md.semibold};
  cursor: pointer;
  border: none;

  &:disabled {
    border: 0.0625rem solid ${({ theme }) => theme.color.gray['700']};
    background-color: ${({ theme }) => theme.color.gray['700']};
    color: ${({ theme }) => theme.color.gray['400']};
    cursor: default;
  }
`

export const Content = styled.span`
  ${({ theme }) => theme.typo.text_lg.semibold};
  color: ${({ theme }) => theme.color.black};
`
