const Circle = () => {
  return (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g filter='url(#filter0_b_1380_69641)'>
        <circle
          cx='8'
          cy='8'
          r='7'
          stroke='white'
          strokeOpacity='0.7'
          strokeWidth='2'
        />
      </g>
      <circle cx='8' cy='8' r='6' fill='white' fillOpacity='0.25' />
      <defs>
        <filter
          id='filter0_b_1380_69641'
          x='-8'
          y='-8'
          width='32'
          height='32'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feGaussianBlur in='BackgroundImageFix' stdDeviation='4' />
          <feComposite
            in2='SourceAlpha'
            operator='in'
            result='effect1_backgroundBlur_1380_69641'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_backgroundBlur_1380_69641'
            result='shape'
          />
        </filter>
      </defs>
    </svg>
  )
}

export default Circle
