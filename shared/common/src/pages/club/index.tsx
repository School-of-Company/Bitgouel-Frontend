import * as S from './style'
import { Header } from '../../components'
import Bg2 from '../../assets/png/mainBg2.png'

const ClubPage = () => {
  return (
    <div>
      <Header />
      <S.SlideBg url={Bg2}>
        <S.BgContainer>
          <S.ClubTitle>취업 동아리 목록</S.ClubTitle>
        </S.BgContainer>
      </S.SlideBg>
    </div>
  )
}

export default ClubPage
