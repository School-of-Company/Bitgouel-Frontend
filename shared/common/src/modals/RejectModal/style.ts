import styled from '@emotion/styled'
import {
  ApproveButton,
  ApproveButtonWrapper,
  ApproveLetterContainer,
  ApproveModalWrapper,
  ApproveQuestion,
  ApproveTitle,
} from '../ApproveModal/style'

export const RejectModalWrapper = styled(ApproveModalWrapper)``

export const RejectLetterContainer = styled(ApproveLetterContainer)``

export const RejectQuestion = styled(ApproveQuestion)``

export const RejectTitle = styled(ApproveTitle)``

export const RejectButtonWrapper = styled(ApproveButtonWrapper)``

export const RejectButton = styled(ApproveButton)`
  color: ${({ theme }) => theme.color.white};
  background: ${({ theme }) => theme.color.error};
  border: 0.0625rem solid ${({ theme }) => theme.color.error};
`
