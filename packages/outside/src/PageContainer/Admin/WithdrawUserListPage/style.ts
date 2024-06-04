import styled from '@emotion/styled'
import { UserSearchFilter, UserSearchFilterBox } from '../UserListPage/style'

export const RemarkBox = styled.div`
  display: flex;
  align-items: center;
  ${({ theme }) => theme.typo.text_sm.medium};
  color: ${({ theme }) => theme.color.gray['400']};

  span {
    margin-left: 1rem;
  }
`

export const FilterContainer = styled(UserSearchFilterBox)``
