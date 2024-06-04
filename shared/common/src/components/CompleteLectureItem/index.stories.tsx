'use client'

import CompleteLectureItem from '.'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'common/components/CompleteLectureItem',
  component: CompleteLectureItem,
} as Meta<typeof CompleteLectureItem>

type Story = StoryObj<typeof CompleteLectureItem>

export const Complete: Story = {
  args: {
    item: {
      id: '1234',
      name: '강의 멋있게 하는 법',
      lectureType: '상호학점인정교육과정',
      currentCompletedDate: '2024-01-01',
      lecturer: '이운린',
      isComplete: true
    }
  }
}

export const NotComplete: Story = {
  args: {
    item: {
      id: '1234',
      name: '강의 멋있게 하는 법',
      lectureType: '상호학점인정교육과정',
      currentCompletedDate: '2024-01-01',
      lecturer: '이운린',
      isComplete: false
    }
  }
}
