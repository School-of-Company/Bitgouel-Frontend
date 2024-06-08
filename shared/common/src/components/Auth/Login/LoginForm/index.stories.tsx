import { Meta, StoryObj } from "@storybook/react";
import LoginForm from ".";

export default {
  title: 'common/components/Auth/LoginForm',
  component: LoginForm,
} as Meta<typeof LoginForm>

type Story = StoryObj<typeof LoginForm>

export const Primary: Story = {}