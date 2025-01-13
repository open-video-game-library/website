export default defineNuxtConfig({
  app: {
    baseURL: '/',
    head: {
      title: 'Open Video Game Library',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'stylesheet', href: 'https://unpkg.com/modern-css-reset/dist/reset.min.css' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;600&family=Roboto:wght@300;600&display=swap',
        },
      ],
    },
  },
  compatibilityDate: '2025-01-12',
  content: {
    highlight: {
      theme: 'github-dark',
      preload: [
        'bibtex',
        'csharp',
        'shellscript',
      ],
    },
  },
  css: [
    '@/assets/css/common.scss',
  ],
  eslint: {
    config: {
      stylistic: {
        commaDangle: 'always-multiline',
        indent: 2,
        quotes: 'single',
        semi: true,
      },
    },
  },
  modules: ['@nuxt/content', '@nuxt/eslint', '@nuxt/image', [
    '@nuxtjs/i18n',
    {
      locales: [
        { code: 'en', file: 'en.json', iso: 'en-US' },
        { code: 'ja', file: 'ja.json', iso: 'ja-JP' },
      ],
      defaultLocale: 'en',
      langDir: 'locales/',
    },
  ]],
  runtimeConfig: {
    public: {
      internalDbApi: process.env.NUXT_INTERNAL_DB_API,
      externalDbApi: process.env.NUXT_EXTERNAL_DB_API,
      surveyDbApi: process.env.NUXT_SURVEY_DB_API,
    },
  },
  ssr: true,
});
