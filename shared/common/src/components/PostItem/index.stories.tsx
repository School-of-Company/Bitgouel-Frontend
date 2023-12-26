'use client'

import PostItem from '.'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'common/components/PostItem',
  component: PostItem,
} as Meta<typeof PostItem>

type Story = StoryObj<typeof PostItem>

export const Primary: Story = {}
