import styled from '@emotion/styled'

export const Footer = styled.footer`
  background-color: ${({ theme }) => theme.color.blue['200']};
  width: 100%;
  height: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FooterTextContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  justify-content: space-between;
  width: 75rem;
  height: 15.5rem;
`

export const CopyRightsContainer = styled.div`
  span {
    ${({ theme }) => theme.typo.text_lg.medium}
  }
`

export const CopyRightText = styled.span`
  color: ${({ theme }) => theme.color.white};
`

export const CopyRightLinkList = styled.div`
  span {
    color: ${({ theme }) => theme.color.blue['800']};
    margin-right: 1.5rem;
    cursor: pointer;

    &:last-child {
      color: ${({ theme }) => theme.color.blue['800']};
      margin-right: 0;
    }
    &:hover {
      color: ${({ theme }) => theme.color.main};
    }
  }
`

export const FromLogoContainer = styled.div`
  img:first-of-type {
    margin-right: 3rem;
  }
`

export const AddressBox = styled.div`
  display: flex;
  span {
    color: ${({ theme }) => theme.color.white};
    ${({ theme }) => theme.typo.text_md.medium}
    margin-bottom: 0.5rem;
  }
`

export const AddressRightTitle = styled.div`
  display: flex;
  flex-direction: column;
`

export const AddressLine = styled.div`
  width: 0.0625rem;
  background-color: ${({ theme }) => theme.color.white};
  margin: 0 0.5rem;
`

export const AddressRightText = styled.div`
  display: flex;
  flex-direction: column;
`
