import styled from '@emotion/styled'

export const SchoolFilterModalWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 37.5rem;

  background-color: ${({ theme }) => theme.color.white};
  border-radius: 0.5rem;
`

export const SchoolFilterTitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1.5rem;
  border-bottom: 0.0625rem solid ${({ theme }) => theme.color.gray['900']};

  h3 {
    margin: 0;
    ${({ theme }) => theme.typo.title_sm.semibold};
    color: ${({ theme }) => theme.color.black};
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`

export const SchoolListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height: 25rem;
  overflow-y: scroll;
  overflow-x: hidden;
  justify-content: flex-start;

  &::-webkit-scrollbar {
    width: 0.375rem;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 0.625rem;
    background-color: ${({ theme }) => theme.color.gray['700']};
  }
`

export const SchoolItemBox = styled.div`
  width: 100%;
  border-bottom: 0.0625rem solid ${({ theme }) => theme.color.gray['900']};
  ${({ theme }) => theme.typo.text_lg.medium};
  padding: 1rem 2rem;
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.gray['900']};
  }
`
