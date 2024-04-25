import styled from '@emotion/styled'

export const SchoolFilterModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 37.5rem;
  height: 30rem;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 0.5rem;
  border: none;
`

export const SchoolFilterTitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 5rem;

  h3 {
    margin: 0;
    margin-left: 2.2rem;
    ${({ theme }) => theme.typo.title_sm.semibold};
    color: ${({ theme }) => theme.color.black};
  }

  div {
    margin-right: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`

export const SchoolListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 25rem;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 0 1rem 0 2rem;

  &::-webkit-scrollbar {
    width: 0.375rem;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 0.625rem;
    background-color: ${({ theme }) => theme.color.gray['700']};
  }
`

export const SchoolItemBox = styled.div`
  width: 33.5625rem;
  height: 3.625rem;
  border-bottom: 0.0625rem solid ${({ theme }) => theme.color.gray['900']};
  ${({ theme }) => theme.typo.text_lg.medium};
  padding: 1rem 0 1rem 0;
  cursor: pointer;
`
