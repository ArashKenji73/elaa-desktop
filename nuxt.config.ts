// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [ //instead of buildModules
        '@pinia/nuxt',
        '@nuxtjs/tailwindcss'
    ],
    tailwindcss: {},
    css: [
        '@/assets/styles/global.scss',
    ],
    vite: {
        server: {
            watch: {
                usePolling: true
            }
        },
    }
})
