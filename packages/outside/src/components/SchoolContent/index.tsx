import { SchoolFilterText, useModal } from '@bitgouel/common'
import { useRouter } from 'next/navigation'
import { useSetRecoilState } from 'recoil'
import * as S from './style'
import { useGetSchoolNameList } from '@bitgouel/api'

const SchoolContent = () => {
  const { data } = useGetSchoolNameList()
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
      {data?.schools
        .map((school, idx) => (
          <S.SchoolItemBox
            key={idx}
            onClick={() => {
              setSchoolFilterText(school.name.slice(0, -3))
              closeModal()
              push(`/main/club/school`)
            }}
          >
            {school.name}
          </S.SchoolItemBox>
        ))}
    </>
  )
}

export default SchoolContent
