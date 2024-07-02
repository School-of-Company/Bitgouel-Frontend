import { InputCancel, LecturePlace, Portal } from '@bitgouel/common'
import { ChangeEvent, useState } from 'react'
import { useRecoilState } from 'recoil'
import {
  SearchInput,
  SearchInputBox,
  SearchWrapper,
} from '../LectureSearchComponent/style'
import DaumPostcode from 'react-daum-postcode'

const LecturePlaceInput = () => {
  const [lecturePlace, setLecturePlace] = useRecoilState(LecturePlace)
  const [isRoadSearch, setIsRoadSearch] = useState(false)

  const roadSearchStyle = {
    width: '400px',
    height: '400px',
    display: isRoadSearch ? 'block' : 'none',
  }

  const onComplete = (data) => {
    console.log(data.userSelectedType)
    const address: string =
      data.userSelectedType === 'R' ? data.roadAddress : data.jibunAddress
    setLecturePlace((prev) => ({
      ...prev,
      road: address,
    }))
    setIsRoadSearch(false)
  }

  return (
    <SearchWrapper>
      <SearchInputBox isSelected={!!lecturePlace.road.length}>
        <SearchInput
          type='text'
          value={lecturePlace.road}
          onChange={() => {}}
          onClick={() => setIsRoadSearch(true)}
          placeholder='강의 장소 주소(지번, 도로명) 검색'
          disabled={!!lecturePlace.road.length}
        />
        {lecturePlace.road.length > 0 && (
          <InputCancel
            onClick={() =>
              setLecturePlace((prev) => ({
                ...prev,
                road: '',
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
      {isRoadSearch && (
        <Portal onClose={() => setIsRoadSearch(false)}>
          <DaumPostcode style={roadSearchStyle} onComplete={onComplete} />
        </Portal>
      )}
    </SearchWrapper>
  )
}

export default LecturePlaceInput
