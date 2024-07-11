import styled from '@emotion/styled'
import { DisplayBar } from '../AdminDisplayInfo/style'

export const ScrollBox = styled.div`
  width: 100%;
`

export const UserItemContainer = styled.div`
  width: 100%;
  height: 3.625rem;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  border-top: 0.0625rem solid ${({ theme }) => theme.color.gray['900']};
  box-sizing: border-box;
  gap: 4rem;
`

export const CheckboxUserItemContainer = styled(UserItemContainer)`
  position: relative;
`

export const ToggleItemContainer = styled(CheckboxUserItemContainer)`
  padding-left: 0;
`

export const CheckItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`

export const Name = styled.span<{ width: string }>`
  width: ${({ width }) => width};
  color: ${({ theme }) => theme.color.black};
  ${({ theme }) => theme.typo.text_lg.medium};
`

export const OtherItemText = styled.span<{ width: string }>`
  width: ${({ width }) => width};
  color: ${({ theme }) => theme.color.gray['400']};
  ${({ theme }) => theme.typo.text_lg.medium};
`

export const ModifyText = styled.span`
  width: 7.5rem;
  color: ${({ theme }) => theme.color.main};
  ${({ theme }) => theme.typo.text_lg.medium};
  cursor: pointer;
`

export const ToggleDisplayBar = styled(DisplayBar)`
  ${({ theme }) => theme.typo.text_sm.medium};
  color: ${({ theme }) => theme.color.gray['400']};
  padding-left: 2.75rem;
  margin: 0;
`

export const ToggleSvg = styled.div<{ isOpen: boolean }>`
  transform: rotate(${({ isOpen }) => (isOpen ? '180deg' : '0deg')});
  cursor: pointer;
`

export const ToggleListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
`