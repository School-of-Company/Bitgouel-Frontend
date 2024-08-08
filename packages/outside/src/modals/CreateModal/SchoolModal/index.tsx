'use client'

import {
  schoolQueryKeys,
  usePatchSchool,
  usePostRegistrationSchool,
} from '@bitgouel/api'
import { CancelIcon, Portal, SchoolType, useModal } from '@bitgouel/common'
import { RegistrationTypes, SchoolsType } from '@bitgouel/types'
import { LogoButton, SchoolInputItem } from '@outside/components'
import { useQueryClient } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useRecoilState } from 'recoil'
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
import SearchSchoolType from './SearchSchoolType'
import * as S from './style'

interface SchoolModalProps {
  type: '새로운 학교 생성' | '학교 정보 수정'
  schoolItems?: SchoolsType
}

const SchoolModal = ({ type, schoolItems }: SchoolModalProps) => {
  const queryClient = useQueryClient()

  const { closeModal } = useModal()
  const [schoolName, setSchoolName] = useState<string>('')
  const [logoFile, setLogoFile] = useState<File | null>(null)
  const [schoolType, setSchoolType] = useRecoilState(SchoolType)
  const [departments, setDepartments] = useState<string[]>([])
  const [isDisabled, setIsDisabled] = useState<boolean>(false)

  const [logoImageUrl, setLogoImageUrl] = useState<string | null>(null)

  useEffect(() => {
    if (schoolItems) {
      setSchoolName(schoolItems.name)
      setSchoolType(schoolItems.line)
      setDepartments(schoolItems.departments)
      setLogoImageUrl(schoolItems.logoImageUrl)
    }
  }, [schoolItems])

  const mutation = schoolItems
    ? usePatchSchool(schoolItems.id, {
        onSuccess: () => {
          toast.success('학교 정보가 수정되었습니다.')
          setSchoolType('')
          closeModal()
          queryClient.invalidateQueries(schoolQueryKeys.getSchool())
        },
        onError: () => {
          toast.error('학교 정보 수정에 실패했습니다.')
        },
      })
    : usePostRegistrationSchool({
        onSuccess: () => {
          toast.success('학교가 등록되었습니다.')
          setSchoolType('')
          closeModal()
          queryClient.invalidateQueries(schoolQueryKeys.getSchool())
        },
        onError: () => {
          toast.error('학교 등록에 실패하였습니다.')
        },
      })

  const handleAddDepartment = () => setDepartments([...departments, ''])

  const handleDelete = (index: number) =>
    setDepartments((prev) => prev.filter((_, i) => i !== index))

  const handleDepartmentChange = (index: number, value: string) => {
    setDepartments((prev) =>
      prev.map((department, i) => (i === index ? value : department))
    )
  }

  const handleRegistration = async () => {
    if (!schoolItems) {
      if (!schoolName || !schoolType || !logoFile || departments.length === 0) {
        toast.error('세부사항을 다시 확인해주세요.')
        return
      }
    } else {
      if (!schoolName || !schoolType || departments.length === 0) {
        toast.error('세부사항을 다시 확인해주세요.')
        return
      }
    }

    const formData = new FormData()

    const schoolData: RegistrationTypes['webRequest'] = {
      name: schoolName,
      line: schoolType,
      departments: departments,
    }

    formData.append(
      'webRequest',
      new Blob([JSON.stringify(schoolData)], { type: 'application/json' })
    )

    if (logoFile) {
      formData.append('logoImage', logoFile)
    } else {
      formData.append(
        'logoImage',
        new Blob([], { type: 'application/octet-stream' }),
        'empty.png'
      )
    }

    setIsDisabled(false)
    try {
      await new Promise((resolve, reject) =>
        setTimeout(() => {
          if (schoolItems) {
            mutation.mutate(formData, {
              onSuccess: resolve,
              onError: reject,
            })
          } else {
            mutation.mutate(formData, {
              onSuccess: resolve,
              onError: reject,
            })
          }
        }, 2000)
      )
    } finally {
      setIsDisabled(false)
    }
  }

  const handleCloseModal = () => {
    closeModal()
    setSchoolType('')
  }

  return (
    <Portal onClose={handleCloseModal}>
      <CreateModalWrapper>
        <TitleWrapper>
          <Title>{type}</Title>
          <CancelIconBox onClick={handleCloseModal}>
            <CancelIcon />
          </CancelIconBox>
        </TitleWrapper>
        <CreateModalContainer>
          <SelectWrapper>
            <SelectContainer>
              <LogoButton
                onFileChange={(file) => setLogoFile(file)}
                logoUrl={logoImageUrl}
              />
            </SelectContainer>
            <SelectContainer>
              <Content>학교 이름</Content>
              <SchoolInputItem
                placeholder='학교 이름 입력 (ex: 숭의과학기술고등학교)'
                type='학교 이름'
                onChange={(value) => setSchoolName(value)}
                value={schoolName}
              />
            </SelectContainer>
            <SelectContainer>
              <Content>학교 계열</Content>
              {schoolItems ? (
                <SearchSchoolType schoolLine={schoolItems.line} />
              ) : (
                <SearchSchoolType />
              )}
            </SelectContainer>
            <SelectContainer>
              <Content>학교 학과</Content>
              {departments.map((department, index) => (
                <SchoolInputItem
                  key={`department-${index}`}
                  index={index}
                  placeholder={'학교 학과 입력(ex: 스마트 IOT과)'}
                  type='학과 이름'
                  value={department}
                  onChange={(value) => handleDepartmentChange(index, value)}
                  handleDelete={() => handleDelete(index)}
                />
              ))}
              <S.CreateDepartmentContainer onClick={handleAddDepartment}>
                <span>+ 학과 추가하기</span>
              </S.CreateDepartmentContainer>
            </SelectContainer>
            <SubmitContainer>
              <SubmitButton disabled={isDisabled} onClick={handleRegistration}>
                {type === '학교 정보 수정' ? '학교 수정' : '학교 등록'}
              </SubmitButton>
            </SubmitContainer>
          </SelectWrapper>
        </CreateModalContainer>
      </CreateModalWrapper>
    </Portal>
  )
}

export default SchoolModal
