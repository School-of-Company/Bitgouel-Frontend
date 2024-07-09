import { InputCancel } from '@bitgouel/common'
import { useState } from 'react'
import * as S from './style'

interface OptionProps {
  value: string
  label: string
}

const FilterOptions: OptionProps[] = [
  { value: '미래형 운송기기', label: '미래형 운송기기' },
  { value: '에너지산업', label: '에너지산업' },
  { value: '의료•헬스케어', label: '의료•헬스케어' },
  { value: 'AI 융•복합', label: 'AI 융•복합' },
  { value: '문화산업', label: '문화산업' },
]

const SchoolClubFilter = () => {
  const [selectedOption, setSelectedOption] = useState<string>('핵심분야')
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleSelect = (option: OptionProps) => {
    setSelectedOption(option.label)
    setIsOpen(false)
  }

  return (
    <S.ContSelect>
      <S.SelectContainer
        onClick={() => setIsOpen(!isOpen)}
        baseColor={selectedOption}
      >
        {selectedOption}
      </S.SelectContainer>
      {isOpen && (
        <S.ListMember>
          {FilterOptions.map((option) => (
            <li key={option.value}>
              <S.ListButton type='button' onClick={() => handleSelect(option)}>
                {option.label}
              </S.ListButton>
            </li>
          ))}
        </S.ListMember>
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
