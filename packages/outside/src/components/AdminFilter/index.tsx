'use client'

import { useGetUserList, useGetWithDrawUserList } from '@bitgouel/api'
import * as S from './style'
import { ChangeEvent, useEffect, useState } from 'react'
import { RoleEnumTypes } from '@bitgouel/types'

type cohortTypes = '1' | '2' | '3' | '4'

const JobFilter = ({ keyword }: { keyword: string }) => {
  const [jobs, setJobs] = useState<
    { text: string; authority: RoleEnumTypes; checked: boolean }[]
  >([
    { text: '관리자', authority: 'ROLE_ADMIN', checked: false },
    { text: '학생', authority: 'ROLE_STUDENT', checked: false },
    { text: '선생님', authority: 'ROLE_TEACHER', checked: false },
    { text: '대학 교수', authority: 'ROLE_PROFESSOR', checked: false },
    { text: '교육청', authority: 'ROLE_GOVERNMENT', checked: false },
    { text: '기업 강사', authority: 'ROLE_COMPANY_INSTRUCTOR', checked: false },
    { text: '뽀짝 선생님', authority: 'ROLE_BBOZZAK', checked: false },
  ])

  const [authority, setAuthority] = useState<RoleEnumTypes | 'ROLE_USER'>(
    'ROLE_USER'
  )
  const { refetch } = useGetUserList({
    keyword,
    authority,
    approveStatus: 'APPROVED',
  })

  useEffect(() => {
    refetch()
  }, [authority])

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setJobs((prev) =>
      prev.map((job) =>
        job.authority === e.target.id
          ? { ...job, checked: !job.checked }
          : { ...job, checked: false }
      )
    )
    if (e.target.checked) setAuthority(e.target.id as RoleEnumTypes)
    else setAuthority('ROLE_USER')
  }

  return (
    <>
      <h3>직업</h3>
      <S.CheckListContainer>
        {jobs.map((job, idx) => (
          <S.CheckBox key={idx} htmlFor={job.authority}>
            <S.Check
              type='checkbox'
              id={job.authority}
              checked={job.checked}
              onChange={onChange}
            />
            <span>{job.text}</span>
          </S.CheckBox>
        ))}
      </S.CheckListContainer>
    </>
  )
}

const CohortFilter = () => {
  const [cohorts, setCohorts] = useState<{ text: string; checked: boolean }[]>([
    { text: '1기', checked: false },
    { text: '2기', checked: false },
    { text: '3기', checked: false },
    { text: '4기', checked: false },
  ])

  const [cohort, setCohort] = useState<cohortTypes>('1')
  const { refetch } = useGetWithDrawUserList(cohort)

  useEffect(() => {
    refetch()
  }, [cohort])

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCohorts((prev) =>
      prev.map((cohort) =>
        cohort.text === e.target.id
          ? { ...cohort, checked: !cohort.checked }
          : { ...cohort, checked: false }
      )
    )
    if (e.target.checked) setCohort(e.target.id.slice(0, 1) as cohortTypes)
    else setCohort('1')
  }

  return (
    <>
      <h3>입학년도</h3>
      <S.CheckListContainer>
        {cohorts.map((cohort, idx) => (
          <S.CheckBox key={idx} htmlFor={cohort.text}>
            <S.Check
              type='checkbox'
              id={cohort.text}
              checked={cohort.checked}
              onChange={onChange}
            />
            <span>{cohort.text}</span>
          </S.CheckBox>
        ))}
      </S.CheckListContainer>
    </>
  )
}

const AdminFilter = ({
  type,
  keyword,
}: {
  type: 'current' | 'withdraw'
  keyword?: string
}) => {
  return (
    <S.AdminFilterWrapper type={type}>
      {type === 'current' ? <JobFilter keyword={keyword} /> : <CohortFilter />}
    </S.AdminFilterWrapper>
  )
}

export default AdminFilter
