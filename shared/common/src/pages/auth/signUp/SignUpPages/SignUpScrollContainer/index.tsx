'use client'

import {
  admissionYear,
  belongs,
  club,
  insideJob,
  outsideJob,
} from '@bitgouel/common'
import * as S from './style'
import { useGetClubNameList, useGetSchoolList, useGetSchoolNameList } from '@bitgouel/api'

const SignUpScrollContainer = ({
  idx,
  obj,
  setObj,
  placeholder,
  setIsScrollContainer,
}: {
  idx: number
  obj: any
  setObj: any
  placeholder: string
  setIsScrollContainer: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  
  const onChange = (item: string) => {
    const updatedObj = [...obj]
    if (idx === 0) {
      updatedObj[idx] = { ...updatedObj[idx], value: item }
      updatedObj[1] = { ...updatedObj[1], value: '' }
    } else {
      updatedObj[idx] = { ...updatedObj[idx], value: item }
    }
    setObj(updatedObj)
    setIsScrollContainer(false)
  }

  const { data: schoolNames } = useGetSchoolNameList({
    enabled: placeholder === '학교 이름 선택',
  })

  
  const { data: clubNames } = useGetClubNameList(obj[0].value, {
    enabled: placeholder === '동아리 이름 선택',
  })

  return (
    <S.SignUpScrollContainer
      idx={idx}
      placeholder={placeholder}
      isNone={
        placeholder === '동아리 이름 선택' &&
        (obj[0].value === '서진여자고' || obj[0].value === '전남여자상업고')
      }
    >
      {placeholder === '소속' &&
        belongs.map((item, idx) => (
          <S.ScrollItem key={idx} onClick={() => onChange(item)}>
            {item}
          </S.ScrollItem>
        ))}

      {placeholder === '학교 이름 선택' &&
        schoolNames?.schools.map((school, idx) => (
          <S.ScrollItem key={idx} onClick={() => onChange(school.name)}>
            {school.name}
          </S.ScrollItem>
        ))}

      {placeholder === '직업' &&
        obj[0].value === '학교' &&
        insideJob.map((item, idx) => (
          <S.ScrollItem key={idx} onClick={() => onChange(item)}>
            {item}
          </S.ScrollItem>
        ))}

      {placeholder === '직업' &&
        obj[0].value === '외부' &&
        outsideJob.map((item, idx) => (
          <S.ScrollItem key={idx} onClick={() => onChange(item)}>
            {item}
          </S.ScrollItem>
        ))}

      {placeholder === '동아리 이름 선택' &&
        clubNames?.clubs.map((item, idx) => (
          <S.ScrollItem key={idx} onClick={() => onChange(item.name)}>
            {item.name}
          </S.ScrollItem>
        ))}
      {placeholder === '입학년도 선택' &&
        admissionYear.map((item, idx) => (
          <S.ScrollItem key={idx} onClick={() => onChange(item)}>
            {item}
          </S.ScrollItem>
        ))}
    </S.SignUpScrollContainer>
  )
}

export default SignUpScrollContainer
