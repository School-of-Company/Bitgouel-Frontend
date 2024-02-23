'use client'

import { useGetUserList } from '@bitgouel/api'
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
    <S.JobFilterWrapper>
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
    </S.JobFilterWrapper>
  )
}

const AdminFilter = ({
  type,
  keyword,
}: {
  type: 'current' | 'withdraw'
  keyword: string
}) => {
  return type === 'current' && <JobFilter keyword={keyword} />
}

export default AdminFilter
