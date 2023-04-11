<template>
  <div>
    <div class="cv_side_contact">
      <h4 class="font-medium text-2xl mb-2">
        {{ t("home.contact.title") }}
      </h4>
      <div
        v-for="(item, index) in contact"
        :key="index"
        class="grid grid-cols-12"
      >
        <i
          :class="['fa text-2xl text-blue-900 dark:text-gray-50', item.icon]"
        />
        <span class="col-span-11 md:col-span-10 mt-1 lg:mr-2"
          >{{ item.value }}

          <!-- Comment this section when phone already call -->
          <!-- <small v-show="index===0" class="text-red-500 font-bold">Please Call Me On WhatsApp</small></span> -->
        </span>
      </div>
    </div>
    <div class="cv_side_skills mt-10">
      <h4 class="font-medium text-2xl mb-4">
        {{ t("home.skills.title") }}
      </h4>
      <ul class="flex flex-wrap">
        <li
          v-for="(item, index) in skills"
          :key="index"
          class="rounded-2xl mr-2 mb-3 text-xs font-semibold text-white px-2 py-1 bg-blue-900 dark:bg-blue-200 dark:text-gray-800"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
    <div class="cv_side_skills mt-10">
      <h4 class="font-medium text-2xl mb-4">
        {{ t("home.softSkills.title") }}
      </h4>
      <ul class="ml-5">
        <li
          v-for="(item,index) in tm('home.softSkills.items' as string) "
          :key="index"
          class="list-disc"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
    <div class="cv_side_language mt-10">
      <h4 class="font-medium text-2xl mb-4">
        {{ t("home.languages.title") }}
      </h4>

      <div
        v-for="(item, index) in languages"
        :key="index"
        class="relative pt-1"
      >
        <div class="flex mb-2 items-center justify-between">
          <div>
            <span
              class="text-xs font-semibold inline-block py-1 pr-2 uppercase rounded-full"
            >
              {{ item.name }}
            </span>
          </div>
          <div class="text-right">
            <span
              class="text-xs font-semibold inline-block text-blue-600 dark:text-white"
            >
              {{ item.percent }}%
            </span>
          </div>
        </div>
        <div
          class="overflow-hidden h-2 mb-4 text-xs flex rounded-xl bg-blue-100"
        >
          <div
            :style="'width:' + item.percent + '%'"
            class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
          />
        </div>
      </div>
    </div>
    <div class="cv_social mt-10">
      <h4 class="font-medium text-2xl mb-4">
        {{ t("home.social.title") }}
      </h4>
      <div v-for="(item, index) in socials" :key="index" class="">
        <a :href="item.address" target="_blank" class="flex">
          <i
            :class="['fa text-2xl text-blue-900 dark:text-gray-50', item.icon]"
          />
          <span class="mt-1 mx-3">{{ item.name }}</span>
        </a>
      </div>
    </div>
    <div class="py-5 mt-5">
      <h4 class="font-normal text-2xl mb-4 text-blue-800 dark:text-white">
        {{ t("home.projects.title") }}
      </h4>
      <p class="mb-4">
        {{ t("home.projects.description") }}
      </p>
      <div
        v-for="(item, index) in tm('home.projects.items' as string)"
        :key="index"
      >
        <a :href="item.url">
          <p class="font-bold text-lg text-blue-800 dark:text-blue-400">
            <i class="fa fa-globe" /> {{ item.name }}
          </p>
        </a>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
// i18n setup
const { tm, t } = useI18n();
// interface
interface Contact {
  icon: string;
  value: string;
}
interface Skill {
  name: string;
}
interface Language {
  name: string;
  percent: number;
}
interface Social {
  name: string;
  icon: string;
  address: string;
}

// props
defineProps({
  contact: {
    type: Array as PropType<Contact[]>,
    default: () => [],
    required: false,
  },
  skills: {
    type: Array as PropType<Skill[]>,
    default: () => [],
    required: false,
  },
  languages: {
    type: Array as PropType<Language[]>,
    default: () => [],
    required: false,
  },
  socials: {
    type: Array as PropType<Social[]>,
    default: () => [],
    required: false,
  },
});


</script>
