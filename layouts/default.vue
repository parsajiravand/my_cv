<template>
  <div class="dark:bg-gray-800 dark:text-gray-200">
    <div class="container mx-auto p-4">
      <button class="text-4xl fixed bottom-4 right-8 cursor-pointer rounded-full shadow-inner bg-blue-900 dark:bg-white z-50">
        <i
          v-if="$colorMode.preference === 'light'"
          class="fa fa-moon-o text-white px-4 py-3"
          aria-hidden="true"
          @click="$colorMode.preference = 'dark'"
        />
        <i
          v-if="$colorMode.preference === 'dark'"
          class="fa fa-lightbulb-o text-black px-5 py-3"
          aria-hidden="true"
          @click="$colorMode.preference = 'light'"
        />
      </button>
      <button class="text-lg fixed bottom-20 right-9 cursor-pointer rounded-full shadow-inner bg-blue-900 dark:bg-white z-50">
        <small v-if="$i18n.loadedLanguages[0] === 'fa'" class="dark:text-black text-white px-4 py-4" @click="changeLanguage('en')">
          EN
        </small>
        <small v-if="$i18n.loadedLanguages[0] === 'en'" class="dark:text-black text-white  px-4 py-4" @click="changeLanguage('fa')">
          FA
        </small>
      </button>
      <Nuxt />
    </div>
  </div>
</template>
<script>
export default {
  created () {
    /* localeStorage just working in client-side */
    if (process.client) {
      /* default nuxt color mode is system */
      const color = localStorage.getItem('nuxt-color-mode')
      /* for first time render color select because default color is system */
      if (color === 'system') { this.$colorMode.preference = 'light' }
    }
  },
  methods: {
    changeLanguage (lang) {
      if (process.client) {
        document.cookie = `i18n_redirected=${lang}; SameSite=None; Secure`
        /* if is client Side you can access window */
        window.location.reload()
      }
    }
  }
}
</script>
