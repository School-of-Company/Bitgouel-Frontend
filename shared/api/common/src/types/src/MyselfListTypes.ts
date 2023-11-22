export interface MyselfListTypes {
  activityId: string //UUID
  title: string
  userId: string //UUID
  username: string
  approveStatus: 'ApproveStatus APPROVED' | 'PENDING'
}
