import {
  donillFuture,
  GAT,
  GSM,
  gumpa,
  gwangjuElect,
  gwangjuGirlSang,
  gwangjuNatural,
  jnnamGong,
  school,
  sewu,
  songwonGirlSang,
} from '../../../../constants/signObject'
import * as S from './style'
import { useRecoilValue } from 'recoil'
import { Page2Obj } from '../../../../atoms'
import { gwangjuGong } from './../../../../constants/signObject'

const SignUpScrollContainer = ({
  value,
  idx,
  obj,
  setObj,
  placeholder,
  setIsScrollContainer,
}: {
  value: string
  idx: number
  obj: any
  setObj: any
  placeholder: string
  setIsScrollContainer: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const belongs = ['학교', '외부']

  const insideJob = ['학생', '취업동아리 선생님']
  const outsideJob = ['기업 강사', '대학 교수', '뽀짝 선생님', '유관기관']
  const page2Obj = useRecoilValue(Page2Obj)

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
          page2Obj[0].value === '서진여자고'
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
            {item.includes(value) && item}
          </span>
        ))}

      {placeholder === '동아리 이름으로 검색' &&
        page2Obj[0].value === '금파공업고' &&
        gumpa.map((item, idx) => (
          <span key={idx} onClick={() => onChange(item)}>
            {item}
          </span>
        ))}

      {placeholder === '동아리 이름으로 검색' &&
        page2Obj[0].value === '전남공업고' &&
        jnnamGong.map((item, idx) => (
          <span key={idx} onClick={() => onChange(item)}>
            {item}
          </span>
        ))}
      {placeholder === '동아리 이름으로 검색' &&
        page2Obj[0].value === '광주공업고' &&
        gwangjuGong.map((item, idx) => (
          <span key={idx} onClick={() => onChange(item)}>
            {item}
          </span>
        ))}
      {placeholder === '동아리 이름으로 검색' &&
        page2Obj[0].value === '전남여자상업고' && (
          <span>동아리가 존재하지 않아요</span>
        )}

      {placeholder === '동아리 이름으로 검색' &&
        page2Obj[0].value === '광주자연과학고' &&
        gwangjuNatural.map((item, idx) => (
          <span key={idx} onClick={() => onChange(item)}>
            {item}
          </span>
        ))}
      {placeholder === '동아리 이름으로 검색' &&
        page2Obj[0].value === '광주전자공업고' &&
        gwangjuElect.map((item, idx) => (
          <span key={idx} onClick={() => onChange(item)}>
            {item}
          </span>
        ))}
      {placeholder === '동아리 이름으로 검색' &&
        page2Obj[0].value === '숭의과학기술고' &&
        sewu.map((item, idx) => (
          <span key={idx} onClick={() => onChange(item)}>
            {item}
          </span>
        ))}
      {placeholder === '동아리 이름으로 검색' &&
        page2Obj[0].value === '동일미래과학고' &&
        donillFuture.map((item, idx) => (
          <span key={idx} onClick={() => onChange(item)}>
            {item}
          </span>
        ))}
      {placeholder === '동아리 이름으로 검색' &&
        page2Obj[0].value === '광주여자상업고' &&
        gwangjuGirlSang.map((item, idx) => (
          <span key={idx} onClick={() => onChange(item)}>
            {item}
          </span>
        ))}

      {placeholder === '동아리 이름으로 검색' &&
        page2Obj[0].value === '송원여자상업고' &&
        songwonGirlSang.map((item, idx) => (
          <span key={idx} onClick={() => onChange(item)}>
            {item}
          </span>
        ))}
      {placeholder === '동아리 이름으로 검색' &&
        page2Obj[0].value === '광주자동화설비마이스터고' &&
        GAT.map((item, idx) => (
          <span key={idx} onClick={() => onChange(item)}>
            {item}
          </span>
        ))}
      {placeholder === '동아리 이름으로 검색' &&
        page2Obj[0].value === '광주소프트웨어마이스터고' &&
        GSM.map((item, idx) => (
          <span key={idx} onClick={() => onChange(item)}>
            {item}
          </span>
        ))}
    </S.SignUpScrollContainer>
  )
}

export default SignUpScrollContainer
