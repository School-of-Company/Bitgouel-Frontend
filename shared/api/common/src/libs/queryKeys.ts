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
}

export const lectureQueryKeys = {
  postLetureCreate: () => ['lecture', 'postLectureCreat'],
  getLectureList: () => ['lecture', 'getLectureList'],
  getLectureDetail: (id: string | undefined) => [
    'lecture',
    'getLectureDetail',
    id,
  ],
  postLectureApplication: (id: string | undefined) => [
    'lecture',
    'postLectureApplication',
    id,
  ],
  patchLectureApprove: (id: string | undefined) => [
    'lecture',
    'patchLectureApprove',
    id,
  ],
  deleteLectureReject: (id: string | undefined) => [
    'lecture',
    'deleteLectureReject',
    id,
  ],
}
