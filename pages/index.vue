<template>
  <div class="cv grid grid-cols-3 gap-4 rounded-2xl">
    <aside class="md:col-span-1 col-span-3">
      <article class="cv_side text-center shadow-inner bg-blue-50 dark:bg-blue-900 px-10 py-10 rounded-2xl">
        <ProfileBox />
      </article>
      <article class="cv_side text-left shadow-inner bg-blue-50 dark:bg-blue-900 px-10 py-10 mt-5 rounded-2xl">
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
      </article>
    </aside>
    <div class="cv_content md:col-span-2 col-span-3 " />
  </div>
</template>

<script>
export default {
  data () {
    return {
      contact: [
        { key: 0, icon: 'fa-phone', value: '+98-916-632-0277' },
        { key: 0, icon: 'fa-google', value: 'parsajiravand@gmail.com' },
        { key: 0, icon: 'fa-map-marker', value: 'Iran,Karaj,Azimie' }
      ],
      skills: [
        { key: 0, name: 'Vue' },
        { key: 1, name: 'Nuxt' },
        { key: 2, name: 'Javascript' },
        { key: 3, name: 'Vuex' },
        { key: 4, name: 'GraphQL' },
        { key: 5, name: 'Tailwind' },
        { key: 6, name: 'Boostrap' },
        { key: 7, name: 'Html5' },
        { key: 8, name: 'Css3' },
        { key: 9, name: 'API' },
        { key: 10, name: 'Sass' },
        { key: 11, name: 'WebSocket' }
      ],
      languages: [
        { key: 0, percent: 80, name: 'English' },
        { key: 0, percent: 100, name: 'Persian' }
      ],
      social: [
        { key: 0, percent: 80, name: 'English' },
        { key: 0, percent: 100, name: 'Persian' }
      ]
    }
  }

}
</script>
