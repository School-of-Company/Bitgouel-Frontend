import React, { useState, ChangeEvent } from 'react'
import styled from '@emotion/styled'
import { LogoImagePlusIcon } from '@bitgouel/common'

const UploadContainer = styled.div`
  display: flex;
  align-items: center;
`

const UploadInput = styled.input`
  display: none;
`

const UploadButton = styled.label`
  display: flex;
  width: 5rem;
  height: 5rem;
  background-color: ${({ theme }) => theme.color.gray['900']};
  border-radius: 0.5rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  flex-direction: column;
  gap: 0.25rem;
  ${({ theme }) => theme.typo.text_sm.semibold};
  color: ${({ theme }) => theme.color.gray['700']};
`

const ImageLabel = styled.label`
  cursor: pointer;
`

const ImagePreview = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 0.5rem;
  object-fit: cover;
`

interface LogoButtonProps {
  onFileChange: (file: File) => void
  logoUrl: string | null
}

const LogoButton = ({ onFileChange, logoUrl }: LogoButtonProps) => {
  const [imageUrl, setImageUrl] = useState<string | null>(logoUrl)

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0]
      setImageUrl(URL.createObjectURL(file))
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
      {!imageUrl ? (
        <UploadButton htmlFor='fileUpload'>
          <LogoImagePlusIcon />
          <span>학교 로고</span>
        </UploadButton>
      ) : (
        <ImageLabel htmlFor='fileUpload'>
          <ImagePreview src={imageUrl} alt='이미지 미리보기' />
        </ImageLabel>
      )}
    </UploadContainer>
  )
}

export default LogoButton
