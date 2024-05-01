import {
  ActivityOptionsTypes,
  LinePayloadTypes,
  InquiryListQueryStringTypes,
  LectureListOptionsTypes,
  UserListOptionsTypes,
  PostListOptionsTypes,
} from '@bitgouel/types'

export const authUrl = {
  auth: () => `/auth`,
  login: () => `/auth/login`,
  withdraw: () => `/auth/withdraw`,
  signUpStudent: () => `/auth/student`,
  signUpTeacher: () => `/auth/teacher`,
  signUpBbozzak: () => `/auth/bbozzak`,
  signUpProfessor: () => `/auth/professor`,
  signUpGovernment: () => `/auth/government`,
  signUpCompanyInstructor: () => `/auth/company-instructor`,
} as const

export const lectureUrl = {
  lecture: () => `/lecture`,
  lectureList: (options: LectureListOptionsTypes) =>
    `/lecture?page=${options.page}&size=${options.size}&type=${options.type}`,
  lectureDetail: (id: string) => `/lecture/${id}`,
  lectureEnrolment: (id: string) => `/lecture/${id}`,
  lectureInstructor: (keyword: string) =>
    `/lecture/instructor?keyword=${keyword}`,
  lectureLine: (queryString: LinePayloadTypes) =>
    `/lecture/line?keywrod=${queryString.keyword}&division=${queryString.division}`,
  lectureDepartment: (keyword: string) =>
    `/lecture/department?keyword=${keyword}`,
  lectureDivision: (keyword: string) => `/lecture/division?keyword=${keyword}`,
  lectureExcel: () => `/lecture/excel`,
  lectureCompleteList: (id: string) => `/lecture/${id}/signup`, // studentId
} as const

export const activityUrl = {
  activityInformation: () => `/activity`,
  activityModifyInformation: (id: string) => `/activity/${id}`,
  activityInformationRemove: (id: string) => `/activity/${id}`,
  activityMyselfList: (options: ActivityOptionsTypes) =>
    `/activity/my?page=${options.page}&size=${options.size}&sort=activityDate,desc`,
  activityList: (id: string, options: ActivityOptionsTypes) =>
    `/activity/${id}?page=${options.page}&size=${options.size}&sort=activityDate,asc`, // studentId
  activityInformationDetail: (id: string) => `/activity/${id}/detail`,
}

export const userUrl = {
  user: () => `/user`,
} as const

export const postUrl = {
  postCreate: () => `/post`,
  postList: (options: PostListOptionsTypes) =>
    `/post?type=${options.type}&size=${options.size}&page=${options.page}`,
  postDetail: (id: string) => `/post/${id}`,
  postModify: (id: string) => `/post/${id}`,
  postDelete: (id: string) => `/post/${id}`,
} as const

export const certificateUrl = {
  certificate: () => `/certification`,
  certificateListTeacher: (id: string) => `/certification/${id}`, // studentId
  certificateModify: (id: string) => `/certification/${id}`,
}

export const clubUrl = {
  schoolClub: () => `/school`,
  club: (queryString: string) => `/club?highSchool=${queryString}`,
  clubDetail: (id: string) => `/club/${id}`,
  myClub: () => `/club/my`,
  studentDetail: (id: string, studentId: string) => `/club/${id}/${studentId}`,
} as const

export const inquiryUrl = {
  inquiryCreate: () => `/inquiry`,
  myInquiryList: () => `/inquiry`,
  inquiryDetail: (id: string) => `/inquiry/${id}`,
  myInquiryDelete: (id: string) => `/inquiry/${id}`,
  myInquiryModify: (id: string) => `/inquiry/${id}`,
  inquiryAnswer: (id: string) => `/inquiry/${id}/answer`,
  inquiryList: (queryString: InquiryListQueryStringTypes) =>
    `/inquiry/all?answerStatus=${queryString.answerStatus}&keyword=${queryString.keyword}`,
  inquiryDelete: (id: string) => `/inquiry/${id}/reject`,
} as const

export const adminUrl = {
  userList: (queryString: UserListOptionsTypes) =>
    `/admin?keyword=${queryString.keyword}&authority=${queryString.authority}&approveStatus=${queryString.approveStatus}`,
  withDrawUserList: (cohort: string) => `/withdraw?cohort=${cohort}`,
  approveUser: (userIds: string[]) => `/admin?userIds=${userIds.join(',')}`,
  rejectUser: (userIds: string[]) => `/admin/${userIds.join(',')}/reject`,
  withDrawUser: (userIds: string[]) => `/admin/${userIds.join(',')}`,
} as const

export const emailUrl = {
  email: () => `/email`,
}

export const faqUrl = {
  faq: () => `/faq`,
}
