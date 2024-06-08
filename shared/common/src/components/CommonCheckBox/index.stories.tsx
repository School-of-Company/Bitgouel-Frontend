import { Meta, StoryObj } from "@storybook/react";
import CommonCheckBox from ".";

export default {
  title: 'common/components/CommonCheckBox',
  component: CommonCheckBox,
} as Meta<typeof CommonCheckBox>

type Story = StoryObj<typeof CommonCheckBox>

export const UnChecked: Story = {
  args: {
    checked: false,
    onChange: () => {},
  }
}

export const Checked: Story = {
  args: {
    checked: true,
    onChange: () => {},
  }
}