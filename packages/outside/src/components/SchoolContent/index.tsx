import { SchoolFilterText, schools, useModal } from '@bitgouel/common'
import { useRouter } from 'next/navigation'
import { useSetRecoilState } from 'recoil'
import * as S from './style'

const SchoolContent = () => {
  const { closeModal } = useModal()
  const { push } = useRouter()
  const setSchoolFilterText = useSetRecoilState(SchoolFilterText)
  return (
    <>
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
    </>
  )
}

export default SchoolContent
