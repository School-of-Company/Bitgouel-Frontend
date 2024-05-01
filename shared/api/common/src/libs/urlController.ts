import {
  ActivityOptionsTypes,
  LinePayloadTypes,
  InquiryListQueryStringTypes,
  LectureListOptionsTypes,
  UserListOptionsTypes,
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
  lectureApplyList: (id: string) => `/lecture/student/${id}`,
  lectureModifyComplete: (id: string, otherId: string, isComplete: boolean) =>
    `/lecture/${id}/${otherId}?isComplete=${isComplete}`,
  lectureCompleteList: (student_id: string) => `/lecture/${student_id}/signup`,
} as const

export const activityUrl = {
  activityInformation: () => `/activity`,
  activityModifyInformation: (activity_id: string) =>
    `/activity/${activity_id}`,
  activityInformationRemove: (activity_id: string) =>
    `/activity/${activity_id}`,
  activityMyselfList: (options: ActivityOptionsTypes) =>
    `/activity/my?page=${options.page}&size=${options.size}&sort=activityDate,desc`,
  activityList: (student_id: string, options: ActivityOptionsTypes) =>
    `/activity/${student_id}?page=${options.page}&size=${options.size}&sort=activityDate,asc`,
  activityInformationDetail: (activity_id: string) =>
    `/activity/${activity_id}/detail`,
}

export const userUrl = {
  user: () => `/user`,
} as const

export const postUrl = {
  postCreate: () => `/post`,
  postList: (options) =>
    `/post?type=${options.type}&size=${options.size}&page=${options.page}`,
  postDetail: (post_id: string) => `/post/${post_id}`,
  postModify: (post_id: string) => `/post/${post_id}`,
  postDelete: (post_id: string) => `/post/${post_id}`,
} as const

export const certificateUrl = {
  certificate: () => `/certification`,
  certificateListTeacher: (student_id: string) =>
    `/certification/${student_id}`,
  certificateModify: (certificate_id: string) =>
    `/certification/${certificate_id}`,
}

export const clubUrl = {
  schoolClub: () => `/school`,
  club: (queryString: string) => `/club?highSchool=${queryString}`,
  clubDetail: (club_id: string) => `/club/${club_id}`,
  myClub: () => `/club/my`,
  studentDetail: (club_id: string, student_id: string) =>
    `/club/${club_id}/${student_id}`,
} as const

export const inquiryUrl = {
  inquiryCreate: () => `/inquiry`,
  myInquiryList: () => `/inquiry`,
  inquiryDetail: (inquiry_id: string) => `/inquiry/${inquiry_id}`,
  myInquiryDelete: (inquiry_id: string) => `/inquiry/${inquiry_id}`,
  myInquiryModify: (inquiry_id: string) => `/inquiry/${inquiry_id}`,
  inquiryAnswer: (inquiry_id: string) => `/inquiry/${inquiry_id}/answer`,
  inquiryList: (queryString: InquiryListQueryStringTypes) =>
    `/inquiry/all?answerStatus=${queryString.answerStatus}&keyword=${queryString.keyword}`,
  inquiryDelete: (inquiry_id: string) => `/inquiry/${inquiry_id}/reject`,
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
