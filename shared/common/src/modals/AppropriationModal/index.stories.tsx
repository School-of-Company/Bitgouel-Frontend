'use client'

import AppropriationModal from '.'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'common/modals/AppropriationModal',
  component: AppropriationModal,
} as Meta<typeof AppropriationModal>

type Story = StoryObj<typeof AppropriationModal>

export const BlueAppropriationModal: Story = {
  args: {
    isApprove: true,
    question: '게시글을 추가하시겠습니까?',
    title: '유저 리서치 - 사용자 경험 개선하기',
    purpose: '추가하기',
  },
}

export const RedppropriationModal: Story = {
  args: {
    isApprove: false,
    question: '게시글을 삭제하시겠습니까?',
    title: '유저 리서치 - 사용자 경험 개선하기',
    purpose: '삭제하기',
  },
}