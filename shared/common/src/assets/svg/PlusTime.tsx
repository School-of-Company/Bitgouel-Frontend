import React, { SVGProps } from 'react'

const PlusTime = (props: SVGProps<SVGSVGElement>) => {
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
        fillRule='evenodd'
        clipRule='evenodd'
        d='M7.99992 1.3335C7.63173 1.3335 7.33325 1.63197 7.33325 2.00016V7.3335H1.99992C1.63173 7.3335 1.33325 7.63197 1.33325 8.00016C1.33325 8.36835 1.63173 8.66683 1.99992 8.66683H7.33325V14.0002C7.33325 14.3684 7.63173 14.6668 7.99992 14.6668C8.36811 14.6668 8.66659 14.3684 8.66659 14.0002V8.66683H13.9999C14.3681 8.66683 14.6666 8.36835 14.6666 8.00016C14.6666 7.63197 14.3681 7.3335 13.9999 7.3335H8.66659V2.00016C8.66659 1.63197 8.36811 1.3335 7.99992 1.3335Z'
        fill='#6B6B6B'
      />
    </svg>
  )
}

export default PlusTime
