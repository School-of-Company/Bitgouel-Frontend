import styled from '@emotion/styled'

export const CreateModalWrapper = styled.div`
  height: 100vh;
  width: 47rem;
  background-color: ${({ theme }) => theme.color.white};
  overflow: auto;
  padding: 1.5rem;
  position: relative;
`

export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.color.white};
  margin: 1.5rem 0;
`

export const CancelIconBox = styled.div`
  cursor: pointer;
`

export const Title = styled.span`
  color: ${({ theme }) => theme.color.black};
  ${({ theme }) => theme.typo.title_sm.semibold};
`

export const CreateModalContainer = styled.div`
  margin: 1rem 0;
  flex-direction: column;
`

export const SelectWrapper = styled.div`
  margin-top: 4.375rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
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
  position: fixed;
  bottom: 6rem;
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
