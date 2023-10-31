import React, { useCallback, useEffect, useState } from 'react'
import * as S from './style'
import { Header } from '../../components'
import Image from 'next/image'
import Bg1 from '../../../../public/images/slide1.png'
import Bg2 from '../../../../public/images/slide2.png'
import Bg3 from '../../../../public/images/slide3.png'
import Bg4 from '../../../../public/images/slide4.png'

const HomePage = () => {
  const [bgNum, setBgNum] = useState(0)
  const imageArr = [Bg1, Bg2, Bg3, Bg4]
  useEffect(() => {
    const background = setInterval(() => {
      const random = Math.ceil(Math.random() * 4) - 1
      setBgNum(random)
    }, 1000)
    return () => clearInterval(background)
  }, [])
  return (
    <S.mainWrraper>
      <Header />
      <S.SlideBg>
        <Image src={imageArr[bgNum]} alt='background' />
      </S.SlideBg>
    </S.mainWrraper>
  )
}

export default HomePage
