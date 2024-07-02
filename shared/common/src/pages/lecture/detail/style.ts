import styled from '@emotion/styled'

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 1.5rem;

  h1 {
    ${({ theme }) => theme.typo.title_sm.semibold};
    margin-top: 0.5rem;
  }
`

export const LectureStatusContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`

export const LectureStatusBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  ${({ theme }) => theme.typo.text_sm.semibold};
  color: ${({ theme }) => theme.color.main};
  border: 0.0625rem solid ${({ theme }) => theme.color.main};
  border-radius: 1rem;
  padding: 0.375rem 0.75rem;
`

export const LectureInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
  span {
    ${({ theme }) => theme.typo.text_lg.regular};
    color: ${({ theme }) => theme.color.gray['400']};
  }
`

export const MainText = styled.div`
  color: ${({ theme }) => theme.color.gray['400']};
  ${({ theme }) => theme.typo.text_sm.regular};
  line-height: 1.575rem;
  margin-top: 1.5rem;
  padding-bottom: 1.5rem;
`

export const LectureSection = styled.div`
  border-top: 0.0625rem solid ${({ theme }) => theme.color.gray['900']};
  padding: 1.5rem 0;
  &:last-child {
    padding-bottom: 50rem;
  }
  span {
    color: ${({ theme }) => theme.color.black};
    ${({ theme }) => theme.typo.title_sm.semibold};
  }
  div {
    color: ${({ theme }) => theme.color.gray['400']};
    ${({ theme }) => theme.typo.text_lg.regular};
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
  }
`

export const WhiteBox = styled.div`
  height: 5rem;
`

export const ApplyButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  left: 0;
  bottom: 2.5rem;
  gap: 1.5rem;
`

export const ApplyButton = styled.div<{ isAble?: boolean; isDelete?: boolean }>`
  color: ${({ theme, isAble, isDelete }) =>
    isAble || isDelete ? theme.color.white : theme.color.gray['400']};
  background-color: ${({ theme, isAble, isDelete }) =>
    isAble
      ? theme.color.main
      : isDelete
      ? theme.color.error
      : theme.color.gray['700']};
  ${({ theme }) => theme.typo.text_lg.semibold};
  padding: 0.75rem 2.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
`
