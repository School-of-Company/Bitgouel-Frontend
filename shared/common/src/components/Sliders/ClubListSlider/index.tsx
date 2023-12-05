'use client'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {
  ClubListContents1,
  ClubListContents2,
  ClubListContents3,
  ClubListContents4,
  ClubListContents5,
} from '../..'
import * as S from '../style'
import { useEffect, useRef } from 'react'

const setting = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
}

const ClubListSlider = () => {
  const sliderRef = useRef<any>(null)

  useEffect(() => {
    const intervalId = setInterval(() => {
      sliderRef.current.slickNext()
    }, 10000000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <S.SliderContainer>
      <Slider ref={sliderRef} {...setting}>
        <ClubListContents1 />
        <ClubListContents2 />
        <ClubListContents3 />
        <ClubListContents4 />
        <ClubListContents5 />
      </Slider>
    </S.SliderContainer>
  )
}

export default ClubListSlider
