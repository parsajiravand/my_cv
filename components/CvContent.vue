<template>
  <div>
    <div class="py-5">
      <h4 class="font-normal text-2xl mb-4 text-blue-800 dark:text-white">
        {{ t("home.aboutMe.title") }}
      </h4>
      <p class="leading-relaxed">
        {{ t("home.aboutMe.description") }}
      </p>
    </div>
    <div class="py-5 mt-5">
      <h4 class="font-normal text-2xl mb-8 text-blue-800 dark:text-white">
        {{ t("home.experience.title") }}
      </h4>
      <div
        v-for="(item,index) in tm('home.experience.items' as string)"
        :key="index"
        class="mb-5 border p-5 rounded-2xl"
      >
        <p class="font-extrabold text-lg text-blue-800 dark:text-white">
          {{ item.title }}
        </p>
        <p class="font-bold text-md text-blue-700 dark:text-white">
          {{ item.job }}
        </p>
        <p class="text-light mb-2 text-blue-700 dark:text-white">
          {{ item.time }}
        </p>
        <p>
          {{ item.description }}
        </p>
        <p class="mt-5 font-medium">
          {{ item.tech }}
        </p>
      </div>
    </div>
    <div class="py-5 mt-5">
      <h4 class="font-normal text-2xl mb-4 text-blue-800 dark:text-white">
        {{ t("home.ecucation.title") }}
      </h4>
      <div
        v-for="(item,index) in tm('home.ecucation.items' as string)"
        :key="index"
        class="mt-8"
      >
        <p class="font-bold text-lg text-blue-800 dark:text-white">
          {{ item.title }}
        </p>
        <p class="font-normal text-md mb-2 text-blue-700 dark:text-white">
          {{ item.time }}
        </p>
        <p>
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const { tm, t } = useI18n();
</script>
