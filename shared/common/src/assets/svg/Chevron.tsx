import { SVGProps } from 'react'

const Chevron = (
  props: SVGProps<SVGSVGElement>,
  { color }: { color?: string }
) => {
  return (
    <svg
      width='1.5rem'
      height='1.5rem'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M21 7.99999L13 16L12 17L11 16L3 7.99999'
        stroke={color ? color : '#B8B8B8'}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default Chevron
