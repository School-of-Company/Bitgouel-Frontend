'use client'

import Header from '.'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'common/components/Header',
  component: Header,
} as Meta<typeof Header>

type Story = StoryObj<typeof Header>

export const Primary: Story = {}
