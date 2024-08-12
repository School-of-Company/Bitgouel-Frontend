'use client'

import { Meta, StoryObj } from '@storybook/react'
import CreateCompanyModal from '.'

export default {
  title: 'outside/modals/CreateCompanyModal',
  component: CreateCompanyModal,
} as Meta<typeof CreateCompanyModal>

type Story = StoryObj<typeof CreateCompanyModal>

export const Primary: Story = {}