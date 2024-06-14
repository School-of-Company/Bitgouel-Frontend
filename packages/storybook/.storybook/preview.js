import { AppRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import {
  GlobalLayout,
  CustomProvider,
} from '../../../shared/common/src/layouts'
import { RecoilRoot } from 'recoil'

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
    nextRouter: {
      Provider: AppRouterContext.Provider,
    },
  },
  decorators: [
    (Story) => (
      <RecoilRoot>
        <GlobalLayout>
          <CustomProvider>
            <Story />
            <div id='modal' />
          </CustomProvider>
        </GlobalLayout>
      </RecoilRoot>
    ),
  ],
}

export default preview
