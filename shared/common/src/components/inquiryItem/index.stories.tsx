'use client'

import inquiryItem from '.'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'common/components/inquiryItem',
  component: inquiryItem,
} as Meta<typeof inquiryItem>

type Story = StoryObj<typeof inquiryItem>

export const Primary: Story = {}
