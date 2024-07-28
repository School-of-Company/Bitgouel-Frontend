'use client'

import { companyQueryKeys, usePostCompany } from '@bitgouel/api'
import { CancelIcon, FieldEnum, Portal, useModal } from '@bitgouel/common'
import { SchoolInputItem } from '@outside/components'
import { useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { useRecoilValue } from 'recoil'
import SearchFieldEnum from '../CreateGovernmentModal/SearchFieldEnum'
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

const CreateCompanyModal = () => {
  const [companyName, setCompanyName] = useState<string>('')
  const fieldEnum = useRecoilValue(FieldEnum)
  const [isDisabled, setIsDisabled] = useState<boolean>(false)

  const { closeModal } = useModal()

  const queryClient = useQueryClient()
  const { mutate } = usePostCompany({
    onSuccess: () => {
      toast.success('기업이 등록되었습니다.')
      closeModal()
      queryClient.invalidateQueries(companyQueryKeys.getCompany())
    },
    onError: () => {
      toast.error('기업 등록에 실패하였습니다.')
    },
  })

  const onCreate = async () => {
    setIsDisabled(true)
    try {
      await new Promise((resolve, reject) =>
        setTimeout(() => {
          mutate(
            { companyName, field: fieldEnum },
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
          <Title>새로운 기업 등록</Title>
          <CancelIconBox onClick={closeModal}>
            <CancelIcon />
          </CancelIconBox>
        </TitleWrapper>
        <CreateModalContainer>
          <SelectWrapper>
            <SelectContainer>
              <Content>기업 이름</Content>
              <SchoolInputItem
                placeholder='기업 이름 입력'
                type='기업 이름'
                onChange={(value) => setCompanyName(value)}
              />
            </SelectContainer>
            <SelectContainer>
              <Content>기업 분야</Content>
              <SearchFieldEnum />
            </SelectContainer>
            <SubmitContainer>
              <SubmitButton disabled={isDisabled} onClick={onCreate}>
                기업 등록
              </SubmitButton>
            </SubmitContainer>
          </SelectWrapper>
        </CreateModalContainer>
      </CreateModalWrapper>
    </Portal>
  )
}

export default CreateCompanyModal
