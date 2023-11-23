export interface ActivityListTypes {
  activityId: string //UUID
  title: string
  userId: string //UUID
  username: string
  approveStatus: 'APPROVED' | 'PENDING'
}
