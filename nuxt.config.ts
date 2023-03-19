// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  buildModules: ['@nuxtjs/style-resources', '@nuxtjs/tailwindcss', 'nuxt-icon'],
  modules: ['nuxt-font-loader'],
  // buildModules: ['@nuxtjs/google-fonts'],

  components: true,

  fontLoader: {
    local: [
      {
        src: '/assets/fonts/Gilroy-Bold.woff2',
        family: 'Gilroy',
        class: 'font-new-font',
      },
    ],
  },
  styleResources: {
    // css: ['~assets/style/variables.scss'],
    scss: ['~/assets/style/variables.scss'],
  },
});
