'use client'

import Login from '.'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'common/Login',
  component: Login,
} as Meta<typeof Login>

type Story = StoryObj<typeof Login>

export const Primary: Story = {}
