import styled from '@emotion/styled'

export const FAQSectionWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const FAQSectionContainer = styled.div`
  margin-top: 10rem;
  width: 75rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SemiTitle = styled.span`
  ${({ theme }) => theme.typo.text_md.regular}
  color: ${({ theme }) => theme.color.gray['400']};
`

export const Title = styled.span`
  ${({ theme }) => theme.typo.title_md.semibold}
`

export const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5rem 0;
`
