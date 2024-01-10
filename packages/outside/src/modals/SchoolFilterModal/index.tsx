import {
  CancelIcon,
  SchoolFilterText,
  Portal,
  schools,
  useModal,
} from '@bitgouel/common'
import * as S from './style'
import { useSetRecoilState } from 'recoil'

const SchoolFilterModal = () => {
  const { closeModal } = useModal()
  const setSchoolFilterText = useSetRecoilState(SchoolFilterText)
  return (
    <Portal onClose={closeModal}>
      <S.SchoolFilterModalWrapper>
        <S.SchoolFilterTitleBox>
          <h1>학교 선택</h1>
          <div onClick={closeModal}>
            <CancelIcon />
          </div>
        </S.SchoolFilterTitleBox>
        <S.SchoolListContainer>
          {schools
            .map((school) => school + '등학교')
            .map((school, idx) => (
              <S.SchoolItemBox
                key={idx}
                onClick={() => {
                  setSchoolFilterText(school.slice(0, -3))
                  closeModal()
                }}
              >
                {school}
              </S.SchoolItemBox>
            ))}
        </S.SchoolListContainer>
      </S.SchoolFilterModalWrapper>
    </Portal>
  )
}

export default SchoolFilterModal
