import { ActivityListPage } from '@bitgouel/common/src/pages'
import { StudentIdProps } from '@bitgouel/types'

const ActivityList = ({ params }: { params: StudentIdProps }) => {
  return (
    <ActivityListPage
      studentIdProps={{ clubId: params.clubId, studentId: params.studentId }}
    />
  )
}

export default ActivityList
