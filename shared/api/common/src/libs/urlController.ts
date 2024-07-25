import {
  ActivityOptionsTypes,
  InquiryListQueryStringTypes,
  LectureListOptionsTypes,
  LinePayloadTypes,
  PostListOptionsTypes,
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
  lectureEnrollment: (id: string) => `/lecture/${id}`,
  lectureInstructor: (keyword: string) =>
    `/lecture/instructor?keyword=${keyword}`,
  lectureLine: (queryString: LinePayloadTypes) =>
    `/lecture/line?keyword=${queryString.keyword}&division=${queryString.division}`,
  lectureDepartment: (keyword: string) =>
    `/lecture/department?keyword=${keyword}`,
  lectureDivision: (keyword: string) => `/lecture/division?keyword=${keyword}`,
  lectureCompleteList: (id: string) => `/lecture/${id}/signup`, // studentId
  lectureApplyList: (id: string) => `/lecture/student/${id}`,
  lectureModifyComplete: (id: string, otherId: string, isComplete: boolean) =>
    `/lecture/${id}/${otherId}?isComplete=${isComplete}`,
  lectureExcel: () => `/lecture/excel`,
  lecturePatch: (id: string) => `/lecture/${id}`,
  lectureDelete: (id: string) => `/lecture/${id}/soft`,
  lectureEnrollmentDelete: (id: string) => `/lecture/${id}`,
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
    `/post/all?type=${options.type}${
      options.postSequence ? `&postSequence=${options.postSequence}` : ''
    }&size=${options.size}`,
  postDetail: (post_id: string) => `/post/${post_id}`,
  postModify: (post_id: string) => `/post/${post_id}`,
  postDelete: (post_id: string) => `/post/${post_id}`,
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
  clubCreate: (schoolId: string) => `/club/${schoolId}`,
  clubModify: (id: string) => `/club/${id}`,
  clubDelete: (id: string) => `/club/${id}`,
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
  rejectUser: (userIds: string[]) =>
    `/admin/reject?userIds=${userIds.join(',')}`,
  withDrawUser: (userIds: string[]) => `/admin/${userIds.join(',')}`,
  excelUpload: () => `/admin/excel`,
} as const

export const emailUrl = {
  email: () => `/email`,
} as const

export const faqUrl = {
  faq: () => `/faq`,
} as const

export const universityUrl = {
  universityList: () => `/university`,
  universityCreate: () => `/university`,
  universityModify: (id: string) => `/university/${id}`,
  universityDelete: (id: string) => `/university/${id}`,
  departmentCreate: (id: string) => `/university/department/${id}`,
  departmentDelete: (id: string, queryString: { department: string }) =>
    `/university/department/${id}?department=${queryString.department}`,
} as const

export const schoolUrl = {
  school: () => `/school`,
  schoolDelete: (id: string) => `/school/${id}`,
  schoolModify: (id: string) => `/school/${id},`,
  schoolNameList: () => `/school/name`,
} as const 

export const governmentUrl = {
  governmentList: () => `/government`,
  governmentCreate: () => `/government`,
  governmentDelete: (id: string) => `/government/${id}`,
} as const

export const companyUrl = {
  company: () => `/company`,
  companyCreate: () => `/company`,
  companyDelete: (id: string) => `/company/${id}`,
} as const