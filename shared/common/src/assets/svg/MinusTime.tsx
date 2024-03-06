import React, { SVGProps } from 'react'

const MinusTime = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M1.33325 8.00016C1.33325 7.63197 1.63173 7.3335 1.99992 7.3335H13.9999C14.3681 7.3335 14.6666 7.63197 14.6666 8.00016V8.00016C14.6666 8.36835 14.3681 8.66683 13.9999 8.66683H1.99992C1.63173 8.66683 1.33325 8.36835 1.33325 8.00016V8.00016Z'
        fill='#6B6B6B'
      />
    </svg>
  )
}

export default MinusTime
