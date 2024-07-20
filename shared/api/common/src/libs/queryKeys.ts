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
  getInstructors: () => ['lecture', 'instructors'],
  getLines: () => ['lecture', 'lines'],
  getDivisions: () => ['lecture', 'divisions'],
  getDepartments: () => ['lecture', 'departments'],
  getCompleteLecture: (id: string) => ['lecture', 'completeList', id], // studentId
  getExcel: () => ['lecture', 'excel'],
  getLectureApplyList: (id: string) => ['lecture', 'applyList', id],
  patchLectureApplyComplete: (id: string, studentId: string) => [
    'lecture',
    'modifyComplete',
    id,
    studentId, // studentId
  ],
  patchLecture: (id: string) => ['lecture', 'modify', id],
  deleteLecture: (id: string) => ['lecture', 'delete', id],
  deleteEnrollment: (id: string) => ['lecture', 'enrollment', id],
} as const

export const activityQueryKeys = {
  postActivityInformation: () => ['activity', 'information'],
  patchActivityModifyInformation: (id: string) => [
    'activity',
    'correction',
    id,
  ],
  deleteActivityInformationRemove: (id: string) => ['activity', 'remove', id],
  getActivityMyselfList: () => ['activity', 'myselfList'],
  getActivityList: (id: string) => ['activity', 'list', id], // studentId
  getActivityInformationDetail: (id: string) => ['activity', 'detail', id],
} as const

export const myQueryKeys = {
  getMy: () => ['my', 'myData'],
  patchPw: () => ['my', 'changePw'],
} as const

export const postQueryKeys = {
  postBoardCreate: () => ['post', 'create'],
  getBoardList: () => ['post', 'list'],
  getBoardDetail: (id: string) => ['post', 'detail', id],
  patchBoardModify: (id: string) => ['post', 'modify', id],
  deleteBoardDelete: (id: string) => ['post', 'delete', id],
} as const

export const certificateQueryKeys = {
  getCertificateListTeacher: (id: string) => ['get', 'listTeacher', id], // studentId
  getCertificateListStudent: () => ['get', 'list'],
  postCertificateCreate: () => ['post', 'create'],
  patchCertificateModify: (id: string) => ['patch', 'modify', id],
}

export const clubQueryKeys = {
  getSchoolClub: () => ['club', 'schoolClub'],
  getClub: () => ['club', 'clubList'],
  getClubDetail: () => ['club', 'detail'],
  getMyClub: () => ['club', 'myClub'],
  getStudentDetail: (id: string, studentId: string) => [
    'club',
    'studentDetail',
    id,
    studentId,
  ],
} as const

export const inquiryQueryKeys = {
  postInquiry: () => ['inquiry', 'create'],
  getMyInquiry: () => ['inquiry', 'myInquiry'],
  getInquiryDetail: (id: string) => ['inquiry', 'detail', id],
  deleteMyInquiry: (id: string) => ['inquiry', 'myDelete', id],
  patchInquiry: (id: string) => ['inquiry', 'correction', id],
  postAnswer: (id: string) => ['inquiry', 'answer', id],
  getInquiry: () => ['inquiry', 'inquiryList'],
  deleteInquiry: (id: string) => ['inquiry', 'reject', id],
} as const

export const adminQueryKeys = {
  getUserList: () => ['admin', 'list'],
  getWithdrawUserList: () => ['admin', 'quitList'],
  patchUserApprove: (userIds: string[]) => ['admin', 'approve', userIds],
  deleteUserReject: (userIds: string[]) => ['admin', 'reject', userIds],
  deleteUserWithout: (userIds: string[]) => ['admin', 'without', userIds],
  postExcelUpload: () => ['admin', 'upload'],
} as const

export const emailQueryKeys = {
  postEmail: () => ['email', 'send'],
  getEmail: () => ['email', 'check'],
} as const

export const faqQueryKeys = {
  getQuestions: () => ['FAQ', 'create'],
  postQuestion: () => ['FAQ', 'list'],
} as const

export const schoolQueryKeys = {
  getSchoolNameList: () => ['school', 'schoolNameList'],
  postRegistrationSchool: () => ['school', 'registration'],
} as const

export const universityQueryKeys = {
  getUniversity: () => ['university', 'list'],
  patchUniversity: (id: string) => ['university', id],
  deleteUniversity: (id: string) => ['university', 'delete', id],
  postDepartment: (id: string) => ['department', 'create', id],
  deleteDepartment: (id: string) => ['department', 'delete', id],
} as const
