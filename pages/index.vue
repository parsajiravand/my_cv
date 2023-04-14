<template>
  <div>
    <div class="cv grid grid-cols-3 gap-4 rounded-2xl">
      <aside class="md:col-span-1 col-span-3">
        <article
          class="cv_side text-center shadow-inner bg-blue-50 dark:bg-blue-900 px-2 lg:px-10 py-10 rounded-2xl relative"
        >
          <ProfileBox />
        </article>
        <article
          class="cv_side text-left shadow-inner bg-blue-50 dark:bg-blue-900 px-6 lg:px-10 py-10 mt-5 rounded-2xl"
        >
          <CvSideBarDetail
            :contact="contact"
            :skills="skills"
            :languages="languages"
            :socials="socials"
          />
        </article>
      </aside>
      <div
        class="cv_content rounded-2xl md:col-span-2 col-span-3 shadow-inner px-3 md:px-10"
      >
        <article>
          <CvContent />
        </article>
      </div>
    </div>
    <footer
      class="mt-5 border-t dark:border-t-gray-500 pt-2 text-center dark:text-blue-400 text-blue-700 w-full"
    >
      <a href="https://parsajiravand.netlify.app/" target="_blank"
        >© {{ getYear }} | ParsaJiravand
      </a>
    </footer>
  </div>
</template>

<script setup lang="ts">
const contact = [
  { key: 0, icon: "fa-phone", value: "+989166320277" },
  { key: 1, icon: "fa-google", value: "parsajiravand@gmail.com" },
  { key: 3, icon: "fa-map-marker", value: "Iran,Karaj" },
];
const skills = [
  "Vue",
  "Vue3",
  "Nuxt",
  "Javascript",
  "Vuex",
  "GraphQL",
  "Tailwind",
  "Boostrap",
  "Html5",
  "Css3",
  "API",
  "Sass",
  "WebSocket",
  "GIT",
  "Vite",
  "Npm",
  "BootstrapVue",
  "Typescript",
  "Nodejs",
  "Express",
  "Quasar",
  "Capasitor",
  "VuePress",
  "Nuxt3",
  "VitePress",
  "Angular",
  "Rxjs",
];
const languages = [
  { key: 0, percent: 80, name: "English" },
  { key: 1, percent: 100, name: "Persian" },
];
const socials = [
  {
    key: 0,
    icon: "fa-github",
    address: "https://github.com/parsajiravand",
    name: "parsajiravand",
  },
  {
    key: 1,
    icon: "fa-linkedin",
    address: "https://www.linkedin.com/in/parsa-jiravand-16704a1a6/",
    name: "parsa-jiravand",
  },
  {
    key: 2,
    icon: "fa-whatsapp",
    address: "https://wa.me/00989166320277",
    name: "+989166320277",
  },
  {
    key: 3,
    icon: "fa-instagram",
    address: "https://www.instagram.com/parsablk/",
    name: "parsablk",
  },
  {
    key: 4,
    icon: "fa-twitter",
    address: "https://twitter.com/parsablk",
    name: "parsablk",
  },
];

const getYear = computed(() => {
  const date = new Date();
  return date.getFullYear();
});
</script>
