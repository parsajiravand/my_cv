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
    <div class="py-5 mt-5 relative">
      <h4 class="font-normal text-2xl mb-8 text-blue-800 dark:text-white">
        {{ t("home.experience.title") }}
      </h4>
      <div
        v-for="(item, index) in sortExprience"
        :key="index"
        class="mb-5 border p-5 rounded-2xl"
      >
        <span v-if="item.pinned">
          <i
            class="fa fa-thumb-tack fa-2x rotate-45 absolute ltr:right-5 rtl:left-5 text-gray-700 dark:text-gray-100"
          ></i>
        </span>
        <p class="font-extrabold text-lg text-blue-800 dark:text-white">
          {{ item.title }}
        </p>
        <p class="font-semibold text-lg text-blue-700 dark:text-white">
          {{ item.job }}
        </p>
        <p class="text-light mb-2 text-blue-700 dark:text-white">
          {{ item.time }}
        </p>
        <p>
          {{ item.description }}
        </p>
        <!-- <p class="mt-5 font-medium mb-4">
          <span class="font-bold"> Technologies : </span> &nbsp;
          <nuxt-img
            class="inline-block mx-1 rounded-md shadow-md my-1 opacity-90"
            v-for="tech in item.tech"
            :key="tech"
            :src="tech.path"
            :alt="tech.name"
          />
        </p> -->

        <section
          class="flex flex-row flex-wrap my-2 justify-center text-center"
        >
          <div
            v-for="(project, index) in item.projects"
            :key="index"
            class="basis-1/2 grow-0 md:basis-1/4 m-1 p-2 shadow-inner rounded-lg cursor-pointer hover:shadow-lg text-gray-600 text-sm dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-300"
          >
            <a
              class="flex flex-col justify-between h-full"
              target="_blank"
              :href="project.url"
            >
              <div>
                <nuxt-img
                  class="mx-auto my-1"
                  :src="`/img/${project.logo}`"
                  loading="lazy"
                  preload
                  :alt="project.name"
                  width="50"
                  fit="contain"
                />
              </div>

              <div class="text-blue-600 font-semibold">
                {{ project.name }}
              </div>
            </a>
          </div>
        </section>
      </div>
    </div>

  </div>
</template>
<script setup lang="ts">
const { tm, t } = useI18n();
const yearsWork = useGetWorkedYear();
// show first pinned exprience
const sortExprience = computed(() => {
  //@ts-ignore
  const pinned = tm("home.experience.items" as string).filter(
    (item: any) => item.pinned
  );
  //@ts-ignore
  const unpinned = tm("home.experience.items" as string).filter(
    (item: any) => !item.pinned
  );
  return [...pinned, ...unpinned];
});
</script>
