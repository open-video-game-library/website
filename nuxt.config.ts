const isProd = process.env.MODE === "prod";

export default defineNuxtConfig({
    app: {
        baseURL: isProd ? '/website/' : '/',
        head: {
            title: "Open Video Game Library",
            meta: [
                { charset: "utf-8" },
                // { name: "viewport", content: "width=device-width, initial-scale=1" },
            ],
            link: [
                { rel: "icon", type: "image/png", href: isProd ? "/website/favicon.png" : "/favicon.png" },
            ],
        },
    },
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
    ssr: true,
    runtimeConfig: {
        public: {
            internalDbApi: process.env.NUXT_INTERNAL_DB_API,
            externalDbApi: process.env.NUXT_EXTERNAL_DB_API,
            surveyDbApi: process.env.NUXT_SURVEY_DB_API
        }
    }
})