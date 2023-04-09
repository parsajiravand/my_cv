<template>
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
      <select v-model="locale">
        <option value="en">en</option>
        <option value="fa">fa</option>
      </select>

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
</template>
<script setup lang="ts">
const colorMode = useColorMode();
const { locale } = useI18n();
const switchLocalePath = useSwitchLocalePath();

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
