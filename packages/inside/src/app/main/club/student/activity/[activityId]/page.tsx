import React from 'react'
import { ActivityModifyPage } from '@/PageContainer'

const ActivityModify = ({ params }: { params: { activityId: string } }) => {
  return <ActivityModifyPage activityId={params.activityId} />
}

export default ActivityModify
