import styled from '@emotion/styled'

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 1.5rem 1.625rem 1.5rem;
  border-radius: 0.5rem;
  width: 22.5rem;
  height: auto;
  background-color: ${({ theme }) => theme.color.white};
`

export const FilterTitleContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  svg {
    cursor: pointer;
  }
`

export const TitleText = styled.h3`
  ${({ theme }) => theme.typo.text_lg.semibold};
  margin: 0;
`

export const RadioListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  margin-top: 1.5rem;
  width: 100%;
`
