import { ActivityListPage } from '@bitgouel/common/src/pages'
import { StudentIdProps } from '@bitgouel/types'

const ActivityList = ({ params }: { params: StudentIdProps }) => {
  return <ActivityListPage studentIdProps={params} />
}

export default ActivityList
