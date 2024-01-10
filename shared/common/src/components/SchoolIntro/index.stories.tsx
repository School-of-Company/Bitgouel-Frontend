'use client'

import SchoolIntro from '.'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'common/components/SchoolIntro',
  component: SchoolIntro,
} as Meta<typeof SchoolIntro>

type Story = StoryObj<typeof SchoolIntro>

export const Primary: Story = {
  args: {
    item: {
      number: 'I',
      name: '광주소프트웨어마이스터고등학교',
      type: '산업수요 맞춤형',
      img: {
        blurDataURL:
          '/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F%EA%B4%91%EC%A3%BC%EC%86%8C%EB%A7%88%EA%B3%A0.1e803acc.png&w=8&q=70',
        blurHeight: 3,
        blurWidth: 8,
        height: 34,
        src: '/_next/static/media/광주소마고.1e803acc.png',
        width: 80,
      },
      departments: [
        'SW개발과',
        '임베디드소프트웨어과',
        '인공지능과',
        '스마트 IOT과',
      ],
    },
  },
}
