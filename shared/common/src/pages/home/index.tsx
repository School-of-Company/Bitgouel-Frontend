import React, { useCallback, useEffect, useState } from 'react'
import * as S from './style'
import { Header } from '../../components'
import Bg1 from '../../assets/png/slide1.png'
import Bg2 from '../../assets/png/slide2.png'
import Bg3 from '../../assets/png/slide3.png'
import Bg4 from '../../assets/png/slide4.png'
import { Arrow } from '../../assets/index'
import { Sequence } from '../../components/index'

const HomePage = () => {
  const [bgNum, setBgNum] = useState(2)
  const imageArr = [Bg1, Bg2, Bg3, Bg4]

  useEffect(() => {
    const background = setInterval(() => {
      const random = Math.ceil(Math.random() * 4) - 1
      setBgNum(random)
    }, 5000)
    return () => clearInterval(background)
  }, [])

  return (
    <S.mainWrraper>
      <Header />
      <S.slideBg url={imageArr[bgNum]}>
        <S.bgContainer>
          <div>
            <span>
              빛고을 직업교육 혁신지구
              <br />
              사업 소개
            </span>
            <S.view>
              보러가기 &nbsp; <Arrow />
            </S.view>
          </div>
          <Sequence />
        </S.bgContainer>
      </S.slideBg>
    </S.mainWrraper>
  )
}

export default HomePage
