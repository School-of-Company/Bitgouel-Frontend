import { ActivityListPage } from '@bitgouel/common'
import { StudentIdProps } from '@bitgouel/types'

const ActivityList = ({ params }: { params: StudentIdProps }) => {
  return <ActivityListPage studentIdProps={params} />
}

export default ActivityList
