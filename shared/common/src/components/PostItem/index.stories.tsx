'use client'

import PostItem from '.'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'common/components/PostItem',
  component: PostItem,
} as Meta<typeof PostItem>

type Story = StoryObj<typeof PostItem>

export const Primary: Story = {
  args: {
    item: {
      id: '1234',
      title: '테스트',
      modifiedAt: '2023-09-09T10:00:00'
    }
  }
}
