'use client'

import ValueInput from '.'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'common/components/ValueInput',
  component: ValueInput,
} as Meta<typeof ValueInput>

type Story = StoryObj<typeof ValueInput>

export const Primary: Story = {
  args: {
    type: 'text',
    placeholder: '이메일',
  },
}

export const Secondary: Story = {
  args: {
    type: 'password',
    placeholder: '비밀번호',
  },
}
