'use client'

import ActivityItem from '.'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'common/ActivityItem',
  component: ActivityItem,
} as Meta<typeof ActivityItem>

type Story = StoryObj<typeof ActivityItem>

export const Primary: Story = {}
