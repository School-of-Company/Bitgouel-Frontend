'use client'

import LoginPage from '.'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'common/pages/LoginPage',
  component: LoginPage,
} as Meta<typeof LoginPage>

type Story = StoryObj<typeof LoginPage>

export const Primary: Story = {}
