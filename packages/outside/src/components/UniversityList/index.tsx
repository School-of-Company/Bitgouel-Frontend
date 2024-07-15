import { useGetUniversity } from '@bitgouel/api'
import { NoneResult, WaitingAnimation } from '@bitgouel/common'
import { UniversityDisplayInfo } from '../AdminDisplayInfo'
import { UniversityItem } from '../AdminItemComponent'
import * as S from './style'

const UniversityList = () => {
  const { data, isLoading } = useGetUniversity()

  return (
    <>
      <UniversityDisplayInfo />
      <S.UserListContainer>
        {isLoading && <WaitingAnimation title={'대학 명단을'} />}
        {data?.universities.length <= 0 ? (
          <NoneResult title={'대학 명단이'} />
        ) : (
          data?.universities.map((university) => (
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

export default UniversityList
