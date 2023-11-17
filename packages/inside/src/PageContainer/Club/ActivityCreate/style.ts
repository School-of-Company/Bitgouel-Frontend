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



export const CreateTitle = styled.span`
  color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.typo.title_lg};
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
  ${({ theme }) => theme.typo.title_md};
  color: ${({ theme }) => theme.color.black};
  outline: none;
  border: none;
  width: 100%;
  &::placeholder {
    color: ${({ theme }) => theme.color.gray['700']};
  }
`

export const InputMainText = styled.textarea`
  ${({ theme }) => theme.typo.text_lg};
  color: ${({ theme }) => theme.color.black};
  margin-top: 0.5rem;
  height: 19.25rem;
  outline: none;
  border: none;
  width: 100%;
  resize: none;
  &::placeholder {
    color: ${({ theme }) => theme.color.gray['700']};
  }
`

export const SelectModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ActivitySetting = styled.div`
  position: absolute;
  bottom: 6.25rem;
  width: 100%;
`

export const SettingTitle = styled.div`
  ${({ theme }) => theme.typo.text_lg};
  color: ${({ theme }) => theme.color.gray['400']};
`

export const SettingSelectionContainer = styled.div`
  display: flex;
  margin-top: 0.5rem;
`

export const SettingSelection = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-right: 2.5rem;
  span {
    ${({ theme }) => theme.typo.text_md};
  }
`

export const SettingForm = styled.form`
  display: flex;
  align-items: center;
  margin-right: 2.5rem;
  color: ${({ theme }) => theme.color.gray['700']};
`

export const SettingDateBox = styled.div`
  display: flex;
  align-items: center;
`

export const SettingScoreBox = styled.div`
  display: flex;
  align-items: center;
`

export const SettingInput = styled.input`
  border: none;
  outline: none;
  color: ${({ theme }) => theme.color.gray['700']};
  ${({ theme }) => theme.typo.text_md}

  &::placeholder {
    ${({ theme }) => theme.typo.text_sm}
    color: ${({ theme }) => theme.color.gray['700']};
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

export const ShowPeople = styled.span`
  margin-left: 0.3rem;
  ${({ theme }) => theme.typo.text_md}
`

export const SettingButton = styled.span`
  cursor: pointer;
  margin-left: 0.5rem;
  color: ${({ theme }) => theme.color.gray['700']};
`

export const DateRange = styled.span`
  margin: 0rem 0.5rem;
  color: ${({ theme }) => theme.color.gray['700']};
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const CreateButton = styled.div`
  background-color: ${({ theme }) => theme.color.gray['700']};
  color: ${({ theme }) => theme.color.gray['400']};
  ${({ theme }) => theme.typo.text_lg};
  cursor: pointer;
  bottom: 1.75rem;
  position: fixed;
  padding: 0.85rem 2.725rem;
  border-radius: 0.5rem;
`
