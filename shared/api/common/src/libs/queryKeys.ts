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
