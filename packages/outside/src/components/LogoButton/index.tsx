import React, { useState } from 'react'
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
  width: 70px;
  height: 30px;
  background-color: ${({ theme }) => theme.color.main};
  display: flex;
  align-items: center;
  padding: 12px 48px;
  cursor: pointer;
  border-radius: 8px;

  color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.typo.text_lg.semibold};
`

const FileName = styled.span`
  margin-left: 20px;
  ${({ theme }) => theme.typo.text_sm.regular};
  color: ${({ theme }) => theme.color.gray['400']};
`

const LogoButton = () => {
  const [fileName, setFileName] = useState('')

  const handleFileChange = (event: any) => {
    const file = event.target.files[0]
    setFileName(file ? file.name : '')
  }

  return (
    <UploadContainer>
      <UploadInput
        type='file'
        id='file-upload'
        onChange={handleFileChange}
        accept='.jpg, .jpeg, .png, .heic'
      />
      <UploadButton htmlFor='file-upload'>파일 선택</UploadButton>
      {fileName && <FileName>{fileName}</FileName>}
    </UploadContainer>
  )
}

export default LogoButton
