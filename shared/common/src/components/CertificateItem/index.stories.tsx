import { Meta, StoryObj } from "@storybook/react"
import CertificateItem from "."

export default {
  title: 'common/components/CertificateItem',
  component: CertificateItem,
} as Meta<typeof CertificateItem>

type Story = StoryObj<typeof CertificateItem>

export const CloseCalendarCertificateItem: Story = {
  args: {
    certificateItems: {
      id: '1234',
      name: '정보처리기능사',
      acquisitionDate: '2024-01-01',
    },
    isOpenCalendar: false,
  }
}

export const OpenCalendarCertificateItem: Story = {
  args: {
    certificateItems: {
      id: '1234',
      name: '정보처리기능사',
      acquisitionDate: '2024-01-01',
    },
    isOpenCalendar: true,
  }
}