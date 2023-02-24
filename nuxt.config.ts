// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: [
        'vuetify/lib/styles/main.sass',
        '~/assets/css/common.scss'
    ],
    build: {
        transpile: ['vuetify']
    },
    modules: [
        '@nuxt/content'
    ],
    content: {
        highlight: {
            theme: 'github-dark',
            preload: [
                'bibtex',
                'csharp',
                'shellscript'
            ]
        }
    },
    app: {
        baseURL: '/website',
        cdnURL: '/website/'
    }
})