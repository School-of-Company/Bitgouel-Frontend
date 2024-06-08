import { Meta, StoryObj } from "@storybook/react";
import LoginButton from ".";

export default {
  title: 'common/components/Auth/LoginForm/LoginButton',
  component: LoginButton,
} as Meta<typeof LoginButton>

type Story = StoryObj<typeof LoginButton>

export const Primary: Story = {}