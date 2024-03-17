import { ActivityDetailPage } from '@bitgouel/common'
import { StudentIdProps } from '@bitgouel/types'

const ActivityDetail = ({
  params,
}: {
  params: StudentIdProps & { activityId: string }
}) => {
  return <ActivityDetailPage studentIdProps={params} />
}

export default ActivityDetail
