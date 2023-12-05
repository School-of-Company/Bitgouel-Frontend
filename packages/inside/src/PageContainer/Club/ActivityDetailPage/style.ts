import styled from '@emotion/styled'

export const SlideBg = styled.div<{ url: any }>`
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

export const ActivityTitle = styled.span`
  color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.typo.title_lg.semibold};
`

export const TitleButtonContainer = styled.div`
  display: flex;
  align-items: flex-end;
`

export const ActivityButton = styled.div`
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

export const DocumentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const Document = styled.div`
  width: 75rem;
`

export const TitleContainer = styled.div`
  margin-top: 2rem;
`

export const Title = styled.span`
  ${({ theme }) => theme.typo.title_md.semibold};
  color: ${({ theme }) => theme.color.black};
`

export const SubTitle = styled.div`
  padding: 0.5rem 0;
  display: flex;
  span {
    ${({ theme }) => theme.typo.text_md.regular};
    color: ${({ theme }) => theme.color.gray['400']};
  }
`

export const ApproveStatus = styled.div<{ approveColor: boolean }>`
  background-color: ${({ theme, approveColor }) =>
    approveColor ? theme.color.blue['800'] : theme.color.red['800']};
  color: ${({ theme, approveColor }) =>
    approveColor ? theme.color.main : theme.color.error};
  ${({ theme }) => theme.typo.text_md.regular};
  text-align: center;
  padding: 0.5rem 1rem;
  border-radius: 1.125rem;
  margin-right: 2.5rem;
`

export const NumberBox = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2.5rem;
`

export const SubTitleBox = styled.div`
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.gray['700']};
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  margin-right: 0.5rem;
`

export const MainText = styled.div`
  color: ${({ theme }) => theme.color.gray['400']};
  ${({ theme }) => theme.typo.text_sm.regular};
  line-height: 1.5rem;
  margin-top: 2.25rem;
  padding-bottom: 6.25rem;
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const ButtonContainer = styled.div`
  display: flex;
  bottom: 1.6rem;
  position: fixed;
  div {
    color: ${({ theme }) => theme.color.white};
    ${({ theme }) => theme.typo.text_lg.semibold};
    padding: 0.85rem 2.6rem;
    border-radius: 0.5rem;
    cursor: pointer;
  }
`

export const CreateNotApproveButton = styled.div`
  background-color: ${({ theme }) => theme.color.error};
  margin-right: 1rem;
`

export const CreateApproveButton = styled.div`
  background-color: ${({ theme }) => theme.color.main};
`
