import styled from '@emotion/styled'

export const lectureWrraper = styled.div``

export const slideBg = styled.div<{ url: any }>`
  height: 15rem;
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  background-image: url(${({ url }) => url.src});
  background-position: center;
  background-size: cover;
  align-items: center;
`

export const bgContainer = styled.div`
  width: 75rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  span {
    color: ${({ theme }) => theme.color.white};
    ${({ theme }) => theme.typo.title_lg};
  }
`

export const buttonContainer = styled.div`
  display: flex;
  align-items: flex-end;
`

export const lectureButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: rgb(255, 255, 255, 0.2);
  height: 2.5rem;
  margin-left: 1rem;
  padding: 0 0.75rem;
  border-radius: 0.5rem;
  backdrop-filter: blur(0.25rem);
  span {
    color: ${({ theme }) => theme.color.white};
    ${({ theme }) => theme.typo.text_md};
    margin-left: 0.25rem;
  }
  &:hover {
    background-color: rgb(255, 255, 255, 0.4);
  }
`
