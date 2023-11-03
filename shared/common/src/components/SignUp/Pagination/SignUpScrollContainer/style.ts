import styled from '@emotion/styled'
import { theme } from '../../../../styles'

export const SignUpScrollContainer = styled.div<{
  idx: number
  placeholder: string
}>`
  position: absolute;
  top: ${({ idx, placeholder }) =>
    idx === 0
      ? placeholder === '소속'
        ? '36.5%'
        : '43%'
      : placeholder === '직업'
      ? '47.5%'
      : '54.2%'};
  left: 50%;
  transform: translate(-50%, -50%);
  width: 24rem;
  height: ${({ placeholder }) =>
    placeholder === '소속' || placeholder === '직업' ? '3.5rem' : '8rem'};
  overflow-y: scroll;
  background-color: #ffffff;
  border: 0.0625rem solid ${({ theme }) => theme.color.gray[700]};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 0.5rem;
  padding: 1.1rem 0;
  gap: 1rem;

  &::-webkit-scrollbar {
    width: 0.25rem;
    height: 2rem;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 0.625rem;
    background-color: ${({ theme }) => theme.color.gray[400]};
  }
`

export const ScrollItem = styled.span`
  cursor: pointer;
  height: 200rem;
  margin-left: 1.5rem;
  ${({ theme }) => theme.typo.text_sm};
  display: flex;
  align-items: center;

  &:hover {
    font-weight: 600;
  }
`
