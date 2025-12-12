/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    '../src/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  viteFinal: async (config) => {
    // Ensure both .js and .jsx files can contain JSX
    config.esbuild = {
      ...config.esbuild,
      loader: 'jsx',
      include: /\.(jsx?|tsx?)$/,
    };

    return config;
  },
};

export default config;
