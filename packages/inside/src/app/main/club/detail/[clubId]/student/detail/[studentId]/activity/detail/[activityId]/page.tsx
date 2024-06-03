import { StudentIdProps } from '@bitgouel/types'
import { ActivityDetailPage } from '@bitgouel/common'

const ActivityDetail = ({
  params,
}: {
  params: StudentIdProps & { activityId: string }
}) => {
  return (
    <ActivityDetailPage
      studentIdProps={params}
      activityId={params.activityId}
    />
  )
}

export default ActivityDetail
