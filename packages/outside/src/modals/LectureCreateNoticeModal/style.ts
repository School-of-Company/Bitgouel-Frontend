import styled from '@emotion/styled'

export const LectureCreateNoticeModal = styled.div`
  width: 384px;
  height: 214px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
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
  width: 352px;
  height: 52px;
  ${({ theme }) => theme.typo.text_lg};
  background-color: ${({ theme }) => theme.color.main};
  color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.main};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`
