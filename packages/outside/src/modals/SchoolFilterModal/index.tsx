import {
  CancelIcon,
  Portal,
  SchoolFilterText,
  schools,
  useModal,
} from '@bitgouel/common'
import { useRouter } from 'next/navigation'
import { useSetRecoilState } from 'recoil'
import * as S from './style'

const SchoolFilterModal = () => {
  const { push } = useRouter()
  const { closeModal } = useModal()
  const setSchoolFilterText = useSetRecoilState(SchoolFilterText)

  return (
    <Portal onClose={closeModal}>
      <S.SchoolFilterModalWrapper>
        <S.SchoolFilterTitleBox>
          <h3>학교 선택</h3>
          <div>
            <CancelIcon onClick={closeModal} />
          </div>
        </S.SchoolFilterTitleBox>
        <S.SchoolListContainer>
          <S.SchoolItemBox
            onClick={() => {
              push(`/main/club`)
              closeModal()
            }}
          >
            모든 학교
          </S.SchoolItemBox>
          {schools
            .map((school) => school + '등학교')
            .map((school, idx) => (
              <S.SchoolItemBox
                key={idx}
                onClick={() => {
                  setSchoolFilterText(school.slice(0, -3))
                  closeModal()
                  push(`/main/club/school`)
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
