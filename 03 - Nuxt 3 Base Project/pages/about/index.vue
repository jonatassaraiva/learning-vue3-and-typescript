<script setup lang="ts">
import { reactive } from "vue";
import { PageInfo } from "@/types";

const pageInfo: PageInfo = reactive({
  title: "About",
  description: "This project aims to exemplify the use of some frameworks to build a web application using Nuxt 3 and TypeScript"
});

useHead({
  title: pageInfo.title,
  meta: [{ name: "description", content: pageInfo.description }],
});
</script>

<template>
  <div>
    <h1>{{ pageInfo.title }}</h1>
    <p>{{ pageInfo.description }}</p>
    <NuxtLink to="/">
      Home
    </NuxtLink>
  </div>
</template>
