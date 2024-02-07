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

export const CreateTitle = styled.span`
  color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.typo.title_lg.semibold};
`

export const DocumentInputContainer = styled.div`
  position: absolute;
  height: calc(100% - 15rem);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const DocumentInput = styled.div`
  margin-top: 2.5rem;
  width: 75rem;
  display: flex;
  flex-direction: column;
`

export const InputTitle = styled.input`
  ${({ theme }) => theme.typo.title_md.semibold};
  color: ${({ theme }) => theme.color.black};
  outline: none;
  border: none;
  width: 100%;
  background-color: ${({ theme }) => theme.color.gray['1000']};
  &::placeholder {
    color: ${({ theme }) => theme.color.gray['700']};
  }
`

export const InputMainText = styled.textarea`
  ${({ theme }) => theme.typo.text_lg.regular};
  color: ${({ theme }) => theme.color.black};
  margin-top: 0.5rem;
  height: 19.25rem;
  background-color: ${({ theme }) => theme.color.gray['1000']};
  outline: none;
  border: none;
  width: 100%;
  resize: none;
  &::placeholder {
    color: ${({ theme }) => theme.color.gray['700']};
  }
`

export const PostSetting = styled.div`
  position: absolute;
  bottom: 6.25rem;
  width: 100%;
`

export const SettingTitle = styled.div`
  ${({ theme }) => theme.typo.text_lg.semibold};
  color: ${({ theme }) => theme.color.gray['400']};
`

export const SettingSelectionContainer = styled.div`
  display: flex;
  margin-top: 0.5rem;
`

export const SettingForm = styled.form`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.gray['700']};
`

export const SettingInput = styled.input`
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.color.gray['1000']};
  color: ${({ theme }) => theme.color.gray['700']};
  ${({ theme }) => theme.typo.text_md.regular}

  &::placeholder {
    ${({ theme }) => theme.typo.text_md.regular}
    color: ${({ theme }) => theme.color.gray['700']};
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const CreateButton = styled.div`
  background-color: ${({ theme }) => theme.color.gray['700']};
  color: ${({ theme }) => theme.color.gray['400']};
  font-weight: 400;
  cursor: pointer;
  bottom: 1.75rem;
  position: fixed;
  padding: 0.85rem 2.725rem;
  border-radius: 0.5rem;
`


