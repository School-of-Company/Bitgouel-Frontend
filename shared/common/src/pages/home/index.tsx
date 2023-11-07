import React, { useCallback, useEffect, useState } from 'react'
import * as S from './style'
import { Header } from '../../components'
import Bg1 from '../../assets/png/slide1.png'
import Bg2 from '../../assets/png/slide2.png'
import Bg3 from '../../assets/png/slide3.png'
import Bg4 from '../../assets/png/slide4.png'
import { Sequence } from '../../components/index'
import { Arrow } from '../../assets'

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
    <S.HomeWrraper>
      <Header />
      <S.SlideBg url={imageArr[bgNum]}>
        <div>
          <S.BgContainer>
            <div>
              <S.HomeTitle>
                빛고을 직업교육 혁신지구
                <br />
                사업 소개
              </S.HomeTitle>
            </div>
            <Sequence />
          </S.BgContainer>
          <S.View>
            <Arrow />
            둘러보기
          </S.View>
        </div>
      </S.SlideBg>
      <br />d
      <br />d
      <br />d
      <br />d
      <br />d
      <br />d
      <br />d
      <br />d
      <br />d
      <br />d
      <br />d
      <br />d
      <br />d
      <br />d
      <br />d
      <br />d
      <br />d
      <br />d
      <br />d
      <br />d
      <br />d
      <br />d
      <br />d
      <br />d
      <br />d
      <br />d
      <br />d
      <br />d
      <br />d
      <br />d
      <br />d
      <br />d
      <br />d
      <br />d
      <br />d
      <br />d
      <br />d
      <br />d
      <br />d
      <br />d
      <br />d
      <br />d
      <br />d
      <br />d
      <br />d
      <br />d
      <br />d
      <br />d
      <br />d
      <br />d
      <br />d
      <br />d
      <br />d
    </S.HomeWrraper>
  )
}

export default HomePage
