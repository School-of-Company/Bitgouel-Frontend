export const authQueryKeys = {
  patchAccessToken: () => ['auth', 'accessToken'],
  postLogin: () => ['auth', 'login'],
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
  getLectureDetail: (id: string) => ['lecture', 'getLectureDetail', id],
  postLectureApplication: (id:string) => ['lecture', 'postLectureApplication', id],
  patchLectureApprove: (id: string) => ['lecture', 'patchLectureApprove', id],
  deleteLectureReject: (id:string) => ['lecture', 'deleteLectureReject', id],
}
