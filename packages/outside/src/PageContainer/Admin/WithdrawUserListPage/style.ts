import { get } from './../../../../../../shared/api/common/src/libs/api/method'
import styled from '@emotion/styled'
import { StaticImageData } from 'next/image'
import { UserSearchFilter, UserSearchFilterBox } from '../UserListPage/style'

export const SlideBg = styled.div<{ url: StaticImageData }>`
  height: 15rem;
  width: 100%;
  display: flex;
  justify-content: center;
  background-image: url(${({ url }) => url.src});
  background-position: center;
  background-size: cover;
  align-items: flex-end;
`

export const BgContainer = styled.div`
  width: 75rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`

export const ClubTitle = styled.span`
  color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.typo.title_lg.semibold};
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-end;
`

export const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: rgb(255, 255, 255, 0.2);
  height: 2.5rem;
  margin-left: 1rem;
  padding: 0 0.75rem;
  border-radius: 0.5rem;
  backdrop-filter: blur(0.25rem);
  svg {
    fill: ${({ theme }) => theme.color.white};
  }
  span {
    color: ${({ theme }) => theme.color.white};
    ${({ theme }) => theme.typo.text_md.regular};
    margin-left: 0.25rem;
  }
  &:hover {
    background-color: rgb(255, 255, 255, 0.4);
  }
`

export const UserListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`

export const TopContainer = styled.div`
  margin-top: 3.5rem;
  width: 75rem;
  height: 3.625rem;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding-bottom: 1rem;
  border-bottom: 0.0625rem solid ${({ theme }) => theme.color.gray['900']};
`

export const RemarkBox = styled.div`
  display: flex;
  align-items: center;
  ${({ theme }) => theme.typo.text_sm.medium};
  color: ${({ theme }) => theme.color.gray['400']};

  span {
    margin-left: 1rem;
  }
`

export const WithdrawButtonContainer = styled.div`
  display: flex;
  gap: 0.625rem;
`

export const FilterContainer = styled(UserSearchFilterBox)`
  height: 2.5rem;
`

export const FilterBox = styled(UserSearchFilter)`
  height: 2.5rem;
`

export const SelectWithdrawBox = styled.div`
  width: 7.75rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${({theme}) => theme.color.error};
  border: 0.0625rem solid ${({ theme }) => theme.color.error};
  color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.typo.text_md.medium};

  svg {
    margin-right: 0.5rem;
    fill: ${({theme}) => theme.color.white};
  }
`

export const AllWithdrawBox = styled.label`
  width: 7.75rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 0.0625rem solid ${({ theme }) => theme.color.error};
  background-color: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.error};
  ${({ theme }) => theme.typo.text_md.medium};

  svg {
    margin-right: 0.5rem;
    fill: ${({ theme }) => theme.color.error};
  }
  input {
    display: none;
  }
`
