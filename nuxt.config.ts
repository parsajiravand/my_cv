export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css",
        },
      ],
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@kevinmarrec/nuxt-pwa",
    "@nuxt/devtools",
    "@nuxtjs/color-mode",
    [
      "@nuxtjs/i18n",
      {
        lazy: true,
        defaultLocale: "en",
        langDir: "./locales/",
        locales: [
          {
            code: "en",
            file: "en.js",
            dir: "ltr",
          },
          {
            code: "fa",
            file: "fa.js",
            dir: "rtl",
          },
        ],
      },
    ],
  ],
  pwa: {
    manifest: {
      name: "parsa jiravand",
      short_name: "parsa jiravand",
      description: "parsa jiravand",
      lang: "en",
    },
    meta: {
      name: "parsa jiravand",
      description: "parsa jiravand",
      lang: "en",
    },
  },
});
