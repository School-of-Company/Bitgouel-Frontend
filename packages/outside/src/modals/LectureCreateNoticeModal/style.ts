import styled from '@emotion/styled'

export const LectureCreateNoticeModal = styled.div`
  width: 24rem;
  height: 13.375rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  gap: 1rem;
  background-color: ${({ theme }) => theme.color.white};
`

export const NoticeLetterBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
  gap: 0.5rem;
`

export const NoticeMainLetter = styled.h2`
  ${({ theme }) => theme.typo.text_lg};
  color: ${({ theme }) => theme.color.black};
  margin: 0;
`

export const NoticeSubLetter = styled.span`
  ${({ theme }) => theme.typo.text_sm};
  color: ${({ theme }) => theme.color.gray['400']};
  margin: 0;
`

export const ReturnLectureListButton = styled.div`
  width: 22rem;
  height: 3.25rem;
  ${({ theme }) => theme.typo.text_lg};
  background-color: ${({ theme }) => theme.color.main};
  color: ${({ theme }) => theme.color.white};
  border: 0.0625rem solid ${({ theme }) => theme.color.main};
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`
