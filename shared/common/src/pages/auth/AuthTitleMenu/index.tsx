import { SignUpPageNumber } from '@bitgouel/common'
import { useRecoilValue } from 'recoil'
import { match } from 'ts-pattern'
import * as S from './style'

interface Props {
  matchEl: number
  mainTitleList: string[]
  subTitleList: string[]
}

const AuthTitleMenu = ({ matchEl, mainTitleList, subTitleList}: Props) => {
  const signUpPage = useRecoilValue(SignUpPageNumber)
  return (
    <S.AuthTitleMenuWrapper>
      <S.TitleItemContainer>
        <S.TitleItem>
          {match(matchEl)
          .with(1, () => mainTitleList[0])
          .with(2, () => mainTitleList[1])
          .otherwise(() => mainTitleList[2])}
        </S.TitleItem>
        <S.SubTitleItem>
          {match(matchEl)
          .with(1, () => subTitleList[0])
          .with(2, () => subTitleList[1])
          .otherwise(() => subTitleList[2])}
        </S.SubTitleItem>
      </S.TitleItemContainer>
      <S.ShowCurrentPageBox>
        {Array(3)
          .fill(0)
          .map((_, idx) => (
            <S.CurrentPage key={idx} current={idx + 1} page={signUpPage} />
          ))}
      </S.ShowCurrentPageBox>
    </S.AuthTitleMenuWrapper>
  )
}



export default AuthTitleMenu
