import { useGetSchoolList } from '@bitgouel/api'
import { NoneResult, WaitingAnimation } from '@bitgouel/common'
import { UniversityDisplayInfo } from '../../AdminDisplayInfo'
import { AdminItemListContainer } from '../style'

const SchoolList = () => {
  const { data, isLoading } = useGetSchoolList()
  
  return (
    <>
      <UniversityDisplayInfo />
      <AdminItemListContainer>
        {isLoading && <WaitingAnimation title={'학교 명단을'} />}
        {data?.schools.length <= 0 ? (
          <NoneResult title={'학교 명단이'} />
        ) : (
          data?.schools.map((school) => (
            <SchoolItem
              
            />
          ))
        )}
      </AdminItemListContainer>
    </>
  )
}

export default SchoolList
