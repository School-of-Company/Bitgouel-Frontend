import { StudentIdProps } from '@bitgouel/types'
import { ActivityListPage } from '@bitgouel/common'

interface Props {
  params: StudentIdProps
}

const ActivityList: React.FC<Props> = ({ params }) => {
  return <ActivityListPage studentIdProps={params} />
}

export default ActivityList
