import { useGetSchoolList, useGetUniversity } from '@bitgouel/api'
import { NoneResult, WaitingAnimation } from '@bitgouel/common'
import { UniversityDisplayInfo } from '../AdminDisplayInfo'
import { UniversityItem } from '../AdminItemComponent'
import * as S from './style'

const SchoolList = () => {
  const { data, isLoading } = useGetSchoolList()
  
  return (
    <>
      <UniversityDisplayInfo />
      <S.UserListContainer>
        {isLoading && <WaitingAnimation title={'학교 명단을'} />}
        {data?.schools.length <= 0 ? (
          <NoneResult title={'학교 명단이'} />
        ) : (
          data?.schools.map((university) => (
            <UniversityItem
              universityId={String(university.id)}
              name={university.universityName}
              nameWidth='53.5rem'
              departments={university.departments}
            />
          ))
        )}
      </S.UserListContainer>
    </>
  )
}

export default SchoolList
