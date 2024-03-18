import { ActivityModifyPage } from '@/PageContainer'
import { StudentIdProps } from '@bitgouel/types'

const ActivityModify = ({
  params,
}: {
  params: StudentIdProps & { activityId: string }
}) => {
  return (
    <ActivityModifyPage
      studentIdProps={params}
      activityId={params.activityId}
    />
  )
}

export default ActivityModify
