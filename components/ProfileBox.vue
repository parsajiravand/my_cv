<template>
  <div>
    <a href="https://parsajiravand.netlify.app/" target="_blank">
      <img
        class="w-40 h-40 rounded-full mx-auto"
        src="/img/parsa-jiravand-min.jpg"
        alt="parsa jiravand"
      >
    </a>
    <h2 class="font-bold text-4xl text-blue-800 dark:text-white my-4">
      {{ $t('home.firstName') }}

      {{ $t('home.lastName') }}
    </h2>
    <h4 class="font-weight-light text-2xl ">
      {{ $t('home.career') }}
    </h4>
    <section>
      <h4 class="font-weight-light text-2xl " />
    </section>
  </div>
</template>
<script>
export default {

}
</script>
