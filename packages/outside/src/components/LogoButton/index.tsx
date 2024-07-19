import React, { useState, ChangeEvent } from 'react'
import styled from '@emotion/styled'

const UploadContainer = styled.div`
  display: flex;
  align-items: center;
`

const UploadInput = styled.input`
  display: none;
`

const UploadButton = styled.label`
  display: inline-block;
  width: 4.375rem;
  height: 1.875rem;
  background-color: ${({ theme }) => theme.color.main};
  display: flex;
  align-items: center;
  padding: 0.75rem 3rem;
  cursor: pointer;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.typo.text_lg.semibold};
`

const FileName = styled.span`
  margin-left: 1.25rem;
  ${({ theme }) => theme.typo.text_sm.regular};
  color: ${({ theme }) => theme.color.gray['400']};
`

interface LogoButtonProps {
  onFileChange: (file: File) => void
}

const LogoButton = ({ onFileChange }: LogoButtonProps) => {
  const [fileName, setFileName] = useState<string>('')

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0]
      setFileName(file.name)
      onFileChange(file)
    }
  }

  return (
    <UploadContainer>
      <UploadInput
        type='file'
        id='fileUpload'
        onChange={handleFileChange}
        accept='.jpg, .jpeg, .png, .heic'
      />
      <UploadButton htmlFor='fileUpload'>파일 선택</UploadButton>
      {fileName && <FileName>{fileName}</FileName>}
    </UploadContainer>
  )
}

export default LogoButton
