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
  postLectureCreate: () => ['lecture', 'create'],
  getLectureList: () => ['lecture', 'list'],
  getLectureDetail: (id: string) => ['lecture', 'detail', id],
  postLectureApplication: (id: string) => ['lecture', 'application', id],
  patchLectureApprove: (id: string) => ['lecture', 'approve', id],
  deleteLectureReject: (id: string) => ['lecture', 'reject', id],
} as const

export const activityQueryKeys = {
  postActivityInformation: () => ['activity', 'information'],
  patchActivityCorrection: (activity_id: string) => [
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
} as const

export const myQueryKeys = {
  getMy: () => ['my', 'myData'],
} as const

export const postQueryKeys = {
  postBoardCreate: () => ['post', 'create'],
  getBoardList: () => ['post', 'list'],
  getBoardDetail: (id: string) => ['post', 'detail', id],
  patchBoardModify: (id: string) => ['post', 'modify', id],
  deleteBoardDelete: (id: string) => ['post', 'delete', id],
} as const

export const clubQueryKeys = {
  getSchoolClub: () => ['club', 'schoolClub'],
  getClub: () => ['club', 'clubList'],
  getClubDetail: () => ['club', 'detail'],
  getMyClub: () => ['club', 'myClub'],
  getStudentDetail: () => ['club', 'studentDetail']
} as const