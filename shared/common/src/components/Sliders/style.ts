import styled from '@emotion/styled'

export const SliderContainer = styled.div`
  width: 100vw;
  position: relative;

  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }

  .slick-dots {
    margin-bottom: 2rem;

    li {
      margin: 0;
    }

    button::before {
      color: ${({ theme }) => theme.color.white};
      font-size: 0.7rem;
      opacity: 0.8;
    }

    .slick-active {
      button::before {
        color: ${({ theme }) => theme.color.main};
      }
    }
  }
`

export const PrevArrow = styled.div`
  position: absolute;
  left: 5rem;
  z-index: 9;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
`

export const NextArrow = styled.div`
  position: absolute;
  right: 5rem;
  z-index: 9;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
`
