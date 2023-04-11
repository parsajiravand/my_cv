<template>
    <footer
      class="my-5 border-t dark:border-t-gray-500 pt-2 text-center dark:text-blue-400 text-blue-700 w-full"
    >
      <a href="https://parsajiravand.netlify.app/" target="_blank"
        >© {{ getYear }} | ParsaJiravand
      </a>
    </footer>
</template>

<script setup lang="ts">
const getYear = computed(():number => {
  const date = new Date();
  return date.getFullYear();
});
</script>
