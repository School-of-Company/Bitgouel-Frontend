import { join, dirname } from 'path'

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')))
}

/** @type { import('@storybook/nextjs').StorybookConfig } */
const config = {
  stories: [
    // '../../inside/src/components/**!(node_modules)/*.stories.@(js|jsx|ts|tsx)',
    // '../../inside/src/PageContainer/**!(node_modules)/*.stories.@(js|jsx|ts|tsx)',
    // '../../outside/src/components/**!(node_modules)/*.stories.@(js|jsx|ts|tsx)',
    '../../inside/src/modals/**!(node_modules)/*.stories.@(js|jsx|ts|tsx)',
    '../../../shared/common/src/components/**/*.stories.@(js|jsx|ts|tsx)',
    '../../../shared/common/src/modals/**/*.stories.@(js|jsx|ts|tsx)',
    '../../../shared/common/src/pages/**!(node_modules)/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-onboarding'),
    getAbsolutePath('@storybook/addon-interactions'),
    'storybook-addon-next-router',
  ],
  framework: {
    name: getAbsolutePath('@storybook/nextjs'),
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
}
export default config
