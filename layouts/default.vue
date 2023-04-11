<template>
  <Html :lang="locale" :dir="head.htmlAttrs?.dir">
    <Head>
      <Title>{{ title }}</Title>

      <Meta name="description" :content="description" />
      <Meta name="og:description" :content="description" />
      <Meta name="twitter:description" :content="description" />
      <Meta
        :name="meta.name"
        :content="meta.content"
        v-for="(meta, index) in metaList"
      />
      <template v-for="link in head.link" :key="link.id">
        <Link
          :id="link.id"
          :rel="link.rel"
          :href="link.href"
          :hreflang="link.hreflang"
        />
      </template>
    </Head>
    <Body>
      <SiteHeader />
      <div class="dark:bg-gray-800 dark:text-gray-200">
        <div class="container mx-auto p-4">
          <button
            class="text-4xl fixed bottom-4 right-8 cursor-pointer rounded-full shadow-inner bg-blue-900 dark:bg-white z-50"
          >
            <i
              v-if="colorMode.preference === 'light'"
              class="fa fa-moon-o text-white px-4 py-3"
              aria-hidden="true"
              @click="colorMode.preference = 'dark'"
            />
            <i
              v-if="colorMode.preference === 'dark'"
              class="fa fa-lightbulb-o text-black px-5 py-3"
              aria-hidden="true"
              @click="colorMode.preference = 'light'"
            />
          </button>
          <button
            class="text-lg fixed bottom-20 right-9 cursor-pointer rounded-full shadow-inner bg-blue-900 dark:bg-white z-50"
          >
            <NuxtLink
              v-if="locale === 'fa'"
              class="dark:text-black text-white px-4 py-4"
              :to="switchLocalePath('en')"
            >
              EN
            </NuxtLink>
            <NuxtLink
              v-if="locale === 'en'"
              class="dark:text-black text-white px-4 py-4"
              :to="switchLocalePath('fa')"
            >
              FA
            </NuxtLink>
          </button>

          <!-- Nuxt Pages -->
          <slot />
          <!-- Nuxt Pages -->
        </div>
      </div>
      <SiteFooter />
    </Body>
  </Html>
</template>
<script setup lang="ts">
// color mode
const colorMode = useColorMode();

//route
const route = useRoute();

//i18n
const { locale, t } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: "id",
  addSeoAttributes: true,
});

// meta tags for seo and social media  and more
// setup meta tags dynamically
const title = computed(() => t("meta.title", { title: route.meta.title }));
const description = computed(() => t("meta.description"));
const metaList = computed(() => [
  { name: "viewport", content: "width=device-width, initial-scale=1" },
  { name: "theme-color", content: "#ffffff" },
  { name: "apple-mobile-web-app-capable", content: "yes" },
  { name: "apple-mobile-web-app-status-bar-style", content: "black" },
  { name: "apple-mobile-web-app-title", content: "parsa jiravand" },
  { name: "msapplication-TileColor", content: "#ffffff" },
  { name: "msapplication-TileImage", content: "/icons/ms-icon-144x144.png" },
  { name: "msapplication-config", content: "/icons/browserconfig.xml" },
  { name: "format-detection", content: "telephone=+989166320277" },
  { name: "author", content: "parsa jiravand" },
  { name: "og:site_name", content: "parsa jiravand" },
  { name: "og:url", content: "https://parsajiravand.netlify.app" },
  { name: "og:type", content: "website" },
  { name: "og:title", content: "parsa jiravand" },
  {
    name: "og:image",
    content: "https://avatars.githubusercontent.com/u/54263016?v=4",
  },
  { name: "twitter:url", content: "parsajiravand" },
  { name: "twitter:title", content: "parsajiravand" },
  {
    name: "twitter:image",
    content: "https://avatars.githubusercontent.com/u/54263016?v=4",
  },
]);

onMounted(() => {
  /* default nuxt color mode is system */
  const color = localStorage.getItem("nuxt-color-mode");
  /* for first time render color select because default color is system */
  if (color === "system" || !color) {
    colorMode.preference = "light";
  }
});
</script>
<style lang="css">
.rtl {
  direction: rtl;
}
</style>
