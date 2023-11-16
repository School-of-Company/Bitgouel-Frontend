import styled from '@emotion/styled'
import {
  LectureCreateModalWrapper,
  LectureCreateQuestion,
  LectureCreateTitle,
  LectureCreateButtonWrapper,
  CancelButton,
  CreateButton,
} from '../LectureCreateModal/style'

export const LectureApproveModalWrapper = styled(LectureCreateModalWrapper)``

export const LectureApproveQuestion = styled(LectureCreateQuestion)``

export const LectureApproveTitle = styled(LectureCreateTitle)``

export const LectureApproveButtonWrapper = styled(LectureCreateButtonWrapper)``

export const ApproveCancleButton = styled(CancelButton)`
  border: 0.0625rem solid ${({ theme }) => theme.color.gray['700']};
  color: ${({ theme }) => theme.color.gray['700']};
`

export const ApproveButton = styled(CreateButton)``
