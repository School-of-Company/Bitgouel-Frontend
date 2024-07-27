import styled from '@emotion/styled'
import { DisplayBar } from '../../AdminDisplayInfo/style'

export const ScrollBox = styled.div`
  width: 100%;
`

export const AdminItemContainer = styled.div<{ gap?: string }>`
  width: 100%;
  height: 3.625rem;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  border-top: 1px solid ${({ theme }) => theme.color.gray['900']};
  box-sizing: border-box;
  gap: ${({ gap }) => gap || '4rem'};
`

export const CheckboxAdminItemContainer = styled(AdminItemContainer)`
  position: relative;
`

export const ToggleItemContainer = styled(CheckboxAdminItemContainer)`
  border-top: none;
  padding-left: 3rem;
  padding-right: 3rem;
  justify-content: space-between;
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

export const OtherItemText = styled(Name)`
  color: ${({ theme }) => theme.color.gray['400']};
`

export const ControlButtons = styled.div`
  display: flex;
  align-items: center;
`

export const ModifyText = styled.span`
  width: 7.5rem;
  color: ${({ theme }) => theme.color.main};
  ${({ theme }) => theme.typo.text_lg.medium};
  cursor: pointer;
`

export const DeleteText = styled(ModifyText)<{ width?: string }>`
  color: ${({ theme }) => theme.color.error};
  width: ${({ width }) => width || '7.5rem'};
`

export const ToggleDisplayBar = styled(DisplayBar)`
  ${({ theme }) => theme.typo.text_sm.medium};
  color: ${({ theme }) => theme.color.gray['400']};
  padding-left: 2.75rem;
  padding-bottom: 0;
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
  ${({ theme }) => theme.typo.text_md.medium};
`

export const AddToggleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 3rem;
  margin: 0.5rem 0;
`

export const AddToggleBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  svg {
    cursor: pointer;
  }
`

export const AddInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
`

export const AddText = styled.span`
  ${({ theme }) => theme.typo.text_lg.regular};
  color: ${({ theme }) => theme.color.gray['700']};
  margin: 0.5rem 0 1rem 0;
  cursor: pointer;
`

export const CompleteText = styled.span`
  width: 7.5rem;
  ${({ theme }) => theme.typo.text_md.semibold};
  color: ${({ theme }) => theme.color.main};
  cursor: pointer;
`
