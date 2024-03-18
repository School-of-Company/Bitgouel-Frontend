import { StudentIdProps } from '@bitgouel/types'
import { ActivityListPage } from '@bitgouel/common'

const ActivityList = ({ params }: { params: StudentIdProps }) => {
  return <ActivityListPage studentIdProps={params} />
}

export default ActivityList
