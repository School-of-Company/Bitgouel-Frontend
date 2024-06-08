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
    userIds: ['123', '456'],
    name: '홍길동',
    authority: 'ROLE_STUDENT',
    phoneNumber: '01012345678',
    email: 'test@gamil.com',
    status: 'current',
    handleSelectUsers: () => {},
  }
}

export const RequestUser: Story = {
  args: {
    id: '1234',
    userIds: ['123', '456'],
    name: '홍길동',
    authority: 'ROLE_STUDENT',
    phoneNumber: '01012345678',
    email: 'test@gamil.com',
    status: 'request',
    handleSelectUsers: () => {},
  }
}

export const NoAuthorityUser: Story = {
  args: {
    id: '1234',
    userIds: ['123', '456'],
    name: '홍길동',
    authority: 'ROLE_STUDENT',
    phoneNumber: '01012345678',
    email: 'test@gamil.com',
    status: 'request',
    handleSelectUsers: () => {},
  }
}
