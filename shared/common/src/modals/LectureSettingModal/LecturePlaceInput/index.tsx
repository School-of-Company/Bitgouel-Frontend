import { InputCancel, LecturePlace, Portal } from '@bitgouel/common'
import { ChangeEvent, useState } from 'react'
import { useRecoilState } from 'recoil'
import {
  SearchInput,
  SearchInputBox,
  SearchWrapper,
} from '../SearchComponent/style'
import DaumPostcode from 'react-daum-postcode'

const LecturePlaceInput = () => {
  const [lecturePlace, setLecturePlace] = useRecoilState(LecturePlace)
  const [isAddressSearch, setIsAddressSearch] = useState(false)

  const addressSearchStyle = {
    width: '400px',
    height: '400px',
    display: isAddressSearch ? 'block' : 'none',
  }

  const onComplete = async (data) => {
    const address: string =
      data.userSelectedType === 'R' ? data.roadAddress : data.jibunAddress
    setLecturePlace((prev) => ({
      ...prev,
      address,
    }))
    setIsAddressSearch(false)
  }

  return (
    <SearchWrapper>
      <SearchInputBox isSelected={!!lecturePlace.address.length}>
        <SearchInput
          type='text'
          value={lecturePlace.address}
          length={lecturePlace.address.length || lecturePlace.detail.length}
          onChange={() => {}}
          onClick={() => setIsAddressSearch(true)}
          placeholder='강의 장소 주소(지번, 도로명) 검색'
          disabled={!!lecturePlace.address.length}
        />
        {lecturePlace.address.length > 0 && (
          <InputCancel
            onClick={() =>
              setLecturePlace((prev) => ({
                ...prev,
                address: '',
              }))
            }
          />
        )}
      </SearchInputBox>
      <SearchInputBox>
        <SearchInput
          type='text'
          value={lecturePlace.detail}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setLecturePlace((prev) => ({
              ...prev,
              detail: e.target.value,
            }))
          }
          placeholder='상세 주소 입력'
        />
        {lecturePlace.detail.length > 0 && (
          <InputCancel
            onClick={() =>
              setLecturePlace((prev) => ({
                ...prev,
                detail: '',
              }))
            }
          />
        )}
      </SearchInputBox>
      {isAddressSearch && (
        <Portal onClose={() => setIsAddressSearch(false)}>
          <DaumPostcode style={addressSearchStyle} onComplete={onComplete} />
        </Portal>
      )}
    </SearchWrapper>
  )
}

export default LecturePlaceInput
