<template>
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
          name: 'parsa-jiravand'
        },
        {
          key: 1,
          icon: 'fa-whatsapp',
          address: 'https://wa.me/00989166320277',
          name: '+989166320277'
        },
        {
          key: 2,
          icon: 'fa-instagram',
          address: 'https://www.instagram.com/parsablk/',
          name: 'parsablk'
        },
        { key: 3, icon: 'fa-twitter', address: 'https://twitter.com/parsablk', name: 'parsablk' }
      ]
    }
  }

}
</script>
