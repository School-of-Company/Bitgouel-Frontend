'use client'

import { useGetUserList, useGetWithDrawUserList } from '@bitgouel/api'
import * as S from './style'
import { ChangeEvent, useEffect, useState } from 'react'
import { RoleEnumTypes } from '@bitgouel/types'

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
  const [years, setYears] = useState<{ text: string; checked: boolean }[]>([
    { text: '2022년', checked: false },
    { text: '2023년', checked: false },
    { text: '2024년', checked: false },
  ])

  const [cohort, setCohort] = useState<'2022' | '2023' | '2024'>('2022')
  const { refetch } = useGetWithDrawUserList()

  useEffect(() => {
    refetch()
  }, [cohort])

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setYears((prev) =>
      prev.map((year) =>
        year.text === e.target.id
          ? { ...year, checked: !year.checked }
          : { ...year, checked: false }
      )
    )
    if (e.target.checked) setCohort(e.target.id.slice(0, 4) as '2022' | '2023' | '2024')
    else setCohort('2022')
  }

  return (
    <>
      <h3>입학년도</h3>
      <S.CheckListContainer>
        {years.map((year, idx) => (
          <S.CheckBox key={idx} htmlFor={year.text}>
            <S.Check
              type='checkbox'
              id={year.text}
              checked={year.checked}
              onChange={onChange}
            />
            <span>{year.text}</span>
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
