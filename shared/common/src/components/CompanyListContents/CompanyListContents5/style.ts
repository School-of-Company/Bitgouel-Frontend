import styled from '@emotion/styled'

export const CompanyListBanner = styled.div<{ url: any }>`
  margin-top: 2.5rem;
  width: 100%;
  height: 37rem;
  background-image: url(${({ url }) => url.src});
  background-position: center;
  display: flex;
  justify-content: center;
`

export const CompanyListContents = styled.div`
  margin-top: 2.5rem;
  width: 75rem;
`

export const CompanyValueTitle = styled.div`
  color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.typo.title_md.semibold};
`

export const CompanyMainTextArea = styled.div`
  margin: 2.5rem;
  display: flex;
`

export const CompanyTextContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  &:last-child {
    margin-bottom: 0;
  }
`

export const CompanyText = styled.div`
  color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.typo.text_sm.medium};
  height: 2.125rem;
  display: flex;
  align-items: center;
  border: 0.0625rem solid ${({ theme }) => theme.color.white};
  border-radius: 2rem;
  padding: 0 1rem;
  width: fit-content;
  margin-right: 1rem;
  margin-bottom: 1.5rem;
`
