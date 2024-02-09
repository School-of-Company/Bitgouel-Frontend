import styled from '@emotion/styled'
import { StaticImageData } from 'next/image'

type SelectBoxTypes = 'all' | 'approve' | 'reject'

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

export const ClubTitle = styled.span`
  color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.typo.title_lg.semibold};
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-end;
`

export const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: rgb(255, 255, 255, 0.2);
  height: 2.5rem;
  margin-left: 1rem;
  padding: 0 0.75rem;
  border-radius: 0.5rem;
  backdrop-filter: blur(0.25rem);
  svg {
    fill: ${({ theme }) => theme.color.white};
  }
  span {
    color: ${({ theme }) => theme.color.white};
    ${({ theme }) => theme.typo.text_md.regular};
    margin-left: 0.25rem;
  }
  &:hover {
    background-color: rgb(255, 255, 255, 0.4);
  }
`

export const UserListWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`

export const UserListContainer = styled.div`
  display: flex;
  margin-top: 1.5rem;
  width: 75rem;
  height: 100%;
  flex-wrap: wrap;
`

export const RemarkBox = styled.div`
  padding: 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  div {
    display: flex;
  }
`

export const Remark = styled.span`
  color: ${({ theme }) => theme.color.gray['400']};
  ${({ theme }) => theme.typo.text_sm.medium};
  margin-right: 1.5rem;
  &:last-child {
    margin-left: 3.5rem;
  }
`

export const SelectBoxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
`

export const SelectBox = styled.div<{ type: SelectBoxTypes }>`
  width: 7.75rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  cursor: pointer;
  background: none;
  ${({ theme }) => theme.typo.text_md.medium};
  border: 0.0625rem solid
    ${({ theme, type }) =>
      type === 'all'
        ? theme.color.gray['400']
        : type === 'approve'
        ? theme.color.main
        : theme.color.error};
  color: ${({ theme, type }) =>
    type === 'all'
      ? theme.color.gray['400']
      : type === 'approve'
      ? theme.color.main
      : theme.color.error};

  svg {
    fill: ${({ theme, type }) =>
      type === 'all'
        ? theme.color.gray['400']
        : type === 'approve'
        ? theme.color.main
        : theme.color.error};
    margin-right: 0.5rem;
  }
`

export const AloneCheckBox = styled.div`
  border: 0.0625rem solid ${({ theme }) => theme.color.main};

  cursor: pointer;
  color: ${({ theme }) => theme.color.main};
  ${({ theme }) => theme.typo.text_md.medium};
  margin-right: 0.625rem;
`
