// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app:{
        head: {
            title: "Open Video Game Library",
            meta: [
                { charset: "utf-8" },
                // { name: "viewport", content: "width=device-width, initial-scale=1" },
            ],
            link: [
                { rel: "icon", type: "image/png", href: "/favicon.png" }, // これを追記する
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
            INTERNAL_DB_API: process.env.INTERNAL_DB_API,
            EXTERNAL_DB_API: process.env.EXTERNAL_DB_API
        },
    },
})