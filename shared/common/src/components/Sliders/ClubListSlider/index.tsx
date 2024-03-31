'use client'

import {
  ClubListContents1,
  ClubListContents2,
  ClubListContents3,
  ClubListContents4,
  ClubListContents5,
} from '@bitgouel/common'
import { useEffect, useRef } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { SlideLeftArrow, SlideRightArrow } from '../../../assets'
import * as S from '../style'

const setting = {
  arrows: true,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: (
    <S.PrevArrow>
      <SlideLeftArrow />
    </S.PrevArrow>
  ),
  nextArrow: (
    <S.NextArrow>
      <SlideRightArrow />
    </S.NextArrow>
  )
}

const ClubListSlider = () => {
  const sliderRef = useRef<any>(null)

  useEffect(() => {
    const intervalId = setInterval(() => {
      sliderRef.current.slickNext()
    }, 10000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <S.SliderContainer>
      <Slider
        ref={sliderRef}
        {...setting}
      >
        <ClubListContents1 />
        <ClubListContents2 />
        <ClubListContents3 />
        <ClubListContents4 />
        <ClubListContents5 />
      </Slider>
      <div>
        <div></div>
      </div>
    </S.SliderContainer>
  )
}

export default ClubListSlider
