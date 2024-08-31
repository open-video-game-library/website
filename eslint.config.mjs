// @ts-check
import globals from 'globals';
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
  languageOptions: {
    globals: {
      ...globals.browser,
      ...globals.node,
    },
  },
  rules: {
    'vue/max-attributes-per-line': ['warn', { singleline: 3, multiline: 1 }],
    '@typescript-eslint/no-import-type-side-effects': 'off',
  },
  ignores: [
    '**/node_modules',
    '**/.nuxt',
    '**/.output',
    '**/public',
  ],
});
