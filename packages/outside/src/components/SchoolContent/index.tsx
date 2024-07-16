import { SchoolFilterText, useModal } from '@bitgouel/common'
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
      {[] // 백엔드에서 오는 학교 데이터를 추가할 예정입니다. 회원가입의 스크롤도 마찬가지입니다.
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
