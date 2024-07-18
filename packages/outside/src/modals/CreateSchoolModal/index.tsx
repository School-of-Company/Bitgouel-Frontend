import { usePostRegistrationSchool } from '@bitgouel/api'
import { CancelIcon, Portal, SchoolType, useModal } from '@bitgouel/common'
import { RegistrationTypes } from '@bitgouel/types'
import { LogoButton, SchoolItem } from '@outside/components'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { useRecoilState } from 'recoil'
import SearchSchoolType from './SearchSchoolType'
import * as S from './style'

const CreateSchoolModal = () => {
  const { closeModal } = useModal()
  const [departments, setDepartments] = useState<string[]>([''])
  const [schoolName, setSchoolName] = useState<string>('')
  const [schoolType, setSchoolType] = useRecoilState(SchoolType)
  const [logoFile, setLogoFile] = useState<File | null>(null)

  const { mutate } = usePostRegistrationSchool({
    onSuccess: () => {
      toast.success('학교가 등록되었습니다.')
      closeModal()
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

  const handleRegistration = () => {
    if (!(schoolName && schoolType && logoFile && departments)) {
      toast.error('새부사항을 다시 확인해주세요.')
      return
    }

    const formData = new FormData()

    const registrationData: RegistrationTypes['webRequest'] = {
      schoolName: schoolName,
      line: schoolType,
      departments: departments,
    }

    formData.append(
      'webRequest',
      new Blob([JSON.stringify(registrationData)], { type: 'application/json' })
    )

    formData.append('logoImage', logoFile)

    mutate(formData)
  }

  return (
    <Portal onClose={closeModal}>
      <S.CreateSchoolModalWrapper>
        <S.TitleWrapper>
          <S.TitleContainer>
            <S.Title>새로운 학교 등록</S.Title>
            <S.CancelIcon onClick={closeModal}>
              <CancelIcon />
            </S.CancelIcon>
          </S.TitleContainer>
        </S.TitleWrapper>
        <S.CreateSchoolModalContainer>
          <S.SelectWrapper>
            <S.SchoolContainer>
              <S.Content>학교 이름</S.Content>
              <SchoolItem
                placeholder='학교 이름 입력 (ex: 숭의과학기술고등학교)'
                type='학교 이름'
                onChange={(value) => setSchoolName(value)}
              />
            </S.SchoolContainer>
            <S.SchoolContainer>
              <S.Content>학교 로고</S.Content>
              <LogoButton onFileChange={(file) => setLogoFile(file)} />
            </S.SchoolContainer>
            <S.SchoolContainer>
              <S.Content>학교 계열</S.Content>
              <SearchSchoolType />
            </S.SchoolContainer>
            <S.SchoolContainer>
              <S.Content>학교 학과</S.Content>
              {departments.map((department, index) => (
                <SchoolItem
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
            </S.SchoolContainer>
            <S.SubmitContainer>
              <S.SubmitButton onClick={handleRegistration}>
                학교 등록
              </S.SubmitButton>
            </S.SubmitContainer>
          </S.SelectWrapper>
        </S.CreateSchoolModalContainer>
      </S.CreateSchoolModalWrapper>
    </Portal>
  )
}

export default CreateSchoolModal
