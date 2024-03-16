import { StudentIdProps } from '@bitgouel/types'
import { ActivityListPage } from '@bitgouel/common/src/pages'

const ActivityList = ({ params }: { params: StudentIdProps }) => {
  return <ActivityListPage studentIdProps={params} />
}

export default ActivityList
