'use client'

import ActivityItem from '.'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'common/components/ActivityItem',
  component: ActivityItem,
} as Meta<typeof ActivityItem>

type Story = StoryObj<typeof ActivityItem>

export const Primary: Story = {
  args: {
    item: {
      activityId: '1',
      title: '청춘',
      userId: 'abcd',
      activityDate: '2023-11-28',
      userName: '학생1',
      approveStatus: 'APPROVED',
    },
  },
}
