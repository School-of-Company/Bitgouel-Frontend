'use client'

import { Meta, StoryObj } from '@storybook/react'
import ApplyItem from '.'

export default {
  title: '/outside/components/ApplyItem',
  component: ApplyItem,
} as Meta<typeof ApplyItem>

type Story = StoryObj<typeof ApplyItem>

export const Primary: Story = {
  args: {
    item: {
      id: '1234',
      cohort: 6,
      name: '파티피플공명',
      school: '광주소프트웨어마이스터고등학교',
      grade: 3,
      classNum: 4,
      clubName: '나의 미래는 내가 주인공이다!',
      phoneNumber: '010-2786-7726',
      email: 'bitgouel@gmail.com',
    },
  },
}
