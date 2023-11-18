export const authQueryKeys = {
  patchReissue: () => ['auth', 'patchReissue'],
  postLogin: () => ['auth', 'postLogin'],
  deleteLogout: () => ['auth', 'deleteLogout'],
  deleteWithDraw: () => ['auth', 'deleteWithDraw'],
  postSignUpStudent: () => ['auth', 'postSignUpStudent'],
  postSignUpTeacher: () => ['auth', 'postSignUpTeacher'],
  postSignUpBbozzak: () => ['auth', 'postSignUpBbozzak'],
  postSignUpProfessor: () => ['auth', 'postSignUpProfessor'],
  postSignUpGoverment: () => ['auth', 'postSignUpGoverment'],
  postSignUpCompanyInstructor: () => ['auth', 'postSignUpCompanyInstructor'],
} as const

export const lectureQueryKeys = {
  postLetureCreate: () => ['lecture', 'postLectureCreat'],
  getLectureList: () => ['lecture', 'getLectureList'],
  getLectureDetail: (id: string) => ['lecture', 'getLectureDetail', id],
  postLectureApplication: (id: string) => [
    'lecture',
    'postLectureApplication',
    id,
  ],
  patchLectureApprove: (id: string) => ['lecture', 'patchLectureApprove', id],
  deleteLectureReject: (id: string) => ['lecture', 'deleteLectureReject', id],
} as const

export const activityQueryKeys = {
  postActivityInformation: () => ['activity', 'postActivityInformation'],
  patchActivityInformationCorrection: (id: string) => [
    'activity',
    'patchActivityInformationCorrection',
    id,
  ],
  patchActivityApprove: (id: string) => [
    'activity',
    'patchActivityApprove',
    id,
  ],
  deleteActivityReject: (id: string) => [
    'activity',
    'deleteActivityReject',
    id,
  ],
  deleteActivityInformationRemove: (id: string) => [
    'activity',
    'deleteActivityInformationRemove',
    id,
  ],
  getActivityMyselfList: () => ['activity', 'getActivityMyselfList'],
  getActivityList: (student_id: string) => [
    'activity',
    'getActivityList',
    student_id,
  ],
  getActivityInformationList: () => ['activity', 'getActivityInformationList'],
  getActivityInformationDetail: () => (id: string) =>
    ['activity', 'getActivityInformationDetail', id],
}
