import styled from '@emotion/styled'
import { ApproveStatusEnum } from '@bitgouel/types'
import { StaticImageData } from 'next/image'

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

export const LectureTitle = styled.span`
  color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.typo.title_lg.semibold};
`

export const DocumentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2.5rem;
`

export const Document = styled.div`
  width: 75rem;
  padding-bottom: 6.25rem;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  h1 {
    ${({ theme }) => theme.typo.title_sm.semibold};
    margin: 0;
  }
`

export const LectureStatusContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const LectureStatusBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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

export const LectureDateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem 0;
  border-top: 0.0625rem solid ${({ theme }) => theme.color.gray['900']};
  border-bottom: 0.0625rem solid ${({ theme }) => theme.color.gray['900']};

  h2 {
    ${({ theme }) => theme.typo.title_sm.semibold};
    margin: 0;
  }
  span {
    ${({ theme }) => theme.typo.text_lg.medium};
    color: ${({ theme }) => theme.color.gray['400']};
  }
`

export const LectureDateText = styled.span`
  margin-left: 1rem;
`

export const LectureMaxWrapper = styled(LectureDateWrapper)`
  border: none;
`
export const LectureMaxText = styled.span`
  margin: 0;
`

export const ApplyButton = styled.div<{ isAble: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme, isAble }) =>
    isAble ? theme.color.white : theme.color.gray['400']};
  background-color: ${({ theme, isAble }) =>
    isAble ? theme.color.main : theme.color.gray['700']};
  ${({ theme }) => theme.typo.text_lg.semibold};
  border-radius: 0.5rem;
  width: 11.25rem;
  height: 3.25rem;
  position: fixed;
  bottom: 3.125rem;
  cursor: pointer;
`
