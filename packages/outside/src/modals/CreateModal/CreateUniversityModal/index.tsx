import { usePostUniversity } from '@bitgouel/api'
import { CancelIcon, Portal, useModal } from '@bitgouel/common'
import { SchoolInputItem } from '@outside/components'
import { useState } from 'react'
import { toast } from 'react-toastify'
import {
  CancelIconBox,
  Content,
  CreateModalContainer,
  CreateModalWrapper,
  SelectContainer,
  SelectWrapper,
  SubmitButton,
  SubmitContainer,
  Title,
  TitleContainer,
  TitleWrapper,
} from '../style'

const CreateUniversityModal = () => {
  const [universityName, setUniversityName] = useState<string>('')
  const [isDisabled, setIsDisabled] = useState<boolean>(false)

  const { closeModal } = useModal()

  const { mutate } = usePostUniversity({
    onSuccess: () => {
      toast.success('대학이 등록되었습니다.')
      closeModal()
    },
    onError: () => {
      toast.error('대학 등록에 실패하였습니다.')
    },
  })

  const onCreate = async () => {
    setIsDisabled(true)
    try {
      await new Promise((resolve, reject) =>
        setTimeout(() => {
          mutate({ universityName })
        }, 2000)
      )
    } catch {
      setIsDisabled(false)
    }
  }

  return (
    <Portal onClose={closeModal}>
      <CreateModalWrapper>
        <TitleWrapper>
          <TitleContainer>
            <Title>새로운 대학 등록</Title>
            <CancelIconBox onClick={closeModal}>
              <CancelIcon />
            </CancelIconBox>
          </TitleContainer>
        </TitleWrapper>
        <CreateModalContainer>
          <SelectWrapper gap='37rem'>
            <SelectContainer>
              <Content>대학 이름</Content>
              <SchoolInputItem
                placeholder='대학 이름 입력 (ex: 숭의과학기술고등학교)'
                type='학교 이름'
                onChange={(value) => setUniversityName(value)}
              />
            </SelectContainer>
            <SubmitContainer>
              <SubmitButton disabled={isDisabled} onClick={onCreate}>
                대학 등록
              </SubmitButton>
            </SubmitContainer>
          </SelectWrapper>
        </CreateModalContainer>
      </CreateModalWrapper>
    </Portal>
  )
}

export default CreateUniversityModal
