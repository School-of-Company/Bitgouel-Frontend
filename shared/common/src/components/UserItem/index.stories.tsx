'use client'

import UserItem from '.'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'common/components/UserItem',
  component: UserItem,
} as Meta<typeof UserItem>

type Story = StoryObj<typeof UserItem>

export const Primary: Story = {}
