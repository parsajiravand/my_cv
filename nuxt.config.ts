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
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  modules: [
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "@kevinmarrec/nuxt-pwa",
    "@nuxt/devtools",
    [
      "@nuxtjs/color-mode",
      {
        classSuffix: "",
      },
    ],
    [
      "@nuxtjs/i18n",
      {
        lazy: true,
        defaultLocale: "en",
        langDir: "./locales/",
        locales: [
          {
            code: "en",
            file: "en.ts",
            dir: "ltr",
          },
          {
            code: "fa",
            file: "fa.ts",
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
  content: {
    // https://content.nuxtjs.org/api/configuration
    highlight: {
      theme: {
        // Default theme (same as single string)
        default: "material-palenight",
        // Theme used if `html.dark`
        dark: "github-dark",
      },
    },
    markdown: {
      toc: {
        depth: 5,
        searchDepth: 5,
      },
    },
  },
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
  }
});
