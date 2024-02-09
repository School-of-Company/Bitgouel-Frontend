'use client'

import NewUserItem from '.'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'common/components/NewUserItem',
  component: NewUserItem,
} as Meta<typeof NewUserItem>

type Story = StoryObj<typeof NewUserItem>

export const Primary: Story = {}
