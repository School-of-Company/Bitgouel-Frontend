'use client'

import { governmentQueryKeys, usePostGovernment } from '@bitgouel/api'
import { CancelIcon, FieldEnum, Portal, useModal } from '@bitgouel/common'
import { SchoolInputItem } from '@outside/components'
import { useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { useRecoilValue } from 'recoil'
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
    TitleWrapper,
} from '../style'
import SearchFieldEnum from './SearchFieldEnum'

const CreateGovernmentModal = () => {
  const [governmentName, setGovernmentName] = useState<string>('')
  const fieldEnum = useRecoilValue(FieldEnum)
  const [isDisabled, setIsDisabled] = useState<boolean>(false)

  const { closeModal } = useModal()

  const queryClient = useQueryClient()
  const { mutate } = usePostGovernment({
    onSuccess: () => {
      toast.success('유관기관이 등록되었습니다.')
      closeModal()
      queryClient.invalidateQueries(governmentQueryKeys.getGovernment())
    },
    onError: () => {
      toast.error('유관기관 등록에 실패하였습니다.')
    },
  })

  const onCreate = async () => {
    setIsDisabled(true)
    try {
      await new Promise((resolve, reject) =>
        setTimeout(() => {
          mutate(
            { governmentName, field: fieldEnum },
            {
              onSuccess: resolve,
              onError: reject,
            }
          )
        }, 2000)
      )
    } finally {
      setIsDisabled(false)
    }
  }

  return (
    <Portal onClose={closeModal}>
      <CreateModalWrapper>
        <TitleWrapper>
          <Title>새로운 유관기관 등록</Title>
          <CancelIconBox onClick={closeModal}>
            <CancelIcon />
          </CancelIconBox>
        </TitleWrapper>
        <CreateModalContainer>
          <SelectWrapper>
            <SelectContainer>
              <Content>유관기관 이름</Content>
              <SchoolInputItem
                placeholder='유관기관 이름 입력 (ex: 광주광역시 교육청)'
                type='유관기관 이름'
                onChange={(value) => setGovernmentName(value)}
              />
            </SelectContainer>
            <SelectContainer>
              <Content>유관기관 분야</Content>
              <SearchFieldEnum />
            </SelectContainer>
            <SubmitContainer>
              <SubmitButton disabled={isDisabled} onClick={onCreate}>
                유관기관 등록
              </SubmitButton>
            </SubmitContainer>
          </SelectWrapper>
        </CreateModalContainer>
      </CreateModalWrapper>
    </Portal>
  )
}

export default CreateGovernmentModal
