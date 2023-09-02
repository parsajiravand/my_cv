<template>
  <div class="rtl:text-right">
    <div class="cv_side_contact">
      <h4 class="font-medium text-2xl mb-2">
        {{ t("home.contact.title") }}
      </h4>
      <div class="grid grid-cols-12 font-semibold">
        <i
          :class="['fa text-2xl text-blue-900 dark:text-gray-50', 'fa-phone']"
        />
        <a
          href="tel:+989166320277"
          class="col-span-11 md:col-span-10 mt-1 lg:mr-2"
          >+98-9166320277

          <!-- Comment this section when phone already call -->
          <!-- <small v-show="index===0" class="text-red-500 font-bold">Please Call Me On WhatsApp</small></span> -->
        </a>
      </div>
      <div class="grid grid-cols-12 font-semibold">
        <i
          :class="['fa text-2xl text-blue-900 dark:text-gray-50', 'fa-google']"
        />
        <a
          href="mailto:parsajiravand@gmail.com"
          class="col-span-11 md:col-span-10 mt-1 lg:mr-2"
          >parsajiravand@gmail.com

          <!-- Comment this section when phone already call -->
          <!-- <small v-show="index===0" class="text-red-500 font-bold">Please Call Me On WhatsApp</small></span> -->
        </a>
      </div>
      <div class="grid grid-cols-12 font-semibold mx-1">
        <i
          :class="[
            'fa text-2xl text-blue-900 dark:text-gray-50',
            'fa-map-marker',
          ]"
        />
        <a class="col-span-11 md:col-span-10 mt-1 lg:mr-2"
          >Iran,Karaj
          <!-- Comment this section when phone already call -->
          <!-- <small v-show="index===0" class="text-red-500 font-bold">Please Call Me On WhatsApp</small></span> -->
        </a>
      </div>
    </div>
    <div class="cv_side_skills mt-10" v-show="skills.length">
      <h4 class="font-medium text-2xl mb-4">
        {{ t("home.skills.title") }}
      </h4>
      <ul class="flex flex-wrap">
        <nuxt-img
          class="inline-block m-1 h-6 rounded-md shadow-md my-1 opacity-90"
          v-for="tech in skills"
          :key="tech"
          :src="tech.path"
          :alt="tech.name"
        />
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
        <a
          :href="item.address"
          target="_blank"
          class="flex hover:text-blue-600"
        >
          <i
            :class="['fa text-2xl text-blue-900 dark:text-gray-50', item.icon]"
          />
          <span class="mt-1 mx-3">{{ item.name }}</span>
        </a>
      </div>
    </div>
    <div class="py-5 mt-5">
      <h4 class="font-normal text-2xl mb-4 text-blue-800">
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
    <!--  <div class="py-5 mt-5">
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
    </div> -->
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
    type: Array as PropType<
      {
        path: string;
        name: string;
      }[]
    >,
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
