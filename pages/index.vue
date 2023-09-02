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
            :contact="[]"
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
      <div>
        <small>Version {{ version }}</small>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { version } from "../package.json";

const skills = [
  {
    path: "https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white",
    name: "HTML5",
  },
  {
    path: "https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3",
    name: "CSS3",
  },
  {
    path: "https://img.shields.io/badge/-JavaScript-black?style=flat-square&logo=javascript",
    name: "JavaScript",
  },
  {
    path: "https://img.shields.io/badge/-TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white",
    name: "TypeScript",
  },
  {
    path: "https://img.shields.io/badge/-Vue-4FC08D?style=flat-square&logo=vue.js&logoColor=white",
    name: "Vue",
  },
  {
    path: "https://img.shields.io/badge/-Nuxt-00C58E?style=flat-square&logo=nuxt.js&logoColor=white",
    name: "Nuxt",
  },
  /* nuxt-content */
  {
    path: "https://img.shields.io/badge/-NuxtContent-00C58E?style=flat-square&logo=nuxt.js&logoColor=white",
    name: "NuxtContent",
  },
  /*  SSG, SSR, CSR,TeamLeadership, Nodejs, GIT,Socket,Microfrontend,React,Next with diffrent color */
  {
    path: "https://img.shields.io/badge/-SSG-00C58E?style=flat-square&logoColor=white",
    name: "SSG",
  },
  {
    path: "https://img.shields.io/badge/-SSR-00C58E?style=flat-square&logoColor=white",
    name: "SSR",
  },
  {
    path: "https://img.shields.io/badge/-CSR-007ACC?style=flat-square&logoColor=white",
    name: "CSR",
  },
  {
    path: "https://img.shields.io/badge/-TeamLeadership-007ACC?style=flat-square&logoColor=white",
    name: "TeamLeadership",
  },
  {
    path: "https://img.shields.io/badge/-Nodejs-339933?style=flat-square&logo=Node.js&logoColor=white",
    name: "Nodejs",
  },
  //nestjs
  {
    path: "https://img.shields.io/badge/-Nestjs-C21325?style=flat-square&logo=Nestjs&logoColor=white",
    name: "Nestjs",
  },
  //express
  {
    path: "https://img.shields.io/badge/-Express-339933?style=flat-square&logo=Express&logoColor=white",
    name: "Express",
  },
  {
    path: "https://img.shields.io/badge/-Microfrontend-339933?style=flat-square&logo=Microfrontend&logoColor=white",
    name: "Microfrontend",
  },
  //angular
  {
    path: "https://img.shields.io/badge/-Angular-DD0031?style=flat-square&logo=Angular&logoColor=white",
    name: "Angular",
  },
  {
    path: "https://img.shields.io/badge/-React-007ACC?style=flat-square&logo=React&logoColor=white",
    name: "React",
  },

  {
    path: "https://img.shields.io/badge/-Next-007ACC?style=flat-square&logo=Next&logoColor=white",
    name: "Next",
  },

  {
    path: "https://img.shields.io/badge/-Vite-646CFF?style=flat-square&logo=vite&logoColor=white",
    name: "Vite",
  },
  {
    path: "https://img.shields.io/badge/-Npm-CB3837?style=flat-square&logo=npm&logoColor=white",
    name: "Npm",
  },
  {
    path: "https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white",
    name: "Git",
  },
  {
    path: "https://img.shields.io/badge/-Github-181717?style=flat-square&logo=github",
    name: "Github",
  },
  {
    path: "https://img.shields.io/badge/-Gitlab-FCA121?style=flat-square&logo=gitlab",
    name: "Gitlab",
  },
  {
    path: "https://img.shields.io/badge/-Jest-C21325?style=flat-square&logo=jest&logoColor=white",
    name: "Jest",
  },
  {
    path: "https://img.shields.io/badge/-GraphQL-E10098?style=flat-square&logo=graphql&logoColor=white",
    name: "GraphQL",
  },
  {
    path: "https://img.shields.io/badge/-Sass-CC6699?style=flat-square&logo=sass&logoColor=white",
    name: "Sass",
  },
  {
    path: "https://img.shields.io/badge/-Bootstrap-563D7C?style=flat-square&logo=bootstrap&logoColor=white",
    name: "Bootstrap",
  },
  {
    path: "https://img.shields.io/badge/-Tailwind-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white",
    name: "Tailwind",
  },
  {
    path: "https://img.shields.io/badge/-Vitepress-646CFF?style=flat-square&logo=vite&logoColor=white",
    name: "Vitepress",
  },
  {
    path: "https://img.shields.io/badge/-Socket_IO-010101?style=flat-square&logo=socket.io&logoColor=white",
    name: "Socket-IO",
  },
  {
    path: "https://img.shields.io/badge/-Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black",
    name: "FireBase",
  },
  {
    path: "https://img.shields.io/badge/-VeeValidate-FFAA2C?style=flat-square&logo=vue.js&logoColor=white",
    name: "VeeValidate",
  },
  // element ui
  {
    path: "https://img.shields.io/badge/-ElementUI-409EFF?style=flat-square&logo=element-ui&logoColor=white",
    name: "ElementUI",
  },
  // vuetify
  {
    path: "https://img.shields.io/badge/-Vuetify-1867C0?style=flat-square&logo=vuetify&logoColor=white",
    name: "Vuetify",
  },
  // quasar
  {
    path: "https://img.shields.io/badge/-Quasar-1976D2?style=flat-square&logo=quasar&logoColor=white",
    name: "Quasar",
  },
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
    address: "https://www.linkedin.com/in/parsa-jiravand",
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
