import React from 'react'
import { ActivityDetailPage } from '@/PageContainer'

const ActivityDetail = ({ params }: { params: { activityId: string } }) => {
  return <ActivityDetailPage activityId={params.activityId} />
}

export default ActivityDetail
