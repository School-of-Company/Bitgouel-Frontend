import styled from '@emotion/styled'

export const ClubListSliderContainer = styled.div`
  /* position: fixed;
  left: 50%;
  top: 50%; */
  width: 100vw;

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
