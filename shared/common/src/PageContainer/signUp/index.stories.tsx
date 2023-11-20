'use client'

import type { Meta, StoryObj } from '@storybook/react'
import SignUpPage from '.'

export default {
  title: 'common/SignUpPage',
  component: SignUpPage,
} as Meta<typeof SignUpPage>

type Story = StoryObj<typeof SignUpPage>

export const Primary: Story = {}
