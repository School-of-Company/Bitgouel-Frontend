import { InputCancel, SearchIcon } from '@bitgouel/common'
import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  ReactNode,
  SetStateAction,
} from 'react'
import * as S from './style'

const LectureSearchComponent = ({ children }: { children: ReactNode }) => {
  return <S.SearchWrapper>{children}</S.SearchWrapper>
}

interface SearchInputBoxProps {
  inputValue: string
  setInputValue: Dispatch<SetStateAction<string>>
  recoilValue: string
  onSubmit: (e?: FormEvent) => void
  onDeleteInputValue: () => void
  inputPlaceholder: '유형' | '구분' | '핵심분야' | '학과'
}

const SearchInputBox = ({
  inputValue,
  setInputValue,
  recoilValue,
  onSubmit,
  onDeleteInputValue,
  inputPlaceholder,
}: SearchInputBoxProps) => {
  return (
    <S.SearchInputBox onSubmit={onSubmit} isSelected={!!recoilValue.length}>
      <S.SearchInput
        type='text'
        value={recoilValue.length ? recoilValue : inputValue}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setInputValue(e.target.value)
        }
        placeholder={`${inputPlaceholder} 검색 또는 임의로 추가...`}
        disabled={!!recoilValue.length}
      />
      {recoilValue.length ? (
        <InputCancel onClick={() => onDeleteInputValue()} />
      ) : (
        <SearchIcon onClick={onSubmit} />
      )}
    </S.SearchInputBox>
  )
}

interface SearchItemListProps {
  searchList: string[]
  inputValue: string
  onSelectInputValue: (item: string) => void
  addText?: string
}

const SearchItemList = ({
  searchList,
  inputValue,
  onSelectInputValue,
  addText,
}: SearchItemListProps) => {
  return (
    <S.SearchListContainer>
      {searchList.map((searchItem) => (
        <S.SearchItem
          key={searchItem}
          onClick={() => onSelectInputValue(searchItem)}
        >
          <span>{searchItem}</span>
        </S.SearchItem>
      ))}
      {addText && (
        <S.SearchItem onClick={() => onSelectInputValue(inputValue)}>
          <span>{inputValue}</span>
          <small>새 {addText} 추가하기...</small>
        </S.SearchItem>
      )}
    </S.SearchListContainer>
  )
}

LectureSearchComponent.SearchInputBox = SearchInputBox
LectureSearchComponent.SearchItemList = SearchItemList
export default LectureSearchComponent
