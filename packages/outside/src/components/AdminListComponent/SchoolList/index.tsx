import { useGetSchoolList } from '@bitgouel/api'
import { LineEnumToKor, NoneResult, WaitingAnimation } from '@bitgouel/common'
import { SchoolItem } from '@outside/components/AdminItemComponent'
import { SchoolDisplayInfo } from '../../AdminDisplayInfo'
import { AdminItemListContainer } from '../style'

const SchoolList = () => {
  const { data, isLoading } = useGetSchoolList()

  return (
    <>
      <SchoolDisplayInfo />
      <AdminItemListContainer>
        {isLoading && <WaitingAnimation title={'학교 명단을'} />}
        {data?.schools.length <= 0 ? (
          <NoneResult title={'학교 명단이'} />
        ) : (
          data?.schools.map((school) => {
            const otherItemList: { width: string; text: string }[] = [
              { width: '10.5rem', text: LineEnumToKor[school.line] },
              { width: '10.5rem', text: `${school.departments.length}개 학과` },
              { width: 'auto', text: `${school.clubs.length}개 동아리` },
            ]
            return (
              <SchoolItem
                key={school.id}
                schoolId={String(school.id)}
                name={school.schoolName}
                nameWidth='15rem'
                otherItemList={otherItemList}
                clubs={school.clubs}
              />
            )
          })
        )}
      </AdminItemListContainer>
    </>
  )
}

export default SchoolList
