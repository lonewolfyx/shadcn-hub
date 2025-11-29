import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxt/eslint',
        '@nuxt/icon',
        '@vueuse/nuxt',
        'shadcn-nuxt',
    ],

    ssr: false,

    devtools: {
        enabled: true,
    },

    css: ['~/assets/css/main.css'],
    compatibilityDate: '2025-11-22',

    vite: {
        plugins: [tailwindcss()],
    },

    eslint: {
        config: {
            stylistic: {
                indent: 4, // 4, or 'tab'
                quotes: 'single', // or 'double'
            },
        },
    },

    shadcn: {
        prefix: '',
        componentDir: './app/components/ui',
    },
})
