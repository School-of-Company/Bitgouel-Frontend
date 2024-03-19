import styled from '@emotion/styled'
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

export const Title = styled.span`
  color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.typo.title_lg.semibold};
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-end;
`

export const ClubButton = styled.div`
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

export const ClubWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`

export const ClubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 75rem;
  height: 100%;
  margin-top: 3rem;
  gap: 1.2rem;
`

export const ClubTitle = styled.h1`
  margin: 0;
  ${({ theme }) => theme.typo.title_md.semibold};
  color: ${({ theme }) => theme.color.black};
`

export const ClubInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const BelongBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    ${({ theme }) => theme.typo.text_md.regular};
    color: ${({ theme }) => theme.color.gray['400']};
  }
`

export const ExpressSchoolBox = styled.div`
  ${({ theme }) => theme.typo.text_md.regular};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.gray['700']};
  color: ${({ theme }) => theme.color.white};
  border-radius: 0.5rem;
  width: 5.75rem;
  height: 2.375rem;
`

export const ExpressTeacherBox = styled(ExpressSchoolBox)`
  width: 6.625rem;
`

export const ClubPersonnelBox = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 0.5rem;

  span {
    ${({ theme }) => theme.typo.text_md.regular};
    color: ${({ theme }) => theme.color.gray['400']};
  }
`

export const ClubPersonnelTitle = styled.h1`
  ${({ theme }) => theme.typo.title_sm.semibold};
  color: ${({ theme }) => theme.color.black};
  margin: 0;
`

export const ClubMemberListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75rem;
  padding-left: 0.5rem;
`

export const ClubMemberBox = styled.div<{isStudent: boolean}>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 0.0625rem solid ${({theme}) => theme.color.gray['900']};
  cursor: pointer;
  
  &:hover {
    background-color: ${({theme, isStudent}) => isStudent ? 'none' : theme.color.gray['900']};
  }
`

export const MemberName = styled.span`
  ${({theme}) => theme.typo.text_lg.medium};
  color: ${({theme}) => theme.color.black};
`

export const MemberRole = styled.span`
  ${({theme}) => theme.typo.text_md.regular};
  color: ${({theme}) => theme.color.gray['400']}
`
