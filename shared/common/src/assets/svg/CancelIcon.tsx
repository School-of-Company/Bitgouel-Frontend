import { SVGProps } from 'react'

const CancelIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width='32'
      height='32'
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M7 7L25 25M25 7L7 25'
        stroke='black'
        strokeWidth='2'
        strokeLinecap='round'
      />
    </svg>
  )
}

export default CancelIcon
