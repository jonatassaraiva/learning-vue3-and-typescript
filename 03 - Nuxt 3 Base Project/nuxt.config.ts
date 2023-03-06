// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  css: ['vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.min.css', "@/assets/main.scss"],
  vite: {
    ssr: {
      noExternal: ['vuetify']
    }
  },
  modules: [
    // @ts-ignore
    // this adds the vuetify vite plugin
    // also produces type errors in the current beta release
    async (options, nuxt) => {
      nuxt.hooks.hook(
        'vite:extendConfig',
        // @ts-ignore
        (config) => config.plugins.push(vuetify())
      );
    }
  ],
  nitro: {
    preset: 'aws-lambda',
    serveStatic: true
  },
  runtimeConfig: {
    // https://github.com/vuetifyjs/vuetify/issues/15202
    VUETFY_ISSUE_15202: process.env.VUETFY_ISSUE_15202 === 'true' ?  true : false
  }
})
