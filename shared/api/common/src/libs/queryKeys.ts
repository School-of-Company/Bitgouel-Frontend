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
  getLectureList: () => ['lecture', 'getLectureList'],
}
