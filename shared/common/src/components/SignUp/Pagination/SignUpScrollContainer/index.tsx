import {
  belongs,
  club,
  insideJob,
  outsideJob,
  school,
} from '../../../../constants'
import * as S from './style'

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

  return (
    <S.SignUpScrollContainer
      idx={idx}
      placeholder={placeholder}
      style={{
        display:
          placeholder === '동아리 이름으로 검색' &&
          obj[0].value === '서진여자고'
            ? 'none'
            : 'flex',
      }}
    >
      {placeholder === '소속' &&
        belongs.map((item, idx) => (
          <span key={idx} onClick={() => onChange(item)}>
            {item}
          </span>
        ))}

      {placeholder === '직업' &&
        obj[0].value === '학교' &&
        insideJob.map((item, idx) => (
          <span key={idx} onClick={() => onChange(item)}>
            {item}
          </span>
        ))}

      {placeholder === '직업' &&
        obj[0].value === '외부' &&
        outsideJob.map((item, idx) => (
          <span key={idx} onClick={() => onChange(item)}>
            {item}
          </span>
        ))}

      {placeholder === '학교 이름으로 검색' &&
        school.map((item, idx) => (
          <span key={idx} onClick={() => onChange(item)}>
            {item}
          </span>
        ))}

      {placeholder === '동아리 이름으로 검색' &&
        club[obj[0].value].map((item, idx) => (
          <span key={idx} onClick={() => onChange(item)}>
            {item}
          </span>
        ))}
    </S.SignUpScrollContainer>
  )
}

export default SignUpScrollContainer
