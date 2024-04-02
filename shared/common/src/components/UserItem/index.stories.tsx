'use client'

import UserItem from '.'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'common/components/UserItem',
  component: UserItem,
} as Meta<typeof UserItem>

type Story = StoryObj<typeof UserItem>

export const CurrentUser: Story = {
  args: {
    id: '1234',
    name: '홍길동',
    authority: 'ROLE_STUDENT',
    status: 'current',
    handleSelectUsers: () => {},
    userIds: ['123', '456']
  }
}

export const RequestUser: Story = {
  args: {
    id: '1234',
    name: '홍길동',
    authority: 'ROLE_STUDENT',
    status: 'request',
    handleSelectUsers: () => {},
    userIds: ['123', '456']
  }
}

export const NoAuthorityUser: Story = {
  args: {
    id: '1234',
    name: '홍길동',
    status: 'request',
    handleSelectUsers: () => {},
    userIds: ['123', '456']
  }
}
