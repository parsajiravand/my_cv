<template>
  <div>
    <a href="https://parsajiravand.netlify.app/" target="_blank">
      <img
        class="rounded-full mx-auto"
        src="/img/parsa-jiravand-min.jpg"
        alt="parsa jiravand"
        style="
          width: 220px;
          height: 220px;
          object-fit: cover;
          object-position: center;
        "
      />
    </a>
    <h1 class="font-bold text-4xl text-blue-800 dark:text-white my-4">
      {{ t("home.firstName") }}

      {{ t("home.lastName") }}
    </h1>
    <h2 class="font-weight-light text-2xl">
      {{ t("home.career") }}
    </h2>
    <section>
      <h4 class="font-weight-light text-2xl" />
    </section>
  </div>
</template>
<script setup lang="ts">
const { t } = useI18n();
</script>
