import {
  LectureListOptionsTypes,
  ActivityOptionsTypes,
  UserListOptionsTypes,
} from '@bitgouel/types'

export const authUrl = {
  auth: () => `/auth`,
  login: () => `/auth/login`,
  withdraw: () => `/auth/withdraw`,
  signUpStudent: () => `/auth/student`,
  signUpTeacher: () => `/auth/teacher`,
  signUpBbozzak: () => `/auth/bbozzak`,
  signUpPropessor: () => `/auth/professor`,
  signUpGovernment: () => `/auth/government`,
  signUpCompanyInstructor: () => `/auth/company-instructor`,
} as const

export const lectureUrl = {
  lecture: () => `/lecture`,
  lectureList: (options: LectureListOptionsTypes) =>
    `/lecture?page=${options.page}&size=${options.size}&status=${options.status}&type=${options.type}`,
  lectureDetail: (id: string) => `/lecture/${id}`,
  lectureApplication: (id: string) => `/lecture/${id}`,
  lectureApprove: (id: string) => `lecture/${id}/approve`,
  lectureReject: (id: string) => `lecture/${id}/reject`,
} as const

export const activityUrl = {
  activityInformation: () => `/activity`,
  activityCorrection: (activity_id: string) => `/activity/${activity_id}`,
  activityApprove: (activity_id: string) => `/activity/${activity_id}/approve`,
  activityReject: (activity_id: string) => `/activity/${activity_id}/reject`,
  activityInformationRemove: (activity_id: string) =>
    `/activity/${activity_id}`,
  activityMyselfList: (options: ActivityOptionsTypes) =>
    `/activity/my?page=${options.page}&size=${options.size}&sort=${options.sort}`,
  activityList: (student_id: string, options: ActivityOptionsTypes) =>
    `/activity/${student_id}?page=${options.page}&size=${options.size}&sort=${options.sort}`,
  activityInformationList: (options: ActivityOptionsTypes) =>
    `/activity?page=${options.page}&size=${options.size}&sort=${options.sort}`,
  activityInformationDetail: (activity_id: string) =>
    `/activity/${activity_id}`,
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
  inquiryAnswer: (inquiry_id: string) => `/inquiry/${inquiry_id}/reply`,
  inquiryList: () => `/inquiry/all`,
  inquiryDelete: (inquiry_id: string) => `/inquiry/${inquiry_id}/reject`,
} as const

export const adminUrl = {
  userList: (queryString: UserListOptionsTypes) =>
    `/admin?keyword=${queryString.keyword}&page=${queryString.page}&size=${queryString.size}`,
  mutateAdmin: (user_id: string) => `/admin/${user_id}`,
} as const
