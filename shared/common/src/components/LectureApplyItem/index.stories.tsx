'use client'

import { Meta, StoryObj } from '@storybook/react'
import LectureApplyItem from '.'

export default {
  title: 'common/components/LectureApplyItem',
  component: LectureApplyItem,
} as Meta<typeof LectureApplyItem>

type Story = StoryObj<typeof LectureApplyItem>

export const isCompleteItem: Story = {
  args: {
    item: {
      id: '1234',
      cohort: 6,
      name: '파티피플공명',
      school: '광주소프트웨어마이스터고등학교',
      grade: 3,
      classNumber: 4,
      number: 18,
      clubName: '나의 미래는 내가 주인공이다!',
      phoneNumber: '010-2786-7726',
      email: 'bitgouel@gmail.com',
      isComplete: true,
    },
  },
}

export const isNotCompleteItem: Story = {
  args: {
    item: {
      id: '1234',
      cohort: 6,
      name: '파티피플공명',
      school: '광주소프트웨어마이스터고등학교',
      grade: 3,
      classNumber: 4,
      number: 18,
      clubName: '나의 미래는 내가 주인공이다!',
      phoneNumber: '010-2786-7726',
      email: 'bitgouel@gmail.com',
      isComplete: false,
    },
  },
}
