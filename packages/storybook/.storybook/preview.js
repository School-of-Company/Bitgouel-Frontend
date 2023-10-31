import { GlobalLayout } from '../../../shared/common/src/layouts'
import '../../../shared/common/src/styles/font.css'

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <GlobalLayout>
        <Story />
      </GlobalLayout>
    ),
  ],
}

export default preview