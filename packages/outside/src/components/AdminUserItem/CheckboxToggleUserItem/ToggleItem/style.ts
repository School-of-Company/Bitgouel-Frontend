import styled from '@emotion/styled'
import { Name, OtherItemText } from '../../style'

export const ToggleName = styled(Name)`
  ${({ theme }) => theme.typo.text_md.medium};
`

export const ToggleOtherItemText = styled(OtherItemText)`
  ${({ theme }) => theme.typo.text_md.medium};
`
