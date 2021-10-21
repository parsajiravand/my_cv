<template>
  <div>
    <div class="cv_side_contact">
      <h4 class="font-medium text-2xl  mb-2">
        {{ $t('home.contact.title') }}
      </h4>
      <div v-for="(item,index) in contact" :key="index" class="grid grid-cols-12">
        <i :class="['fa text-2xl text-blue-900 dark:text-gray-50',item.icon] " />
        <span class="col-span-11 mt-1">{{ item.value }}</span>
      </div>
    </div>
    <div class="cv_side_skills mt-10">
      <h4 class="font-medium text-2xl mb-4 ">
        {{ $t('home.skills.title') }}
      </h4>
      <ul class="flex flex-wrap">
        <li v-for="(item,index) in skills" :key="index" class="rounded-2xl mr-2 mb-3 text-white px-3 py-2 bg-blue-900 dark:bg-black dark:text-gray-50">
          {{ item.name }}
        </li>
      </ul>
    </div>
    <div class="cv_side_skills mt-10">
      <h4 class="font-medium text-2xl mb-4 ">
        {{ $t('home.skills.title') }}
      </h4>
      <ul class="ml-5">
        <li v-for="(item,index) in $t('home.softSkills.items')" :key="index" class="list-disc">
          {{ item.name }}
        </li>
      </ul>
    </div>
    <div class="cv_side_language mt-10">
      <h4 class="font-medium text-2xl mb-4 ">
        {{ $t('home.languages.title') }}
      </h4>

      <div v-for="(item,index) in languages" :key="index" class="relative pt-1">
        <div class="flex mb-2 items-center justify-between">
          <div>
            <span class="text-xs font-semibold inline-block py-1 pr-2 uppercase rounded-full">
              {{ item.name }}
            </span>
          </div>
          <div class="text-right">
            <span class="text-xs font-semibold inline-block text-blue-600">
              {{ item.percent }}%
            </span>
          </div>
        </div>
        <div class="overflow-hidden h-2 mb-4 text-xs flex rounded-xl bg-blue-100">
          <div
            :style="'width:'+item.percent+'%'"
            class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
          />
        </div>
      </div>
    </div>
    <div class="cv_social mt-10">
      <h4 class="font-medium text-2xl mb-4 ">
        {{ $t('home.social.title') }}
      </h4>
      <div v-for="(item,index) in socials" :key="index" class="">
        <a :href="item.address" target="_blank" class="flex ">
          <i :class="['fa text-2xl text-blue-900 dark:text-gray-50',item.icon] " />
          <span class="mt-1 mx-3">{{ item.name }}</span>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    contact: {
      type: Array,
      default: () => [],
      required: false
    },
    skills: {
      type: Array,
      default: () => [],
      required: false
    },
    languages: {
      type: Array,
      default: () => [],
      required: false
    },
    socials: {
      type: Array,
      default: () => [],
      required: false
    }
  }
}
</script>
