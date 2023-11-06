export const authQueryKeys = {
  patchAccessToken: () => ['auth', 'accessToken'],
  postLoginCode: () => ['auth', 'loginCode'],
  deleteLogoutCode: () => ['auth', 'deleteLogoutCode'],
  deleteWithDrawCode: () => ['auth', 'deleteWithDrawCode'],
  postSignUpStudentCode: () => ['auth', 'postSignUpStudentCode'],
  postSignUpTeacherCode: () => ['auth', 'postSignUpTeacherCode'],
  postSignUpBbozzakCode: () => ['auth', 'postSignUpBbozzakCode'],
  postSignUpProfessorCode: () => ['auth', 'postSignUpProfessorCode'],
  postSignUpGovermentCode: () => ['auth', 'postSignUpGovermentCode'],
  postSignUpCompanyInstructorCode: () => [
    'auth',
    'postSignUpCompanyInstructorCode',
  ],
}
