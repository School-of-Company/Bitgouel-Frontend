import styled from '@emotion/styled'

export const ActivityItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  cursor: pointer;
  width: 15.5rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.color.white};
  border: 0.0625rem solid ${({ theme }) => theme.color.gray['900']};
  border-radius: 0.5rem;
  padding: 1rem 1rem;
  margin: 0.75rem 0.75rem;
`

export const AcitivTitle = styled.span`
  ${({ theme }) => theme.typo.title_sm}
`

export const Uploader = styled.span`
  color: ${({ theme }) => theme.color.gray['400']};
`

export const StatusContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

export const ApproveStatus = styled.div<{ approveColor: boolean }>`
  display: flex;
  background-color: ${({ theme, approveColor }) =>
    approveColor ? theme.color.blue['800'] : theme.color.red['800']};
  color: ${({ theme, approveColor }) =>
    approveColor ? theme.color.main : theme.color.error};
  ${({ theme }) => theme.typo.text_md};
  text-align: center;
  padding: 0.5rem 1rem;
  border-radius: 1.125rem;
`
