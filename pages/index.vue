<template>
  <div class="cv grid grid-cols-3 gap-4 rounded-2xl">
    <aside class="md:col-span-1 col-span-3">
      <article class="cv_side text-center shadow-inner bg-blue-50 dark:bg-blue-900 px-2 lg:px-10 py-10 rounded-2xl relative">
        <div class="text-4xl absolute top-1 left-4 cursor-pointer">
          <i v-if="$colorMode.preference === 'light'" class="fa fa-moon-o text-black" aria-hidden="true" @click="$colorMode.preference = 'dark'" />
          <i v-if="$colorMode.preference === 'dark'" class="fa fa-lightbulb-o text-white" aria-hidden="true" @click="$colorMode.preference = 'light'" />
        </div>
        <ProfileBox />
      </article>
      <article class="cv_side text-left shadow-inner bg-blue-50 dark:bg-blue-900 px-6  lg:px-10 py-10 mt-5 rounded-2xl">
        <CvSideBarDetail
          :contact="contact"
          :skills="skills"
          :languages="languages"
          :socials="socials"
        />
      </article>
    </aside>
    <div class="cv_content rounded-2xl md:col-span-2 col-span-3 shadow-inner  px-3 md:px-10 ">
      <article>
        <div class="py-5">
          <h4 class="font-normal text-2xl mb-4 text-blue-800 dark:text-white ">
            {{ $t('home.aboutMe.title') }}
          </h4>
          <p class="leading-relaxed">
            {{ $t('home.aboutMe.description') }}
          </p>
        </div>
        <div class=" py-5 mt-5">
          <h4 class="font-normal text-2xl mb-8 text-blue-800 dark:text-white ">
            {{ $t('home.experience.title') }}
          </h4>
          <div v-for="(item,index) in $t('home.experience.items')" :key="index" class="mb-5 border p-5 rounded-2xl">
            <p class="font-extrabold text-lg  text-blue-800 dark:text-white ">
              {{ item.title }}
            </p>
            <p class="font-bold text-md mb-2 text-blue-700 dark:text-white ">
              {{ item.job }}
            </p>
            <p>
              {{ item.description }}
            </p>
            <p class="mt-5 font-medium">
              {{ item.tech }}
            </p>
          </div>
        </div>
        <div class=" py-5 mt-5">
          <h4 class="font-normal text-2xl mb-4 text-blue-800 dark:text-white ">
            {{ $t('home.ecucation.title') }}
          </h4>
          <div v-for="(item,index) in $t('home.ecucation.items')" :key="index" class="mt-8">
            <p class="font-bold text-lg  text-blue-800 dark:text-white ">
              {{ item.title }}
            </p>
            <p class="font-normal text-md mb-2 text-blue-700 dark:text-white ">
              {{ item.time }}
            </p>
            <p>
              {{ item.description }}
            </p>
          </div>
        </div>
        <div class=" py-5 mt-5">
          <h4 class="font-normal text-2xl mb-4 text-blue-800 dark:text-white ">
            {{ $t('home.projects.title') }}
          </h4>
          <p class="mb-4">
            {{ $t('home.projects.description') }}
          </p>
          <div v-for="(item,index) in $t('home.projects.items')" :key="index">
            <a :href="item.url">
              <p class="font-bold text-lg  text-blue-800 dark:text-blue-400 ">
                <i class="fa fa-globe" /> {{ item.name }}
              </p>
            </a>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      contact: [
        { key: 0, icon: 'fa-phone', value: '+98-916-632-0277' },
        { key: 1, icon: 'fa-google', value: 'parsajiravand@gmail.com' },
        { key: 2, icon: 'fa-map-marker', value: 'Iran,Karaj,Azimie' }
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
        { key: 11, name: 'WebSocket' },
        { key: 11, name: 'GIT' }
      ],
      languages: [
        { key: 0, percent: 80, name: 'English' },
        { key: 1, percent: 100, name: 'Persian' }
      ],
      socials: [
        {
          key: 0,
          icon: 'fa-linkedin',
          address: 'https://www.linkedin.com/in/parsa-jiravand-16704a1a6/',
          name: 'Linkedin'
        },
        {
          key: 1,
          icon: 'fa-whatsapp',
          address: 'https://wa.me/00989166320277',
          name: 'Whatsapp'
        },
        {
          key: 2,
          icon: 'fa-instagram',
          address: 'https://www.instagram.com/parsablk/',
          name: 'Instagram'
        },
        { key: 3, icon: 'fa-twitter', address: 'https://twitter.com/parsablk', name: 'Twitter' }
      ]
    }
  }

}
</script>
