<template>
  <div>
    <div class="cv grid grid-cols-3 gap-4 rounded-2xl">
      <aside class="md:col-span-1 col-span-3">
        <article class="cv_side text-center shadow-inner bg-blue-50 dark:bg-blue-900 px-2 lg:px-10 py-10 rounded-2xl relative">
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
          <CvContent />
        </article>
      </div>
    </div>
    <footer class="mt-5 border-t dark:border-t-gray-500 pt-2 text-center dark:text-blue-400 text-blue-700 w-full">
      <a href="https://parsajiravand.netlify.app/" target="_blank">© {{ getYear }} | ParsaJiravand  </a>
    </footer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      contact: [
        { key: 0, icon: 'fa-phone', value: '+989166320277' },
        { key: 1, icon: 'fa-google', value: 'parsajiravand@gmail.com' },
        { key: 3, icon: 'fa-map-marker', value: 'Iran,Karaj' }
      ],
      skills: [
        { key: 0, name: 'Vue' },
        { key: 12, name: 'Vue3' },
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
        { key: 13, name: 'WebSocket' },
        { key: 14, name: 'GIT' },
        { key: 15, name: 'Vite' },
        { key: 16, name: 'Npm' },
        { key: 17, name: 'BootstrapVue' },
        { key: 18, name: 'Typescript' },
        { key: 19, name: 'Nodejs' },
        { key: 20, name: 'Express' },
        { key: 21, name: 'Quasar' },
        { key: 22, name: 'Capasitor' },
        { key: 23, name: 'VuePress' },
        { key: 23, name: 'Nuxt3' },
        { key: 23, name: 'VitePress' },
        { key: 23, name: 'Angular' },
        { key: 23, name: 'Rxjs' },

      ],
      languages: [
        { key: 0, percent: 80, name: 'English' },
        { key: 1, percent: 100, name: 'Persian' }
      ],
      socials: [
        {
          key: 0,
          icon: 'fa-github',
          address: 'https://github.com/parsajiravand',
          name: 'parsajiravand'
        },
        {
          key: 1,
          icon: 'fa-linkedin',
          address: 'https://www.linkedin.com/in/parsa-jiravand-16704a1a6/',
          name: 'parsa-jiravand'
        },
        {
          key: 2,
          icon: 'fa-whatsapp',
          address: 'https://wa.me/00989166320277',
          name: '+989166320277'
        },
        {
          key: 3,
          icon: 'fa-instagram',
          address: 'https://www.instagram.com/parsablk/',
          name: 'parsablk'
        },
        { key: 4, icon: 'fa-twitter', address: 'https://twitter.com/parsablk', name: 'parsablk' }
      ]
    }
  },
  computed: {
    getYear () {
      const date = new Date()
      return date.getFullYear()
    }
  }

}
</script>
