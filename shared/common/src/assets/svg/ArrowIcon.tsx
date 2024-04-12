import React, { SVGProps } from 'react'

const ArrowIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width='12'
      height='12'
      viewBox='0 0 12 12'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M3.99999 1.5L7.99999 5.5L8.5 6L7.99999 6.5L3.99999 10.5'
        stroke='#6B6B6B'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default ArrowIcon
