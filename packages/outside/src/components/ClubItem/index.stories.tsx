'use client'

import ClubItem from '.'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'outside/components/ClubItem',
  component: ClubItem,
} as Meta<typeof ClubItem>

type Story = StoryObj<typeof ClubItem>

export const Primary: Story = {}
