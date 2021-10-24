export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'parsa-jiravand',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Hi, my name is Parsa Jiravand. I have been programming for about 4 years. I worked with private start-ups and state-owned companies.' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'author', content: 'parsajiravand' },
      { name: 'og:site_name', content: 'parsajiravand' },
      { name: 'og:url', content: 'parsajiravand' },
      { name: 'og:title', content: 'parsajiravand' },
      { name: 'og:description', content: 'Hi, my name is Parsa Jiravand. I have been programming for about 4 years. I worked with private start-ups and state-owned companies.' },
      { name: 'og:image', content: '' },
      { name: 'twitter:url', content: 'parsajiravand' },
      { name: 'twitter:title', content: 'parsajiravand' },
      { name: 'twitter:description', content: 'Hi, my name is Parsa Jiravand. I have been programming for about 4 years. I worked with private start-ups and state-owned companies.' },
      { name: 'twitter:image', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css'
      }

    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n',
    '@nuxtjs/fontawesome' // removee ittt
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },
  // i18n module configuration
  i18n: {
    lazy: true,
    defaultLocale: 'en',
    langDir: '~/locales/',
    locales: [

      {
        code: 'en',
        file: 'en.js',
        dir: 'ltr'
      },
      {
        code: 'fa',
        file: 'fa.js',
        dir: 'rtl'
      }
    ],
    strategy: 'no_prefix'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  tailwindcss: {
    jit: true,
    // add '~tailwind.config` alias
    exposeConfig: true
  },
  colorMode: {
    classSuffix: ''
  }
}
