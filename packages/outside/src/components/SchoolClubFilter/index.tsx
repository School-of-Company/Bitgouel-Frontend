import { InputCancel } from '@bitgouel/common'
import { useState } from 'react'
import FieldScroll from '../FieldScroll'
import * as S from './style'

const SchoolClubFilter = () => {
  const [selectedOption, setSelectedOption] = useState<string>('핵심분야')
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <S.ContSelect>
      <S.SelectContainer
        onClick={() => setIsOpen(!isOpen)}
        baseColor={selectedOption}
      >
        {selectedOption}
      </S.SelectContainer>
      {isOpen && (
        <FieldScroll
          setSelectedField={setSelectedOption}
          setIsScrollOpen={setIsOpen}
        />
      )}

      {selectedOption && selectedOption !== '핵심분야' && (
        <S.XIconContainer>
          <div onClick={() => setSelectedOption('핵심분야')}>
            <InputCancel />
          </div>
        </S.XIconContainer>
      )}
    </S.ContSelect>
  )
}

export default SchoolClubFilter
