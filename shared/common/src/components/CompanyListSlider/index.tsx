'use client'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {
  CompanyListContents1,
  CompanyListContents2,
  CompanyListContents3,
  CompanyListContents4,
  CompanyListContents5,
} from '..'
import * as S from './style'
import { useEffect, useRef } from 'react'

const ClubListSlider = () => {
  const sliderRef = useRef(null)

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext()
      }
    }, 10000)

    return () => clearInterval(intervalId)
  }, [])

  const setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <S.CompanyListSliderContainer>
      <Slider ref={sliderRef} {...setting}>
        <CompanyListContents1 />
        <CompanyListContents2 />
        <CompanyListContents3 />
        <CompanyListContents4 />
        <CompanyListContents5 />
      </Slider>
    </S.CompanyListSliderContainer>
  )
}

export default ClubListSlider
