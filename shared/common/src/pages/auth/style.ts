import styled from '@emotion/styled'

export const AuthWrapper = styled.div`
  width: 27rem;
  height: 34.6875rem;
  border-radius: 0.5rem;
  border: 0.0625rem solid ${({ theme }) => theme.color.gray['700']};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`
