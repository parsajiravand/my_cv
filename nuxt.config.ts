export default defineNuxtConfig({
  app: {
    head: {
      title: "parsa-jiravand",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content:
            "Hi, my name is Parsa Jiravand. I have been programming for about 4 years. I worked with private start-ups and state-owned companies.",
        },
        { name: "format-detection", content: "telephone=no" },
        { name: "author", content: "parsajiravand" },
        { name: "og:site_name", content: "parsajiravand" },
        { name: "og:url", content: "parsajiravand" },
        { name: "og:title", content: "parsajiravand" },
        {
          name: "og:description",
          content:
            "Hi, my name is Parsa Jiravand. I have been programming for about 4 years. I worked with private start-ups and state-owned companies.",
        },
        { name: "og:image", content: "" },
        { name: "twitter:url", content: "parsajiravand" },
        { name: "twitter:title", content: "parsajiravand" },
        {
          name: "twitter:description",
          content:
            "Hi, my name is Parsa Jiravand. I have been programming for about 4 years. I worked with private start-ups and state-owned companies.",
        },
        { name: "twitter:image", content: "" },
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
