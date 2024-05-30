import styled from '@emotion/styled'

export const ChangePwWrapper = styled.div`
  position: relative;
  width: 27rem;
  height: 34.6875rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.color.white};
  border: none;
  border-radius: 0.5rem;
`

export const TitleItemWrapper = styled.div`
  padding: 1.5rem 0 0 1.5rem;
  display: flex;
  flex-direction: column;
`

export const SubTitleItem = styled.span`
  ${({ theme }) => theme.typo.text_sm.regular};
  color: ${({ theme }) => theme.color.gray['400']};
  margin-top: 0.3rem;
  margin-bottom: 1rem;
`

export const TitleItem = styled.span`
  color: ${({ theme }) => theme.color.black};
  ${({ theme }) => theme.typo.title_md.semibold};
`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  width: 100%;
  padding-left: 1.5rem;
`

export const ChangePwButtonContainer = styled.div`
  position: absolute;
  bottom: 1.5rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  div {
    width: 11.75rem;
    height: 3.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
    cursor: pointer;
  }
`

export const CancelButton = styled.div`
  color: ${({ theme }) => theme.color.main};
  background: none;
  border: 0.0625rem solid ${({ theme }) => theme.color.main};
`

export const CompleteButton = styled.div<{ isAble: boolean }>`
  color: ${({ theme, isAble }) =>
    isAble ? theme.color.white : theme.color.gray['400']};
  background-color: ${({ theme, isAble }) =>
    isAble ? theme.color.main : theme.color.gray['700']};
  border: 0.0625rem solid ${({ theme }) => theme.color.gray['700']};
`
