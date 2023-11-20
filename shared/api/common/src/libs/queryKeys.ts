export const authQueryKeys = {
  patchReissue: () => ['auth', 'reissue'],
  postLogin: () => ['auth', 'login'],
  deleteLogout: () => ['auth', 'logout'],
  deleteWithDraw: () => ['auth', 'withDraw'],
  postSignUpStudent: () => ['auth', 'signUp'],
  postSignUpTeacher: () => ['auth', 'signUp'],
  postSignUpBbozzak: () => ['auth', 'signUp'],
  postSignUpProfessor: () => ['auth', 'signUp'],
  postSignUpGoverment: () => ['auth', 'signUp'],
  postSignUpCompanyInstructor: () => ['auth', 'signUp'],
} as const

export const lectureQueryKeys = {
  postLetureCreate: () => ['lecture', 'creat'],
  getLectureList: () => ['lecture', 'list'],
  getLectureDetail: (id: string) => ['lecture', 'detail', id],
  postLectureApplication: (id: string) => ['lecture', 'application', id],
  patchLectureApprove: (id: string) => ['lecture', 'approve', id],
  deleteLectureReject: (id: string) => ['lecture', 'reject', id],
} as const

export const activityQueryKeys = {
  postActivityInformation: () => ['activity', 'information'],
  patchActivityInformationCorrection: (activity_id: string) => [
    'activity',
    'correction',
    activity_id,
  ],
  patchActivityApprove: (activity_id: string) => [
    'activity',
    'approve',
    activity_id,
  ],
  deleteActivityReject: (activity_id: string) => [
    'activity',
    'reject',
    activity_id,
  ],
  deleteActivityInformationRemove: (activity_id: string) => [
    'activity',
    'remove',
    activity_id,
  ],
  getActivityMyselfList: () => ['activity', 'myselfList'],
  getActivityList: (student_id: string) => ['activity', 'list', student_id],
  getActivityInformationList: () => ['activity', 'informationList'],
  getActivityInformationDetail: () => (activity_id: string) =>
    ['activity', 'detail', activity_id],
}
