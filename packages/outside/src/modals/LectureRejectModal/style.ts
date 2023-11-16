import styled from '@emotion/styled'
import {
  LectureCreateModalWrapper,
  LectureCreateQuestion,
  LectureCreateTitle,
  LectureCreateButtonWrapper,
  CancelButton,
  CreateButton,
} from '../LectureCreateModal/style'

export const LectureRejectModalWrapper = styled(LectureCreateModalWrapper)``

export const LectureRejectQuestion = styled(LectureCreateQuestion)``

export const LectureRejectTitle = styled(LectureCreateTitle)``

export const LectureRejectButtonWrapper = styled(LectureCreateButtonWrapper)``

export const RejectCancleButton = styled(CancelButton)`
  border: 0.0625rem solid ${({ theme }) => theme.color.gray['700']};
  color: ${({ theme }) => theme.color.gray['700']};
`

export const RejectButton = styled(CreateButton)`
  background-color: ${({ theme }) => theme.color.error};
  border: 0.0625rem solid ${({ theme }) => theme.color.error};
`
