import { createVuetify } from "vuetify"
import colors from "vuetify/lib/util/colors.mjs"
import { aliases, mdi } from "vuetify/lib/iconsets/mdi-svg"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"

export default defineNuxtPlugin((nuxtApp) => {
    const vuetify = createVuetify({
        components,
        directives,
        theme: {
            themes: {
                light: {
                    dark: false,
                    colors: {
                        primary: '#5E1CE2', // #4a148c
                        secondary: colors.grey.lighten5 // #fafafa
                    }
                }
            }
        },
        icons: {
            defaultSet: "mdi",
            aliases,
            sets: { mdi }
        }
    })

    nuxtApp.vueApp.use(vuetify)
})