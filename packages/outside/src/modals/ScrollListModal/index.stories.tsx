import type { Meta, StoryObj } from '@storybook/react'
import ScrollListModal from '.'
import { ListManagementContent, SchoolContent } from '@outside/components'

export default {
  title: 'outside/modals/ScrollListModal',
  component: ScrollListModal,
} as Meta<typeof ScrollListModal>

type Story = StoryObj<typeof ScrollListModal>

export const SchoolList: Story = {
  args: {
    title: '학교 선택',
    children: <SchoolContent />,
  },
}

export const AdminList: Story = {
  args: {
    title: '다른 목록 관리',
    children: <ListManagementContent />,
  },
}
